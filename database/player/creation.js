DATABASE = (window.DATABASE || []).concat([
{
    id:"player-creation-simple",
    tags:[ "player", "creation" ],
    requires:[
        { id:"$.startingWeapons", ofTags:[ [ "starting", "weapons" ] ] },
        { id:"$.startingArmors", ofTags:[ [ "starting", "armors" ] ] },
        { id:"$.startingTransportation", ofTags:[ [ "starting", "transportation" ] ] },
        { id:"$.startingAccessories1", ofTags:[ [ "starting", "accessories" ] ] },
        { id:"$.startingAccessories2", ofTags:[ [ "starting", "accessories" ] ] },

        { id:"$.weapons", ofTags:[ [ "extra", "weapons" ] ] },
        { id:"$.armors", ofTags:[ [ "extra", "armors" ] ] },
        { id:"$.accessories", ofTags:[ [ "extra", "accessories" ] ] },
        { id:"$.services", ofTags:[ [ "extra", "services" ] ] },
        { id:"$.animals", ofTags:[ [ "extra", "animals" ] ] },

        { times:3, id:"lifegoal", ofTagBags:[ [ "oracle", "lifegoal" ] ] }
    ],
    render:{
        EN:"[:block:]\n- Randomize your starting equipment.\n{$.callAll(0,\"creationentry\",\"creationSteps\")} - Name your character if you wish. It will not save you.\n[:endblock:]\n## Optional rules\n[:block:]\n{$.callAll(0,\"optionalcreationentry\",\"creationSteps\")}\n[:endblock:]\n[::]\n# Starting equipment\n[:block:]\n\n{$.all(this,\"lifegoal\",\" \")}\n\nYou begin with {$.makeCallListOf(0,\"startingitementry\",\"startingItemsSteps\",0)}.\n\nThen you own:\n[:endblock:]\n{$.callAll(0,\"startingitemtableentry\",\"rollTable\",\"\",\"startingItemTableEntry\")}\n{$.callAll(0,\"extraitemstableentry\",\"rollTable\",\"\",\"extraItemsTableEntry\")}"
    }
}
]);
