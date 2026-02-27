DATABASE = (window.DATABASE || []).concat([
{
	id: "omen-name-1",
	tags: [ "omen", "name" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	methods: {
		single: {
			EN: "Presage"
		},
		plural: {
			EN: "Presages"
		},
		lore: {
			EN: "Clearly, the scent of your soul has reached the rafters of the void. You are being hunted by the lidless eyes of the Abyss. Call it luck if you like."
		}
	}
},{
	id: "omen-name-2",
	tags: [ "omen", "name" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	methods: {
		single: {
			EN: "Chance"
		},
		plural: {
			EN: "Chances"
		},
		lore: {
			EN: "Clearly, the attention of greater powers has turned toward your path. Call it luck if you like."
		}
	}
},{
	id: "omen-name-3",
	tags: [ "omen", "name" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	methods: {
		single: {
			EN: "Pact"
		},
		plural: {
			EN: "Pacts"
		},
		lore: {
			EN: "Clearly, you've drawn a crowd you can't see. The Old Watchers are peering through the cracks at you. Call it luck if you like."
		}
	}
},{
	id: "omen-name-4",
	tags: [ "omen", "name" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	methods: {
		single: {
			EN: "Retcon"
		},
		plural: {
			EN: "Retcons"
		},
		lore: {
			EN: "Clearly, the Old Algorithms are peering through the firewall cracks at you. You can shape your truth. Call it luck if you like."
		}
	}
},{
	id: "omen-name-5",
	tags: [ "omen", "name" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	methods: {
		single: {
			EN: "Ripple"
		},
		plural: {
			EN: "Ripples"
		},
		lore: {
			EN: "Clearly, you've drawn a parade of spirits you can't see. They may guide the ripples for you. Call it luck if you like."
		}
	}
},{
	id: "omen-name-6",
	tags: [ "omen", "name" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	methods: {
		single: {
			EN: "Twist"
		},
		plural: {
			EN: "Twists"
		},
		lore: {
			EN: "Clearly, the attention of the Almighty has turned toward your crooked path. You can twist it. Call it luck if you like."
		}
	}
},
{
    id:"extrarule-omens",
    tags:[ "extrarule", "optionalcreationentry" ],
    requires:[
        { id:"omenName", ofTags:[ [ "omen", "name" ]]},
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d2" ]]},
    ],
    methods:{
        creationSteps:{
            EN:" - Roll a number of {omenName.plural()}"
        }
    },
    render:{
        EN:"## {omenName.single()}\n[:block:]\n\n{omenName.lore()}\n\nEvery character begins with {diceroll} {omenName.plural()}. When depleted roll the class' designated die ({diceroll} if playing without classes) and regain that many {omenName.plural()} after resting at least six hours.\n[:endblock:]\n[:block:]\n### Use {omenName.plural()} to:\n\n - deal maximum damage with an attack\n - reroll a dice roll (yours or someone else's)\n - lower damage dealt to you by {$.playerHitpoints.getDebuff()}\n - neutralize a Crit or Fumble\n - lower one test's {$.playerTest.symbol()} by {$.playerTest.difficultyIncrease2()}\n[:endblock:]\n"
    }
}
]);
