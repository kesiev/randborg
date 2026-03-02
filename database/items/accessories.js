(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"accessories-simple",
    tags:[ "starting", "accessories", "startingitemtableentry" ],
    orders:{
        startingItemTableEntry:2
    },
	counter:"startingAccessories",
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d12" ]]},
        { times:12, reuse:false, id:"startingAccessory", ofTagBags:[ [ "startingaccessory" ] ] }
    ],
	methods:{
        rollTable:{
            EN:"[::]\n## Equipment ({allCounter}/{allCount})\n[:tablehead:]{diceroll}[:endtablehead:]\n{diceroll.createRangeTableForTag(\"startingequipment\",this,\"startingaccessory\")}"
        }
    }
},{
    id:"extraaccessories-simple",
    tags:[ "extra", "accessories", "extraitemstableentry" ],
	orders:{
        extraItemsTableEntry:1
    },
    requires:[
        { times:1, reuse:false, id:"accessoryTransport", ofTagBags:[ [ "transport", "accessoryprice" ] ] },
        { times:4, reuse:false, id:"accessoryMaterialCheap", ofTagBags:[ [ "accessoryprice", "materialCheap" ] ] },
        { times:6, reuse:false, id:"accessoryMaterialFair", ofTagBags:[ [ "accessoryprice", "materialFair" ] ] },
        { times:2, reuse:false, id:"accessoryMaterialVeryCheap", ofTagBags:[ [ "accessoryprice", "materialVeryCheap" ] ] },
        { times:2, reuse:false, id:"accessoryToolCheap", ofTagBags:[ [ "accessoryprice", "toolCheap" ] ] },
        { times:1, reuse:false, id:"accessoryToolFair", ofTagBags:[ [ "accessoryprice", "toolFair" ] ] },
		{ times:1, reuse:false, id:"accessoryToolPricey", ofTagBags:[ [ "accessoryprice", "toolPricey" ] ] },
        { times:1, reuse:false, id:"accessorySpecial", ofTagBags:[ [ "accessoryprice", "special" ] ] },
    ],
    methods:{
        rollTable:{
            EN:"[::smaller::]\n# More equipment\n\n{$.makeTable(0,\"accessoryprice\",\"getPrice\",2)}"
        }
    }
}]);

