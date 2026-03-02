(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"transportation-simple",
    tags:[ "starting", "transportation", "startingitemtableentry", "startingitembagentry" ],
	orders:{
        startingItemTableEntry:1
    },
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d6" ] ] },
        { id:"small", ofTagBags:[ [ "transport", "small", "startingtransport" ] ] },
        { id:"medium", ofTagBags:[ [ "transport", "medium", "startingtransport" ] ] },
        { id:"large", ofTagBags:[ [ "transport", "large", "startingtransport" ] ] },
        { id:"transport", ofTagBags:[ [ "transport", "wagon", "startingtransport" ] ] },
    ],
    methods:{
        startingItem:[
            { weight:2, result: {
                EN:"Nothing"
            } }
        ],
        rollTable:{
            EN:"[:tablehead:]{diceroll}[:endtablehead:]\n{diceroll.createRangeTableForTag(\"startingtransport\",this,\"startingtransport\")}"
        }
    }
}
]);

let
    TRANSPORTS = [
{
	isStarting: true,
	tags: [ "small" ],
	result: {
		EN: "Backpack (Holds 7 normal-sized items)"
	}
},{
	isStarting: true,
	tags: [ "medium" ],
	price: "materialCheap",
	result: {
		EN: "Sack for 10 normal-sized items"
	}
},{
	tags: [],
	price: "toolFair",
	result: {
		EN: "Small wagon"
	}
},{
	isStarting: true,
	tags: [ "large" ],
	result: {
		EN: "Small wagon or one item above of your choice"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	isStarting: true,
	tags: [ "wagon" ],
	result: {
		EN: "Donkey or one item above of your choice"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	isStarting: true,
	tags: [ "wagon" ],
	result: {
		EN: "Mule or one item above of your choice"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	isStarting: true,
	tags: [ "wagon" ],
	result: {
		EN: "Sidecar or one item above of your choice"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	isStarting: true,
	tags: [ "wagon" ],
	result: {
		EN: "Levitating platform or one item above of your choice"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	isStarting: true,
	tags: [ "wagon" ],
	result: {
		EN: "War horse or one item above of your choice"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	isStarting: true,
	tags: [ "wagon" ],
	result: {
		EN: "Horse or one item above of your choice"
	}
}
];

TRANSPORTS.forEach((item,id)=>{
    let
        tags = [ "transport" ].concat(item.tags),
        requires = [];

    if (item.isStarting)
        tags.push("startingtransport");
    if (item.price) {
        requires.push({ id:"getPrice", reuse:true, call:item.price, ofTags:[ [ "trait", "money" ] ] });
        tags.push("accessoryprice");
    }

    DATABASE.push({
        id:"transport-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:tags,
        requires:item.requires ? requires.concat(item.requires) : requires,
        methods:item.methods || {},
        render:item.result
    })
})

})();