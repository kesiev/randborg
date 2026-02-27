DATABASE = (window.DATABASE || []).concat([
{
    id:"statset-survival",
    tags:[ "trait", "survival" ],
    requires:[
        { id:"toughness", reuse:true, ofTags:[ [ "stat-toughness" ] ] }
    ]
},
]);