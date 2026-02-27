DATABASE = (window.DATABASE || []).concat([
{
    id:"food-simple",
    tags:[ "trait", "food", "startingitementry", "stopstarvingentry" ],
    addFlags:[ "food" ],
    requires:[
        { id:"diceroll", ofTags:[ [ "single", "diceroll", "d4" ]]}
    ],
    methods:{
        startingItemsSteps:{
            EN:"{diceroll} days worth of food"
        },
        stopStarvingAction:{
            EN:"food"
        },
        onRest:{
            EN:" - Without food or drink no {$.hitpointsLabel.getShortName()} is restored when resting and after two days a starving PC loses {$.playerHitpoints.getSmallInjury()} per day."
        }
    }
},{
    id:"drink-simple",
    tags:[ "trait", "drink", "startingitementry", "stopstarvingentry", "shortrestaction"  ],
    addFlags:[ "drink" ],
    methods:{
        startingItemsSteps:{
            EN:"a waterskin"
        },
        stopStarvingAction:{
            EN:"drink"
        },
        shortRestAction:{
            EN:"have a drink"
        }
    }
},{
    id:"special-starving",
    tags:[ "trait", "starving", "restaction" ],
    methods:{
        onRest:{
            EN:" - Without {$.makeCallListOf(0,\"stopstarvingentry\",\"stopStarvingAction\",1)} no {$.hitpointsLabel.getShortName()} is restored when resting and after two days a starving PC loses {$.playerHitpoints.getSmallInjury()} per day."
        }
    }
},
]);