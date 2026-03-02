DATABASE = (window.DATABASE || []).concat([
{
    id:"player-abilities-random",
    tags:[ "player", "abilities", "creationentry" ],
    requires:[
        { id:"diceroll", ofTags:[ [ "multiple", "diceroll", "3d6" ] ] },
        { id:"growth", ofTags:[ [ "growth", "abilities" ] ] },
    ],
    methods:{
        maxStatValue:{
            EN:"+6"
        },
        minStatValue:{
            EN:"{diceroll.getTableMin(resultTable)}"
        },
        resultTable:[
            [
                { result:{ EN:"-3" } },
                { result:{ EN:"-2" } },
                { result:{ EN:"-1" } },
                { weight:2, result:{ EN:"0" } },
                { result:{ EN:"+1" } },
                { result:{ EN:"+2" } },
                { result:{ EN:"+3" } }
            ],[
                { result:{ EN:"-2" } },
                { result:{ EN:"-1" } },
                { weight:2, result:{ EN:"0" } },
                { result:{ EN:"+1" } },
                { result:{ EN:"+2" } },
            ],[
                { result:{ EN:"-1" } },
                { weight:2, result:{ EN:"0" } },
                { result:{ EN:"+1" } },
            ],[
                { result:{ EN:"-1" } },
                { result:{ EN:"0" } },
                { result:{ EN:"+1" } },
            ]
        ],
        creationSteps:{
            EN:" - Roll your abilities.\n"
        }
    },
    render:{
        EN:"# Abilities\n[:block:]\n{$.makeBulletListOf(0,\"stat\",\"testsShortlist\")}\n\n**Roll {diceroll} and using the Abilities table** to generate each ability score from {diceroll.getTableMin(resultTable)} to {diceroll.getTableMax(resultTable)}. The sum is not used in the game once the character is created, only the table value.\n\nPlayer Characters with a signature skill can roll {diceroll.count()+1}{diceroll.label()} and drop the lowest die for two of their abilities. When the character is later improved an ability can never exceed {maxStatValue()} or {minStatValue()}.\n[:endblock:]\n[:tablehead:]Abilities[:endtablehead:]\n{diceroll.createRangeTable(\"abilities\",resultTable)}"
    }
},{
    id:"playergrowth-stats-simple",
    tags:[ "growth", "abilities", "levelupevent" ],
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
    ],
    methods:{
        onLevelUp:{
            EN:"[:block:]\n## Ability changes\n\nRoll a {diceroll} against every ability. Results equal to or greater than the ability increase it by 1, to a maximum of {$.playerAbilities.maxStatValue()}. Results below the ability decrease it by 1.\n\nAbilities from {$.playerAbilities.minStatValue()} to +1 are always increased by 1 unless the {diceroll} result is 1. The ability is then reduced by 1, but never below {$.playerAbilities.minStatValue()}.\n[:endblock:]\n"
        }
    }
}
]);
