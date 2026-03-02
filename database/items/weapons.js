(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"weapons-simple",
    tags:[ "starting", "weapons", "startingitemtableentry", "magicexception" ],
	orders:{
        startingItemTableEntry:3
    },
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d10" ]]},
        { id:"limitedDiceroll", ofTags:[ [ "single", "diceroll", "d6" ]]},
        { times:4, reuse:false, id:"lightWeapons", ofTagBags:[ [ "light", "startingweapon" ] ] },
        { times:3, reuse:false, id:"mediumWeapons", ofTagBags:[ [ "medium", "startingweapon" ] ] },
        { times:2, reuse:false, id:"strongWeapons", ofTagBags:[ [ "strong", "startingweapon" ] ] },
        { times:1, reuse:false, id:"extremeWeapons", ofTagBags:[ [ "extreme", "startingweapon" ] ] },
    ],
    methods:{
        getException:{
            EN:"wielding two-handed weapons"
        },
        rollTable:{
            EN:"[::]\n## Weapon\n\n[:tablehead:]{diceroll} ({limitedDiceroll} if you begin with a scroll)[:endtablehead:]\n{diceroll.createRangeTableForTag(\"startingweapon\",this,\"startingweapon\")}"
        }
    }
},{
    id:"extraweapons-simple",
    tags:[ "extra", "weapons", "extraitemstableentry" ],
	orders:{
        extraItemsTableEntry:4
    },
    requires:[
        { reuse:false, id:"unarmed", ofTagBags:[ [ "weapon", "unarmed" ] ] },
        { reuse:false, id:"improvised", ofTagBags:[ [ "weapon", "improvised" ] ] },
        { times:2, reuse:false, id:"ammo", ofTagBags:[ [ "ammo", "weaponprice" ] ] },
        { reuse:false, id:"veryLightWeapons", ofTagBags:[ [ "verylight", "weaponprice" ] ] },
        { times:2, reuse:false, id:"lightWeapons", ofTagBags:[ [ "light", "weaponprice" ] ] },
        { times:4, reuse:false, id:"mediumWeapons", ofTagBags:[ [ "medium", "weaponprice" ] ] },
        { times:2, reuse:false, id:"strongWeapons", ofTagBags:[ [ "strong", "weaponprice" ] ] },
    ],
    methods:{
        rollTable:{
            EN:"[::]\n# Weapons\n[:block:]\n_{unarmed}, {improvised}_\n[:endblock:]\n{$.makeTable(0,\"weaponprice\",\"getPrice\",2)}"
        }
    }
}]);

