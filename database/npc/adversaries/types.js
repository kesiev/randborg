(function(){

let
    TYPES = [
{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Pirate"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Sailor"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Leprechaun"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Fairy"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Bedouin"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Cultist"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Squire"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Inquisitor"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Captain"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Scavenger"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Berserker"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Poacher"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Elf"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Goblin"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Halfling"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Nymphs"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Half-Elf"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Ogre"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Yeti"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Satyr"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Warrior"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Gnome"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Dwarf"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Orc"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Giant"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Troll"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Golem"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Dryad"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Centaur"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Minotaur"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Gnoll"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Cyclop"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Colossus"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Penguin"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Folk"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Serpent"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Turtle"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Worm"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Bug"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Falcon"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Spider"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Eel"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Viper"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Bee"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Ant"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Owl"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Frog"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Plant"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Fennec"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Unicorn"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Harpy"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Owlman"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Lizard"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Whisp"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Siren"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Shark"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Jellyfish"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Mermaid"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Lion"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Sphinx"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Hyena"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Crocodile"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Anaconda"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Wolf"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Leopard"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Bison"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Walrus"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Oxen"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Blob"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Swarm"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Piranha"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Will-o'-Wisp"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Monster"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Dragon"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Manticore"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Griffin"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Phoenix"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Elemental"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Hydra"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Triton"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Basilisk"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Cockatrice"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Djinn"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Pharaoh"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Bear"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Owlbear"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Mammoth"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Jaguar"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Goon"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Biker"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Corporative"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Punk"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Tech Scavenger"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Pit Fighter"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Civilian"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Hitman"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Infiltrator"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Decker"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Bodyguard"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Cult Leader"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Street Samurai"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Hacker"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Fixer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Screamer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Bomber"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Preacher"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Commando"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Soldier"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Chrome"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Enforcer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Trauma Soldier"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Puppeteer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Netrunner"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Holosuit"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Breaker"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Patrol"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Cop"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Botswarm"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Relay"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Controller"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Waste Disposal"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Surveillance"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Robot"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Inquirer"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Android"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Nightstick"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Punisher"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Neuromapper"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Dual Unit"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Sentry"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Hub"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Chrono"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Eraser"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Tank"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Mech"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Bodyblade"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Overseer"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Eradicator"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Centurion"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Incinerator"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Mainframe"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Core"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Exorcist"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Priest"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Foot Soldier"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Servant"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Delinquent"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Zealot"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Scammer"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Saboteur"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Zen"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Ronin"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Blacksmith"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Geisha"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Duelist"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Brute"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Yakuza"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Illusionist"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Spiritualist"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Mother"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Shinobi"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Monk"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Boss"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Ninjutsu Master"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Head Collector"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Soul Collector"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Blood Drinker"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Manslayer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Occult Diviner"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Umbrella"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Tatami"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Tanuki"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Cat"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Shadow"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Chicken"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Fish"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Silhouette"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Rush"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Tengu"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Lantern"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Long Neck"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Yokai"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Sickle Weasel"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Flaming Wheel"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Fake"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Kappa"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Cape"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Fox"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Infant"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Oni"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "God"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Satori"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Cry"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Scream"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Crackle"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Naked"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Freak"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Grabber"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Rustler"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Keg"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Gambler"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Jailbreaker"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Bartender"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Horseman"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Escapee"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Gunslinger"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Traitor"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Dancer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Prospector"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Sniper"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Arsonist"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Betrayer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Outlaw"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Miner"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Desperado"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Sheriff"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Marshal"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Villain"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Undertaker"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Finisher"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Dinamiter"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Clown"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Skinner"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Cactus"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Snake"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Cow"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Mirage"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Coyote"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Rattlesnake"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Boar"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Porcupine"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Goat"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Mothman"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Tree"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Alligator"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Vulture"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Tarantula"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Centipede"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Eagle"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Scorpion"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Dweller"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Totem"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Train"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Wendigo"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Jackalope"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Chupacabra"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Carrion"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Stallion"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Widow"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Stitcher"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Swine"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Hag"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Rebel"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Crawler"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Murderer"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Infected"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Hangman"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Tormentor"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Sadist"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Madman"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Sprite"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Exile"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Killer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Torturer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Executioner"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Butcher"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Psycho"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Blasphemer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Lich"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Witch"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Vampire"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Necromancer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Occultist"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Cannibal"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Corruptor"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Devourer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Heretic"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Skeleton"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Zombie"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Ghost"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Mummy"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Maggots"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Ghoul"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Fiend"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Wight"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Rat"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Poltergeist"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Gargoyle"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Hellhound"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Spirit"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Mutant"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Slayer"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Scourge"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Thrall"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Husk"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Abomination"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Banshee"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Reaper"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Grave"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Eater"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Revenant"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Flayer"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Horror"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Wraith"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Leech"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Kraken"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Informant"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Suspect"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Henchman"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Cleaner"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Drifter"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Snitch"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Fugitive"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Instigator"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Fraud"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Charlatan"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Mole"
	}
},{
	tags: [ "average", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Prowler"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Assassin"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Blackmailer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Accomplice"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Watchman"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Smuggler"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Thug"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Bouncer"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Brigand"
	}
},{
	tags: [ "trained", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Thief"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Gatekeeper"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Imposter"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Guard"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Ironclad"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Sentinel"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Observer"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Mastermind"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Head-hunter"
	}
},{
	tags: [ "strong", "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Renegade"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Stalker"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Collector"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Ooze"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Parasite"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Lurker"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Dog"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Eye"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Hawk"
	}
},{
	tags: [ "average", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Larva"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Doppelganger"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Mimic"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Leecher"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Creeper"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Watcher"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Snatcher"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Monolith"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Predator"
	}
},{
	tags: [ "trained", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Amorphous"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Shapeshifter"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Changeling"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Haunter"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Possessor"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Vessel"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Conduit"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Nebula"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Outsider"
	}
},{
	tags: [ "strong", "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Cosmophore"
	}
}
];

TYPES.forEach((item,id)=>{
    DATABASE.push({
        id:"adversarytype-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:["adversary","type"].concat(item.tags),
        render:item.result
    })
})

})();