let
    ITEMS = [
{
	isStarting: true,
	isScroll:true,
	ifAnyFlag: [ [ "magic" ] ],
	result: {
		EN: "Random {$.magic.darkMean()}"
	}
},{
	isStarting: true,
	isScroll:true,
	ifAnyFlag: [ [ "magic" ] ],
	result: {
		EN: "Random {$.magic.lightMean()}"
	}
},{
	ifAnyFlag: [ [ "magic" ] ],
	price: "toolPricey",
	result: {
		EN: "{$.capital($.magic.mean())} _(a good price to the right buyer)_"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Lard (may function as 5 meals in a pinch)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Magnesium strip"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Leather gloves"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] }
	],
	price: "toolCheap",
	result: {
		EN: "Bear trap ({perceptionStat} {$.playerTest.difficultyDifficult()} to spot, {$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolCheap",
	result: {
		EN: "Tent"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolFair",
	result: {
		EN: "Perfume, exquisite"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolPricey",
	result: {
		EN: "Crucifix, silver"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] }
	],
	result: {
		EN: "{perceptionStat} + 4 torches"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "healingStat", reuse: true, ofTags: [ [ "stat-healing" ], [ "stat-healing-simple" ], [ "stat-healing-simple-alt" ] ] }
	],
	result: {
		EN: "Medicine chest, {healingStat} + 4 uses (stops bleeding/infection and heals {$.playerHitpoints.getCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] }
	],
	price: "materialCheap",
	result: {
		EN: "Lantern oil for {perceptionStat} + 6 hours"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Blanket"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Firesteel"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Mattress"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Quartz sand"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialCheap",
	result: {
		EN: "Waterskin, 4 days of water"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	price: "materialFair",
	result: {
		EN: "Caltrops ({diceroll} damage + infection on 1 in 6)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Crucifix, wood"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Large iron hook"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Leather apron"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Metal file"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Pot"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Pitchfork"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialFair",
	result: {
		EN: "Wooden bucket"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Dried food, 1 day"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Torch"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Abyssal salt"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "special",
	result: {
		EN: "Detailed map"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "staminaStat", reuse: true, ofTags: [ [ "stat-stamina" ], [ "stat-stamina-simple" ], [ "stat-stamina-simple-alt" ] ] }
	],
	price: "toolCheap",
	result: {
		EN: "Poison (black) {staminaStat} {$.playerTest.difficultyDifficult()} or {$.playerHitpoints.getDebuff()} damage + blind for one hour. 3 doses"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "toughnessStat", reuse: true, ofTags: [ [ "stat-toughness" ], [ "stat-toughness-simple" ], [ "stat-toughness-simple-alt" ] ] }
	],
	price: "toolCheap",
	result: {
		EN: "Poison (red) {toughnessStat} {$.playerTest.difficultyNormal()} or {$.playerHitpoints.getVeryLargeDebuff()} damage. 3 doses"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolCheap",
	result: {
		EN: "Medicine box (Stops bleeding/infection and +{$.playerHitpoints.getCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolFair",
	result: {
		EN: "Compass, brass"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolPricey",
	result: {
		EN: "Steel mirror"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	price: "materialCheap",
	result: {
		EN: "Antidote, universal ({diceroll} doses)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "toolCheap",
	result: {
		EN: "Signal whistle"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Noose"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Snake venom"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Oil lamp"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolCheap",
	result: {
		EN: "Pickaxe"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolCheap",
	result: {
		EN: "Shovel"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolFair",
	result: {
		EN: "Holy salt, 1 pouch"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolPricey",
	result: {
		EN: "Holy water, 1 vial"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] },
		{ id: "toughnessStat", reuse: true, ofTags: [ [ "stat-toughness" ], [ "stat-toughness-simple" ], [ "stat-toughness-simple-alt" ] ] }
	],
	result: {
		EN: "A bottle of red poison {diceroll} doses ({toughnessStat} {$.playerTest.difficultyNormal()} or {$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "Life elixir, {diceroll} doses (heals {$.playerHitpoints.getCure()} {$.makeCallListOf(0,\"cureaction\",\"onCure\",2)})"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Beeswax"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Distilled alcohol"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Sulfuric acid"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Rat poison"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Vitriol"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Belladonna"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Sponge"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Muzzle"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Branding iron"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Bone saw"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Chain, rusted"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Rake, iron"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Scalpel, rusted"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialFair",
	result: {
		EN: "Candelabra, lead"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Charcoal"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Animal fat"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Matches"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "special",
	result: {
		EN: "Corpse, preserved"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolCheap",
	result: {
		EN: "Meat cleaver"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolCheap",
	result: {
		EN: "Bell"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolCheap",
	result: {
		EN: "Skewer"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolFair",
	result: {
		EN: "Hourglass, small"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolPricey",
	result: {
		EN: "Astrolabe"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "toolFair",
	result: {
		EN: "Folding shovel"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "materialCheap",
	result: {
		EN: "Bone dust"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Rope, 30 feet"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Sharp needle"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Crowbar ({$.playerHitpoints.getSmallBuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolCheap",
	result: {
		EN: "Toolbox 10 nails, tongs, hammer, small saw and drill"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolCheap",
	result: {
		EN: "Grappling hook"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolFair",
	result: {
		EN: "Bomb ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolPricey",
	result: {
		EN: "Merchant's scale"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] }
	],
	result: {
		EN: "Lantern with oil for {perceptionStat} + 6 hours"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Metal file and lockpicks"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Lockpicks"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Pumice"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Salt"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Soap"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Zinc powder"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialCheap",
	result: {
		EN: "Glycerin"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Hammer"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Ladder"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Manacles"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Scissors"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Magnifying glass"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Wire saw"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Ink pad"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialFair",
	result: {
		EN: "Cipher wheel"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Chalk"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Notepad"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Sealing wax"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "special",
	result: {
		EN: "Stolen document"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolCheap",
	result: {
		EN: "Mirror"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolCheap",
	result: {
		EN: "Sledgehammer"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolCheap",
	result: {
		EN: "Scalpel"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolFair",
	result: {
		EN: "Journal, vellum pages"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolPricey",
	result: {
		EN: "Abacus"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] }
	],
	price: "toolFair",
	result: {
		EN: "Telescope, tarnished (adds +2 to long-range {perceptionStat} tests)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "toolFair",
	result: {
		EN: "Portable cooking pot and ladle"
	}
},{
	price: "materialFair",
	result: {
		EN: "Backpack (Holds 7 normal-sized items)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Nutrient paste (may function as 3 meals)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Drug, recreational use (decide the effect)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Trench coat"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] }
	],
	price: "toolCheap",
	result: {
		EN: "Plastic bomb ({perceptionStat} {$.playerTest.difficultyDifficult()} to spot, {$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolCheap",
	result: {
		EN: "Mirror shades"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolFair",
	result: {
		EN: "Grappling gun"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolPricey",
	result: {
		EN: "Cyberdeck"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] },
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{perceptionStat} + 2 flashbang ({perceptionStat} {$.playerTest.difficultyDifficult()} or blinded for {diceroll} rounds)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "healingStat", reuse: true, ofTags: [ [ "stat-healing" ], [ "stat-healing-simple" ], [ "stat-healing-simple-alt" ] ] }
	],
	result: {
		EN: "Trauma kit, {healingStat} + 4 uses (stops bleeding/infection and heals {$.playerHitpoints.getCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Neurostabilizer, 1 use"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Cooling gel, 1 use"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Duct tape, strong"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Interface plug"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Solder pen, 3 uses (heals {$.playerHitpoints.getVerySmallCure()} per use)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialCheap",
	result: {
		EN: "Real water, 2 days of water"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Battery"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Empty datachip"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Port adapter"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Oxygen canister"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Muscle fiber, 1 inch"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Blood bag"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Signal jammer, 1 use"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialFair",
	result: {
		EN: "Chamelon cloak, 1 use"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Cigarettes"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Disposable phone"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Emergency flare"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "special",
	result: {
		EN: "Cyberdeck app"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolCheap",
	result: {
		EN: "LED Sneakers"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolCheap",
	result: {
		EN: "Geiger counter"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolCheap",
	result: {
		EN: "Meal pack (heals {$.playerHitpoints.getSmallCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolFair",
	result: {
		EN: "Voice modulator"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolFair",
	result: {
		EN: "Drug, heavy effect (decide the effect)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "perceptionStat", reuse: true, ofTags: [ [ "stat-perception" ], [ "stat-perception-simple" ], [ "stat-perception-simple-alt" ] ] },
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	price: "materialFair",
	result: {
		EN: "Flashbang ({perceptionStat} {$.playerTest.difficultyDifficult()} or blinded for {diceroll} rounds)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Dried squid (may function as 4 meals in a pinch)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Sake, bottle"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Iron mask, animal"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] },
		{ id: "staminaStat", reuse: true, ofTags: [ [ "stat-stamina" ], [ "stat-stamina-simple" ], [ "stat-stamina-simple-alt" ] ] }
	],
	price: "toolCheap",
	result: {
		EN: "Purification salt, {staminaStat} + 4 pinches (block {diceroll} creatures for {staminaStat} rounds)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolCheap",
	result: {
		EN: "Paper parasol"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolFair",
	result: {
		EN: "Wide hat"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolPricey",
	result: {
		EN: "Climbing claws"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "agilityStat", reuse: true, ofTags: [ [ "stat-agility" ], [ "stat-agility-simple" ], [ "stat-agility-simple-alt" ] ] }
	],
	result: {
		EN: "Iron fan ({agilityStat} {$.playerTest.difficultyNormal()} or {$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Mochi, 3 pieces (heal {$.playerHitpoints.getSmallCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Incense stick"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Spirit bell"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Ginseng root"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Bamboo canteen, 4 cups of tea"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Bird cage, small"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialCheap",
	result: {
		EN: "Aphrodisiac"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Kimono, decorated"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Wide trousers"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Steel firestarter"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Brush, inkstone, and ink stick"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Hanafuda cards"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Scroll, empty"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Hairpin"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialFair",
	result: {
		EN: "Soy sauce"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Zen stones"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Ink"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "White poweder, cosmetic"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "special",
	result: {
		EN: "Scroll, sacred"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolCheap",
	result: {
		EN: "Iron kettle"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolCheap",
	result: {
		EN: "Bamboo flute"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolCheap",
	result: {
		EN: "Teapot"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolFair",
	result: {
		EN: "Paper lantern"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Rice balls (heal {$.playerHitpoints.getVerySmallCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] },
		{ id: "staminaStat", reuse: true, ofTags: [ [ "stat-stamina" ], [ "stat-stamina-simple" ], [ "stat-stamina-simple-alt" ] ] }
	],
	price: "toolCheap",
	result: {
		EN: "Purification salt, 1 pinch (block {diceroll} creatures for {staminaStat} rounds)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Playing cards"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Cigars box, cheap"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Whiskey, bottle"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolCheap",
	result: {
		EN: "Bedroll"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolCheap",
	result: {
		EN: "Cowboy hat"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolFair",
	result: {
		EN: "Poncho"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolPricey",
	result: {
		EN: "Pocket watch, golden and engraved"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Sheriff's badge"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "strengthStat", reuse: true, ofTags: [ [ "stat-strength" ], [ "stat-strength-simple" ], [ "stat-strength-simple-alt" ] ] }
	],
	result: {
		EN: "Bacon slab, {strengthStat} + 6 uses (heals {$.playerHitpoints.getVerySmallCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Beans, 1 bag"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Potatoes, 1 bag"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Onions, 1 bag"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Envelope and postage"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Sewing kit"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialCheap",
	result: {
		EN: "Tin canteen, 4 days of water"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Coffee beans, 1 bag"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Pork, meat"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Cow, meat"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Gunpowder, flask"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Cigar, fine"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Pan"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Coffee pot"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialFair",
	result: {
		EN: "Coffee grinder"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Dice, loaded"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Thread, spool"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "materialVeryCheap",
	result: {
		EN: "Chewing tobacco"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "special",
	result: {
		EN: "Bible, hand-annotated"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolCheap",
	result: {
		EN: "Leather boots with spur"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolCheap",
	result: {
		EN: "Harmonica"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolCheap",
	result: {
		EN: "Razor blade, shaving"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolFair",
	result: {
		EN: "Leather saddle"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "toolPricey",
	result: {
		EN: "Canned peaches (heals {$.playerHitpoints.getLargeCure()})"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "agilityStat", reuse: true, ofTags: [ [ "stat-agility" ], [ "stat-agility-simple" ], [ "stat-agility-simple-alt" ] ] }
	],
	price: "toolPricey",
	result: {
		EN: "Dynamite ({agilityStat} {$.playerTest.difficultyDifficult()} or {$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "toolPricey",
	result: {
		EN: "Behavioral faceplate"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "toolPricey",
	result: {
		EN: "Mask of terror"
	}
}
];

ITEMS.forEach((item,id)=>{
    let
        tags = [ "accessory" ],
        requires = [];

    if (item.isStarting)
        tags.push("startingaccessory");

	if (item.isStarting && item.isScroll)
		tags.push("isstartingscroll");

    if (!item.ifAnyFlag)
        tags.push("any");

    if (item.price) {
        requires.push({ id:"getPrice", reuse:true, call:item.price, ofTags:[ [ "trait", "money" ] ] });
        tags.push("accessoryprice");
        tags.push(item.price);
    } else {
        tags.push("noprice");
    }

    DATABASE.push({
        id:"accessory-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:tags,
        requires:item.requires ? requires.concat(item.requires) : requires,
        methods:{},
        render:item.result
    })
})

})();