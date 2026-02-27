(function(){

let
    DEFENSES = [
{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Shield Block"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Battle Trance"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Brace Impact"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Counterspell"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Energy Shield"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Evasion Step"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Formation Guard"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Healing Prayer"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Iron Will"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Magic Barrier"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Protective Charm"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Sanctuary Field"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Smoke Bomb"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Thick Hide"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Burrow Escape"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Frost Barrier"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Magic Ward"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Lava Plating"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Reflective Hide"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Regeneration"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Scale Armor"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Shell Guard"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Spore Cloud"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Stone Skin"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Ward Sigil"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Flesh Harden"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Grave Moss"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Ichor Skin"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Pain Trance"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Mirror Image"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Leech Link"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Pain Split"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Rotten Shell"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Shadow Veil"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Spite Guard"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Bone Plating"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Venom Aura"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Blood Ward"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Bone Shield"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Corpse Wall"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Death Throw"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Mist Form"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Necro Aura"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Soul Bind"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Spirit Blur"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Void Shift"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Armor Plating"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Deflect Strike"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Dodge Roll"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Guard Raise"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Parry Stance"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Tactical Retreat"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Silent Treatment"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Shadow Escape"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Paper Trail"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Guard Dog"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Illusion Double"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Iron Stance"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Shadow Cloak"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Smoke Screen"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Mirror Ruse"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Bunker Down"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Hostage Tactic"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Vanishing Trail"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Wide Eyes"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Feral Instinct"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Neutral Shielding"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Optical Camouflage"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Subdermal Armor"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Holographic Decoy"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Data Wall"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Kinetic Field"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Adrenaline Surge"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Decoy Drone"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Protective Field"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Feedback Loop"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Kevlar"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Liquid Coolant"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Emergency Buffer"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Optical Glitch"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Hardening"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Neuromorphism"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Logic Bomb"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Skin Mesh"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Thermal Sink"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Carbon Plating"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Self-Repair"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Blast Shield"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Iron Fan"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Counter"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Tatami Guard"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Guarding Talisman"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Earth Stance"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Zen Breathing"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Smoke Veil"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Concealment"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Prayer"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Parry"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Mountain Stance"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Ghost Step"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "God Toughness"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Barrier"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Shadow Bind"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Phase Shift"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Frost Breath"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Fish Armor"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Shell"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Spirit Shield"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Wing Shield"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Duster Swirl"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Quick Roll"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Slide"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Distraction"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Whiskey"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Wagon Wheel"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Hard Hat"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Boilerplate Vest"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Dodge"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Swift"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Medicine"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Abyssal Dive"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Artic Swirl"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Boiling"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Glare"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Coral Crust"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Fin Wall"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Siren Protection"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Devil Dust"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Survival Instinct"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Mirage"
	}
}
    ];

DEFENSES.forEach((item,id)=>{
    DATABASE.push({
        id:"adversardefense-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:["adversary","defense"].concat(item.tags),
        render:item.result
    })
})

})();