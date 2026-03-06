BorgPlayerRoller = function(render) {
    
    const
        rx_highlight =  /(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g;

    function capitalize(str) {
        return str.substr(0,1).toUpperCase()+str.substr(1)
    }

    function rollDie(size) {
        return 1+Math.floor(Math.random()*size);
    }

    function makeBox(parent, className, content) {
        let
            node = document.createElement("div");
        node.className = className;
        node.innerHTML = content;
        parent.appendChild(node);
    }

    function getInstanceByTags(tags) {
        let
            found;
        render.globals.instances.forEach(instance=>{
            let
                isOk = true;

            tags.forEach(tag=>{
                if (instance.model.tags.indexOf(tag) == -1) {
                    isOk = false;
                }
            })

            if (isOk) {
                found = instance;
            }
            
        })
        return found;
    }

    function rollTable(id, altdie) {
        let
            table = render.globals.generateData[id];
        if (table) {
            let
                value = altdie ? rollDie(altdie) : table.roll.model.methods.doRoll(),
                result = 0;

            table.results.forEach(row=>{
                if ((value>=row.on[0]) && (value<=row.on[1]))
                    result = row;
            })

            return result;
        } else {
            return "Unknown table";
        }
    }

    
    function element(tag, content) {
        return '<' + tag + '>' + content + '</' + tag + '>';
    }

    function highlight(src) {
        return src.replace(rx_highlight, function(all, _, p1, emp, sub, sup, small, big, p2, content) {
            return _ + element(
                  emp ? (p2 ? 'strong' : 'em')
                : sub ? (p2 ? 's' : 'sub')
                : sup ? 'sup'
                : small ? 'small'
                : big ? 'big'
                : 'code',
                highlight(content));
        });
    }

    let
        language = render.language,
        hpStat = render.globals.references.baseHitpoints.model.render.EN,
        isRuler = getInstanceByTags([ "ruler" ]),
        isOmen = getInstanceByTags([ "omensystem" ]),
        ruler = isRuler ? capitalize(isRuler.model.methods.getDemandName[language]) : 0,
        omenName = isOmen ? isOmen.references.omenName.model.methods.plural[language] : 0,
        omenRoll = isOmen ? isOmen.references.diceroll : 0,
        nameGenerator = new NameGenerator(language),
        randomizer = new Random(Math.random()*999999);

    return {
        generate:(plainColor, lightColor, cb)=>{
            nameGenerator.initialize(()=>{
                let
                    globalStyle = "border-color:"+plainColor,
                    html = "",
                    sheet = {},
                    stats = [],
                    hasScroll = false,
                    equipment = [];

                render.globals.instances.forEach(instance=>{
                    if (instance.model.tags.indexOf("stat") != -1) {
                        let
                            value = rollTable("table-abilities").result;
                        sheet[instance.model.render.EN] = parseInt(value);
                        stats.push({ label:instance.model.render[language], value:value });
                    }
                })

                sheet.HP = sheet[hpStat] + rollDie(8);
                if (sheet.HP < 1) sheet.HP = 1;

                sheet.GOLD = (rollDie(6) + rollDie(6))*10;
                sheet.NAME = capitalize(nameGenerator.generate(randomizer,"[Player]"));

                if (isRuler) {
                    sheet.RULER = ruler;
                    sheet.RULERDEMAND = rollTable("table-demand").result;
                }

                if (isOmen) {
                    sheet.OMEN = omenName;
                    sheet.OMENCOUNT = omenRoll.model.methods.doRoll();
                    sheet.OMENCOUNTDIE = omenRoll.model.render.EN;
                }

                [
                    { id:"table-startingtransport" },
                    { id:"table-startingequipment" },
                    { id:"table-startingequipment-1" },
                    { ifScrollRoll:6 , id:"table-startingweapon" },
                    { ifScrollRoll:2 , id:"table-startingarmor" },
                ].forEach(entry=>{
                    let
                        item = rollTable(entry.id, hasScroll ? entry.ifScrollRoll : 0);
                    hasScroll |= item.originalResult.model.tags.indexOf("isstartingscroll")!=-1;
                    equipment.push(item.result);
                })

                html += "<div class='sheetbar' style='"+globalStyle+"'>";
                html += "<div class='sheetitem'><div class='sheetkey'>Born from Seed</div> #"+render.seed+"</div>";
                html += "</div>";

                html += "<div class='sheetsegmentedbar' style='"+globalStyle+"'>";
                html += "<div class='sheetitem'></div>";
                html += "<div class='sheetitem'><div class='sheetkey'>Name</div> "+sheet.NAME+"</div>";
                html += "<div class='sheetitem'><div class='sheetkey'>HP</div> "+sheet.HP+"/"+sheet.HP+"</div>";
                if (sheet.OMEN) {
                    html += "<div class='sheetitem'><div class='sheetkey'>"+sheet.OMEN+"</div> "+sheet.OMENCOUNT+" ("+sheet.OMENCOUNTDIE+")</div>";
                }
                html += "<div class='sheetitem'></div>";
                html += "</div>";

                html += "<div class='sheetboxes' style='"+globalStyle+"'>";
                html += "<div class='sheetitem' style='"+globalStyle+"'><div class='sheetheader' style='background-color:"+lightColor+"'>Abilities</div><div class='sheetvalue'>";

                stats.forEach(ability=>{
                    html+="<div class='sheetvalueitem'><div class='sheetkey'>"+ability.label+"</div> "+ability.value+"</div>";
                });

                html += "</div></div>";

                html += "<div class='sheetitem' style='"+globalStyle+"'><div class='sheetheader' style='background-color:"+lightColor+"'>Equipment</div><div class='sheetvalue'>";

                equipment.forEach(item=>{
                    html+="<div class='sheetvalueitem'>"+highlight(item)+"</div>";
                });

                html+="</div></div></div>";
                
                if (sheet.RULER) {

                    html += "<div class='sheetbar' style='"+globalStyle+"'>";
                    html += "<div class='sheetitem'><div class='sheetkey'>"+sheet.RULER+"</div> "+highlight(sheet.RULERDEMAND)+"</div>";
                    html += "</div>";

                }

                cb(html);
            })
            
        }
    }
       
        
}