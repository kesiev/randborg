DATABASE = (window.DATABASE || []).concat([
{
    id:"basecapacity-simple",
    tags:[ "basecapacity" ],
    render:{
        EN:8
    }
},{
    id:"capacity-simple",
    tags:[ "player", "capacity" ],
    requires:[
        { id:"$.baseCapacity", reuse:true, ofTags:[ [ "basecapacity" ] ] },
        { id:"$.capacity", reuse:true, ofTags:[ [ "stat-capacity" ], [ "stat-capacity-simple" ], [ "stat-capacity-simple-alt" ] ] },
        { times:4, id:"lightStuff", ofTags:[ [ "oracle", "lightstuff" ] ] },
        { times:4, id:"heavyStuff", ofTags:[ [ "oracle", "heavystuff" ] ] }
    ],
    render:{
        EN:"[:block:]\n\n**You can carry** {$.capacity}+{$.baseCapacity} normal-sized items (for example {$.makeListOf(this,\"lightstuff\")} but not {$.makeListOf(this,\"heavystuff\")}) without a problem. After that when testing {$.makeListOf(0,\"burden-affected\",0)} {$.playerTest.symbol()} increases by {$.playerTest.difficultyIncrease1()} (from 12 to {12+$.playerTest.difficultyIncrease1()} etc.). It is impossible to carry more than twice {$.capacity}+{$.baseCapacity}.[:endblock:]"
    }
},
]);
