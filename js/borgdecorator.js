
function BorgDecorator(seed, language, measure) {
    let
        random = new Random(seed),
        hexmapRenderer = new HexmapRenderer(measure),
        cache = BorgDecorator.CACHE;

    const
        /*
        
        TODO: Yeah, photographs works well too but... Better waiting for some safer set to use.

        ART_SUBJECT_PHOTO = {
            image:{ randomlyFromPack:"photos" },
            size:"contain",
            translateX:0,
            translateY:0,
            rotate:0,
            scale:{ randomly:[ 1, "-1,1" ] },
            opacity:0.5,
            filter:""
        },
        */
        ART_SUBJECT_STENCIL = {
            image:{ randomlyFromPack:"stencils" },
            size:"contain",
            translateX:0,
            translateY:0,
            rotate:{ randomly:[ "0", "30deg", "35deg", "90deg", "100deg" ] },
            scale:{ randomly:[ "1", "1.5", "1.3" ] },
            opacity:0.5,
            filter:{ randomly:[ "", "", "", "drop-shadow(1msr 1msr 1msr {palette:accentcolor})", "drop-shadow(1msr 1msr 1msr {palette:forecolor})", "invert(1)" ] },
            replace:[ {from:"#000000", to:{ palette:"accentcolor" } } ]
        },
        SIDE_ART_SUBJECT_STENCIL = {
            image:{ randomlyFromPack:"stencils" },
            size:"contain",
            translateX:{ randomly:[ "40msr", "-40msr" ] },
            translateY:{ randomly:[ "0", "0", "0", "0", "60msr", "-60msr" ] },
            rotate:{ randomly:[ "0", "90deg", "180deg", "270deg" ] },
            scale:{ randomly:[ "1", "1.5", "1.3" ] },
            opacity:0.5,
            filter:{ randomly:[ "", "", "", "drop-shadow(1msr 1msr 1msr {palette:accentcolor})", "drop-shadow(1msr 1msr 1msr {palette:forecolor})", "invert(1)" ] },
            replace:[ {from:"#000000", to:{ palette:"accentcolor" } } ]
        },
        ART_DECORATE = [
            {
                image:{ randomlyFromPack:"grunge" },
                size:"contain",
                translateX:0,
                translateY:0,
                rotate:{ randomly:[ "0", "30deg", "35deg", "90deg", "100deg" ] },
                scale:{ randomly:[ "1", "1.5", "1.3" ] },
                opacity:0.3,
                filter:{ randomly:[ "", "", "blur(1msr)", "invert(1)" ] },
                replace:[ {from:"#000000", to:{ randomly:[ {palette:"forecolor"}, "#222", "#eee" ] } } ]
            }
        ],
        ART_DECORATION = {
            randomly:[
                [], ART_DECORATE, ART_DECORATE
            ]
        },
        STYLES = {
            scripts:{
                basicPage:[
                    { randomly:[
                        [ { makePalette:{ forecolor:0, backgroundcolor:1, accentcolor:2 } } ],
                        [ { makePalette:{ forecolor:0, backgroundcolor:2, accentcolor:1 } } ],
                        [ { makePalette:{ forecolor:1, backgroundcolor:0, accentcolor:2 } } ],
                        [ { makePalette:{ forecolor:2, backgroundcolor:0, accentcolor:1 } } ],
                        [ { makePalette:{ forecolor:3, backgroundcolor:4, accentcolor:1 } } ],
                        [ { makePalette:{ forecolor:4, backgroundcolor:3, accentcolor:1 } } ],
                        [ { makePalette:{ forecolor:0, backgroundcolor:3, accentcolor:1 } } ],
                        [ { makePalette:{ forecolor:0, backgroundcolor:2, accentcolor:1 } } ],
                    ]},
                    { style:{ color:{ palette:"forecolor" } } },
                    {
                        randomly:[
                            [ { style:{ backgroundColor:{ palette:"backgroundcolor" } } } ],
                            [
                                {
                                    randomly:[
                                        [ { style:{ background:"radial-gradient(circle,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ],
                                        [ { style:{ background:"radial-gradient(circle,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ],
                                        [ { style:{ background:"radial-gradient(circle,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ],
                                        [ {
                                            randomly:[
                                                [ { style:{ background:"linear-gradient(0deg,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ],
                                                [ { style:{ background:"linear-gradient(90deg,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ],
                                                [ { style:{ background:"linear-gradient(180deg,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ],
                                                [ { style:{ background:"linear-gradient(270deg,{palette:backgroundcolor} 0%, {palette:accentcolor} 100%)" } } ]
                                            ]
                                        } ]
                                    ]
                                }
                            ]
                        ]
                    },
                    { get:"TD", style:{ color:{ palette:"forecolor" }, borderColor:{ palette:"forecolor" } } },
                    { get:"*", randomlyFromPack:"fontText" },
                    {
                        get:"H1",
                        randomlyFromPack:"fontTitle",
                        style:{ margin:"4msr 0", width:"100%", textShadow:"1px 1px 1px {palette:backgroundcolor}, -1px -1px 1px {palette:backgroundcolor}, -1px 1px 1px {palette:backgroundcolor}, 1px -1px 1px {palette:backgroundcolor}" }
                    },
                    { get:"H2", style:{ fontSize:"5msr", lineHeight:"5msr", margin:0, textShadow:"1px 1px 1px {palette:backgroundcolor}, -1px -1px 1px {palette:backgroundcolor}, -1px 1px 1px {palette:backgroundcolor}, 1px -1px 1px {palette:backgroundcolor}" } },
                    { get:".tablehead", style:{ fontWeight:"bold", textShadow:"1px 1px 1px {palette:backgroundcolor}, -1px -1px 1px {palette:backgroundcolor}, -1px 1px 1px {palette:backgroundcolor}, 1px -1px 1px {palette:backgroundcolor}" } },
                    { get:"table", style:{ marginBottom:"5msr" } },
                    { get:"P", style:{ margin:"1msr 0", textShadow:"1px 1px 1px {palette:backgroundcolor}, -1px -1px 1px {palette:backgroundcolor}, -1px 1px 1px {palette:backgroundcolor}, 1px -1px 1px {palette:backgroundcolor}" } },
                    { get:"LI", style:{ margin:"1msr 0", textShadow:"1px 1px 1px {palette:backgroundcolor}, -1px -1px 1px {palette:backgroundcolor}, -1px 1px 1px {palette:backgroundcolor}, 1px -1px 1px {palette:backgroundcolor}" } },
                    { get:"TD", style:{ textShadow:"1px 1px 1px {palette:backgroundcolor}, -1px -1px 1px {palette:backgroundcolor}, -1px 1px 1px {palette:backgroundcolor}, 1px -1px 1px {palette:backgroundcolor}" } },
                    {
                        get:"table",
                        randomly:[
                            [
                                { style:{ borderCollapse:"collapse", borderSpacing:0 }},
                                { get:"TD", style:{ padding:"0.5msr 1msr" } },
                                { get:"TR:nth-child(2n)", style:{ backgroundColor:{ palette:"accentcolor" } } },
                                { get:"TR>TD:nth-child(1)", style:{ whiteSpace:"nowrap" } }
                            ],[
                                { style:{ borderCollapse:"collapse", borderSpacing:0 }},
                                { get:"TD", style:{ padding:"0.5msr 1msr" } },
                                { get:"TR", style:{ borderWidth:"0 0 1px 0", borderStyle:"solid" } },
                                { get:"TR>TD:nth-child(1)", style:{ whiteSpace:"nowrap" } }
                            ],[
                                { style:{ borderCollapse:"collapse", borderSpacing:0 }},
                                { get:"TD", style:{ padding:"0.5msr 1msr" } },
                                { get:"TR", style:{ borderWidth:"0 0 1px 0", borderStyle:"dashed" } },
                                { get:"TR>TD:nth-child(1)", style:{ whiteSpace:"nowrap" } }
                            ],[
                                { style:{ borderCollapse:"collapse", borderSpacing:0 }},
                                { get:"TD", style:{ padding:"0.5msr 1msr" } },
                                { get:"TR", style:{ borderWidth:"0 0 1px 0", borderStyle:"dashed" } },
                                { get:"TR>TD:nth-child(1)", style:{ whiteSpace:"nowrap" } }
                            ]
                        ]
                    },{
                        get:"table",
                        randomly:[
                            [],
                            [ { style:{ backgroundColor:{ palette:"backgroundcolor" } } } ],
                            [ { style:{ backgroundColor:"rgba(0,0,0,0.2)" } } ],
                            [ { style:{ backgroundColor:"rgba(255,255,255,0.2)" } } ],
                        ]
                    }
                ],
                fullPageEffects:[
                    {
                        get:".print",
                        randomly:[
                            [],
                            [ {  style: { filter:"hue-rotate(90deg)" } } ],
                            [ {  style: { filter:"sepia(30%)" } } ],
                            [ {  style: { filter:"invert(100%)" } } ],
                            [ {  style: { filter:"contrast(200%)" } } ],
                        ]
                    }
                ],
                pageAlignments:[
                     {
                        randomly:[
                            [],
                            [
                                { get:".content", style:{
                                    position:"absolute",
                                    right:0,
                                    bottom:0,
                                    width:"70msr"
                                } },
                                { get:"H1", style:{ marginLeft:"-10msr" } },
                                { get:"H2", randomly:[
                                    [],
                                    [ {style:{ marginLeft:"-5msr" } } ]
                                ]},
                            ],[
                                { get:".borders", style:{
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center"
                                } },
                                { get:".content", style:{
                                    width:"80msr"
                                } },
                            ]
                        ]
                    }
                ],
                basicDistortions:[
                    {
                        randomly:[
                            [],
                            [
                                {
                                    get:".block",
                                    randomly:[
                                        [],
                                        [ { style:{ transform:"rotate(-1deg)" }} ],
                                        [ { style:{ transform:"rotate(1deg)" }} ],
                                        [ { 
                                            get:"P",
                                            randomly:[
                                                [ { style:{ transform:"rotate(-1deg)" }} ],
                                                [ { style:{ transform:"rotate(1deg)" }} ]
                                            ]
                                        } ],
                                    ]
                                },{
                                    get:".block",
                                    randomly:[
                                        [ { style:{ textAlign:"right" }} ],
                                        [ { style:{ textAlign:"left" }} ],
                                        [ { style:{ textAlign:"center" }} ],
                                    ]
                                }
                            ]
                        ]
                    },{
                        randomly:[
                            [],
                            [
                                {
                                    get:"table",
                                    randomly:[
                                        [],
                                        [ { style:{ transform:"rotate(-0.5deg)" }} ],
                                        [ { style:{ transform:"rotate(0.5deg)" }} ],
                                    ]
                                },{
                                    get:"TR",
                                    randomly:[
                                        [],
                                        [ { style:{ transform:"rotate(-0.5deg)" }} ],
                                        [ { style:{ transform:"rotate(0.5deg)" }} ],
                                    ]
                                }           
                            ]
                        ]
                    },{
                        randomly:[
                            [], [], [], [],
                            [ { randomlyFromPack:"fontEffect" } ]
                        ]
                    },{
                        get:"H1",
                        randomly:[
                            [],
                            [],
                            [ { style:{ textAlign:"center",transform:"scale(1.3,1)" }}],
                            [ { style:{ textAlign:"center",transform:"scale(1.5,1) rotate(-1deg)" }}],
                        ]
                    },{
                        get:"H2",
                        randomly:[
                            [],
                            [ { style:{ letterSpacing:"-0.25msr" } } ],
                            [ { style:{ letterSpacing:"0.25msr" } } ],
                        ]
                    },{
                        get:"H1",
                        randomly:[
                            [],
                            [],
                            [ { style:{ color:{ palette:"backgroundcolor" }, textShadow:"1px 1px 1px {palette:forecolor}, -1px -1px 1px {palette:forecolor}, -1px 1px 1px {palette:forecolor}, 1px -1px 1px {palette:forecolor}" } } ],
                            [ { style:{ color:{ palette:"backgroundcolor" }, backgroundColor:{ palette:"forecolor" }, padding:"4msr" } } ],
                            [ { style:{ color:{ palette:"forecolor" }, backgroundColor:{ palette:"backgroundcolor" }, padding:"4msr" } } ],

                        ]
                    },{
                        get:"UL",
                        randomly:[
                            [], [],
                            [ { get:"LI", style:{ listStyleType:"circle" } } ],
                            [ { get:"LI", style:{ listStyleType:"crosses" } } ],
                            [ { get:"LI", style:{ listStyleType:"balloonasterisk" } } ],
                            [ { get:"LI", style:{ listStyleType:"rightarrow" } } ],
                            [ { get:"LI", style:{ listStyleType:"diamond" } } ],
                        ]
                    },
                ],
                basicOverart:[
                    {
                        randomly:[
                            [], [], [], [],
                            [
                                {
                                    randomly:[
                                        [
                                            {
                                                get:".overart",
                                                style:{
                                                    backgroundImage:{ randomlyFromPackUrl:"textures" }
                                                },
                                                randomly:[
                                                    [], [],
                                                    [ { style:{ filter:"invert(100%)" } } ]
                                                ]
                                            }
                                        ]
                                    ]
                                }
                            ]   
                        ]
                    },{
                        get:".overart",
                        randomly:[
                            [],
                            [ { style:{ transform:"scale(1.2)" } } ],
                            [ { style:{ transform:"scale(1.2) rotate(-1deg)" } } ],
                            [ { style:{ transform:"scale(1.2) rotate(1deg)" } } ]
                        ]
                    }
                ],
                basicFixes:[
                    { get:"UL", style:{ textAlign:"left" } }
                ],
                basicArt:[
                    { get:".art",
                        randomly:[
                            [],
                            [],
                            [],
                            [],
                            [],
                            [ { style:{ border:"1.5msr solid {palette:forecolor}" } } ],
                            [ { style:{ border:"1.5msr solid {palette:accentcolor}" } } ],
                            [ { style:{ border:"1.5msr solid #eee" } } ],
                            [ { style:{ border:"1.5msr solid #222" } } ]
                        ]
                    },{
                        get:".art",
                        randomly:[
                            [ {  art:[ ART_SUBJECT_STENCIL, ART_DECORATION ] } ],
                            [ {  art:[ ART_DECORATION, ART_SUBJECT_STENCIL ] } ],
                            //[ {  art:[ ART_SUBJECT_PHOTO, ART_DECORATION ] } ],
                            // [ {  art:[ ART_DECORATION, ART_SUBJECT_PHOTO ] } ],
                            [ {  art:[ SIDE_ART_SUBJECT_STENCIL, ART_DECORATION ] } ],
                            [ {  art:[ ART_DECORATION, SIDE_ART_SUBJECT_STENCIL ] } ],
                        ]
                    }
                ],
                pageFold:[
                    {
                        get:".overlay",
                        art:[
                            {
                                image:"database/extrapages/page-effect.svg",
                                size:"cover",
                                translateX:0,
                                translateY:0,
                                rotate:0,
                                scale:1,
                                opacity:1,
                                filter:""
                            }
                        ]
                    }
                ],
                simpleArt:[
                    { get:".art",
                        randomly:[
                            [],
                            [],
                            [],
                            [],
                            [],
                            [ { style:{ border:"1.5msr solid {palette:forecolor}" } } ],
                            [ { style:{ border:"1.5msr solid {palette:accentcolor}" } } ],
                            [ { style:{ border:"1.5msr solid #eee" } } ],
                            [ { style:{ border:"1.5msr solid #222" } } ]
                        ]
                    },{
                        get:".art",
                        art:[ ART_DECORATION ]
                    },
                    { run:"pageFold" }
                ],
                inner:[
                    { randomly:[
                        [ { makePalette:{ forecolor:0, borderColor:1 } } ],
                        [ { makePalette:{ forecolor:1, borderColor:2 } } ],
                        [ { makePalette:{ forecolor:2, borderColor:0 } } ]
                    ]},
                    { randomlyFromPack:"fontText" },
                    { randomlyFromPack:"fontEffect" },
                    {
                        style:{
                            backgroundColor:"#222",
                            color:"#eee"
                        }
                    },{
                        get:"h3",
                        randomlyFromPack:"fontIntro",
                        style:{
                            paddingBottom:"2msr",
                            marginBottom:"2.5msr",
                            textAlign:"center",
                            borderBottom:"0.1msr solid #eee",
                            color:"{palette:forecolor}",
                            textShadow:"0 0.4msr 1px {palette:borderColor}"
                        },
                        randomly:[
                            [ { style:{ transform:"rotate(-1deg)" } } ],
                            [ { style:{ transform:"rotate(1deg)" } } ],
                        ]
                    },{
                        get:".art",
                        art:[
                            {
                                image:"database/extrapages/swirls.svg",
                                size:"contain",
                                translateX:0,
                                translateY:0,
                                rotate:{ randomly:[ "0", "30deg", "35deg", "90deg", "100deg" ] },
                                scale:"1.5",
                                opacity:0.1,
                                replace:[ { from:"#000000", to:"#eee" } ],
                                filter:""
                            }
                        ]
                    },
                    { run:"pageFold" }
                ],
                face:[
                    { randomly:[
                        [ { makePalette:{ backColor:0, accentColor:1 } } ],
                        [ { makePalette:{ backColor:1, accentColor:2 } } ],
                        [ { makePalette:{ backColor:2, accentColor:0 } } ]
                    ]},
                    { randomlyFromPack:"fontText" },
                    { randomlyFromPack:"fontEffect" },
                    {
                        get:"P",
                        style:{
                            margin:"1msr 0",
                            textShadow:"1px 1px 1px #eee, -1px -1px 1px #eee, -1px 1px 1px #eee, 1px -1px 1px #eee",
                            width:"20msr"
                        }
                    },{
                        get:":nth-child(1 of P)",
                        style:{
                            marginTop:"70msr"
                        }
                    },{
                        get:".art",
                        style:{
                            backgroundColor:"{palette:backColor}"
                        },
                        art:[
                            {
                                image:"database/extrapages/cover.svg",
                                size:"cover",
                                translateX:0,
                                translateY:0,
                                rotate:0,
                                scale:1,
                                opacity:1,
                                replace:[ { from:"#ff0000", to:{ palette:"accentColor" } } ],
                                filter:{ randomly:[ "", "invert(100%)" ] }
                            }
                        ]
                    },{
                        get:".overlay",
                        art:[
                            {
                                image:"database/extrapages/cover-effect.svg",
                                size:"cover",
                                translateX:0,
                                translateY:0,
                                rotate:0,
                                scale:1,
                                opacity:1,
                                filter:""
                            }
                        ]
                    },{ run:"fullPageEffects" }
                ]
            },
            layouts:{
                singlePage:[
                    {
                        get:".page",
                        style:{
                            width:"90msr",
                            height:"127msr",
                            backgroundColor:"#eee",
                            overflow: "hidden",
                            margin:"4msr auto",
                            position:"relative",
                            boxShadow:"0px 1px 2px #000"
                        }  
                    }
                ],
                doublePage:[
                    {
                        get:".page",
                        style:{
                            width:"90msr",
                            height:"127msr",
                            backgroundColor:"#eee",
                            overflow: "hidden",
                            margin:"4msr",
                            position:"relative",
                            boxShadow:"0px 1px 2px #000",
                            display:"inline-block"
                        }  
                    }
                ]
            },
            run:[
                {
                    get:".page .borders",
                    style:{
                        position:"absolute",
                        left:"5msr",
                        right:"5msr",
                        top:"5msr",
                        bottom:"5msr",
                    }  
                },{
                    get:".page .layer",
                    style:{
                        position:"absolute",
                        left:"0",
                        right:"0",
                        top:"0",
                        bottom:"0",
                    }  
                },{
                    get:".page .overlay",
                    style:{
                        pointerEvents:"none"
                    }  
                },{
                    get:".page.map",
                    randomly:[
                        [
                            { run:"basicPage" },
                            { run:"basicDistortions" },
                            { run:"basicFixes" },
                            { run:"simpleArt" }
                        ]
                    ]
                },{
                    get:".page.inner",
                    run:"inner"
                },{
                    get:".page.face",
                    run:"face"
                },{
                    get:".page.default",
                    randomly:[
                        [
                            { run:"basicPage" },
                            { run:"fullPageEffects" },
                            { run:"pageAlignments" },
                            { run:"basicDistortions" },
                            { run:"basicOverart" },
                            { run:"basicFixes" },
                            { run:"basicArt" },
                            { run:"pageFold" },
                        ]
                    ]
                },{
                    get:".page.smaller",
                    randomly:[
                        [
                            { run:"basicPage" },
                            { run:"fullPageEffects" },
                            { run:"pageAlignments" },
                            { run:"basicOverart" },
                            { run:"basicFixes" },
                            { run:"basicArt" },
                            { run:"pageFold" },
                            {
                                get:"H1",
                                style:{
                                    fontSize:"3msr",
                                    lineHeight:"4msr",
                                    letterSpacing:"1msr",
                                    margin:"0msr",
                                }
                            },{
                                get:"TD,EM,B",
                                style:{
                                    fontSize:"1.5msr",
                                }
                            }
                        ]
                    ]
                }
            ]
        };

    function harmonize(color, start, end, interval) {
        const colors = [color]
        const [h, s, l] = parseHSL(color)

        for(let i = start; i <= end; i += interval) {
            const h1 = (h + i) % 360
            const c1 = `hsl(${h1}, ${s}%, ${l}%)`
            colors.push(c1)
        }

        return colors
    }

    function parseHSL(str) {
        var hsl, h, s, l
        hsl = str.replace(/[^\d,]/g, '').split(',')   // strip non digits ('%')  
        h = Number(hsl[0])                            // convert to number
        s = Number(hsl[1])
        l = Number(hsl[2])
        return [h, s, l]                              // return parts
    }

    function solve(attr, vars) {
        if (attr.randomly)
            attr = random.element(attr.randomly);
        else if (attr.randomlyFromPack)
            attr = random.element(vars.packs[attr.randomlyFromPack]);
        if (typeof attr == "string") {
            attr = attr.replace(/{([^}]+)}/g,(m,m1)=>{
                let
                    parts = m1.split(":");
                switch (parts[0]) {
                    case "palette":{
                        return vars.localPalette[parts[1]];
                    }
                }
            })
        }
        return attr;
    }

    function addArt(vars, node, line) {
        if (line.image) {
            let
                action = {
                    type:"pasteImage",
                    id:solve(line.image, vars),
                    size:measure.solve(solve(line.size, vars)),
                    translateX:measure.solve(solve(line.translateX, vars)),
                    translateY:measure.solve(solve(line.translateY, vars)),
                    rotate:measure.solve(solve(line.rotate, vars)),
                    scale:measure.solve(solve(line.scale, vars)),
                    opacity:measure.solve(solve(line.opacity, vars)),
                    filter:measure.solve(solve(line.filter, vars)),
                    atNode:node,
                    replace:[]
                };
            if (!vars.art.assets[action.id]) {
                vars.art.assets[action.id] = { type:"svg", url:action.id };
                vars.art.assetsList.push(action.id);
            }
            if (line.replace) {
                action.replace = line.replace.map(a=>{
                    let
                        to = solve(a.to, vars);
                    return { from:a.from, to:to.palette ? vars.localPalette[to.palette] : to };
                })
            }
            vars.art.actions.push(action);
        }
        if (line.randomly) {
            let
                set = random.element(line.randomly);
            set.forEach(line=>{
                addArt(vars, node, line);
            })
        }
    }

    function applyTransforms(root,vars,transforms) {
        transforms.forEach(transform=>{
            let
                nodes = transform.get ? root.querySelectorAll(transform.get) : [ root ];
            for (let i=0;i<nodes.length;i++) {
                let
                    node = nodes[i];

                if (transform.makePalette) {
                    vars.localPalette = {};
                    for (let k in transform.makePalette) {
                        vars.localPalette[k] = vars.palette[transform.makePalette[k]];
                    }
                }

                if (transform.art) {
                    transform.art.forEach(line=>{
                        addArt(vars, node, line);
                    })
                }

                if (transform.randomly) {
                    let
                        entry = random.element(transform.randomly);
                    applyTransforms(node,vars,entry);
                }

                if (transform.randomlyFromPack) {
                    let
                        entry = random.element(vars.packs[transform.randomlyFromPack]);
                    applyTransforms(node,vars,entry);
                }

                if (transform.run) {
                    applyTransforms(node,vars,STYLES.scripts[transform.run]);
                }
                
                if (transform.style)
                    for (let k in transform.style) {
                        if (transform.style[k].palette !== undefined)
                            node.style[k] = vars.localPalette[transform.style[k].palette];
                        else if (transform.style[k].randomlyFromPackUrl !== undefined) {
                            let
                                entry = random.element(vars.packs[transform.style[k].randomlyFromPackUrl]);
                            node.style[k] = "url('"+entry+"')";
                        } else {
                            let
                                value = transform.style[k];

                            if (typeof value == "string") {
                                value = value.replace(/{([^}]+)}/g,(m,m1)=>{
                                    let
                                        parts = m1.split(":");
                                    switch (parts[0]) {
                                        case "palette":{
                                            return vars.localPalette[parts[1]];
                                        }
                                    }
                                })
                            }
                            
                            node.style[k] = measure.solve(value);
                        }
                    }
            }
        })
    }

    function downloadAssets(art,cb) {
        if (art.assetsList.length) {
            let
                assetId = art.assetsList.pop(),
                asset = art.assets[assetId];

            if (!cache[asset.url]) {
                if (asset.url.endsWith(".svg")) {
                    var
                        xmlhttp = new XMLHttpRequest();
                    if (cb)
                        xmlhttp.onreadystatechange = function() {
                            if (xmlhttp.readyState == 4)
                                if ((xmlhttp.status == 200)||(xmlhttp.status==0)) {
                                    asset.data = cache[asset.url] = { isSvg:true, svg:xmlhttp.responseText };
                                    downloadAssets(art,cb);
                                }
                        };
                    xmlhttp.open("GET", asset.url, true);
                    xmlhttp.send();
                } else {
                    asset.data = cache[asset.url] = {isSvg:false, url:asset.url };
                    downloadAssets(art,cb);
                }
            } else {
                asset.data = cache[asset.url];
                downloadAssets(art,cb);
            }
        } else {
            cb();
        }
    }

    return {
        decorate:(root, layout, flags, globals, cb)=>{
            
            let
                rp = 'hsl('+random.integer(360)+', 80%, 40%)',
                palette =  harmonize(rp, 150, 210, 60),
                vars = {
                    art:{ assets:{}, assetsList:[], actions:[] },
                    packs:{ stencils:[], photos:[], textures:[], grunge:[], fontText:[], fontTitle:[], fontEffect:[], fontIntro:[] },
                    palette:palette
                };

            vars.packs.grunge = vars.packs.grunge.concat(IMAGES.shared.grunge);
            vars.packs.stencils = vars.packs.stencils.concat(IMAGES.shared.symbols);

            for (let k in IMAGES.bySetting) {
                if (flags[k]) {
                    vars.packs.stencils = vars.packs.stencils.concat(IMAGES.bySetting[k].stencils);
                    vars.packs.textures = vars.packs.textures.concat(IMAGES.bySetting[k].textures);
                    vars.packs.photos = vars.packs.photos.concat(IMAGES.bySetting[k].photos);
                }
            }

            for (let k in FONTS.bySetting) {
                if (flags[k]) {
                    vars.packs.fontText = vars.packs.fontText.concat(FONTS.bySetting[k].text);
                    vars.packs.fontTitle = vars.packs.fontTitle.concat(FONTS.bySetting[k].titles);
                    vars.packs.fontEffect = vars.packs.fontEffect.concat(FONTS.bySetting[k].effects);
                    vars.packs.fontIntro = vars.packs.fontIntro.concat(FONTS.bySetting[k].intros);
                }
            }

            palette.push("#222");
            palette.push("#eee");

            applyTransforms(root, vars, STYLES.layouts[layout]);
            applyTransforms(root, vars, STYLES.run);

            downloadAssets(vars.art,()=>{
                vars.art.actions.forEach(action=>{
                    switch (action.type) {
                        case "pasteImage":{
                            let
                                node = document.createElement("div"),
                                data = vars.art.assets[action.id].data;
                            if (data.isSvg) {
                                let
                                    svg = data.svg;
                                action.replace.forEach(replace=>{
                                    svg = svg.replaceAll(replace.from, replace.to);
                                })
                                node.style.backgroundImage = "url(data:image/svg+xml;base64,"+btoa(svg)+")";
                            } else {
                                node.style.backgroundImage = "url('"+data.url+"')";
                            }
                            node.style.position = "absolute";
                            node.style.left = 0;
                            node.style.right = 0;
                            node.style.top = 0;
                            node.style.bottom = 0;
                            node.style.opacity = action.opacity;
                            node.style.backgroundPosition = "center";
                            node.style.backgroundRepeat = "no-repeat";
                            node.style.backgroundSize = action.size;
                            node.style.transform = "translate("+action.translateX+","+action.translateY+") rotate("+action.rotate+") scale("+action.scale+")";
                            node.style.filter = action.filter;
                            action.atNode.appendChild(node);
                            break;
                        }
                    }
                })

                hexmapRenderer.prepare(()=>{
                    let
                        maps = document.getElementsByClassName("generatedata");

                    for (let i=0;i<maps.length;i++) {
                        hexmapRenderer.render(maps[i], "borg", globals.generateData[maps[i].getAttribute("data-id")], globals, language);
                    }
                    
                    cb();
                })
                
            })
        }
    }
    
}

BorgDecorator.CACHE = {};