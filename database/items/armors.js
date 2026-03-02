(function(){

DATABASE = (window.DATABASE || []).concat([
{
    id:"armors-simple",
    tags:[ "starting", "armors", "startingitemtableentry", "magicexception" ],
    orders:{
        startingItemTableEntry:4
    },
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d4" ]]},
        { id:"limitedDiceroll", ofTags:[ [ "single", "diceroll", "d2" ]]},
        { reuse:false, id:"noArmor", ofTagBags:[ [ "armor", "none" ] ] },
        { reuse:false, id:"lightArmor", ofTagBags:[ [ "armor", "light", "startingarmor" ] ] },
        { reuse:false, id:"mediumArmor", ofTagBags:[ [ "armor", "medium", "startingarmor" ] ] },
        { reuse:false, id:"heavyArmor", ofTagBags:[ [ "armor", "heavy", "startingarmor" ] ] },
    ],
    methods:{
        getException:{
            EN:"wearing medium/heavy armors"
        },
        rollTable:{
            EN:"[::]\n## Armor\n\n[:tablehead:]{diceroll} ({limitedDiceroll} if you begin with a scroll)[:endtablehead:]\n{diceroll.createRangeTableForTag(\"startingarmor\",this,\"startingarmor\")}"
        }
    }
},{
    id:"extraarmors-simple",
    tags:[ "extra", "armors", "extraitemstableentry" ],
    orders:{
        extraItemsTableEntry:5
    },
    /*
    requires:[
        { times:1, reuse:false, id:"armor", ofTagBags:[ [ "armorprice" ] ] }
    ],
    */
    methods:{
        rollTable:{
            EN:"[::]\n# Armors\n\n{$.makeTable(0,\"armorprice\",\"getPrice\",2)}"
        }
    }
}]);

let
    ARMORS = [
        {
            tags:[ "onetime", "accessory", "startingaccessory" ],
            price:"weaponFair",
            result:{
                EN:"Shield (-{$.playerHitpoints.getVerySmallBonus()} damage or have the shield break to ignore one attack)"
            }
        },{
            tags:[ "none", "startingarmor" ],
            result:{
                EN:"No armor ({$.protection.tier0Modifier()}, {$.protection.tier0Name()}: _{$.protection.tier0Effect()}_)"
            }
        },{
            isStarting:true,
            tags:[ "light" ],
            price:"weaponFair",
            result:{
                EN:"Light armor (fur, padded cloth, leather etc, {$.protection.tier1Modifier()}, {$.protection.tier1Name()}: _{$.protection.tier1Effect()}_)"
            }
        },{
            isStarting:true,
            tags:[ "medium" ],
            price:"weaponSuperPricey",
            result:{
                EN:"Medium armor (scale, mail etc, {$.protection.tier2Modifier()}, {$.protection.tier2Name()}: _{$.protection.tier2Effect()}_)"
            }
        },{
            isStarting:true,
            tags:[ "heavy" ],
            price:"weaponMegaPricey",
            result:{
                EN:"Heavy armor (splint, plate etc, {$.protection.tier3Modifier()}, {$.protection.tier3Name()}: _{$.protection.tier3Effect()}_)"
            }
        }
    ];

ARMORS.forEach((item,id)=>{
    let
        tags = [ "armor" ].concat(item.tags),
        requires = [];

    if (item.isStarting)
        tags.push("startingarmor");

    if (item.price) {
        requires.push({ id:"getPrice", reuse:true, call:item.price, ofTags:[ [ "trait", "money" ] ] });
        tags.push("armorprice");
    }

    DATABASE.push({
        id:"armor-"+id,
        ifAnyFlag:item.ifAnyFlag,
        tags:tags,
        requires:item.requires ? requires.concat(item.requires) : requires,
        methods:item.methods || {},
        render:item.result
    })
})

})();