DATABASE = (window.DATABASE || []).concat([
{
    id:"playertest-simple",
    tags:[ "player", "test" ],
    requires:[
        { id:"$.testDiceroll", ofTags:[ [ "single", "diceroll", "d20" ] ] }
    ],
    methods:{
        symbol:{
            EN:"DR"
        },
        difficultyIncrease1:{ EN:2 },
        difficultyIncrease2:{ EN:4 },
        fullDifficultyIncrease1:{ EN:"{symbol()}+{difficultyIncrease1()}" },
        fullDifficultyIncrease2:{ EN:"{symbol()}+{difficultyIncrease2()}" },
        difficultyTrivial:{ EN:"{symbol()}6" },
        difficultyVeryEasy:{ EN:"{symbol()}8" },
        difficultyEasy:{ EN:"{symbol()}10" },
        difficultyNormal:{ EN:"{symbol()}12" },
        difficultyDifficult:{ EN:"{symbol()}14" },
        difficultyReallyHard:{ EN:"{symbol()}16" },
        difficultyImpossible:{ EN:"{symbol()}18" },
        resultTable:[
            [
                { weight:6, result:{ EN:"So simple people laugh at you for failing" } },
                { weight:2, result:{ EN:"Routine but some chance of failure" } },
                { weight:2, result:{ EN:"Pretty simple but not simple enough to not roll" } },
                { weight:2, result:{ EN:"Normal" } },
                { weight:2, result:{ EN:"Difficult" } },
                { weight:2, result:{ EN:"Really hard" } },
                { weight:2, result:{ EN:"Should not be possible" } },
                { weight:2 }
            ]
        ]
    },
    render:{
        EN:"[:block:]\n\n**Tests are made against a difficulty rating.** To succeed roll {$.testDiceroll} +/- your ability with a result equal to or greater than the {symbol()}. Creatures don't use abilities, they just roll a {$.testDiceroll} against {symbol()}.\n[:endblock:]\n[:tablehead:]Difficulty ratings ({symbol()})[:endtablehead:]\n{$.testDiceroll.createTestTable(\"test\",resultTable)}"
    }
},
]);
