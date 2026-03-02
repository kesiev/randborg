(function() {

    DATABASE = (window.DATABASE || []);

    function makeStats(dice,stats,id,sum) {
        if (!stats) {
            stats = { rolls:0, results:{} };
        }
        if (!id) {
            id = 0;
        }
        if (!sum) {
            sum = 0;
        }
        if (dice[id]) {
            for (let i=1;i<=dice[id];i++) {
                makeStats(dice,stats,id+1,sum+i);
            }
        } else {
            stats.rolls++;
            if (!stats.results[sum]) {
                stats.results[sum] = 0;
            }
            stats.results[sum]++;
        }
        return stats;
    }

    function getTableMetadata($,self,caller,inst,results,tables) {
       for (let j=0;j<tables.length;j++) {
            let
                table = tables[j],
                weight,
                minRow,
                maxRow,
                sumWeight = 0;
            table.forEach((line,id)=>{
                weight = line.weight || 1;
                sumWeight+=weight;
                if (line.result) {
                    if (!minRow)
                        minRow = line.result;
                    maxRow = line.result;
                }
            });
            if (results.length >= sumWeight) {
                return {
                    minRow:minRow,
                    maxRow:maxRow
                }
            }
        }
    }

    function createTable($,self,caller,inst,id,mode,results,tables, prefixInstance, prefixCall) {
        for (let j=0;j<tables.length;j++) {
            let
                tabledata = {
                    roll:self,
                    results:[]
                },
                out = "",
                table = tables[j],
                weight,
                sumWeight = 0,
                distribution = [],
                head = 0,
                peakWeight,
                peaks,
                delta,
                ratio;

            table.forEach((line,id)=>{
                weight = line.weight || 1;
                distribution.push(weight);
                sumWeight+=weight;
                if ((peakWeight === undefined) || (weight > peakWeight)) {
                    peaks = [ id ];
                    peakWeight = weight;
                } else if (peakWeight == line.weight) {
                    peaks.push(id);
                }
            });

            if (results.length >= sumWeight) {
                ratio = Math.floor(results.length / sumWeight);
                delta = results.length-(ratio*sumWeight);
                for (let i=0;i<table.length;i++) {
                    distribution[i]*=ratio;
                }
                for (let i=0;i<delta;i++) {
                    distribution[peaks[i%peaks.length]]++; // TODO: Randomly select peaks.
                }
                table.forEach((line,id)=>{
                    let
                        prefix = "",
                        gap = distribution[id],
                        l1, l2, result;
                    if (table[id].result) {
                        result = $.renderText(caller,inst,table[id].result);
                        l1 = $.renderText(caller,self,results[head].result);
                        l2 = $.renderText(caller,self,results[head+gap-1].result);
                        tabledata.results.push({ on:[parseInt(l1), parseInt(l2)], originalResult:table[id].originalResult, result:result });
                        if (prefixInstance) {
                            prefix = $.runInstanceCommand(caller,prefixInstance, prefixCall+"()");
                        }
                        switch (mode) {
                            case 0:{
                                out+="|"+(l1 == l2 ? l1 : l1+"-"+l2)+"|"+prefix+result+"|\n";
                                break;
                            }
                            case 1:{
                                out+="|"+l2+"|"+prefix+result+"|\n";
                                break;
                            }
                            case 2:{
                                out+=(l1 == l2 ? l1 : l1+"-"+l2)+" = "+prefix+result+" / ";
                                break;
                            }
                        }
                       
                    }
                    head+=gap;
                });

                if (id) {
                    let
                        baseTableId = tableId = "table-"+id,
                        tableCount = 0;
                    if (!$.GLOBALS.generateData.tables)
                        $.GLOBALS.generateData.tables = 0;
                    $.GLOBALS.generateData.tables++;
                    while ($.GLOBALS.generateData[tableId]) {
                        tableCount++;
                        tableId = baseTableId + "-" + tableCount;
                    }
                    $.GLOBALS.generateData[tableId] = tabledata;
                }

                switch (mode) {
                    case 2:{
                        out=out.substr(0,out.length-3);
                        break;
                    }
                }

                return out;
            }
        }
    }

    function generateRolls(tags, id,symbol,dicelabel,dice) {
        let
            stats = makeStats(dice),
            statsList = [],
            out = {
                id:"roll-"+id,
                methods:{
                    getTableMin:function ($,caller,inst,tables) {
                        return getTableMetadata($,this,caller,inst,this.model.results,tables).minRow;
                    },
                    getTableMax:function ($,caller,inst,tables) {
                        return getTableMetadata($,this,caller,inst,this.model.results,tables).maxRow;
                    },
                    createRangeTable:function ($,caller,inst,id,tables, prefixInstance, prefixCall) {
                        return createTable($,this,caller,inst,id,0,this.model.results,tables, prefixInstance, prefixCall);
                    },
                    createRangeLine:function ($,caller,inst,tables, prefixInstance, prefixCall) {
                        return createTable($,this,caller,inst,null,2,this.model.results,tables, prefixInstance, prefixCall);
                    },
                    createTestTable:function ($,caller,inst,id,tables, prefixInstance, prefixCall) {
                        return createTable($,this,caller,inst,id,1,this.model.results,tables, prefixInstance, prefixCall);
                    },
                    createRangeTableForTag:function ($,caller,inst,id,root,tag, prefixInstance, prefixCall) {
                        let
                            instances = $.getInstancesByTags(caller, [ [ tag ] ], root),
                            table = instances.map(i=>{
                                return { originalResult:i, result:{ EN:$.renderInstance(caller, i) }}
                            });
                        return createTable($,this,caller,inst,id,0,this.model.results,[ table ], prefixInstance, prefixCall);
                    },
                    createRangeTableForTagCall:function ($,caller,inst,id,root,tag, call, prefixInstance, prefixCall) {
                        let
                            table = [],
                            instances = $.getInstancesByTags(caller, [ [ tag ] ], root);

                        instances.forEach(i=>{
                            let
                                tabledata = $.runInstanceCommand(caller,i, call+"()");
                            tabledata.forEach(entry=>{
                                table.push({ weight:entry.weight, originalResult:i, result:{ EN:$.renderText(caller, i,entry.result) }});
                            })
                        });
                        return createTable($,this,caller,inst,id,0,this.model.results,[ table ], prefixInstance, prefixCall);
                    },
                    doRoll:function() {
                        let
                            total = 0;

                        dice.forEach(die=>{
                            total += 1+Math.floor(Math.random()*die);
                        })

                        return total;
                    },
                    count:{
                        EN:dice.length
                    },
                    label:{
                        EN:dicelabel
                    },
                    perform:{
                        EN:"roll "+symbol
                    },
                    name:{
                        EN:symbol
                    },
                    max:{
                        EN:dice[0]
                    }
                },
                render:{
                    EN:symbol
                }
            };
        for (let k in stats.results) {
            statsList.push({ probability:stats.results[k]/stats.rolls, result:{ EN:k+"" } });
        }
        for (let i=1;i<=statsList.length;i++)
            tags.push(i+"+");
        out.tags = tags;
        out.results = statsList;
        return out;
    }

    DATABASE = (window.DATABASE || []).concat([
        generateRolls([ "multiple", "diceroll", "2d6" ], "2d6", "2d6", "d6", [ 6, 6 ]),
        generateRolls([ "multiple", "diceroll", "3d6" ], "3d6", "3d6", "d6", [ 6, 6, 6 ]),
        generateRolls([ "multiple", "diceroll", "2d10" ],"2d10", "2d10", "d10", [ 10, 10 ]),
        generateRolls([ "multiple", "diceroll", "3d10" ],"3d10", "3d10", "d10", [ 10, 10, 10 ]),
        generateRolls([ "multiple", "diceroll", "6d10" ],"6d10", "6d10", "d10", [ 10, 10, 10, 10, 10, 10 ]),

        generateRolls([ "single", "diceroll", "d2" ],"d2", "d2", "d2", [ 2 ]),
        generateRolls([ "single", "diceroll", "d4" ],"d4", "d4", "d4", [ 4 ]),
        generateRolls([ "single", "diceroll", "d6" ],"d6", "d6", "d6", [ 6 ]),
        generateRolls([ "single", "diceroll", "d8" ],"d8", "d8", "d8", [ 8 ]),
        generateRolls([ "single", "diceroll", "d10" ],"d10", "d10", "d10", [ 10 ]),
        generateRolls([ "single", "diceroll", "d12" ],"d12", "d12", "d12", [ 12 ]),
        generateRolls([ "single", "diceroll", "d20" ],"d20", "d20", "d20", [ 20 ]),
    ]);

})();