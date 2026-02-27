DATABASE = (window.DATABASE || []).concat([
{
    id:"hitpointslabel-hp",
    tags:[ "hitpointslabel" ],
    methods:{
        getShortName:{
            EN:"HP"
        },
        getFullName:{
            EN:"hitpoints"
        }
    }
},
{
    id:"hitpoints-creaturehitpoints-simple",
    tags:[ "creature", "hitpoints", "hitpoints-simple", "adversaryattribute" ],
    orders:{
        adversaryAttribute:0
    },
    methods:{
        getVerySmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{$.hitpointsLabel.getShortName()}** 5",
                    "**{$.hitpointsLabel.getShortName()}** 6",
                    "**{$.hitpointsLabel.getShortName()}** 7",
                    "**{$.hitpointsLabel.getShortName()}** 8"
                ]
            }
        },
        getSmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{$.hitpointsLabel.getShortName()}** 10",
                    "**{$.hitpointsLabel.getShortName()}** 11",
                    "**{$.hitpointsLabel.getShortName()}** 13",
                    "**{$.hitpointsLabel.getShortName()}** 14"
                ]
            }
        },
        getAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{$.hitpointsLabel.getShortName()}** 10",
                    "**{$.hitpointsLabel.getShortName()}** 11",
                    "**{$.hitpointsLabel.getShortName()}** 13",
                    "**{$.hitpointsLabel.getShortName()}** 14"
                ]
            }
        },
        getLargeAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{$.hitpointsLabel.getShortName()}** 25",
                    "**{$.hitpointsLabel.getShortName()}** 27",
                    "**{$.hitpointsLabel.getShortName()}** 30",
                    "**{$.hitpointsLabel.getShortName()}** 32"
                ]
            }
        }
    }
},
{
    id:"hitpoints-creatureattack-simple",
    tags:[ "creature", "attack", "hitpoints-simple", "adversaryattribute" ],
    orders:{
        adversaryAttribute:4
    },
    methods:{
        getVerySmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{caller.attack}** {$.verySmallHitDiceroll}",
                ]
            }
        },
        getSmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{caller.attack}** {$.verySmallHitDiceroll}",
                    "**{caller.attack}** {$.smallHitDiceroll}",
                ]
            }
        },
        getAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{caller.attack}** {$.smallHitDiceroll}",
                    "**{caller.attack}** {$.hitpointsDiceroll}",
                    "**{caller.attack}** {$.largeHitpointsDiceroll}",
                ]
            }
        },
        getLargeAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{caller.attack}** {$.hitpointsDiceroll}",
                    "**{caller.attack}** {$.largeHitpointsDiceroll}",
                    "**{caller.attack}** {$.veryLargeHitpointsDiceroll}",
                ]
            }
        }
    }
},{
    id:"hitpoints-defense-simple",
    tags:[ "creature", "defense", "hitpoints-simple", "adversaryattribute" ],
    orders:{
        adversaryAttribute:2
    },
    requires:[
        { id:"lowDefense", ofTags:[ [ "single", "diceroll", "d2" ] ] },
        { id:"highDefense", ofTags:[ [ "single", "diceroll", "d4" ] ] },
    ],
    methods:{
        getVerySmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**No armor**",
                    "**No armor**",
                    "**{caller.defense}** -{lowDefense}",
                    "**{caller.defense}** -{highDefense}"
                ]
            }
        },
        getSmallAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**No armor**",
                    "**{caller.defense}** -{lowDefense}"
                ]
            }
        },
        getAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**No armor**",
                    "**{caller.defense}** -{highDefense}",
                    "**{caller.defense}** -{lowDefense}"
                ]
            }
        },
        getLargeAdversaryAttribute:{
            EN:{
                oneOf:[
                    "**{caller.defense}** -{lowDefense}",
                    "**{caller.defense}** -{lowDefense}",
                    "**{caller.defense}** -{highDefense}"
                ]
            }
        }
    }
},{
    id:"hitpoints-simple",
    tags:[ "player", "hitpoints", "creationentry" ],
    requires:[
        { id:"$.baseHitpoints", reuse:true, ofTags:[ [ "stat-basehitpoints" ], [ "stat-basehitpoints-simple" ], [ "stat-basehitpoints-simple-alt" ] ] },
        { id:"$.levelupRoll", ofTags:[ [ "multiple", "diceroll", "6d10" ] ] },
        { id:"$.verySmallHitDiceroll", ofTags:[ [ "single", "diceroll", "d2" ] ] },
        { id:"$.smallHitDiceroll", ofTags:[ [ "single", "diceroll", "d4" ] ] },
        { id:"$.hitpointsDiceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
        { id:"$.largeHitpointsDiceroll", ofTags:[ [ "single", "diceroll", "d8" ] ] },
        { id:"$.veryLargeHitpointsDiceroll", ofTags:[ [ "single", "diceroll", "d10" ] ] },
        { id:"$.temporaryBuffRoll", ofTags:[ [ "multiple", "diceroll", "2d6" ] ] },
        { id:"$.hitpointsLabel", ofTags:[ [ "hitpointslabel" ] ] },
        { id:"$.exhaustEvent", ofTags:[ [ "exhaustevent" ] ] },
        { id:"$.exhaustLabel", ofTags:[ [ "invalidating", "exhaust" ] ] },
        { id:"$.deadLabel", ofTags:[ [ "deadlabel" ] ] },
        // --- For creatures
        { id:"creatureHitpoints", ofTags:[ [ "creature", "hitpoints", "hitpoints-simple" ] ] },
        { id:"creatureAttack", ofTags:[ [ "creature", "attack", "hitpoints-simple" ] ] },
        { id:"creatureDefense", ofTags:[ [ "creature", "defense", "hitpoints-simple" ] ] },
    ],
    methods:{
        getLevelUpRoll:{
            EN:"{$.levelupRoll}"
        },
        getLevelUpAmount:{
            EN:"{$.hitpointsDiceroll}"
        },
        getTemporaryBuff:{
            EN:"{$.temporaryBuffRoll} extra {$.hitpointsLabel.getShortName()}"
        },
        getVerySmallBonus:{
            EN:"1 {$.hitpointsLabel.getShortName()}"
        },
        getSmallBonus:{
            EN:"2 {$.hitpointsLabel.getShortName()}"
        },
        creationSteps:{
            EN:" - Roll your {$.hitpointsLabel.getFullName()}.\n"
        },
        

        getVerySmallDebuff:{ EN:"{$.verySmallHitDiceroll}" },
        getSmallDebuff:{ EN:"{$.smallHitDiceroll}" },
        getDebuff:{ EN:"{$.hitpointsDiceroll}" },
        getLargeDebuff:{ EN:"{$.largeHitpointsDiceroll}" },
        getVeryLargeDebuff:{ EN:"{$.veryLargeHitpointsDiceroll}" },
        
        getVerySmallBuff:{ EN:"{getVerySmallDebuff()}" },
        getSmallBuff:{ EN:"{getSmallDebuff()}" },
        getBuff:{ EN:"{getDebuff()}" },
        getLargeBuff:{ EN:"{getLargeDebuff()}" },
        getVeryLargeBuff:{ EN:"{getVeryLargeDebuff()}" },

        getVerySmallInjury:{ EN:"{getVerySmallDebuff()} {$.hitpointsLabel.getShortName()}" },
        getSmallInjury:{ EN:"{getSmallDebuff()} {$.hitpointsLabel.getShortName()}" },
        getInjury:{ EN:"{getDebuff()} {$.hitpointsLabel.getShortName()}" },
        getLargeInjury:{ EN:"{getLargeDebuff()} {$.hitpointsLabel.getShortName()}" },
        getVeryLargeInjury:{ EN:"{getVeryLargeDebuff()} {$.hitpointsLabel.getShortName()}" },
        
        getVerySmallCure:{ EN:"{getVerySmallInjury()}" },
        getSmallCure:{ EN:"{getSmallInjury()}" },
        getCure:{ EN:"{getInjury()}" },
        getLargeCure:{ EN:"{getLargeInjury()}" },
        getVeryLargeCure:{ EN:"{getVeryLargeInjury()}" },

    },
    render:{
        EN:"# {$.capital($.hitpointsLabel.getFullName())}\n[:block:]\nBegin with {$.baseHitpoints} + {$.largeHitpointsDiceroll}. In worst case 1{$.hitpointsLabel.getShortName()}, but never less.\n\n**Zero {$.hitpointsLabel.getShortName()}:** {$.exhaustLabel.getFullName()} **Negative {$.hitpointsLabel.getShortName()}:** {$.deadLabel.getFullName()}\n[:endblock:]\n{$.exhaustEvent}"
    }
},
]);