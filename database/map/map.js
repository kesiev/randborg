(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"map-region-simple",
    tags:[ "map", "region" ],
    requires:[
        { id:"season", ofTags:[ [ "season" ] ] },
        { id:"name", call:"generate", ofTagBags:[ [ "map", "regionname" ] ] },
    ],
    methods:{
        placeNames:{
            EN:{
                oneOf:[
                    "this region",
                    "the {name} region",
                    "the landscape",
                    "the area",
                    "the terrain",
                    "the landscape",
                    "{name}",
                    "it"
                ]
            }
        },
        placeThereAre:{
            EN:{
                oneOf:[
                    "is scattered with",
                    "is dotted by",
                    "is marked by",
                    "features a mix of",
                    "is a patchwork of",
                    "contains numerous",
                    "is shaped by",
                    "is mostly"
                ]
            }
        },
        description:[
            {
                addSentence:{ EN:"[:block:]\n\n"}
            },{
                findFlags:{
                    biomes:"biome"
                },
                ifAny:"biomes",
                addSentence:{
                    EN:{
                        oneOf:[
                            "{$.capital(placeNames())} {placeThereAre()} [biomes getNames() 0].\n\n"
                        ]
                    }
                }
            },{
                findFlags:{
                    factions:"faction"
                },
                ifOne:"factions",
                addSentence:{
                    EN:{
                        oneOf:[
                            "It is controlled by [factions name 0].\n\n"
                        ]
                    }
                }
            },{
                findFlags:{
                    factions:"faction"
                },
                ifMany:"factions",
                addSentence:{
                    EN:{
                        oneOf:[
                            "It is contended by [factions name 0].\n\n"
                        ]
                    }
                }
            },{
                findFlags:{
                    pois:"poi"
                },
                ifAny:"pois",
                addSentence:{
                    EN:{
                        oneOf:[
                            "It includes several key places, such as [pois getName() 0].\n[:endblock:]\n",
                            "Major locations are [pois getName() 0].\n[:endblock:]\n",
                            "Some of the most notable places are [pois getName() 0].\n[:endblock:]\n",
                            "It is home to key places like [pois getName() 0].\n[:endblock:]\n",
                            "It features several significant locations, including [pois getName() 0].\n[:endblock:]\n",
                        ]
                    }
                },
                describe:{
                    titleCall:"getName()",
                    tag:"pois"
                }
            }
        ],
        getName:{
            EN:"{name}"
        }
    },
    render:{
        EN:"# {getName()}\n\n{$.describeRegion(description,$.map)}\n\n"
    }
},{
    id:"map-poi-simple",
    tags:[ "map", "poi" ],
    requires:[
        { id:"name", call:"generate", ofTagBags:[ [ "map", "poiname" ] ] },
    ],
    methods:{
        placeNames:{
            EN:{
                oneOf:[
                    "this place",
                    "this locality",
                    "this district",
                    "the location",
                    "{name}",
                    "it"
                ]
            }
        },
        placeThereAre:{
            EN:{
                oneOf:[
                    "is sitting on",
                    "is on",
                    "is surrounded by",
                    "lies among",
                    "is nestled among",
                    "is framed by",
                    "is cradled by",
                    "unfolds beneath surrounding"
                ]
            }
        },
        description:[
            {
                findFlags:{
                    biomes:"biome"
                },
                ifAny:"biomes",
                addSentence:{
                    EN:{
                        oneOf:[
                            "{$.capital(placeNames())} {placeThereAre()} [biomes getNames() 0].\n\n"
                        ]
                    }
                }
            },{
                addSentence:{
                    EN:{
                        oneOf:[
                            "The weather is {previous.season.getWeather()}.\n\n",
                            "It's quite {previous.season.getWeather()} here.\n\n",
                            "The climate here is {previous.season.getWeather()}.\n\n",
                            "It tends to be {previous.season.getWeather()} here.\n\n",
                            "It's usually {previous.season.getWeather()} here.\n\n",
                            "It's consistently {previous.season.getWeather()} here.\n\n"
                        ]
                    }
                }
            },{
                findFlags:{
                    faction:"faction"
                },
                ifAny:"faction",
                addSentence:{
                    EN:{
                        oneOf:[
                            "It is controlled by [faction name 0].\n\n"
                        ]
                    }
                }
            },
        ],
        getName:{
            EN:"{name}"
        }
    }
},{
    id:"map-lake-simple",
    tags:[ "map", "lake" ],
    requires:[
        { id:"name", call:"generate", ofTagBags:[ [ "map", "lakename" ] ] },
    ],
    methods:{
        getName:{
            EN:"{name}"
        }
    }
},{
    id:"map-island",
    tags:[ "map", "layout" ],
    methods:{
        models:[
            {
                width:20,
                height:20,
                steps:[
                    {
                        spread:[
                            { category:"sea", id:"sea", x:0, y:0 },
                            { category:"sea", id:"sea-1", x:19, y:19 },
                            { category:"sea", id:"sea-2", x:0, y:19 },
                            { category:"sea", id:"sea-3", x:18, y:0 },
                            { category:"sea", id:"sea-4", x:18, y:10 },
                            { category:"sea", id:"sea-5", x:0, y:10 },
                            { category:"sea", id:"sea-6", x:10, y:0 },
                            { category:"sea", id:"sea-7", x:10, y:19 },
                            { category:"sea", id:"sea-8", x:11, y:10 },
                            { speed:6, id:"land", x:10, y:10 },
                        ]
                    },{
                        in:"land",
                        inner:true,
                        spread:[
                            { category:"lake", id:"lake-area", in:"land", times:2 },
                            { category:"lake", id:"lake-1-area", in:"land", times:2 },
                        ]
                    },{
                        in:"land",
                        spread:[
                            { category:"region", id:"region" },
                            { category:"region", id:"region-1" },
                            { category:"region", id:"region-2" },
                            { category:"region", id:"region-3" },
                            { category:"region", id:"region-4" },
                        ]
                    },{
                        in:"land",
                        spread:[
                            { category:"biome", id:"biome" },
                            { category:"biome", id:"biome-1" },
                            { category:"biome", id:"biome-2" }
                        ]
                    },{
                        in:"land",
                        spread:[
                            { category:"faction", id:"faction" },
                            { category:"faction", id:"faction-1" },
                            { category:"faction", id:"faction-2" }
                        ]
                    },{
                        addPoi:[
                            { category:"poi", id:"poi", in:"region" },
                            { category:"poi", id:"poi-1", in:"region" },
                            { category:"poi", id:"poi-2", in:"region-1" },
                            { category:"poi", id:"poi-3", in:"region-1" },
                            { category:"poi", id:"poi-4", in:"region-2" },
                            { category:"poi", id:"poi-5", in:"region-2" },
                            { category:"poi", id:"poi-6", in:"region-3" },
                            { category:"poi", id:"poi-7", in:"region-3" },
                            { category:"poi", id:"poi-8", in:"region-4" },
                            { category:"poi", id:"poi-9", in:"region-4" },
                            { id:"lake", in:"lake-area" },
                            { id:"lake-1", in:"lake-1-area" },
                        ]
                    }
                ]
            }
        ],
        generate:{
            EN:"{$.makeMapFrom(models())}"
        }
    }
},
]);

