DATABASE = (window.DATABASE || []).concat([
{
    id:"critical-attack-simple",
    tags:[ "critical", "attack" ],
    render:{
        EN:"Double damage{$.protection.andAlsoDowngrade()}."
    }
},{
    id:"critical-defense-simple",
    tags:[ "critical", "defense" ],
    render:{
        EN:"PC gains a free attack."
    }
},
]);
