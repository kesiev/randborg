(function(){

let
    NAMES = [
        {
            tags:[ "lightmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Hero]\")}"
            }
        },{
            tags:[ "lightmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Good Adjective] [^Noun]\")}"
            }
        },{
            tags:[ "lightmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Adjective] [^Good Noun]\")}"
            }
        },{
            tags:[ "lightmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Adverb] [^Verb] of [^Hero]\")}"
            }
        },{
            tags:[ "lightmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Good Noun] of [^Place|^Hero]\")}"
            }
        },{
            tags:[ "darkmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Badguy]\")}"
            }
        },{
            tags:[ "darkmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Evil Adjective] [^Noun]\")}"
            }
        },{
            tags:[ "darkmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Adjective] [^Evil Noun]\")}"
            }
        },{
            tags:[ "darkmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Adverb] [^Verb] of [^Badguy]\")}"
            }
        },{
            tags:[ "darkmagic" ],
            result:{
                EN:"{$.makeNameFrom(\"[^Evil Noun] of [^Place|^Badguy]\")}"
            }
        }
    ];

NAMES.forEach((name,id)=>{
    DATABASE.push({
        id:"spellname-"+id,
        ifAnyFlag:name.ifAnyFlag,
        tags:[ "spell", "name" ].concat(name.tags),
        methods:{
            generate:name.result
        },
    })
})


})();