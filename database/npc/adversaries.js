DATABASE = (window.DATABASE || []).concat([
{
    id:"beastiary-simple",
    tags:[ "beastiary", "addendum" ],
    requires:[
        { times:3, id:"averageAdversary", ofTagBags:[ [ "adversary", "data", "average" ] ]},
        { times:3, id:"trainedAdversary", ofTagBags:[ [ "adversary", "data", "trained" ] ]},
        { times:3, id:"strongAdversary", ofTagBags:[ [ "adversary", "data", "strong" ] ]},
    ],
    render:{
        EN:"# Beastiary\n\n{$.all(0,\"beastiaryentryaverage\")}\n[::]\n{$.all(0,\"beastiaryentrytrained\")}\n[::]\n{$.all(0,\"beastiaryentrystrong\")}"
    }
},
// --- Average adversaries
{
    id:"adversaryname-average-simple-1",
    tags:[ "adversary", "name", "average", "beastlike" ],
    requires:[
        { id:"adjective", reuse:false, ofTags:[ [ "adversary", "adjective", "average" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "average", "beastlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective} {type}"
        }
    }
},{
    id:"adversaryname-average-simple-2",
    tags:[ "adversary", "name", "average", "humanlike" ],
    requires:[
        { id:"adjective", reuse:false, ofTags:[ [ "adversary", "adjective", "average" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "average", "humanlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective} {type}"
        }
    }
},{
    id:"adversary-average-simple-1",
    tags:[ "adversary", "data", "average", "beastiaryentryaverage" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "average", "humanlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "humanlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "humanlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "humanlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getSmallAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},{
    id:"adversary-average-simple-2",
    tags:[ "adversary", "data", "average", "beastiaryentryaverage" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "average", "beastlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "beastlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "beastlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "beastlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getSmallAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},{
    id:"adversary-average-simple-3",
    tags:[ "adversary", "data", "average", "beastiaryentryaverage" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "average", "humanlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "humanlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "humanlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "humanlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getVerySmallAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},{
    id:"adversary-average-simple-4",
    tags:[ "adversary", "data", "average", "beastiaryentryaverage" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "average", "beastlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "beastlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "beastlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "beastlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getVerySmallAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},
// --- Trained adversaries
{
    id:"adversaryname-trained-simple-1",
    tags:[ "adversary", "name", "trained", "beastlike" ],
    requires:[
        { id:"adjective", reuse:false, ofTags:[ [ "adversary", "adjective", "trained" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "trained", "beastlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective} {type}"
        }
    }
},{
    id:"adversaryname-trained-simple-2",
    tags:[ "adversary", "name", "trained", "beastlike" ],
    requires:[
        { id:"adjective1", reuse:false, ofTags:[ [ "adversary", "adjective", "average" ] ] },
        { id:"adjective2", reuse:false, ofTags:[ [ "adversary", "adjective", "average" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "trained", "beastlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective1} {adjective2} {type}"
        }
    }
},{
    id:"adversaryname-trained-simple-3",
    tags:[ "adversary", "name", "trained", "humanlike" ],
    requires:[
        { id:"adjective", reuse:false, ofTags:[ [ "adversary", "adjective", "trained" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "trained", "humanlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective} {type}"
        }
    }
},{
    id:"adversaryname-trained-simple-4",
    tags:[ "adversary", "name", "trained", "humanlike" ],
    requires:[
        { id:"adjective1", reuse:false, ofTags:[ [ "adversary", "adjective", "average" ] ] },
        { id:"adjective2", reuse:false, ofTags:[ [ "adversary", "adjective", "average" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "trained", "humanlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective1} {adjective2} {type}"
        }
    }
},{
    id:"adversary-trained-simple-1",
    tags:[ "adversary", "data", "trained", "beastiaryentrytrained" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "trained", "humanlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "humanlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "humanlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "humanlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},{
    id:"adversary-trained-simple-2",
    tags:[ "adversary", "data", "trained", "beastiaryentrytrained" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "trained", "beastlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "beastlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "beastlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "beastlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},
// --- Strong adversaries
{
    id:"adversaryname-strong-simple-1",
    tags:[ "adversary", "name", "strong", "beastlike" ],
    requires:[
        { id:"adjective", reuse:false, ofTags:[ [ "adversary", "adjective", "strong" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "strong", "beastlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective} {type}"
        }
    }
},{
    id:"adversaryname-strong-simple-2",
    tags:[ "adversary", "name", "strong", "beastlike" ],
    requires:[
        { id:"adjective1", reuse:false, ofTags:[ [ "adversary", "adjective", "trained" ] ] },
        { id:"adjective2", reuse:false, ofTags:[ [ "adversary", "adjective", "trained" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "strong", "beastlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective1} {adjective2} {type}"
        }
    }
},{
    id:"adversaryname-strong-simple-3",
    tags:[ "adversary", "name", "strong", "humanlike" ],
    requires:[
        { id:"adjective", reuse:false, ofTags:[ [ "adversary", "adjective", "strong" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "strong", "humanlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective} {type}"
        }
    }
},{
    id:"adversaryname-strong-simple-4",
    tags:[ "adversary", "name", "strong", "humanlike" ],
    requires:[
        { id:"adjective1", reuse:false, ofTags:[ [ "adversary", "adjective", "trained" ] ] },
        { id:"adjective2", reuse:false, ofTags:[ [ "adversary", "adjective", "trained" ] ] },
        { id:"type", reuse:false, ofTags:[ [ "adversary", "type", "strong", "humanlike" ] ] },
    ],
    methods:{
        generate:{
            EN:"{adjective1} {adjective2} {type}"
        }
    }
},{
    id:"adversary-strong-simple-1",
    tags:[ "adversary", "data", "strong", "beastiaryentrystrong" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "strong", "humanlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "humanlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "humanlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "humanlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getLargeAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
},{
    id:"adversary-strong-simple-2",
    tags:[ "adversary", "data", "strong", "beastiaryentrystrong" ],
    requires:[
        { id:"name", call:"generate", ofTags:[ [ "adversary", "name", "strong", "beastlike" ] ] },
        { id:"attack", reuse:false, ofTags:[ [ "adversary", "attack", "beastlike" ] ] },
        { id:"defense", reuse:false, ofTags:[ [ "adversary", "defense", "beastlike" ] ] },
        { times:2, id:"description", reuse:false, ofTags:[ [ "adversary", "description", "beastlike" ] ] },
    ],
    render:{
        EN:"## {name}\n[:block:]\n\n{$.callAll(0,\"adversaryattribute\",\"getLargeAdversaryAttribute\",\" \",\"adversaryAttribute\")}\n\n{$.all(this,\"description\")}\n[:endblock:]\n"
    }
}
]);