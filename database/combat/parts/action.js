DATABASE = (window.DATABASE || []).concat([
{
    id:"attack-melee-simple",
    tags:[ "action", "attack", "melee" ],
    requires:[
        { id:"meleeStat", reuse:true, ofTags:[ [ "stat-melee" ], [ "stat-melee-simple" ], [ "stat-melee-simple-alt" ] ] },
    ],
    render:{
        EN:"Test {meleeStat} {$.playerTest.difficultyNormal()}."
    }
},{
    id:"attack-ranged-simple",
    tags:[ "action", "attack", "ranged" ],
    requires:[
        { id:"rangedStat", reuse:true, ofTags:[ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] },
    ],
    render:{
        EN:"Test {rangedStat} {$.playerTest.difficultyNormal()}."
    }
},{
    id:"attack-defence-simple",
    tags:[ "action", "defence" ],
    requires:[
        { id:"defenceStat", reuse:true, ofTags:[ [ "stat-defence" ], [ "stat-defence-simple" ], [ "stat-defence-simple-alt" ] ] },
    ],
    render:{
        EN:"Test {defenceStat} {$.playerTest.difficultyNormal()}."
    }
},
]);
