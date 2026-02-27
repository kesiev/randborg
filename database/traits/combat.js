DATABASE = (window.DATABASE || []).concat([
{
    id:"statset-combat",
    tags:[ "trait", "combat" ],
    requires:[
        { id:"strength", reuse:true, ofTags:[ [ "stat-strength" ] ] },
        { id:"agility", reuse:true, ofTags:[ [ "stat-agility" ] ] },
    ]
},
]);