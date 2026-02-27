(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"extrasetting-oracle-requests",
    tags:[ "extrasetting", "optionalcreationentry" ],
    requires:[
        { id:"spellLightDiceroll", ofTags:[ [ "single", "diceroll", "20+" ]]},
        { times:20, id:"requestSetting", ofTagBags:[ [ "oracle", "requests" ] ]},
        { id:"ruler", reuse:true, ofTags:[ [ "ruler" ] ] },
    ],
    methods:{
        creationSteps:{
            EN:" - Roll {ruler.getDemandName()}.\n"
        }
    },
    render:{
        EN:"# {$.capital(ruler.getDemandName())}\n\n{spellLightDiceroll.createRangeTableForTag(0,\"oraclerequests\")}"
    }
},
]);

let
    REQUESTS = [
{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "meleeweapon", ofTags: [ [ "oracle", "meleeweapon" ] ] }
	],
	result: {
		EN: "{$.capital(meleeweapon())} onto which the condemned carved their victims' name"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "A victim of obsessive preservation"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())}'s wedding ring"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "lake", ofTags: [ [ "oracle", "lake" ] ] }
	],
	result: {
		EN: "Someone hidden in {lake()}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "The wish of {innocentperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] },
		{ id: "festivity", ofTags: [ [ "oracle", "festivity" ] ] }
	],
	result: {
		EN: "{$.capital(creature())} from {festivity()} massacre"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "The murderer of {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "mineral", ofTags: [ [ "oracle", "mineral" ] ] },
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(mineral())} stolen by {badperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "bodyfluid", ofTags: [ [ "oracle", "bodyfluid" ] ] }
	],
	result: {
		EN: "What's at the end of {bodyfluid()} trail"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "multiple", ofTags: [ [ "oracle", "multiple" ] ] },
		{ id: "unprocessedfood", ofTags: [ [ "oracle", "unprocessedfood" ] ] }
	],
	result: {
		EN: "{$.capital(multiple())} rare {unprocessedfood()}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] },
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "{$.capital(creature())} from {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "mineral", ofTags: [ [ "oracle", "mineral" ] ] },
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "{$.capital(mineral())} from {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "bodypart", ofTags: [ [ "oracle", "bodypart" ] ] },
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(bodypart())} of {badperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "bodypart", ofTags: [ [ "oracle", "bodypart" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(bodypart())} of {creature()}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "bodypart", ofTags: [ [ "oracle", "bodypart" ] ] }
	],
	result: {
		EN: "{$.capital(bodypart())} of an executed innocent"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "The most precious possession from the grave of {badperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "meleeweapon", ofTags: [ [ "oracle", "meleeweapon" ] ] },
		{ id: "multiple", ofTags: [ [ "oracle", "multiple" ] ] }
	],
	result: {
		EN: "{$.capital(meleeweapon())} that has killed {multiple()} times"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "Eyes that have seen {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} born with the Mark"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "The chant of {badperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "mineral", ofTags: [ [ "oracle", "mineral" ] ] }
	],
	result: {
		EN: "{$.capital(mineral())} tombstone"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} on a pike"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "festivity", ofTags: [ [ "oracle", "festivity" ] ] },
		{ id: "processedfood", ofTags: [ [ "oracle", "processedfood" ] ] }
	],
	result: {
		EN: "{festivity()} {processedfood()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "evil", ofTags: [ [ "oracle", "evil" ] ] },
		{ id: "drink", ofTags: [ [ "oracle", "drink" ] ] },
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "The {evil()} {drink()} of {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "bodyfluid", ofTags: [ [ "oracle", "bodyfluid" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(bodyfluid())} of {creature()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "bodyfluid", ofTags: [ [ "oracle", "bodyfluid" ] ] },
		{ id: "mineral", ofTags: [ [ "oracle", "mineral" ] ] }
	],
	result: {
		EN: "{$.capital(bodyfluid())} of {mineral()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "processedfood", ofTags: [ [ "oracle", "processedfood" ] ] },
		{ id: "unprocessedfood", ofTags: [ [ "oracle", "unprocessedfood" ] ] },
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "{$.capital(processedfood())} and {unprocessedfood()} from {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] },
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} who served {innocentperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] },
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(creature())} enslaved by {badperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} turned into {creature()}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "multiple", ofTags: [ [ "oracle", "multiple" ] ] },
		{ id: "uniqueprefix", ofTags: [ [ "oracle", "uniqueprefix" ] ] },
		{ id: "unprocessedfood", ofTags: [ [ "oracle", "unprocessedfood" ] ] }
	],
	result: {
		EN: "{$.capital(multiple())} {$.capital(uniqueprefix())} {$.capital(unprocessedfood())}"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] },
		{ id: "uniqueprefix", ofTags: [ [ "oracle", "uniqueprefix" ] ] },
		{ id: "drink", ofTags: [ [ "oracle", "drink" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} {$.capital(uniqueprefix())} {$.capital(drink())}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] },
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} hired by {innocentperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} hiding something"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "lake", ofTags: [ [ "oracle", "lake" ] ] }
	],
	result: {
		EN: "The meat cultivated in {lake()}"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(creature())} pristine motherboard"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} AI"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "bodypart", ofTags: [ [ "oracle", "bodypart" ] ] }
	],
	result: {
		EN: "{$.capital(bodypart())} malware"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "meleeweapon", ofTags: [ [ "oracle", "meleeweapon" ] ] }
	],
	result: {
		EN: "{$.capital(meleeweapon())} of a corporate"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "bodyfluid", ofTags: [ [ "oracle", "bodyfluid" ] ] }
	],
	result: {
		EN: "{$.capital(bodyfluid())} infected by nanomachines"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} fixer"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} replicant"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(creature())} worshipper"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] },
		{ id: "multiple", ofTags: [ [ "oracle", "multiple" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} with {multiple()} heads"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} worshipper"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] },
		{ id: "lake", ofTags: [ [ "oracle", "lake" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} reflection on {lake()}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "meleeweapon", ofTags: [ [ "oracle", "meleeweapon" ] ] },
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(meleeweapon())} that killed {innocentperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "meleeweapon", ofTags: [ [ "oracle", "meleeweapon" ] ] }
	],
	result: {
		EN: "{$.capital(meleeweapon())} with no master"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "processedfood", ofTags: [ [ "oracle", "processedfood" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(processedfood())} cooked by {creature()}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "bodyfluid", ofTags: [ [ "oracle", "bodyfluid" ] ] },
		{ id: "processedfood", ofTags: [ [ "oracle", "processedfood" ] ] }
	],
	result: {
		EN: "{$.capital(bodyfluid())} and {processedfood()}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "festivity", ofTags: [ [ "oracle", "festivity" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{festivity()} blessed by {creature()}"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "multiple", ofTags: [ [ "oracle", "multiple" ] ] },
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "{$.capital(multiple())} souls from {poi()}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} treasure"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "{$.capital(badperson())} gun"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(creature())} last words"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} revenge"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} who killed {creature()}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "poi", ofTags: [ [ "oracle", "poi" ] ] }
	],
	result: {
		EN: "{poi()}'s marshall"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "meleeweapon", ofTags: [ [ "oracle", "meleeweapon" ] ] }
	],
	result: {
		EN: "{$.capital(meleeweapon())} that killed death"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "innocentperson", ofTags: [ [ "oracle", "innocentperson" ] ] },
		{ id: "festivity", ofTags: [ [ "oracle", "festivity" ] ] }
	],
	result: {
		EN: "{$.capital(innocentperson())} sacrified on {festivity()}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "badperson", ofTags: [ [ "oracle", "badperson" ] ] }
	],
	result: {
		EN: "The family of {badperson()}"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "processedfood", ofTags: [ [ "oracle", "processedfood" ] ] },
		{ id: "creature", ofTags: [ [ "oracle", "creature" ] ] }
	],
	result: {
		EN: "{$.capital(processedfood())} collected by {creature()}"
	}
}
];

REQUESTS.forEach((item,id)=>{
    DATABASE.push({
        id:"oracle-requests-"+id,
        ifAnyFlag:item.ifAnyFlag,
        requires:item.requires,
        methods:item.methods || {},
        tags:[ "oracle", "requests", "oraclerequests" ],
        render:item.result
    })
})

})();
