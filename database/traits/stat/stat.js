DATABASE = (window.DATABASE || []).concat([
{
    id:"samplestat-strength-crush",
    tags:[ "samplestat", "stat-strength-simple" ],
    render:{
        EN:"crush"
    }
},{
    id:"samplestat-strength-lift",
    tags:[ "samplestat", "stat-strength-simple" ],
    render:{
        EN:"lift"
    }
},{
    id:"samplestat-strength-strike",
    tags:[ "samplestat", "stat-strength-simple" ],
    render:{
        EN:"strike"
    }
},{
    id:"samplestat-strength-grapple",
    tags:[ "samplestat", "stat-strength-simple" ],
    render:{
        EN:"grapple"
    }
},{
    id:"samplestat-agility-defend",
    tags:[ "samplestat", "stat-agility-simple" ],
    render:{
        EN:"defend"
    }
},{
    id:"samplestat-agility-balance",
    tags:[ "samplestat", "stat-agility-simple" ],
    render:{
        EN:"balance"
    }
},{
    id:"samplestat-agility-swim",
    tags:[ "samplestat", "stat-agility-simple" ],
    render:{
        EN:"swim"
    }
},{
    id:"samplestat-agility-flee",
    tags:[ "samplestat", "stat-agility-simple" ],
    render:{
        EN:"flee"
    }
},{
    id:"samplestat-agility-acrobatics",
    tags:[ "samplestat", "stat-agility-simple" ],
    render:{
        EN:"perform acrobatics"
    }
},{
    id:"samplestat-agility-stealth",
    tags:[ "samplestat", "stat-agility-simple" ],
    render:{
        EN:"stealth"
    }
},{
    id:"samplestat-presence-defend",
    tags:[ "samplestat", "stat-intelligence-simple", "stat-presence-simple-1" ],
    render:{
        EN:"perceive"
    }
},{
    id:"samplestat-presence-aim",
    tags:[ "samplestat", "stat-presence-simple" ],
    render:{
        EN:"aim"
    }
},{
    id:"samplestat-presence-charm",
    tags:[ "samplestat", "stat-charisma-simple", "stat-presence-simple-1" ],
    render:{
        EN:"charm"
    }
},{
    id:"samplestat-presence-wieldpowers",
    tags:[ "samplestat", "stat-intelligence-simple", "stat-presence-simple-1" ],
    render:{
        EN:"wield powers"
    }
},{
    id:"samplestat-presence-survival",
    tags:[ "samplestat", "stat-presence-simple" ],
    render:{
        EN:"survival skills"
    }
},{
    id:"samplestat-presence-cure",
    tags:[ "samplestat", "stat-presence-simple" ],
    render:{
        EN:"cure"
    }
},{
    id:"samplestat-presence-gatherinsights",
    tags:[ "samplestat", "stat-presence-simple" ],
    render:{
        EN:"gather insights"
    }
},{
    id:"samplestat-presence-handleanimals",
    tags:[ "samplestat", "stat-presence-simple" ],
    render:{
        EN:"handle animals"
    }
},{
    id:"samplestat-toughness-resist",
    tags:[ "samplestat", "stat-toughness-simple" ],
    render:{
        EN:"resist poison/cold/heat"
    }
},{
    id:"samplestat-toughness-survivefalling",
    tags:[ "samplestat", "stat-toughness-simple" ],
    render:{
        EN:"survive falling"
    }
},{
    id:"samplestat-intelligence-history",
    tags:[ "samplestat", "stat-intelligence-simple" ],
    render:{
        EN:"history/nature/religion knowledge"
    }
},{
    id:"samplestat-charisma-decept",
    tags:[ "samplestat", "stat-charisma-simple" ],
    render:{
        EN:"decept"
    }
},{
    id:"samplestat-charisma-intimidate",
    tags:[ "samplestat", "stat-charisma-simple" ],
    render:{
        EN:"intimidate"
    }
},{
    id:"samplestat-charisma-persuade",
    tags:[ "samplestat", "stat-charisma-simple" ],
    render:{
        EN:"persuade"
    }
},{
    id:"samplestat-charisma-perform",
    tags:[ "samplestat", "stat-charisma-simple" ],
    render:{
        EN:"perform"
    }
},{
    id:"stat-strength-simple", 
    tags:[ "stat", "stat-strength", "stat-capacity-simple-alt", "stat-basehitpoints-simple-alt", "burden-affected", "stat-melee-simple-alt", "stat-healing-simple-alt", "stat-presence-simple-alt", "stat-toughness-simple-alt", "stat-charisma-simple-alt" ],
    methods:{
        testsShortlist:{
            EN:"{$.makeSampleList(4)}"
        }
    },
    render:{
        EN:"Strength"
    }
},{
    id:"stat-agility-simple", 
    tags:[ "stat", "stat-agility", "burden-affected", "stat-initiative-simple-alt", "stat-ranged-simple-alt", "stat-stamina-simple-alt", "stat-defence-simple-alt", "stat-intelligence-simple-alt", "stat-perception-simple-alt" ],
    methods:{
        testsShortlist:{
            EN:"{$.makeSampleList(4)}"
        }
    },
    render:{
        EN:"Agility"
    }
},{
    id:"stat-presence-simple", 
    tags:[ "stat", "stat-presence", "stat-ranged-simple", "stat-intelligence-simple", "stat-perception-simple", "stat-healing-simple", "stat-charisma-simple" ],
    methods:{
        testsShortlist:{
            EN:"{$.makeSampleList(4)}"
        }
    },
    render:{
        EN:"Presence"
    }
},{
    id:"stat-toughness-simple", 
    tags:[ "stat", "stat-toughness", "stat-basehitpoints-simple", "stat-stamina-simple" ],
    methods:{
        testsShortlist:{
            EN:"{$.makeSampleList(2)}"
        }
    },
    render:{
        EN:"Toughness"
    }
},{
    id:"stat-intelligence-simple", 
    tags:[ "stat", "stat-intelligence", "stat-presence-simple" ],
    methods:{
        testsShortlist:{
            EN:"{$.makeSampleList(3)}"
        }
    },
    render:{
        EN:"Intelligence"
    }
},{
    id:"stat-charisma-simple", 
    tags:[ "stat", "stat-charisma" ],
    methods:{
        testsShortlist:{
            EN:"{$.makeSampleList(3)}"
        }
    },
    render:{
        EN:"Charisma"
    }
}
]);