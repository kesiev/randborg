DATABASE = (window.DATABASE || []).concat([
{
    id:"reaction-simple",
    tags:[ "reaction" ],
    requires:[
        { id:"diceroll", ofTags:[ [ "multiple", "diceroll", "2d6" ] ] },
    ],
    methods:{
        intro:{
            EN:{
                oneOf:[
                    "Facing creatures of unknown temperament.",
                    "Upon encountering beings with ambiguous intent.",
                    "When approaching creatures with unpredictable reactions.",
                    "Confronting entities of uncertain hostility.",
                    "Interacting with creatures of doubtful alignment.",
                    "Dealing with entities whose behavior is unclear.",
                    "Engaging with creatures of erratic temperament.",
                    "Approaching individuals with unverified motives.",
                    "When encountering beings with undetermined reactions.",
                ]
            }
        },
        resultTable:[
            [
                { result:{ EN:"Kill!" } },
                { result:{ EN:"Angered" } },
                { result:{ EN:"Indifferent" } },
                { result:{ EN:"Almost friendly" } },
                { result:{ EN:"Helpful" } },
            ]
        ]
    },
    render:{
        EN:"[:block:]\n{intro()}\n[:endblock:]\n[:tablehead:]Reaction ({diceroll})[:endtablehead:]\n{diceroll.createRangeTable(\"reaction\",resultTable)}"
    }
},
]);