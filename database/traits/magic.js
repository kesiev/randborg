DATABASE = (window.DATABASE || []).concat([
{
    id:"castmagic-daily",
    tags:[ "magic", "cast" ],
    requires:[
        { id:"intelligenceStat", reuse:true, ofTags:[ [ "stat-intelligence" ], [ "stat-magintelligenceic-simple" ], [ "stat-intelligence-simple-alt" ] ] },
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d4" ] ] },
    ],
    render:{
        EN:"Roll {intelligenceStat} + {diceroll} every morning to determine how many times you can {$.magicName.perform()} that day; {$.magicName.choose()}. {$.magicName.when()}, test {intelligenceStat} {$.playerTest.difficultyNormal()}. If you succeed, {$.magicName.activates()} and you subtract one use from your daily total. If you fail, {$.magicName.fail()}, you lose {$.playerHitpoints.getVerySmallInjury()} and you become dizzy for the next hour. During this time, {$.magicName.lastingFailure()}."
    }
},
{
    id:"critfumblemagic-simple",
    tags:[ "magic", "critfumble" ],
    render:{
        EN:"The GM decides the effect on a Crit or Fumble."
    }
},
{
    id:"spell-light",
    tags:[ "lightspell" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "lightmagic", "name" ] ] },
        { id:"effect", reuse:false, ofTagBags:[ [ "lightmagic", "effect" ] ] },
    ],
    render:{
        EN:"**{name}**: {effect}"
    }
},
{
    id:"spell-dark-spell",
    tags:[ "darkspell", "normal" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "darkmagic", "name" ] ] },
        { id:"effect", reuse:false, ofTagBags:[ [ "darkmagic", "effect", "normal" ] ] },
    ],
    render:{
        EN:"**{name}**: {effect}"
    }
},
{
    id:"spell-dark-evoke",
    tags:[ "darkspell", "evoke" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "darkmagic", "name" ] ] },
        { id:"effect", reuse:false, ofTagBags:[ [ "darkmagic", "effect", "evoke" ] ] },
    ],
    render:{
        EN:"**{name}**: {effect}"
    }
},
{
    id:"magic-simple",
    addFlags:[ "magic" ],
    tags:[ "trait", "magic", "specialaction", "leveluplootentry", "playergenerationpage" ],
    requires:[
        { id:"$.magicName", reuse:true, ofTags:[ [ "magic", "name" ] ] },
        { id:"lightMagicType", reuse:true, ofTags:[ [ "lightmagic", "type" ] ] },
        { id:"darkMagicType", reuse:true, ofTags:[ [ "darkmagic", "type" ] ] },
        { id:"cast", reuse:true, ofTags:[ [ "magic", "cast" ] ] },
        { id:"critFumble", reuse:true, ofTags:[ [ "magic", "critfumble" ] ] },
        { id:"spellLightDiceroll", ofTags:[ [ "single", "diceroll", "d10" ]]},
        { id:"spellDarkDiceroll", ofTags:[ [ "single", "diceroll", "d10" ]]},
        { times:10, id:"spellLight", ofTagBags:[ [ "lightspell" ] ] },
        { id:"spellDarkEvoke", ofTagBags:[ [ "darkspell", "evoke" ] ] },
        { times:9, id:"spellDarkNormal", ofTagBags:[ [ "darkspell", "normal" ] ] },
    ],
    methods:{
        perform:{
            EN:"{$.magicName.use()}"
        },
        lightMean:{
            EN:"{$.capital(lightMagicType.section())}"
        },
        darkMean:{
            EN:"{$.capital(darkMagicType.section())}"
        },
        mean:{
            EN:"{$.capital($.magicName.mean())}"
        },
        getLevelUpLootEntries:[
            { result:{ EN:"{$.capital(lightMagicType.mean())}" } },
            { result:{ EN:"{$.capital(darkMagicType.mean())}" } },
        ]
    },
    render:{
        EN:"# {$.magicName.section()}\n[:block:]\n\n{$.magicName.lore()}\n\n{cast}\n\n{critFumble}\n\n{$.capital($.magicName.means())} will never work when {$.makeCallListOf(0,\"magicexception\",\"getException\")}.\n[:endblock:]\n[::]\n## {lightMagicType.section()}\n\n[:tablehead:]{lightMagicType.section()} ({spellLightDiceroll})[:endtablehead:]\n{spellLightDiceroll.createRangeTableForTag(\"lightspell\",0,\"lightspell\")}\n[::]\n## {darkMagicType.section()}\n\n[:tablehead:]{darkMagicType.section()} ({spellDarkDiceroll})[:endtablehead:]\n{spellDarkDiceroll.createRangeTableForTag(\"darkspell\",0,\"darkspell\")}"
    }
}
]);
