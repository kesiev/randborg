DATABASE = (DATABASE || []).concat([
{
    id:"rpg",
    tags:[ "boot" ],
    requires:[
        { id:"setting", ofTags:[ [ "rpgsetting", "set" ] ] },
        { id:"system", ofTags:[ [ "rpgsystem" ] ] },
    ],
    render:{
        EN:"{system}"
    }
},{
    id:"rpg-system-borg",
    tags:[ "rpgsystem" ],
    requires:[
        { id:"settingset", ofTags:[ [ "rpgsetting", "set" ] ] },
        
        // --- Key traits for roleplaying in this world
        { id:"combat", ofTags:[ [ "trait", "combat" ] ] },
        { id:"sociality", ofTags:[ [ "trait", "sociality" ] ] },
        { id:"survival", ofTags:[ [ "trait", "survival" ] ] },

        // --- Economy
        { id:"money", ofTags:[ [ "trait", "money" ] ] },

        // --- Special
        { id:"$.magic", ofTags:[ [ "trait", "magic" ]]},

        // --- Survival
        { id:"capacityTrait", ofTags:[ [ "player", "capacity" ] ]},
        { id:"foodTrait", ofTags:[ [ "trait", "food" ] ] },
        { id:"drinkTrait", ofTags:[ [ "trait", "drink" ] ] },
        { id:"starvingTrait", ofTags:[ [ "trait", "starving" ] ] },
        { id:"diseaseTrait", ofTags:[ [ "trait", "disease" ] ] },

        // --- Geography and culture
        { times:5, id:"$.region", ofTagBags:[ [ "map", "region" ] ] },
        { times:10, id:"$.poi", ofTagBags:[ [ "map", "poi" ] ] },
        { times:2, id:"$.lake", ofTagBags:[ [ "map", "lake" ] ] },
        { times:3, id:"$.biome", ofTagBags:[ [ "map", "biome" ] ] },
        { times:3, id:"$.faction", ofTagBags:[ [ "faction", "data" ] ] },

        // --- NPC reaction
        { id:"reaction", ofTags:[ [ "reaction" ] ] },

        // --- Combat rules
        { id:"combatRules", ofTags:[ [ "combatrules", "medieval" ] ] },

        // --- Arrange world map
        { id:"$.map", call:"generate", ofTags:[ [ "map", "layout" ] ] },

        { id:"beastiary", ofTagBags:[ [ "beastiary" ] ]},

        // ---
        // ---
        // ---
        
        // --- Player creation
        { id:"playerCreation", ofTags:[ [ "player", "creation" ] ]},
        { id:"$.playerAbilities", ofTags:[ [ "player", "abilities" ] ]},
        { id:"$.playerHitpoints", ofTags:[ [ "player", "hitpoints" ] ]},

        // --- Tests
        { id:"$.playerTest", ofTags:[ [ "player", "test" ] ] },

        // --- Growth
        { id:"playerLevelUp", ofTags:[ [ "levelup" ] ]},
        
        // --- EXTRA RULES ---

        // --- Setting related
        { times:1, id:"extraSetting", ofTags:[ [ "extrasetting" ] ] },

        // --- Mechanic related
        { times:1, id:"extraRule", ofTags:[ [ "extrarule" ] ] },
    ],
    render:{
        EN:
            "**Text and rules**\n\nRandomly selected from a huge monster oracle by Seed #{$.seed()}\n\n**Graphics and illustrations**\n\nRandomly curated by a minor monster oracle\n\n**Coded by**\n\n{$.authorName()}\n\n"+
            "[::inner::]\n\n"+

            "### The Massive Randomness met Nechrubel in the interstice between the Cycles. It whispered to him of the GM and the Players who drag the suffering souls of his world. It whispered to him of a way to bring torment and apocalypse to them, too. It whispered to him how to create unlimited worlds of pure chaos..."+
            "\n\n"+

            "**CODE** "+
            "Drawdown library by Adam Leggett (MIT) - modified by KesieV / "+
            "jsPDF by Parallax (MIT) / "+
            "html2canvas by Niklas von Hertzen (MIT) / "+
            "Everything else by KesieV ({$.license()})"+
            "\n\n"+

            "**IMAGES** "+
            "Map hexagon by KesieV ({$.license()}) / "+
            "Cover art by KesieV ({$.license()}) / "+
            "Multiple textures from www.transparenttextures.com (CC-BY-3.0) - see full credits on GitHub / "+
            "Everything else comes from svgsilh (CC0)"+
            "\n\n"+

            "**FONTS** "+
            "1942 Report by Johan Holmdahl (Freeware) / "+
            "Ferrum by Sora Sagano (CC0) / "+
            "Florante at Laura by Nyek! Pinoy Komik Fonts (Nyek! License) / "+
            "League Gothic by The League of Moveable Type (SIL v1.10) / "+
            "Seshat by Sora Sagano (CC0) / "+
            "Smokum by Astigmatic (Apache license) / "+
            "The Neue Black by The League of Moveable Type (SIL v1.10)"+
            "\n\n"+

            "**PLAYTESTING** "+
            "Please, play some real M&#xD6;RK BORG. But if you and your friends are scvm enough, go ahead!"+
            "\n\n"+

            "**THANKS TO** "+
            "Pelle Nilsson and Johan Nohr for starting the fire / "+
            "Bianca Brenna / "+
            "Preuk / "+
            "All the souls my weird software has made me meet"+
            "\n\n"+

            "**PRINT** "+
            "This world have already ceased to exist, and a new Seed has been planted. You cannot tear them from Massive Randomness and inscribe them on paper, but you can read them here and now."+
            "\n\n"+

            "{$.projectUrl()}\n\n"+

            "{$.softwareName()} is an independent production by {$.authorName()} and is not affiliated with Ockult &#xD6;rtm&#xE4;stare Games or Stockholm Kartell."+

            "[::map::]\n"+
            "# Map\n\n"+
            "{$.renderMap($.map)}\n"+
            "[::]\n"+
            "{$.all(0,\"region\",\"[::]\n\")}[::]\n"+

            "# Create a Player Character (PC)\n\n"+
            "{playerCreation}\n"+
            "[::]\n"+
            "{$.all(0,\"creationentry\",\"[::]\n\")}\n[::]\n"+

			"# Tests\n\n" +
			"{$.playerTest}\n" +
            "\n" +

            "# Carrying Capacity\n\n"+
            "{capacityTrait}\n"+
            "[::]\n"+
            "{combatRules}\n"+
            "[::]\n"+
            "# Reaction\n\n" +
            "{reaction}\n"+
            "\n"+
            "{combatRules.describeReaction()}\n"+
            "\n"+
            "[::]\n"+

			"# Getting better (or worse)\n\n" +
			"{playerLevelUp}\n"+
            "[::]\n" +

			"{$.all(0,\"playergenerationpage\",\"[::]\n\")}\n"+
            "[::]\n" +

			"{$.all(0,\"extrasetting\")}\n" +
            "[::]\n"+

			"# Optional rules\n\n" +
			"{$.all(0,\"extrarule\",\"[::]\n\")}\n[::]\n" +
            
            "{$.all(0,\"addendum\",\"[::]\n\")}"
    }
}
]
);