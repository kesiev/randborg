(function(){

let
    DESCRIPTIONS = [
{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It stands smaller than its fear."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its breath steadies the storm inside."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its eyes refuse to close."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its grip tightens on nothing."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its hands shake, but do not lower."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its hope is stubborn."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It breathe like the dark might answer."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It knows they are alone."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It looks breakable, but remain."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It stands where others would flee."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It does not blink."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its skin is tough as cured leather."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "A faint whisper follows its steps."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It feels like being measured."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It moves like smoke given hunger."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It never seems fully solid."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It stands too still to be natural."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its outline flickers like heat haze."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its reflection doesn't match."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its shadow moves a second too late."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its shadow stretches toward you."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its shape shifts at the edge of vision."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Its skin shimmers like oil on water."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Light bends strangely across its form."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "The air grows colder when it watches."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "The air tightens around it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "The ground seems to recoil beneath it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "The scent of iron lingers around it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "The wind avoids it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "It watches like prey that learned to hunt."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its fear tastes metallic."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its heartbeat fills the silence."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its shadow stretches longer than he does."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It moves as if already wounded."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It listens for what is not there."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It hums in a language without words."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It tilts its head like it's learning you."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its eyes reflect no light."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its joints bend the wrong way."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its breath smells of rot and grave soil."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It casts no reflection."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It sees through the eyes of carrion birds."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its posture mimics the dead."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It breathes, but has no chest."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It smells faintly of rain and rot."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It stands where the light thins."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its skin looks carved, not grown."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its teeth are too numerous."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Something inside it pulses with light."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its claws drip with paralytic venom."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It mimics the voices of the dead."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its blood burns like acid."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Its footsteps leave frost on the ground."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "It can crawl across walls like a spider."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its voice almost falters."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It carries more than it shows."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It swallows doubt like medicine."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It watches the sky as if waiting."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its gaze lingers too long."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its footsteps leave no trace."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its eyes glow with cold blue light."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It senses fear like a beacon."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its flesh hardens just before impact."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its hands tremble only when idle."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its veins map a path to nowhere."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its heart is a clock ticking toward zero."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its throat is a cage for a scream."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "A low hum follows in its wake."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It breathes in slow, patient rhythms."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It listens more than it moves."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It moves without disturbing the grass."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It watches from where nothing should stand."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its presence presses against the mind."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its voice sounds borrowed."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "The earth cracks softly beneath it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its bones are laced with iron."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It drinks memories from its victims."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It tracks prey by heartbeat alone."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It leaves claw marks that never heal."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "It can leap impossible distances."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Its gaze causes vivid hallucinations."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It pulses with a neon fever that never breaks."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its heartbeat is a rhythmic, humming glitch."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its skin is a map of scarred ports and cooling vents."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It moves with the jagged grace of a dying signal."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its nerves are frayed copper, sparking in the rain."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It breathes like a machine trying to remember how to sigh."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It stands where the city's light dies, waiting for the reboot."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its silence is the sound of a hard drive spinning toward failure."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It stands in the glare of a broken billboard, waiting for a signal."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its hope is a backup file that was corrupted years ago."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It knows the algorithm of its own inevitable defeat."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its outline flickers like a low-refresh rate hologram."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "A faint static hum follows its steps."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its shadow is rendered in a lower resolution than the floor."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "The air grows heavy with the scent of ozone and burnt silicon."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Security feeds show only an empty hallway where it stands."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It stands with the terrifying stillness of a crashed program."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Data streams bleed from its skin like digital sweat."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "It stands with the stillness of a paused video."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its voice is a layered chorus of corrupted audio files."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Light reflects off its surface in colors that don't exist on the spectrum."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Its movements are a series of frame-skips."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its breath is the only sound in the bamboo thicket."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its eyes are fixed on a horizon that no longer exists."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its feet do not disturb the dust of the road."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its shadow is longer than its history."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It moves with the patience of a winter frost."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its skin is etched with the calligraphy of a hundred battles."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It knows that honor is a heavy shroud to wear."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its heart is a cold hearth, yet it still smells of smoke."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its hope is a folded paper crane, sodden and grey."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It knows the name of every ancestor who died in the fire."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It does not flinch when the blade kisses its throat."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its shadow stretches toward you even when the sun is overhead."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It moves like ink dropped into clear water."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It watches you with the patience of a mountain, but the hunger of a wolf."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "The scent of old burial incense and wet earth clings to it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "The scent of stagnant water and ancient silk follows it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Its eyes reflect a moon that isn't in the sky."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It stands in a way that suggests it has no bones."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "A faint, mournful flute plays from the shadows it casts."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "The mist turns into a thick, suffocating shroud around it."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "It stands in a posture that suggests it's perpetually falling."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "The wind carries the sound of a thousand whispering voices."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It stands smaller than the shadow of the mesa."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its eyes are narrowed against a sun that never sets."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its hands are steady as a tombstone, and just as cold."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its spurs jingle like a funeral bell in the wind."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It knows that the crows are the only ones left to judge."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its eyes have forgotten the color of anything but dust."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its hope is a rusted star pinned to a threadbare chest."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It looks like a pillar of salt, but it moves like a rattlesnake."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its skin is a ledger of every bullet it ever failed to dodge."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its grip is precise, lacking the passion of a killer."
	}
},{
	tags: [ "humanlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It does not speak, for the contract is already signed."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "The dust avoids it, swirling in a circle but never settling on its skin."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It watches like a coyote that has forgotten how to fear the gun."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It moves like a tumbleweed caught in a gale."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Its shadow is darker than any hole in the ground."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It stands so still that even the vultures are fooled."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "The sound of dry bones rattling follows its every step."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "The sand beneath it turns to a fine, white powder."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Cattle and horses begin to lather and bolt miles before it arrives."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It ripples like a mirage."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It moves like a secret being kept."
	}
},{
	tags: [ "beastlike" ],
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "It moves like a stutter in a heartbeat."
	}
}
];

DESCRIPTIONS.forEach((item,id)=>{
    DATABASE.push({
        id:"adversarydescription-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:["adversary","description"].concat(item.tags),
        render:item.result
    })
})

})();