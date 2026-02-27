(function(){

DATABASE = (window.DATABASE || []).concat([
    {
        id: "faction-data-fantasy",
        tags: [ "faction", "data" ],
        requires:[
            { id:"name", call:"generate", ofTagBags:[ [ "faction", "name" ] ] },
        ]
    }
])

let
    NAMES = [
        {
            generate: {
                EN: "{$.makeNameFrom(\"The [^Adjective] [^Noun]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Adverb] [^Verb]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Noun] of [^Place]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Adjective] [^Good Noun] of [^Place]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Noun] of the [^Noun]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Hero] [^Noun]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Adjective] [^Item]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Verb] [^Noun]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Noun] [^Verb]\")}"
            }
        },{
            generate: {
                EN: "{$.makeNameFrom(\"The [^Noun] [^Noun]\")}"
            }
        }
    ];


NAMES.forEach((item,id)=>{
    DATABASE.push({
        id:"faction-name-"+id,
        tags:[ "faction", "name", item.ifAnyFlag ? "specific" : "general" ].concat(item.tags),
        ifAnyFlag:item.ifAnyFlag,
        methods:{
            generate:item.generate
        }
    })
})



})();