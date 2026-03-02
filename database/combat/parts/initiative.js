DATABASE = (window.DATABASE || []).concat([
{
    id:"initiative-simple",
    tags:[ "initiative" ],
    requires:[
        { id:"initiativeStat", reuse:true, ofTags:[ [ "stat-initiative" ], [ "stat-initiative-simple" ], [ "stat-initiative-simple-alt" ] ] },
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
        { id:"initiativeDiceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
    ],
    methods:{
        resultTable:[
            [
                { result:{ EN: "Enemies go first" } },
                { result:{ EN: "PCs go first" } }
            ]
        ]
    },
    render:{
        EN:"[:tablehead:]Initiative ({diceroll})[:endtablehead:]\n{diceroll.createRangeTable(\"initiative\",resultTable)}\n[:block:]\n\n_{initiativeStat} + {initiativeDiceroll} for individual initiative or to determine who goes first within the group._\n\nPlayers roll for both their attacks and defences. Creatures and enemies don't roll dice in combat.\n\nThe {$.playerTest.symbol()} for attacks and defence are modified as with any test.\n\n[:endblock:]\n"
    }
},
]);