let
    WEAPONS = [
{
	tags: [ "improvised" ],
	result: {
		EN: "Improvised weapon ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	tags: [ "unarmed" ],
	result: {
		EN: "Unarmed ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Arrows, 20"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Sling bullets, 20"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Bolts, 10"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Arbalest missiles, 10"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Boneshards, 20"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Lead shots, 10"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "verylight" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Whip ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "verylight" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Harpoon ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "verylight" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Chain ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "light" ],
	price: "weaponWorthless",
	result: {
		EN: "Tick branch ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Staff ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Sling ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Knuckles ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Shortbow ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "light" ],
	price: "weaponFair",
	result: {
		EN: "Shortsword ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "light" ],
	price: "weaponWorthless",
	result: {
		EN: "Femur ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Sickle ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Dirk ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Battle censer ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Cleaver ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "light" ],
	price: "weaponFair",
	result: {
		EN: "Stiletto ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "light" ],
	price: "weaponWorthless",
	result: {
		EN: "Broomstick ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Cane sword ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Bottle, broken ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Knife ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Straight razor ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "light" ],
	price: "weaponFair",
	result: {
		EN: "Rapier ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Halberd ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Handaxe ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Warhammer ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Sword ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Mace ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Bow ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "medium" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Bow ({$.playerHitpoints.getDebuff()} damage), with {rangedStat} + 10 arrows"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Tomahawk ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Glaive ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Falchion ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Maul ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Cutlass ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Bonecaster (fires boneshards, {$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "medium" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Bonecaster ({$.playerHitpoints.getDebuff()} damage), with {rangedStat} + 10 boneshards"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Club ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Pike ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Claymore ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Scimitar ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Trident ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Sling ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "medium" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Sling ({$.playerHitpoints.getDebuff()} damage), with {rangedStat} + 10 sling bullets"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Morning star ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Battle axe ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "strong" ],
	price: "weaponPricey",
	result: {
		EN: "Crossbow ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "strong" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Crossbow ({$.playerHitpoints.getLargeDebuff()} damage), with {rangedStat} + 10 bolts"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Scythe ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Flail ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "strong" ],
	price: "weaponPricey",
	result: {
		EN: "Arbalest ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "strong" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Arbalest ({$.playerHitpoints.getLargeDebuff()} damage), with {rangedStat} + 10 missiles"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Sledgehammer ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Machete ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "strong" ],
	price: "weaponPricey",
	result: {
		EN: "Blunderbuss ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "strong" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Blunderbuss ({$.playerHitpoints.getLargeDebuff()} damage), with {rangedStat} + 10 lead shots"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "extreme" ],
	price: "weaponVeryPricey",
	result: {
		EN: "Greataxe ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "extreme" ],
	price: "weaponVeryPricey",
	result: {
		EN: "Zweihander ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "extreme" ],
	price: "weaponVeryPricey",
	result: {
		EN: "Greatsword ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Smart pistol rounds, 20"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Spikes, 10"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "verylight" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Monofilament Lash ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "light" ],
	price: "weaponWorthless",
	result: {
		EN: "Shock Rod ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Riot Staff ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Shard Launcher ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Shock Knuckles ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Dart Pistol ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "light" ],
	price: "weaponFair",
	result: {
		EN: "Combat Knife ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Arc Polearm ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Vibro Hatchet ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Kinetic Hammer ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Holokatana ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Shock Mace ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Smart Pistol ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "medium" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Smart Pistol ({$.playerHitpoints.getDebuff()} damage), with {rangedStat} + 10 rounds"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Gravity Flail ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Vibrocleaver ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "strong" ],
	price: "weaponPricey",
	result: {
		EN: "Spike Launcher ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "strong" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Spike Launcher ({$.playerHitpoints.getLargeDebuff()} damage), with {rangedStat} + 10 spikes"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "extreme" ],
	price: "weaponVeryPricey",
	result: {
		EN: "Titan-Class Axe ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Long arrows, 20"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Siege bolts, 10"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "verylight" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Ritual chain ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "light" ],
	price: "weaponWorthless",
	result: {
		EN: "Bamboo switch ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Bo ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Stone sling ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "War gauntlets ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Short yumi ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "light" ],
	price: "weaponFair",
	result: {
		EN: "Wakizashi ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Naginata ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Ono ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Iron club ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Katana ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Iron staff ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Daikyu longbow ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "medium" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Daikyu longbow ({$.playerHitpoints.getDebuff()} damage), with {rangedStat} + 10 long arrows"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Spiked Kanabo ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Great waraxe ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "strong" ],
	price: "weaponPricey",
	result: {
		EN: "Siege crossbow ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "strong" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Siege crossbow ({$.playerHitpoints.getLargeDebuff()} damage), with {rangedStat} + 10 siege bolts"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "extreme" ],
	price: "weaponVeryPricey",
	result: {
		EN: "Daimyo Executioner ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Cartridges, 20"
	}
},{
	isAmmo: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [],
	price: "ammoFair",
	result: {
		EN: "Shells, 10"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "verylight" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Cattle whip ({$.playerHitpoints.getVerySmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "light" ],
	price: "weaponWorthless",
	result: {
		EN: "Broken fence ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Walking stick ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "light" ],
	price: "weaponVeryCheap",
	result: {
		EN: "Pocket slingshot ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Brass knuckles ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "light" ],
	price: "weaponCheap",
	result: {
		EN: "Derringer pistol ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "light" ],
	price: "weaponFair",
	result: {
		EN: "Bowie knife ({$.playerHitpoints.getSmallDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Pitchfork ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	price: "weaponCheap",
	result: {
		EN: "Hatchet ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Blacksmith hammer ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Saber ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Iron-headed club ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	price: "weaponFair",
	result: {
		EN: "Lever-action rifle ({$.playerHitpoints.getDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "medium" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Lever-action rifle ({$.playerHitpoints.getDebuff()} damage), with {rangedStat} + 10 cartridges"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Spiked club ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "strong" ],
	price: "weaponFair",
	result: {
		EN: "Executioner cleaver ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "strong" ],
	price: "weaponPricey",
	result: {
		EN: "Double-barrel shotgun ({$.playerHitpoints.getLargeDebuff()} damage)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "strong" ],
	requires: [
		{ id: "rangedStat", reuse: true, ofTags: [ [ "stat-ranged" ], [ "stat-ranged-simple" ], [ "stat-ranged-simple-alt" ] ] }
	],
	result: {
		EN: "Double-barrel shotgun ({$.playerHitpoints.getLargeDebuff()} damage), with {rangedStat} + 10 shells"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "extreme" ],
	price: "weaponVeryPricey",
	result: {
		EN: "Railroad sledgehammer ({$.playerHitpoints.getVeryLargeDebuff()} damage)"
	}
}
];

WEAPONS.forEach((item,id)=>{
    let
        tags = [ item.isAmmo ? "ammo" : "weapon", "ammoweapon" ].concat(item.tags),
        requires = [];

    if (item.isStarting)
        tags.push("startingweapon");

    if (item.price) {
        requires.push({ id:"getPrice", reuse:true, call:item.price, ofTags:[ [ "trait", "money" ] ] });
        tags.push("weaponprice");
    }

    DATABASE.push({
        id:"weapon-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:tags,
        requires:item.requires ? requires.concat(item.requires) : requires,
        methods:item.methods || {},
        render:item.result
    })
})

})();