let
    NAMES = [
{
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Lake [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Azure[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Lumina[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]slough\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Dross-[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Stagn[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Bitter[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Sump-[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place] Drain\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"Shin-[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]-Ike\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]wash\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "lakename" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place] Hole\")}"
	}
},{
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]fell\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]fell\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]reach\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]reach\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]fen\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]fen\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]vale\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]vale\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Blight[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Blight[Evil Adjective]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Putri[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Putri[Evil Adjective]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]mire\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil Adjective]mire\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]waste\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil Adjective]waste\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]shroud\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good Verb]shroud\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]veil\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good Verb]veil\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Hallow[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Hallow[^Good Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]trace\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good Verb]trace\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Sector [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Adjective] Slum\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]synth\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Nu-[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Synth[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Synth[Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]synth\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]work\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Rad[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Kami[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Shimo[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Oku[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Ten[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Kuro[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Mizu[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Yama[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Uchi[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Kaze[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Ao[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"High [^Good]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"High [^Evil]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"New [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Big [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"The [^Good]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"The [^Evil]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good]sands\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil]sands\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Iron [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Bitter [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "regionname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Red[Place]\")}"
	}
},{
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]town\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]town\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]spire\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]spire\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]ward\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]ward\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]rune\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]rune\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Ley[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Ley[^Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil Adjective] [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place] Church\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil Adjective] Church\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Mist[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Mist[Evil Adjective]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]hallow\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil Adjective]hallow\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place] Grave\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil Adjective] Grave\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Black[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Black[Evil Adjective]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]burg\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good Verb]burg\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]wick\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good Verb]wick\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Slag[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Slag[Good Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]end\")}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Good Verb]end\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Neo-[^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Lower [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Poly[Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil]grid\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Evil]spire\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Nega[^Good]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Was[^Good]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]plex\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Fuji[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Shiro[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]kyo\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]machi\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]juku\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Hana[Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]goya\")}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]zaka\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]ville\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]ville\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Fort [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Fort [^Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Last [^Place]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"Last [^Verb]\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Place]gulch\")}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "poiname" ],
	generate: {
		EN: "{$.makeNameFrom(\"[^Verb]gulch\")}"
	}
}    
];

NAMES.forEach((item,id)=>{
    DATABASE.push({
        id:"map-poiname-"+id,
        tags:[ "map", "name", item.ifAnyFlag ? "specific" : "general" ].concat(item.tags),
        ifAnyFlag:item.ifAnyFlag,
        methods:{
            generate:item.generate
        }
    })
})

})();