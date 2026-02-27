DATABASE = (window.DATABASE || []).concat([
{
    id:"combatrules-fantasy-simple",
    tags:[ "combatrules", "medieval" ],
    requires:[
        // --- Protection logic
        { id:"$.protection", reuse:true, ofTags:[ [ "protection" ] ] },
        
        // --- Actions
        { id:"attackMelee", reuse:true, ofTags:[ [ "action", "attack", "melee" ] ] },
        { id:"attackRanged", reuse:true, ofTags:[ [ "action", "attack", "ranged" ] ] },
        { id:"defence", reuse:true, ofTags:[ [ "action", "defence" ] ] },

        // --- Enemies hierarchy
        { id:"hierarchyLeader", ofTags:[ [ "hierarchy", "leader" ] ] },
        { id:"hierarchyGroup", ofTags:[ [ "hierarchy", "group" ] ] },

        // --- Initiative
        { id:"initiative", ofTags:[ [ "initiative" ] ]},

        // --- Flee
        { id:"morale", ofTags:[ [ "morale" ] ] },

        // --- Crits/Fumble
        { id:"criticalAttack", reuse:true, ofTags:[ [ "critical", "attack" ] ] },
        { id:"criticalDefense", reuse:true, ofTags:[ [ "critical", "defense" ] ] },
        { id:"fumbleAttack", reuse:true, ofTags:[ [ "fumble", "attack" ] ] },
        { id:"fumbleDefense", reuse:true, ofTags:[ [ "fumble", "defense" ] ] },

        // --- Time flow
        { id:"time", reuse:true, ofTags:[ [ "time" ] ] },

        // --- Recovering
        { id:"rest", reuse:true, ofTags:[ [ "rest" ] ] },
    ],
    methods:{
        describeReaction:{
            EN:"{morale}"
        }
    },
    render:{
        EN:"# Violence\n\n{initiative}\n[:block:]\n## Melee\n{attackMelee}\n[:endblock:]\n[:block:]\n## Ranged\n{attackRanged}\n[:endblock:]\n[:block:]\n## Defence\n{defence}\n\nIf you fail the enemy hits you. Enemies attack once per round unless noted otherwise.\n[:endblock:]\n[::]\n[:block:]\n## Crit (Natural {$.testDiceroll.max()})\n[:endblock:]\n[:block:]\n**Attack:** {criticalAttack}\n[:endblock:]\n[:block:]\n**Defense:** {criticalDefense}\n[:endblock:]\n[:block:]\n## Fumble (Natural 1)\n\n**Attack:** {fumbleAttack}\n\n**Defense:** {fumbleDefense}{$.protection.notes()}\n[:endblock:]\n[:block:]\n## How long is a round?\n\n{time}\n[:endblock:]\n[:block:]\n## Rest\n{rest}\n[:endblock:]"
    }
}
]);
