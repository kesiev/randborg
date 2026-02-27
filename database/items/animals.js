(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"extraanimals-simple",
    tags:[ "extra", "animals", "extraitemstableentry" ],
	orders:{
        extraItemsTableEntry:2
    },
    requires:[
        { reuse:false, id:"animalVeryCheap", ofTagBags:[ [ "animalVeryCheap" ] ] },
        { times:2, reuse:false, id:"animalCheap", ofTagBags:[ [ "animalCheap" ] ] },
        { reuse:false, id:"animalFair", ofTagBags:[ [ "animalFair" ] ] },
        { reuse:false, id:"animalVeryPricey", ofTagBags:[ [ "animalVeryPricey" ] ] },
    ],
    methods:{
        rollTable:{
            EN:"[::]\n# Animals\n\n{$.makeTable(0,\"animalprice\",\"getPrice\",2)}"
        }
    }
}]);

let
    ANIMALS = [
{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	result: {
		EN: "Silent owl ({$.playerHitpoints.getBuff()}+{$.playerHitpoints.getSmallBonus()}, beak {$.playerHitpoints.getSmallDebuff()}, only obeys you)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} sprites spying on you ({$.playerHitpoints.getSmallBuff()}+{$.playerHitpoints.getSmallBonus()}, tiny spear {$.playerHitpoints.getSmallDebuff()})"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	result: {
		EN: "Scary crow ({$.playerHitpoints.getBuff()}+{$.playerHitpoints.getSmallBonus()}, claws {$.playerHitpoints.getSmallDebuff()}, only obeys you)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-grim" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} bats following you ({$.playerHitpoints.getSmallBuff()}+{$.playerHitpoints.getSmallBonus()}, scratch {$.playerHitpoints.getSmallDebuff()})"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	result: {
		EN: "Small but vicious dog ({$.playerHitpoints.getBuff()}+{$.playerHitpoints.getSmallBonus()}, bite {$.playerHitpoints.getSmallDebuff()}, only obeys you)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-investigation" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} monkeys that ignore but love you ({$.playerHitpoints.getSmallBuff()}+{$.playerHitpoints.getSmallBonus()}, punch/bite {$.playerHitpoints.getSmallDebuff()})"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "animalVeryCheap",
	result: {
		EN: "Rat (tame)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "animalCheap",
	result: {
		EN: "Salamander (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "animalCheap",
	result: {
		EN: "Mule"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "animalFair",
	result: {
		EN: "Owl (trained)"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	price: "animalVeryPricey",
	result: {
		EN: "Warg, rideable"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "animalVeryCheap",
	result: {
		EN: "Bat (tame)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "animalCheap",
	result: {
		EN: "Hyena (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "animalCheap",
	result: {
		EN: "Ox"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "animalFair",
	result: {
		EN: "Raven (trained)"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	price: "animalVeryPricey",
	result: {
		EN: "Hellhound, rideable"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "animalVeryCheap",
	result: {
		EN: "Hamster (tame)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "animalCheap",
	result: {
		EN: "Dog (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "animalCheap",
	result: {
		EN: "Donkey"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "animalFair",
	result: {
		EN: "Dog (trained)"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	price: "animalVeryPricey",
	result: {
		EN: "Horse"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	result: {
		EN: "Personal drone ({$.playerHitpoints.getBuff()}+{$.playerHitpoints.getSmallBonus()}, stun gun {$.playerHitpoints.getSmallDebuff()}, only obeys you)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "A cloud of {diceroll} nanobots ({$.playerHitpoints.getSmallBuff()}+{$.playerHitpoints.getSmallBonus()}, infect {$.playerHitpoints.getSmallDebuff()})"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "animalVeryCheap",
	result: {
		EN: "Small biopet (modified)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "animalCheap",
	result: {
		EN: "Stray dog"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "animalCheap",
	result: {
		EN: "Iguana"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "animalFair",
	result: {
		EN: "Monkey (trained)"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	price: "animalVeryPricey",
	result: {
		EN: "Cat (8 lives)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	result: {
		EN: "Cat ({$.playerHitpoints.getBuff()}+{$.playerHitpoints.getSmallBonus()}, scratch {$.playerHitpoints.getSmallDebuff()}, only obeys you)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-japan" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} spiders crawling on you ({$.playerHitpoints.getSmallBuff()}+{$.playerHitpoints.getSmallBonus()}, sting {$.playerHitpoints.getSmallDebuff()})"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "animalVeryCheap",
	result: {
		EN: "Turtle"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "animalCheap",
	result: {
		EN: "Forest fox (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "animalCheap",
	result: {
		EN: "Hare (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "animalFair",
	result: {
		EN: "Snake (trained)"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	price: "animalVeryPricey",
	result: {
		EN: "Warhorse"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	result: {
		EN: "Cattle dog ({$.playerHitpoints.getBuff()}+{$.playerHitpoints.getSmallBonus()}, bite {$.playerHitpoints.getSmallDebuff()}, only obeys you)"
	}
},{
	isStarting: true,
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	requires: [
		{ id: "diceroll", ofTags: [ [ "single", "diceroll", "d4" ] ] }
	],
	result: {
		EN: "{diceroll} vultures helping you while waiting for your deah ({$.playerHitpoints.getSmallBuff()}+{$.playerHitpoints.getSmallBonus()}, talons {$.playerHitpoints.getSmallDebuff()})"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "animalVeryCheap",
	result: {
		EN: "Wild turkey"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "animalCheap",
	result: {
		EN: "Coyote (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "animalCheap",
	result: {
		EN: "Rattlesnake (wild)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "animalFair",
	result: {
		EN: "Wolf (trained)"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	price: "animalVeryPricey",
	result: {
		EN: "Giant bison"
	}
}
];

ANIMALS.forEach((item,id)=>{
    let
        tags = [ "animal" ],
        requires = [];

    if (item.isStarting)
        tags.push("startingaccessory");

    if (item.price) {
        requires.push({ id:"getPrice", reuse:true, call:item.price, ofTags:[ [ "trait", "money" ] ] });
        tags.push("animalprice");
        tags.push(item.price);
    }

    DATABASE.push({
        id:"animal-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:tags,
        requires:item.requires ? requires.concat(item.requires) : requires,
        methods:item.methods || {},
        render:item.result
    })
})

})();