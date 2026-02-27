let HexmapRenderer = function(measure) {

    let
        STYLES = {
            borg:{
                mapColors:[
                    { id:"region", color:"rgba(255,0,0,0.5)" },
                    { id:"region-1", color:"rgba(0,255,0,0.5)" },
                    { id:"region-2", color:"rgba(0,255,255,0.5)" },
                    { id:"region-3", color:"rgba(255,255,0,0.5)" },
                    { id:"region-4", color:"rgba(255,0,255,0.5)" },
                    { id:"lake-area", color:"rgba(0,0,255,0.5)" },
                    { id:"lake-1-area", color:"rgba(0,0,255,0.5)" }
                ],
                map:{
                    position:"absolute",
                    left:"-10msr",
                    top:"20msr",
                    width:"100msr",
                    height:"99.7msr"
                },
                hex:{
                    size:6.8,
                    gapX:6.8*0.79,
                    gapY:6.8*0.69,
                    halfGapX:6.8*0.79*0.51
                }
            },
            bare:{
                mapColors:[
                    { id:"region", color:"rgba(200,200,200,0.5)" },
                    { id:"region-1", color:"rgba(128,128,128,0.5)" },
                    { id:"region-2", color:"rgba(200,200,200,0.5)" },
                    { id:"region-3", color:"rgba(128,128,128,0.5)" },
                    { id:"region-4", color:"rgba(200,200,200,0.5)" },
                    { id:"lake-area", color:"rgba(220,220,220,0.2)" },
                    { id:"lake-1-area", color:"rgba(220,220,220,0.2)" }
                ],
                map:{
                    position:"relative",
                    left:"",
                    top:"",
                    width:"100%",
                    height:"75msr"
                },
                hex:{
                    size:5.2,
                    gapX:5.2*0.79,
                    gapY:5.2*0.69,
                    halfGapX:5.2*0.79*0.51
                }
            }
        },
        HEXLINES = [ "line-NE", "line-E", "line-SE", "line-SW", "line-W", "line-NW" ],
        CACHE = HexmapRenderer.CACHE,
        ADJACENCY = [
            {
                id:"line-NE",
                delta:[
                    { x:1, y:-1 },    
                    { x:0, y:-1 }
                ]
            },{
                id:"line-E",
                delta:[
                    { x:1, y:0 },    
                    { x:1, y:0 }
                ]
            },{
                id:"line-SE",
                delta:[
                    { x:1, y:1 },    
                    { x:0, y:1 }
                ]
            },{
                id:"line-SW",
                delta:[
                    { x:0, y:1 },    
                    { x:-1, y:1 }
                ]
            },{
                id:"line-W",
                delta:[
                    { x:-1, y:0 },
                    { x:-1, y:0 }
                ]
            },{
                id:"line-NW",
                delta:[
                    { x:0, y:-1 },    
                    { x:-1, y:-1 }
                ]
            }
        ];

    function downloadAssets(id,cb) {
        if (HexmapRenderer.ASSETS[id]) {
            let
                asset = HexmapRenderer.ASSETS[id];

            id++;

            if (!CACHE[asset.id]) {
                var
                    xmlhttp = new XMLHttpRequest();
                if (cb)
                    xmlhttp.onreadystatechange = function() {
                        if (xmlhttp.readyState == 4)
                            if ((xmlhttp.status == 200)||(xmlhttp.status==0)) {
                                CACHE[asset.id] = xmlhttp.responseText;
                                downloadAssets(id,cb);
                            }
                    };
                xmlhttp.open("GET", asset.url, true);
                xmlhttp.send();
            } else {
                downloadAssets(id,cb);
            }
        } else {
            cb();
        }
    }

    function createMap(style, root) {
        let
            div = document.createElement("div");

        div.style.position = style.map.position;
        div.style.left = measure.solve(style.map.left);
        div.style.top = measure.solve(style.map.top);
        div.style.width = measure.solve(style.map.width);
        div.style.height = measure.solve(style.map.height);

        root.appendChild(div);

        return div;

    }

    function paintHex(style,into,x,y,rule) {
        let
            svg = CACHE.hex,
            div = document.createElement("div"),
            cellX = (x*style.hex.gapX)+((y % 2 == 0) ? style.hex.halfGapX : 0),
            cellY = (y*style.hex.gapY);

        if (rule) {
            if (rule.color)
                svg = svg.replace("fill:#ff0000","fill:"+rule.color);

            if (rule.lines) {
                HEXLINES.forEach(line=>{
                    if (rule.lines.indexOf(line) == -1) {
                        svg = svg.replace("id=\""+line+"\"","visibility=\"hidden\"");
                    }
                })
            }

        }

        div.style.position = "absolute";
        div.style.backgroundSize = "contain";
        div.style.backgroundImage = "url(data:image/svg+xml;base64,"+btoa(svg)+")";
        div.style.width = measure.solve(style.hex.size+"msr");
        div.style.height = measure.solve(style.hex.size+"msr");
        div.style.left = measure.solve(cellX+"msr");
        div.style.top = measure.solve(cellY+"msr");
        
        into.appendChild(div);

        return { lx:cellX, rx:cellX+style.hex.gapX, ty:cellY, by:cellY+style.hex.gapY };
    }

    function paintPoi(style, into,x,y,label) {
        let
            fontSize = 1.5,
            div = document.createElement("div"),
            labelDiv = document.createElement("div"),
            span = document.createElement("span"),
            cellX = (x*style.hex.gapX)+((y % 2 == 0) ? style.hex.halfGapX : 0) + (style.hex.gapX/1.6),
            cellY = (y*style.hex.gapY) + (style.hex.gapY/1.42),
            dotX = cellX - 0.5,
            dotY = cellY - 0.5,
            labelX = cellX+1,
            labelY = cellY-fontSize/2-0.1;

        if (labelX > 65) {
            labelDiv.style.textAlign = "right";
            labelX = cellX - 1 - 30;
        }

        labelDiv.style.position = div.style.position = "absolute";
        div.style.width = measure.solve("1msr");
        div.style.height = measure.solve("1msr");
        div.style.left = measure.solve(dotX+"msr");
        div.style.top = measure.solve(dotY+"msr");
        labelDiv.style.width = measure.solve("30msr");
        labelDiv.style.left = measure.solve(labelX+"msr");
        labelDiv.style.top = measure.solve(labelY+"msr");
        labelDiv.style.fontSize = labelDiv.style.lineHeight = measure.solve(fontSize+"msr");
        
        span.style.padding = measure.solve("0.2msr");
        span.style.color = "#fff";
        span.style.backgroundColor = "rgba(0,0,0,0.5)";
        span.innerHTML = label;

        div.style.backgroundColor = "#000";
        div.style.borderRadius = measure.solve("1msr");

        into.appendChild(div);
        into.appendChild(labelDiv);
        labelDiv.appendChild(span);
    }

    function paintLargeLabel(into,x,y,label,flags) {
        let
            fontSize = 2,
            shadowColor = "#fff",
            foreColor = "#000",
            div = document.createElement("div");

        div.style.position = "absolute";
        div.style.width = measure.solve("20msr");
        div.style.textAlign = "center";
        div.style.left = measure.solve((x-10)+"msr");
        div.innerHTML = label;

        if (flags) {
            if (flags.italic) {
                div.style.fontStyle = "italic";
            }
            if (flags.invert) {
                shadowColor = "#000";
                foreColor = "#fff";
            }
            if (flags.smaller) {
                fontSize = 1;
            }
        }

        div.style.top = measure.solve((y-fontSize/2)+"msr");
        div.style.lineHeight = div.style.fontSize = measure.solve(fontSize+"msr");
        div.style.textShadow = measure.solve("1px 1px 1px "+shadowColor+", 1px 0px 1px "+shadowColor+", 1px -1px 1px "+shadowColor+", -1px 1px 1px "+shadowColor+", -1px 0px 1px "+shadowColor+", -1px -1px 1px "+shadowColor);
        div.style.color = foreColor;

        into.appendChild(div);
    }

    function renderLayer(style, into,data,rules) {
        let
            height = data.height,
            map = data.map,
            centers = {};

        for (let y=0;y<height;y++) {
            for (let x=0;x<map[y].length;x++) {
                let
                    cell = map[y][x],
                    cellRule;

                rules.forEach(rule=>{
                    if (cell.flags[rule.id])
                        cellRule = rule;
                });

                if (cellRule) {
                    let
                        paintCoord,
                        hexRule = {
                            color: cellRule.color,
                            lines:[]
                        };

                    ADJACENCY.forEach(side=>{
                        let
                            dx = x+side.delta[y%2].x,
                            dy = y+side.delta[y%2].y,
                            destCell = map[dy] && map[dy][dx],
                            isNotSame = true;

                        if (destCell) {
                            let
                                destRuleId;

                            rules.forEach(rule=>{
                                if (destCell.flags[rule.id])
                                    destRuleId = rule.id;
                            });

                            isNotSame = destRuleId != cellRule.id;

                        }

                        if (isNotSame) {
                            hexRule.lines.push(side.id);
                        }
                    })

                    paintCoord = paintHex(style, into, x, y, hexRule);

                    if (!centers[cellRule.id]) {
                        centers[cellRule.id] = paintCoord;
                    }

                    if (centers[cellRule.id].lx > paintCoord.lx)
                        centers[cellRule.id].lx = paintCoord.lx;
                    if (centers[cellRule.id].rx < paintCoord.rx)
                        centers[cellRule.id].rx = paintCoord.rx;
                    if (centers[cellRule.id].ty > paintCoord.ty)
                        centers[cellRule.id].ty = paintCoord.ty;
                    if (centers[cellRule.id].by < paintCoord.by)
                        centers[cellRule.id].by = paintCoord.by;


                }

            }
        }

        for (let k in centers) {
            centers[k].cx = (centers[k].rx+centers[k].lx)/2;
            centers[k].cy = (centers[k].by+centers[k].ty)/2;
        }
        return centers;
    }

    function renderPoi(style, into,data, globals, language) {
        let
            height = data.height,
            map = data.map;
            
        for (let y=0;y<height;y++) {
            for (let x=0;x<map[y].length;x++) {
                let
                    cell = map[y][x];

                for (let k in cell.flags) {
                    if (k.startsWith("poi-")) {
                        paintPoi(style, into, x, y, globals.references[k].references.name.model.render[language])
                    }
                }

            }
        }
    }

    return {
        prepare:(cb)=>{
            downloadAssets(0,cb);
        },
        render:(node,styleid,data,globals,language)=>{
            let
                style = STYLES[styleid],
                map = createMap(style, node),
                centers;

            centers = renderLayer(style, map, data, style.mapColors);

            for (let k in centers) {
                if (k.endsWith("-area")) {
                    paintLargeLabel(map,centers[k].cx,centers[k].cy,globals.references[k.substr(0,k.length-5)].references.name.model.render[language],{ smaller:true, italic:true });
                } else {
                    paintLargeLabel(map,centers[k].cx,centers[k].cy,globals.references[k].references.name.model.render[language],{ invert:true });
                }
            }

            renderPoi(style, map, data, globals, language);
            
        }
    }
    
}

HexmapRenderer.ASSETS = [
    { id:"hex", url:"database/map/hexagon.svg" }
];
HexmapRenderer.CACHE = {};
