DATABASE = (window.DATABASE || []).concat([
{
    id:"morale-simple",
    tags:[ "morale", "adversaryattribute" ],
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
        { id:"moraleRoll", ofTags:[ [ "multiple", "diceroll", "2d6" ] ] },
    ],
    orders:{
        adversaryAttribute:1
    },
    methods:{
        resultTable:[
            [
                { result:{ EN:"flees" } },
                { result:{ EN:"surrender" } }
            ]
        ],
        getEntityName:{
            EN:"morale"
        },
        getFullName:{
            EN:"Morale"
        },
        getSuffered:{
            EN:"demoralized"
        },
        getVerySmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{getFullName()}** 7",
                    "**{getFullName()}** 8",
                    "**{getFullName()}** 9",

                ]
            }
        },
        getSmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{getFullName()}** 7",
                    "**{getFullName()}** 8",
                    "**{getFullName()}** 9",
                ]
            }
        },
        getAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{getFullName()}** 9",
                    "**{getFullName()}** 10",
                    "**{getFullName()}** -",
                ]
            }
        },
        getLargeAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{getFullName()}** -",
                ]
            }
        },
    },
    render:{
        EN:"# {getFullName()}\n[:block:]\nMost enemies will not fight to the last drop of blood.\n\n**Roll for {getEntityName()} if:**\n\n{$.callAll(0,\"moraletriggers\",\"onMoraleTrigger\")}\n - a single enemy has only 1/3 of its {$.hitpointsLabel.getShortName()} left\n\nIf you roll greater than the creature's {getFullName()} value with {moraleRoll}, it is {getSuffered()}. Roll a {diceroll} hitp{diceroll.createRangeLine(resultTable)}.\n[:endblock:]\n"
    }
}
]);
