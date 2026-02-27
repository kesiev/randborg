DATABASE = (window.DATABASE || []).concat([
{
    id:"fumble-attack-simple",
    tags:[ "fumble", "attack" ],
    render:{
        EN:"The weapon breaks or is lost."
    }
},{
    id:"fumble-defense-simple",
    tags:[ "fumble", "defense" ],
    render:{
        EN:"PC takes double damage{$.protection.andDowngrade()}."
    }
},
]);
