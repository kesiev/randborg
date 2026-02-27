(function(){
let
    EFFECTS = [
{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "darkmagic", "evoke" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] },
		{ id: "hordeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	methods: {
		resultTable: [
			[ { result: { EN: "{hordeDiceroll} dryads" } }, { result: { EN: "{hordeDiceroll} golems" } } ]
		]
	},
	result: {
		EN: "Evoke ({diceroll}): {diceroll.createRangeLine(resultTable)}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "darkmagic", "evoke" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] },
		{ id: "hordeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	methods: {
		resultTable: [
			[ { result: { EN: "{hordeDiceroll} skeletons" } }, { result: { EN: "{hordeDiceroll} zombies" } } ]
		]
	},
	result: {
		EN: "Summon ({diceroll}): {diceroll.createRangeLine(resultTable)}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "darkmagic", "evoke" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] },
		{ id: "hordeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	methods: {
		resultTable: [
			[ { result: { EN: "{hordeDiceroll} wolves" } }, { result: { EN: "{hordeDiceroll} ravens" } } ]
		]
	},
	result: {
		EN: "Call ({diceroll}): {diceroll.createRangeLine(resultTable)}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "darkmagic", "evoke" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] },
		{ id: "hordeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	methods: {
		resultTable: [
			[ { result: { EN: "{hordeDiceroll} drones" } }, { result: { EN: "{hordeDiceroll} turrets" } } ]
		]
	},
	result: {
		EN: "Spawn ({diceroll}): {diceroll.createRangeLine(resultTable)}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "darkmagic", "evoke" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] },
		{ id: "hordeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	methods: {
		resultTable: [
			[ { result: { EN: "{hordeDiceroll} tanuki" } }, { result: { EN: "{hordeDiceroll} foxes" } } ]
		]
	},
	result: {
		EN: "Paint ({diceroll}): {diceroll.createRangeLine(resultTable)}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "darkmagic", "evoke" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] },
		{ id: "hordeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	methods: {
		resultTable: [
			[ { result: { EN: "{hordeDiceroll} coyotes" } }, { result: { EN: "{hordeDiceroll} eagles" } } ]
		]
	},
	result: {
		EN: "Whistle up ({diceroll}): {diceroll.createRangeLine(resultTable)}"
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "areaSizeDiceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] },
		{ id: "timeDiceroll", ofTags: [ [ "single", "diceroll", "d10" ] ] }
	],
	result: {
		EN: "Create a {areaSizeDiceroll}x5 feet long wall lasting {timeDiceroll} rounds. Creatures passing through lose {$.playerHitpoints.getSmallInjury()}."
	}
},{
	tags: [ "darkmagic", "normal" ],
	result: {
		EN: "All creatures within 30 feet lose a total of {$.playerHitpoints.getVeryLargeInjury()}."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d2" ] ] }
	],
	result: {
		EN: "A ball of fire hits {diceroll} creatures dealing {$.playerHitpoints.getVeryLargeDebuff()} damage per creature."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d10" ] ] },
		{ id: "intelligenceStat", reuse: true, ofTags: [ [ "stat-intelligence" ], [ "stat-intelligence-simple" ], [ "stat-intelligence-simple-alt" ] ] }
	],
	result: {
		EN: "Hover for {intelligenceStat} + {diceroll} rounds."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d2" ] ] }
	],
	result: {
		EN: "Produce {diceroll} lightning bolts dealing {$.playerHitpoints.getLargeDebuff()} damage each."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "A weapon deals +{$.playerHitpoints.getSmallDebuff()} damage per hit for {diceroll} rounds."
	}
},{
	tags: [ "darkmagic", "normal" ],
	result: {
		EN: "An item you can see teleports to your hands."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] }
	],
	result: {
		EN: "One creature suffocates for {diceroll} rounds, losing {$.playerHitpoints.getSmallInjury()} per round."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] },
		{ id: "agilityStat", reuse: true, ofTags: [ [ "stat-agility" ], [ "stat-agility" ], [ "stat-agility-simple" ], [ "stat-agility-simple-alt" ] ] }
	],
	result: {
		EN: "{diceroll} creatures touching ground {agilityStat} test or lose {$.playerHitpoints.getInjury()}."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d2" ] ] },
		{ id: "agilityStat", reuse: true, ofTags: [ [ "stat-agility" ], [ "stat-agility-simple" ], [ "stat-agility-simple-alt" ] ] }
	],
	result: {
		EN: "{diceroll} spectral hands grasp at enemies, each dealing {$.playerHitpoints.getSmallDebuff()} and reducing {agilityStat} by 1 for {diceroll} rounds."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} creatures loses {$.playerHitpoints.getSmallInjury()} and you gain the total lost."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d2" ] ] }
	],
	result: {
		EN: "A creature have the same armor of another creature for {diceroll} rounds."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "areaSizeDiceroll", ofTags: [ [ "single", "diceroll", "d10" ] ] },
		{ id: "timeDiceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] }
	],
	result: {
		EN: "Move an object up to {areaSizeDiceroll}x10 feet for {timeDiceroll} minutes."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} creatures fall asleep for one hour unless they succeed a {$.playerTest.difficultyDifficult()} test."
	}
},{
	tags: [ "darkmagic", "normal" ],
	result: {
		EN: "A creature of your choice is confused for 10 minutes."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] }
	],
	result: {
		EN: "A creature becomes invisible for {diceroll} rounds or until it is damaged, attacking/defending with {$.playerTest.difficultyTrivial()}."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} creatures deal {$.playerHitpoints.getSmallDebuff()} less damage for {diceroll} rounds."
	}
},{
	tags: [ "darkmagic", "normal" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d2" ] ] }
	],
	result: {
		EN: "A creature have no armor for {diceroll} rounds."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d2" ] ] }
	],
	result: {
		EN: "{diceroll} creatures regain {$.playerHitpoints.getVeryLargeCure()} each."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d6" ] ] }
	],
	result: {
		EN: "A creature of your choice gets +{diceroll} on one roll (damage, tests etc.)"
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "A creature of your choice gains {$.playerHitpoints.getTemporaryBuff()} for 10 rounds."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d20" ] ] }
	],
	result: {
		EN: "You may speak with animals for {diceroll} minutes."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "You and your possessions transform into an animal."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d20" ] ] }
	],
	result: {
		EN: "You can change the direction of gravity for yourself for {diceroll} minutes."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d20" ] ] }
	],
	result: {
		EN: "You can control an illusory duplicate of yourself for {diceroll} minutes."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "One creature, dead for no more than a week, is awakened with terrible memories."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "multiple", "diceroll", "3d10" ] ] }
	],
	result: {
		EN: "Light or pitch black for {diceroll} minutes."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} creatures lose {$.playerHitpoints.getVeryLargeInjury()} each."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "You can smell even the faintest traces of scents."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "You control what {diceroll} creatures sees."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "A creature is forced to live its most traumatic memory."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "A creature turns to mist for {diceroll} rounds. It cannot attack and receive damage."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "Ask three questions to a deceased creature."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "multiple", "diceroll", "2d10" ] ] }
	],
	result: {
		EN: "You find all traps in your path for {diceroll} minutes."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "One creature blindly obeys a single command."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "One object obeys your commands as best it can."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "You become fluent in all languages for a short while."
	}
},{
	tags: [ "lightmagic" ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d20" ] ] }
	],
	result: {
		EN: "Your movement speed is tripled for {diceroll} minutes."
	}
},{
	tags: [ "lightmagic" ],
	result: {
		EN: "A creature near you has an aversion to violence."
	}
}
];

EFFECTS.forEach((effect,id)=>{
    DATABASE.push({
        ifAnyFlag:effect.ifAnyFlag,
        id:"spell-"+effect.tags[0]+"-"+id,
        tags:[ "spell", "effect" ].concat(effect.tags),
        requires:effect.requires,
        methods:effect.methods,
        render:effect.result
    })
})

})();