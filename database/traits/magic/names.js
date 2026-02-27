DATABASE = (window.DATABASE || []).concat([
{
    ifAnyFlag:[ [ "setting-grim" ] ],
    id:"magic-name-farewell",
    tags:[ "magic", "name" ],
    methods:{
        mean:{
            EN:"epitaph"
        },
        means:{
            EN:"epitaphs"
        },
        inMeans:{
            EN:"in epitaphs"
        },
        use:{
            EN:"use a Farewell"
        },
        section:{
            EN:"Farewells"
        },
        perform:{
            EN:"use Farewells"
        },
        choose:{
            EN:"choose from your available {means()}"
        },
        when:{
            EN:"When reciting an {mean()}"
        },
        activates:{
            EN:"the Farewell is activated"
        },
        fail:{
            EN:"the Farewell doesn't work"
        },
        lastingFailure:{
            EN:"Farewells will always fail in the worst possible way"
        },
        lore:{
            EN:"Some farewells endure, carved {inMeans()} for the living to read long after the speaker is gone."
        }
    }
},{
    ifAnyFlag:[ [ "setting-investigation" ] ],
    id:"magic-name-power",
    tags:[ "magic", "name" ],
    methods:{
        mean:{
            EN:"tarot"
        },
        means:{
            EN:"tarots"
        },
        inMeans:{
            EN:"in tarots"
        },
        use:{
            EN:"use a Power"
        },
        section:{
            EN:"Powers"
        },
        perform:{
            EN:"use Powers"
        },
        choose:{
            EN:"choose from your available {means()}"
        },
        when:{
            EN:"When reading a {mean()}"
        },
        activates:{
            EN:"the Power is activated"
        },
        fail:{
            EN:"the Power doesn't work"
        },
        lastingFailure:{
            EN:"Powers will always fail in the worst possible way"
        },
        lore:{
            EN:"Some claim that certain powers exist, bound not to parchment but painted {inMeans()}."
        }
    }
},{
    ifAnyFlag:[ [ "setting-fantasy" ] ],
    id:"magic-name-spells",
    tags:[ "magic", "name" ],
    methods:{
        mean:{
            EN:"scroll"
        },
        means:{
            EN:"scrolls"
        },
        inMeans:{
            EN:"in scrolls"
        },
        use:{
            EN:"use a Spell"
        },
        section:{
            EN:"Spells"
        },
        perform:{
            EN:"use Spell"
        },
        choose:{
            EN:"choose from your available {means()}"
        },
        when:{
            EN:"When reading a {mean()}"
        },
        activates:{
            EN:"the Spell is activated"
        },
        fail:{
            EN:"the Spell doesn't work"
        },
        lastingFailure:{
            EN:"Spells will always fail in the worst possible way"
        },
        lore:{
            EN:"A few so-called spells are known and they are usually found written {inMeans()}."
        }
    }
},{
    ifAnyFlag:[ [ "setting-cyberpunk" ] ],
    id:"magic-name-hacks",
    tags:[ "magic", "name" ],
    methods:{
        mean:{
            EN:"disk"
        },
        means:{
            EN:"disks"
        },
        inMeans:{
            EN:"in disks"
        },
        use:{
            EN:"use a Hack"
        },
        section:{
            EN:"Hacks"
        },
        perform:{
            EN:"use Hack"
        },
        choose:{
            EN:"choose from your available {means()}"
        },
        when:{
            EN:"When reading a {mean()}"
        },
        activates:{
            EN:"the Hack is activated"
        },
        fail:{
            EN:"the Hack doesn't work"
        },
        lastingFailure:{
            EN:"Hacks will always fail in the worst possible way"
        },
        lore:{
            EN:"The thin veil between cyberspace and reality can be hacked, thanks to the code stored {inMeans()}."
        }
    }
},{
    ifAnyFlag:[ [ "setting-japan" ] ],
    id:"magic-name-blessing",
    tags:[ "magic", "name" ],
    methods:{
        mean:{
            EN:"scroll"
        },
        means:{
            EN:"scrolls"
        },
        inMeans:{
            EN:"in scrolls"
        },
        use:{
            EN:"use a Blessing"
        },
        section:{
            EN:"Blessings"
        },
        perform:{
            EN:"use Blessing"
        },
        choose:{
            EN:"choose from your available {means()}"
        },
        when:{
            EN:"When reading a {mean()}"
        },
        activates:{
            EN:"the Blessing is activated"
        },
        fail:{
            EN:"the Blessing doesn't work"
        },
        lastingFailure:{
            EN:"Blessings will always fail in the worst possible way"
        },
        lore:{
            EN:"Only a few are able to confine divine blessings {inMeans()}."
        }
    }
},{
    ifAnyFlag:[ [ "setting-wildwest" ] ],
    id:"magic-name-tricks",
    tags:[ "magic", "name" ],
    methods:{
        mean:{
            EN:"stone"
        },
        means:{
            EN:"stones"
        },
        inMeans:{
            EN:"in stones"
        },
        use:{
            EN:"use a Trick"
        },
        section:{
            EN:"Tricks"
        },
        perform:{
            EN:"use Tricks"
        },
        choose:{
            EN:"choose from your available {means()}"
        },
        when:{
            EN:"When reading a {mean()}"
        },
        activates:{
            EN:"the Trick is activated"
        },
        fail:{
            EN:"the Trick doesn't work"
        },
        lastingFailure:{
            EN:"Tricks will always fail in the worst possible way"
        },
        lore:{
            EN:"Someone said there's no escape from death. But there are no laws here. It's written {inMeans()}."
        }
    }
}
]);
