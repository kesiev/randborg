
let Builder = function(metadata, seed, language) {

    if (!language) {
        language = "EN";
    }

    let
        interface,
        random = new Random(seed),
        nameGenerator = new NameGenerator(language),
        flags = {},
        TOKENS = [
            { regexp:/^(true)/, type:"boolean", parser:()=>true },
            { regexp:/^(false)/, type:"boolean", parser:()=>false },
            { regexp:/^([0-9]+)/, type:"integer", parser:(v)=>parseInt(v) },
            { regexp:/^([+-])/, type:"operator" },
            { regexp:/^"([^"]*)"/, type:"string" },
            { regexp:/^([a-zA-Z0-9.$-]+)/, type:"get",parser:(v)=>v.split(".") },
        ],
        GLOBALS = {
            ids:{},
            instances:[],
            models:[],
            references:{},
            generateData:{},
            model:{                
                methods:{
                    softwareName:{ EN:metadata.projectName },
                    license:{ EN:metadata.projectLicense },
                    authorName:{ EN:metadata.projectAuthor },
                    projectUrl:{ EN:metadata.projectUrls },
                    seed:{ EN:seed },
                    makeSampleList:function($,caller,inst,amount) {
                        let
                            picks = [],
                            statId = inst.model.id,
                            all = filterDatabaseByTags(inst,[ "samplestat" ]);

                        all = all.filter(model=>{
                            let
                                mainId = model.tags[1];

                            return (mainId == statId) || (!$.GLOBALS.ids[mainId] && model.tags.indexOf(statId+"-1")!=-1);
                        });

                        while (all && (picks.length<amount)) {
                            picks.push(renderText(inst,inst,random.removeElement(all).render));
                        }

                        return picks.join(", ");
                    },
                    makeListOf:function ($,caller,inst,root,tag,mode) {
                        return $.makeListOf(caller,root, [[ tag ]],false,mode);
                    },
                    makeCallListOf:function ($,caller,inst,root,tag,call,mode) {
                        return $.makeListOf(caller,root, [[ tag ]],call,mode);
                    },
                    makeOptionalListOf:function ($,caller,inst,root,tag,mode) {
                        return $.makeListOf(caller,root, [[ tag ]],false,mode,true);
                    },
                    makeOptionalCallListOf:function ($,caller,inst,root,tag,call,mode) {
                        return $.makeListOf(caller,root, [[ tag ]],call,mode,true);
                    },
                    makeBulletListOf:function ($,caller,inst,root,tag,detailcall) {
                        let
                            stats = $.getInstancesByTags(caller, [ [ tag ] ],root),
                            out = "";

                        stats.forEach(stat=>{
                            out+=" - "+$.renderInstance(caller,stat)+(detailcall ? ": "+$.runInstanceCommand(caller, stat,detailcall+"()") : "")+"\n";
                        })
                        return out;
                    },
                    callAll:function ($,caller,inst,root,tag,call,separator,orderby) {
                        return $.all(inst, root, [[ tag ]], call, separator,orderby);
                    },
                    all:function ($,caller,inst,root,tag,separator,orderby) {
                        return $.all(inst, root,[[ tag ]], false, separator,orderby);
                    },
                    makeNameFrom:function($, caller,inst, label) {
                        return nameGenerator.generate(random, label);
                    },
                    makeMapFrom:function($, caller,inst, models) {

                        let
                            model = random.element(models),
                            map = new HexMap(model.width, model.height);

                        if (model.steps)
                            model.steps.forEach(step=>{
                                if (step.spread) {
                                    map.spread(random,step.spread,step.in,step.inner);
                                }
                                if (step.addPoi) {
                                    step.addPoi.forEach(poi=>{
                                        map.addPoi(random,poi.id,poi.in,poi.category);
                                    })
                                }
                            });

                        return map;
                    },
                    renderMap:function($, caller,inst, map) {
                        let
                            id = "map-";

                        if (!$.GLOBALS.generateData.maps)
                            $.GLOBALS.generateData.maps = 0;
                        $.GLOBALS.generateData.maps++;
                        id += $.GLOBALS.generateData.maps;
                        $.GLOBALS.generateData[id] = map.model.render.EN;
                        return "<generateData data-id='"+id+"'></generateData>";
                    },
                    describeRegion:function($, caller,inst, description, map) {

                        function describeMap(caller, source, root, mapData, cells, description) {
                            let
                                out = "";
                            
                            description.forEach(line=>{
                                let
                                    isOk = true,
                                    tagMap = {};

                                if (line.findFlags) {
                                    for (let k in line.findFlags) {
                                        let
                                            flags = findFlagsInCells(cells, mapData.categories[line.findFlags[k]]);
                                        if (flags.count) {
                                            tagMap[k] = flags;
                                        } else {
                                            isOk = false;
                                            break;
                                        }
                                    }
                                }

                                if (line.ifOne)
                                    isOk = tagMap[line.ifOne].count == 1;

                                if (line.ifMany)
                                    isOk = tagMap[line.ifMany].count > 1;

                                if (line.ifAny)
                                    isOk = tagMap[line.ifAny].count;

                                if (isOk) {

                                    if (line.addSentence) {
                                        let
                                            renderedText = renderText(caller, source, line.addSentence);
                                        out+=renderedText.replace(/\[([^\]]+)\]/g,(m,m1)=>{
                                            if (m1[0]==":") {
                                                // Skip pagination tags
                                                return m;
                                            } else {
                                                let
                                                    parts = m1.split(" "),
                                                    call = "."+parts[1],
                                                    mode = parseInt(parts[2]) || 0;

                                                return createListFromCells(inst,root,tagMap[parts[0]].flags,call,mode);
                                            }
                                        });
                                    }

                                    if (line.describe) {
                                        tagMap[line.describe.tag].flags.forEach(flag=>{
                                            let
                                                instance = root.references[flag];
                                            out+="[:block:]\n## "+$.runInstanceCommand(caller, instance,line.describe.titleCall)+"\n\n";
                                            if (instance.model.methods.description) {
                                                instance.references.previous = source;
                                                out += describeMap(caller, instance, root, mapData, tagMap[line.describe.tag].index[flag], instance.model.methods.description);
                                                out+="[:endblock:]\n";
                                            }
                                        });
                                    }

                                }
                               
                            })

                            return out;
                        }

                        return describeMap(caller, inst, inst.parentInstance, map.model.render.EN, map.model.render.EN.index[inst.parentId], description);
                    },
                    capital:function($, caller,inst, text) {
                        if (typeof text !== "string") {
                            text = $.renderInstance(caller,text);
                        }
                        return text[0].toUpperCase()+text.substr(1);
                    },
                    makeTable:function($, caller,inst, root,tag,keycall,sortmode) {
                        let
                            instances = $.getInstancesByTags(caller, [ [ tag ] ], root),
                            table = [],
                            out = "";

                        instances.forEach(instance=>{
                            let
                                key = $.runInstanceCommand(caller,instance,keycall+"()"),
                                value = $.renderInstance(caller,instance);
                            table.push([key, value]);
                        })

                        switch (sortmode) {
                            case 2:{ // Value, Alphabetical
                                table.sort((a,b)=>{
                                    a = a[1],
                                    b = b[1];
                                    return a > b ? 1 : a < b ? -1 : 0;
                                })
                                break;
                            }
                            case 2:{ // Key, Number
                                table.sort((a,b)=>{
                                    a = parseInt(a[0]),
                                    b = parseInt(b[0]);
                                    return a > b ? 1 : a < b ? -1 : 0;
                                })
                                break;
                            }
                        }

                        table.forEach(row=>{
                            out+="|"+row[0]+"|"+row[1]+"|\n";
                        })

                        return out;
                    }
                }
            }
        },
        DBINDEX = { byId:{}, byTag:{} };
    
    DATABASE.forEach(packet=>{
        if (packet.id) {
            if (DBINDEX.byId[packet.id]) {
                console.warn("Duplicate ID for",packet,"vs.",DBINDEX.byId[packet.id]);
            } else {
                DBINDEX.byId[packet.id] = packet;
                if (packet.tags) {
                    packet.tags.forEach(tag=>{
                        if (!DBINDEX.byTag[tag])
                            DBINDEX.byTag[tag] = [];
                        DBINDEX.byTag[tag].push(packet);
                    });
                }
            }
        } else {
            console.warn("Missing id for",packet);
        }
    });

    function findFlagsInCells(cells,flags) {
        let
            found = { count:0, index:{}, flags:[] };
        cells.forEach(cell=>{
            flags.forEach(flag=>{
                if (cell.flags[flag]) {
                    if (found.index[flag] === undefined) {
                        found.index[flag] = [];
                        found.flags.push(flag);
                        found.count++;
                    }
                    found.index[flag].push(cell);
                }
            })
        })

        return found;
    }

    function createListFromCells(caller,parent,categories,call,mode) {
        let
            words = categories.map(c=>renderReference(caller,parent,runCommand(parent,parent,c+call)));
        switch (language) {
            default:{
                return formatListOf(caller, language, words, mode);
                break;
            }
        }
    }

    function filterInstancesByTag(caller, instances,tags,except) {
        tags = solveTagList(caller, tags);

        if (tags) {

            let
                selection = [];

            for (let k in instances) {
                let
                    entry = instances[k];
                if (!except || (except.indexOf(entry) == -1)) {
                    let
                        found = true;
                    tags.forEach(tag=>{
                        if (!entry.model.tags || (entry.model.tags.indexOf(tag) == -1))
                            found = false;
                    })
                    if (found)
                        selection.push(entry);
                }
            };

            return selection;

        }
    }

    function filterDatabaseByTags(caller, tags, except) {
        tags = solveTagList(caller, tags);

        if (tags) {

            return DATABASE.filter(entry=>{
                if (hasFlags(entry) && (!except || (except.indexOf(entry) == -1))) {
                    let
                        found = true;
                    tags.forEach(tag=>{
                        if (!entry.tags || (entry.tags.indexOf(tag) == -1))
                            found = false;
                    })
                    return found;
                }
            })

        }
    }

    function hasFlags(entry) {
        let
            isOk = true;
            
        if (entry.ifAnyFlag) {
            for (let i=0;i<entry.ifAnyFlag.length;i++) {
                let
                    set = entry.ifAnyFlag[i];
                isOk = true;
                set.forEach(flag=>{
                    if (!flags[flag])
                        isOk = false;
                });
                if (isOk)
                    break;
            }
        }

        if (isOk && entry.ifFlags) {

            entry.ifFlags.forEach(flag=>{
                if (!flags[flag])
                    isOk = false;
            })
        }

        return isOk;
    }
    
    function getInstancesByTags(caller, tags,from) {
        tags = solveTagList(caller, tags);

        if (tags) {

            let
                subtags;

            for (let i=0;i<tags.length;i++) {
                subtags = tags[i];
                selection = filterInstancesByTag(caller, from ? from.references : GLOBALS.instances, subtags);
                if (selection && selection.length)
                    return selection;
            }
            return [];

        }
    }

    function solveRequirement(caller, random, requirement, status) {
        if (requirement._debug)
            debugger;

        if (requirement.ofTags) {
            
            let
                tags,
                selection;

            if (requirement.reuse) {
                for (let i=0;i<requirement.ofTags.length;i++) {
                    tags = requirement.ofTags[i];
                    selection = filterInstancesByTag(caller, GLOBALS.instances, tags, status.except);
                    if (selection && selection.length) {
                        let
                            instance = random.element(selection);
                        if (requirement.call) {
                            instance = newInstance({
                                tags:[],
                                methods:{},
                                render:{
                                    EN:runCommand(caller,instance,requirement.call+"()")
                                }
                            });
                        }
                        return instance;
                    }
                }
            }

            for (let i=0;i<requirement.ofTags.length;i++) {
                selection = filterDatabaseByTags(caller, requirement.ofTags[i], status.except);
                if (selection && selection.length) {
                    let
                        model = random.element(selection),
                        instance = newInstance(model);
                    status.except.push(model);
                    if (requirement.call) {
                        solveInstance(caller, instance);
                        instance.model = {
                            tags:instance.model.tags,
                            render:{
                                EN:runCommand(caller,instance,requirement.call+"()")
                            }
                        };
                    }
                    return instance;
                }

            }

       } else if (requirement.ofTagBags) {

            if (!status.bags) {
                status.bags = { elements:requirement.ofTagBags.map(tags =>{
                        return {
                            elements:filterDatabaseByTags(caller, tags,status.except).filter(model=>(requirement.reuse !== false) || (GLOBALS.models.indexOf(model) == -1)) }
                    })
                };
            }

            if (!status.miss)
                status.miss = 0;

            let
                tagsBag = random.bagPick(status.bags);

            if (tagsBag.elements.length) {
                let
                    model = random.bagPick(tagsBag),
                    instance = newInstance(model);

                status.bags.elements.forEach(bag=>{
                    random.removeFromBag(bag, model);
                })

                if (requirement.call) {
                    solveInstance(caller, instance);
                    instance.model = {
                        tags:instance.model.tags,
                        render:{
                            EN:runCommand(caller,instance,requirement.call+"()")
                        }
                    };
                }
                return instance;
            } else {
                status.miss++;
                if (status.miss >= requirement.ofTagBags.length) {
                    status.bags = 0;
                }
            }

        } else{
            console.warn("Unknown requirement", requirement);
        }
    }

    function solveRequirements(caller, inst) {
        let
            toSolve = [];
        if (inst.model.requires) {
            inst.model.requires.forEach(requirement=>{

                if (!requirement.chanceOf || (random.integer(100)<=requirement.chanceOf)) {
                    let
                        timer = 1000,
                        status = { except:[], bag:0, miss:0 },
                        done = 0,
                        times = requirement.times || 1,
                        isGlobal = requirement.id.substr(0,2) == "$.",
                        root = isGlobal ? GLOBALS : inst,
                        idPrefix = isGlobal ? requirement.id.substr(2) : requirement.id;

                    do {
                        let
                            id = idPrefix + ( done ? "-"+done : "");

                        if (!root.references[id]) {
                            let
                                instance = solveRequirement(caller, random, requirement, status);

                            if (instance) {
                                done++;
                                instance.parentInstance = root;
                                instance.parentId = id;
                                root.references[id] = instance;
                                toSolve.push(instance);
                            } else {
                                if (!timer--) {
                                    console.error("Can't solve requirement",requirement,"for",caller,"inst");
                                    break;
                                }
                            }
                        } else
                            done++;
                    } while (done < times);
                }
                
            })
        }
        toSolve.forEach(inst=>{
            solveRequirements(caller, inst);
        })
    }

    function tokenizeCommand(str) {
        let
            out = [],
            stack = [],
            token,
            match;
        while (str.length) {
            for (let i=0;i<TOKENS.length;i++) {
                token = TOKENS[i];
                match = str.match(token.regexp);
                if (match) {
                    out.push({ type:token.type, value:token.parser ? token.parser(match[1]) : match[1] });
                    break;
                }
            }
            if (!match) {
                match = str.match(/^\(/);
                if (match) {
                    out[out.length-1].isCall = true;
                    out[out.length-1].arguments = [[]];
                    stack.push(out);
                    out = out[out.length-1].arguments[0];
                } else {
                    match = str.match(/^,/);
                    if (match) {
                        let
                            lastStack = stack[stack.length-1];
                        out = [];
                        lastStack[lastStack.length-1].arguments.push(out);
                    } else {
                        match = str.match(/^\)/);
                        if (match) {
                            out = stack.pop();
                        } else {
                            str = "";
                        }
                    }
                }
            }
            if (match) {
                str=str.substr(match[0].length);
            }
        }
        return out;
    }

    function runToken(caller, inst, token, value) {
        switch (token.type) {
            case "get":{
                let
                    leaf = token.value[token.value.length-1],
                    subinst = inst;
                for (let i=0;i<token.value.length-1;i++) {
                    let 
                        sub = token.value[i];
                    if (sub == "$")
                        subinst = GLOBALS;
                    else if (sub == "this")
                        subinst = inst;
                    else if (sub == "caller") {
                        subinst = caller;
                    } else if (subinst.references[sub])
                        subinst = subinst.references[sub];
                    else {
                        debugger;
                        console.warn("Can't find reference",sub,"in",subinst);
                    }
                }
                if (token.isCall) {
                    let
                        args = token.arguments.map(a=>{
                            let
                                out = runTokens(caller, inst, a);
                            if ((typeof out == "object") && out.__leaf) {
                                if (out.__leaf == "this") {
                                    out = out.inst;
                                } else if (out.inst.references[out.__leaf] !== undefined) {
                                    out = out.inst.references[out.__leaf];
                                } else if (out.inst.model && (out.inst.model.methods[out.__leaf] !== undefined)) {
                                    out = out.inst.model.methods[out.__leaf];
                                }
                            }
                            return out;
                        });
                    if (typeof subinst.model.methods[leaf] === "function") {
                        args.unshift(inst);
                        args.unshift(caller);
                        args.unshift(interface);
                        return subinst.model.methods[leaf].apply(subinst,args);
                    } else if (subinst.references[leaf] && subinst.references[leaf].model) {
                        return renderInstance(caller,subinst.references[leaf]);
                    } else {
                        return renderText(caller, subinst, subinst.model.methods[leaf]);
                    }
                } else {
                    return { inst:subinst, __leaf:leaf };
                }
                break;
            }            
            default:{
                return token.value;
            }
        }
    }

    function runTokens(caller, inst, tokens, value) {
        let
            operator = value === undefined ? "=" : false;
        tokens.forEach(token=>{
            if (operator) {
                switch (operator) {
                    case "=":{
                        value = runToken(caller, inst, token, value);
                        break;
                    }
                    case "+":{
                        value = renderReference(caller,inst, value) + runToken(caller, inst, token, value);
                        break;
                    }
                    case "-":{
                        value = renderReference(caller,inst, value) - runToken(caller, inst, token, value);
                        break;
                    }
                }
                operator = false;
            } else if (token.type == "operator") {
                operator = token.value;
            } else {
                console.warn("Invalid token sequence", value, "token", token);
            }
        })
        return value;
    }

    function renderReference(caller,inst, ref) {
        if (typeof ref === "object") {
            if (ref.inst && ref.inst.references[ref.__leaf] !== undefined) {
                if (ref.__leaf == "this") {
                    return ref.inst;
                } else if (ref.inst.references[ref.__leaf].model && ref.inst.references[ref.__leaf].model.render) {
                    return renderText(caller, ref.inst.references[ref.__leaf], ref.inst.references[ref.__leaf].model.render);
                } else {
                    return ref.inst.references[ref.__leaf];
                }
            } else {
                return renderText(caller, inst, ref);
            }
        } else {
            return ref;
        }
    }

    function runCommand(caller, inst, command) {
        return runTokens(caller, inst, tokenizeCommand(command));
    }

    function renderText(caller, inst, text) {
        let
            sentence;

        if (text) {

            if (text._debug)
                debugger;

            if (text.EN) {

                let
                    sentence = text[language] || text.EN;

                if (sentence.oneOf) {
                    sentence = random.element(sentence.oneOf);
                }

                if (typeof sentence == "string") {
                    let
                        parts = 0,
                        lastRender;
                    sentence = sentence.replace(/{([^}]+)}/g,(f,m)=>{
                        let
                            out = runCommand(caller, inst, m);
                        lastRender = renderReference(caller, inst, out);
                        parts++;
                        return lastRender;
                    })
                    if ((parts == 1) && (typeof lastRender == "object") && !lastRender.EN) {
                        return lastRender;
                    } else {
                        return sentence;
                    }
                } else {
                    return sentence;
                }

            } else {
                return text;
            }
        } else {
            return text;
        }
    }

    function renderInstance(caller,inst) {
        if (inst && inst.model) {
            return renderText(caller, inst, inst.model.render);
        } else {
            console.error("Can't find instance model for",inst);
        }
    }

    function solveInstance(caller,inst) {
        if (inst.model) {
            solveRequirements(caller,inst);
        } else {
            console.warn("Can't solve empty instance",inst);
        }
    }

    function newInstance(model) {
        let
            instance = {
                model:model,
                references:{}
            };
        if (model.addFlags) {
            model.addFlags.forEach(flag=>flags[flag]=true);
        }
        GLOBALS.instances.push(instance);
        GLOBALS.ids[model.id] = true;
        if (GLOBALS.models.indexOf(model) == -1)
            GLOBALS.models.push(model);
        if (model._debug)
            debugger;
        return instance;
    }

    function solveTagList(caller, tags, inst) {
        let
            isValid = true,
            out = [];

        if (tags) {

            tags.forEach(tag=>{
                if (tag[0]=="$") {
                    let
                        found = solveTagList(runCommand(caller, inst, tag));
                    if (found) {
                        out = out.concat(found);
                    } else {
                        isValid = false;
                    }
                } else {
                    out.push(tag);
                }
            })

        } else {
            isValid = false;
        }

        return isValid ? out : false;
    }

    function formatListOf(caller, language, list, mode) {
        switch (language) {
            case "EN":{
                let
                    operator = mode % 2 == 0 ? "and" : "or";
                if (mode>1)
                    list.unshift("");
                if (list.length == 1) {
                    return list[0];
                } else if (list.length == 2) {
                    return list[0]+" "+operator+" "+list[1];
                } else {
                    let
                        last = list.pop();
                    return list.join(", ")+", "+operator+" "+last;
                }
                break;
            }
            default:{
                return list.join(", ");
            }
        }
    }

    function formatOptionalListOf(caller, language, list, mode) {
        switch (language) {
            default:{
                let
                    operator = mode == 0 ? "and" : "or";
                return "("+operator+" "+list.join(", ")+")";
                break;
            }
        }
    }

    interface = {
        GLOBALS:GLOBALS,
        language:language,
        getInstancesByTags:(caller, tags,from)=>{
            return getInstancesByTags(caller, tags,from);
        },
        renderInstance:(caller,inst)=>{
            return renderInstance(caller,inst);
        },
        runInstanceCommand:(caller, inst,comm)=>{
            return runCommand(caller, inst, comm);
        },
        renderInstanceById:(caller,id)=>{
            let
                instance = newInstance(DBINDEX.byId[id]);
            solveInstance(caller, instance);
            return {
                globals:GLOBALS,
                language:language,
                flags:flags,
                instance:instance,
                text:renderInstance(caller,instance)
            };
        },
        renderText:(caller, inst,text)=>{
            return renderText(caller, inst, text);
        },
        all:(caller, root, tags, call, separator, orderby)=>{
            if (separator === undefined) {
                separator = "\n";
            }
            let
                counters = {},
                out,
                instances = getInstancesByTags(caller, tags, root);
            if (orderby) 
                instances.sort((a,b)=>{
                    if (a.model.orders[orderby]>b.model.orders[orderby])
                        return 1;
                    else if (a.model.orders[orderby]<b.model.orders[orderby])
                        return -1;
                    else
                        return 0;
                })
            instances.forEach(inst=>{
                if (inst.model.counter) {
                    if (!counters[inst.model.counter])
                        counters[inst.model.counter] = { id:0, all:0 }
                    counters[inst.model.counter].all++;
                }
            })
            if (call) {
                call += "()";
                out = instances.map(inst=>{
                    if (inst.model.counter) {
                        counters[inst.model.counter].id++;
                        inst.references.allCounter = { model:{ render: { EN:counters[inst.model.counter].id } } };
                        inst.references.allCount = { model:{ render: { EN:counters[inst.model.counter].all } } };
                    }
                    return runCommand(caller, inst, call)
                });
            } else {
                out = instances.map(inst=>{
                    if (inst.model.counter) {
                        counters[inst.model.counter].id++;
                        inst.references.allCounter = { model:{ render: { EN:counters[inst.model.counter].id } } };
                        inst.references.allCount = { model:{ render: { EN:counters[inst.model.counter].all } } };
                    }
                    return renderInstance(caller,inst)
                });
            }
            return out.join(separator);
        },
        makeListOf:(caller, root, tags, call, mode, optional)=>{
            let
                out = "",
                stats = getInstancesByTags(caller, tags, root);
                
            if (stats.length) {
                if (call) {
                    call += "()";
                    stats = stats.map(inst=>runCommand(caller, inst,call));
                } else {
                    stats = stats.map(inst=>renderInstance(caller,inst));
                }
                if (optional) {
                    out = formatOptionalListOf(caller, language, stats, mode);
                } else {
                    out = formatListOf(caller, language, stats, mode);
                }
            }
            return out;
        },
        initialize:(cb)=>{
            nameGenerator.initialize(()=>{
                cb();
            });
        }
    };

    return interface;

}
