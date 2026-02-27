DATABASE = (window.DATABASE || []).concat([
{
    id:"statset-sociality-1",
    tags:[ "trait", "sociality" ],
    requires:[
        { id:"presence", reuse:true, ofTags:[ [ "stat-presence" ] ] }
    ]
},{
    id:"statset-sociality-2",
    tags:[ "trait", "sociality" ],
    requires:[
        { id:"presence", reuse:true, ofTags:[ [ "stat-presence" ] ] },
        { id:"charisma", reuse:true, ofTags:[ [ "stat-charisma" ] ] },
    ]
},{
    id:"statset-sociality-3",
    tags:[ "trait", "sociality" ],
    requires:[
        { id:"presence", reuse:true, ofTags:[ [ "stat-presence" ] ] },
        { id:"intelligence", reuse:true, ofTags:[ [ "stat-intelligence" ] ] },
    ]
},{
    id:"statset-sociality-4",
    tags:[ "trait", "sociality" ],
    requires:[
        { id:"presence", reuse:true, ofTags:[ [ "stat-presence" ] ] },
        { id:"charisma", reuse:true, ofTags:[ [ "stat-charisma" ] ] },
        { id:"intelligence", reuse:true, ofTags:[ [ "stat-intelligence" ] ] },
    ]
},
]);