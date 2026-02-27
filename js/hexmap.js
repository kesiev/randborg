function HexMap(width,height) {

    const
        ADJACENCY = [
            [
                { x:1, y:-1 },    
                { x:0, y:-1 }
            ],
            [
                { x:1, y:0 },    
                { x:1, y:0 }
            ],
            [
                { x:1, y:1 },    
                { x:0, y:1 }
            ],
            [
                { x:0, y:1 },    
                { x:-1, y:1 }
            ],
            [
                { x:-1, y:0 },
                { x:-1, y:0 }
            ],
            [
                { x:0, y:-1 },    
                { x:-1, y:-1 }
            ]
        ];

    let
        cells = [],
        map = [],
        index = {},
        categories = {};

    for (let y=0;y<height;y++) {
        map[y]=[];
        for (let x=0;x<width-(y%2 == 0 ? 1 : 0);x++) {
            let
                cell = { x:x, y:y, flags:{} };
            cells.push(cell);
            map[y][x] = cell;
        }
    }

    function isCell(x,y) {
        return map[y] && map[y][x];
    }

    function addCategory(category, flag) {
        if (!categories[category])
            categories[category] = [];
        if (categories[category].indexOf(flag) == -1)
            categories[category].push(flag);
    }

    function flagCell(id,cell) {
        cell.flags[id] = true;
        if (!index[id])
            index[id] = [];
        if (index[id].indexOf(cell) == -1) {
            index[id].push(cell);
        }
    }

    let
        self = {
            width:width,
            height:height,
            map:map,
            cells:cells,
            index:index,
            categories:categories,
            spread:(random,list,into,inner)=>{
                let
                    times = {},
                    allTimes = 0,
                    turns = { elements:[] },
                    availableCells = cells.filter(cell=>{
                        let
                            isOk = !into || (cell.flags[into]);
                        if (isOk && inner) {
                            for (let i=0;i<ADJACENCY.length;i++) {
                                let
                                    side = ADJACENCY[i],
                                    dx = cell.x+side[cell.y%2].x,
                                    dy = cell.y+side[cell.y%2].y,
                                    destCell = isCell(dx,dy); 
                                if (!destCell || !destCell.flags[into]) {
                                    isOk = false;
                                    break;
                                }
                            }
                        }
                        return isOk;
                    });

                list.forEach(item=>{
                    let
                        cell,
                        turnsCount = 1;
                    if (item.speed)
                        turnsCount = item.speed;
                    if (item.x !== undefined) {
                        cell = isCell(item.x,item.y);
                    } else {
                        cell = random.element(availableCells);
                    }
                    for (let i=0;i<turnsCount;i++) {
                        turns.elements.push(item.id);
                    }
                    if (item.times) {
                        times[item.id] = item.times;
                        if (allTimes >= 0)
                            allTimes += item.times;
                    } else {
                        times[item.id] = -1;
                        allTimes = -1;
                    }
                    flagCell(item.id, cell);
                    if (item.category)
                        addCategory(item.category, item.id);
                    availableCells.splice(availableCells.indexOf(cell),1);
                });

                while (availableCells.length && allTimes) {
                    let
                        id = random.bagPick(turns),
                        options = [];

                    if (times[id]) {

                        availableCells.forEach(cell=>{
                            for (let i=0;i<ADJACENCY.length;i++) {
                                let
                                    side = ADJACENCY[i],
                                    dx = cell.x+side[cell.y%2].x,
                                    dy = cell.y+side[cell.y%2].y,
                                    destCell = isCell(dx,dy); 
                                if (destCell && destCell.flags[id]) {
                                    options.push(cell);
                                    break;
                                }
                            }
                        })

                        if (options.length) {
                            let
                                cell = random.element(options);
                            flagCell(id, cell);
                            availableCells.splice(availableCells.indexOf(cell),1);

                        }

                        times[id]--;
                        allTimes--;

                    }
                }
            },
            addPoi:(random,id,into,category)=>{
                let
                    availableCells = cells.filter(cell=>!cell.flags.hasPoi && (!into || (cell.flags[into])));
                if (availableCells.length) {
                    let
                        cell = random.element(availableCells);
                    if (category)
                        addCategory(category, id);
                    flagCell(id, cell);
                    cell.flags.hasPoi = true;
                }
            },
            toHtml:(palette)=>{
                let
                    html = "";

                for (let y=0;y<height;y++) {
                    html+="<div>";
                    for (let x=0;x<map[y].length;x++) {
                        let
                            color = "transparent",
                            content = "";

                        for (let k in palette) {
                            if (map[y][x].flags[k]) {
                                if (palette[k].color) {
                                    color = palette[k].color;
                                }
                                if (palette[k].html) {
                                    content+=palette[k].html+", ";
                                }
                            }
                        }
                        html+="<div style='"+(x==0 && (y % 2 == 0) ? "margin-left:10px;" : "")+"border:1px solid #000;background-color:"+color+";display:inline-block;width:20px;height:20px;font-size:10px'>";
                        html+="<b>"+(content||"&nbsp;")+"</b>";
                        html+="</div>";
                    }
                    html+="</div>";
                }
                return html;
            }
        }

    return self;

}