(function(){

let
    ATTACKS = [
{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Arcane Blast"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Battlecry"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Beast Summon"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Divine Smite"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Fireball"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Frostbite"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Illusion Magic"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Lightning Strike"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Mindblast"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Poisoned Dagger"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Rune Trap"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Shadowstep"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Spellcasting"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Swordplay"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Telekinesis"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Acid Spray"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Flame Breath"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Frost Howl"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Pounce Strike"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Rending Bite"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Sonic Screech"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Soul Roar"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Tail Lash"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Thunder Stomp"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Toxic Cloud"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Wing Buffet"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Dragonfire"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Blood Magic"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Necromancy"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Curse Weaving"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Strangle"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Rip"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Tear"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Impale"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Sever"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Infect"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Drain"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Laceration"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Skull Crack"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Bone Crush"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Gore Charge"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Shadow Maul"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Spine Volley"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Soul Drain"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Haunt"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Soul Reap"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Mind Break"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Crypt Breath"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Abyss Gaze"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "False Witness"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Throat Slit"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Blood Trail"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Blunt Force"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Quiet Stalk"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Arsenic Lace"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Muffled Cry"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Cold Trail"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Asphyxiation"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Bone Snap"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Throat Crush"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Skin Mask"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Spatter Acid"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Needle Teeth"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Hypnotic Eye"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Vile Vomit"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Spine Launch"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Nerve Pinch"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Echo Scream"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Shadow Melt"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Hive Call"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Eviscerate"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Pulse Cannon"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Signal Jammer"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Drone Swarm"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Overload Hack"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Thermite Grenade"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Cryoleak"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "EMP Discharge"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Neurovirus"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Mag-grip"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Railgun"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Hydraulic Pounce"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Pneumatic Crash"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Decibel Feedback"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Servo Grip"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Piston"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Neurotoxin"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Plasma"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "EMP Pulse"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Thermal Discharge"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Synthetic Venom"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Spirit Palm"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "War Drum Roar"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Shikigami"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Celestial Edge"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Dragon Breath"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Winter Touch"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Mirror Dance"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Heaven Fang"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Kunai"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Talisman Seal"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Jade Talon"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Kitsunebi"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Tiger Leap"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Ancestral Wrath"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Serpent Coil"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Ghost Grasp"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Curse"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Divine Flame"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Tentacle Grab"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Deep Bite"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Double Kick"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Yell"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Bloodhound"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Molotov"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Quick Draw"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Steely Gaze"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Lasso Snag"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Spit"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Chain"
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Deadman Hand"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Rusty Spur"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Claw Swipe"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Venom Spit"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Buffalo Stampede"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Locomotive"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Oil Spray"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Web Snare"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Cyclone"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Brimstone Blast"
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Howl"
	}
}
];
ATTACKS.forEach((item,id)=>{
    DATABASE.push({
        id:"adversaryattack-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:["adversary","attack"].concat(item.tags),
        render:item.result
    })
})

})();