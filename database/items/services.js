(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"extraservices-simple",
    tags:[ "extra", "services", "extraitemstableentry" ],
	orders:{
        extraItemsTableEntry:3
    },
    requires:[
        { times:7, reuse:false, id:"basicServices", ofTagBags:[ [ "basic", "serviceprice" ] ] },
        { times:3, reuse:false, id:"extraServices", ofTagBags:[ [ "extra", "serviceprice" ] ] }
    ],
    methods:{
        rollTable:{
            EN:"[::]\n# Services\n\n{$.makeTable(0,\"serviceprice\",\"getPrice\",2)}"
        }
    }
}]);

let
    SERVICES = [
{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Send a messenger"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Short passage"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Night in hospice"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Post a notice"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Temporary hideout"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Sharing rumors"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Contact a fixer"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Public data paywall"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Massage"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Future prediction"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Full bath"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	tags: [ "extra" ],
	price: "materialCheap",
	result: {
		EN: "Barber-Surgeon service"
	}
},{
	tags: [ "basic" ],
	price: "materialVeryCheap",
	result: {
		EN: "Drink"
	}
},{
	tags: [ "basic" ],
	price: "materialVeryCheap",
	result: {
		EN: "Steady meal"
	}
},{
	tags: [ "basic" ],
	price: "serviceFairRange",
	result: {
		EN: "Bribe, guard"
	}
},{
	tags: [ "basic" ],
	price: "servicePriceyRange",
	result: {
		EN: "Bribe, clerk"
	}
},{
	tags: [ "basic" ],
	price: "serviceCheapRange",
	result: {
		EN: "Bribe, rabble"
	}
},{
	tags: [ "basic" ],
	price: "repairFair",
	result: {
		EN: "Repair armor (Tier 1 to 2)"
	}
},{
	tags: [ "basic" ],
	price: "repairPricey",
	result: {
		EN: "Repair armor (Tier 2 to 3)"
	}
}
];

SERVICES.forEach((item,id)=>{
    let
        tags = [ "service" ].concat(item.tags),
        requires = [];

    if (item.price) {
        requires.push({ id:"getPrice", reuse:true, call:item.price, ofTags:[ [ "trait", "money" ] ] });
        tags.push("serviceprice");
    }

    DATABASE.push({
        id:"service-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:tags,
        requires:item.requires ? requires.concat(item.requires) : requires,
        methods:item.methods || {},
        render:item.result
    })
})

})();