DATABASE = (window.DATABASE || []).concat([
{
    id:"protection-simple",
    tags:[ "protection" ],
    requires:[
        { id:"agilityStat", reuse:true, ofTags:[ [ "stat-agility" ], [ "stat-agility-simple" ], [ "stat-agility-simple-alt" ] ] },
    ],
    methods:{
        andAlsoDowngrade:{
            EN:", armor/protection is also reduced one tier"
        },
        andDowngrade:{
            EN:", armor/protection is reduced one tier"
        },
        notes:{
            EN:"\n\n_Armor reduced below 1st tier is ruined and cannot be repaired. Armor cannot be repaired to a tier higher than its original._"
        },
        tier0Name:{
            EN:"tier 0",
        },
        tier1Name:{
            EN:"tier 1",
        },
        tier2Name:{
            EN:"tier 2",
        },
        tier3Name:{
            EN:"tier 3",
        },
        tier0Effect:{
            EN:"No special effect"
        },
        tier1Effect:{
            EN:"No special effect"
        },
        tier2Effect:{
            EN:"{$.playerTest.fullDifficultyIncrease1()} on {agilityStat} tests including defence"
        },
        tier3Effect:{
            EN:"{$.playerTest.fullDifficultyIncrease2()} on {agilityStat} tests, defence is {$.playerTest.fullDifficultyIncrease1()}"
        },
        tier0Modifier:{
            EN:"No defense"
        },
        tier1Modifier:{
            EN:"-{$.playerHitpoints.getVerySmallDebuff()} damage"
        },
        tier2Modifier:{
            EN:"-{$.playerHitpoints.getSmallDebuff()} damage"
        },
        tier3Modifier:{
            EN:"-{$.playerHitpoints.getDebuff()} damage"
        }
    }
}
]);
