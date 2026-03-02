DATABASE = (window.DATABASE || []).concat([
{
    id:"playergrowth-timing-simple",
    tags:[ "growth", "trigger" ],
    render:{
        EN:"[:block:]\n\nThe game master decides when a character should be improved. It can be after completing a scenario, killing mighty foes or bringing home treasure.\n[:endblock:]\n"
    }
},
{
    id:"playergrowth-lifepoints-simple",
    tags:[ "growth", "lifepoints", "levelupevent" ],
    methods:{
        onLevelUp:{
            EN:"[:block:]\n## More {$.hitpointsLabel.getShortName()}\n\nRoll {$.playerHitpoints.getLevelUpRoll()}. If the result is equal to or greater than your current maximum {$.hitpointsLabel.getShortName()}, increase it by  {$.playerHitpoints.getLevelUpAmount()}.\n[:endblock:]\n"
        }
    }
},
{
    id:"playergrowth-loot-simple",
    tags:[ "growth", "loot", "levelupevent", "leveluplootentry" ],
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
        { id:"youfound", ofTags:[ [ "oracle", "youfound" ] ] },
    ],
    methods:{
        getLevelUpLootEntries:[
            { weight:3, result:{ EN:"Nothing" } }
        ],
        onLevelUp:{
            EN:"## {youfound()}\n\n[:tablehead:]Loot ({diceroll})[:endtablehead:]\n{diceroll.createRangeTableForTagCall(\"leveluploot\",0,\"leveluplootentry\",\"getLevelUpLootEntries\")}"
        }
    }
},
{
    id:"playergrowth-simple",
    tags:[ "levelup" ],
    requires:[
        { id:"growthTiming", ofTags:[ [ "growth", "trigger" ] ] },
        { id:"growthLifepoints", ofTags:[ [ "growth", "lifepoints" ] ] },
        { id:"growthLoot", ofTags:[ [ "growth", "loot" ] ] },
    ],
    render:{
        EN:"{growthTiming}\n\n{$.callAll(0,\"levelupevent\",\"onLevelUp\",\"\n\n\")}"
    }
},
]);
