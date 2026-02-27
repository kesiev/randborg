DATABASE = (window.DATABASE || []).concat([
{
    id:"disease-simple",
    tags:[ "trait", "disease", "restaction", "cureaction" ],
    methods:{
        onRest:{
            EN:" - An infected character does not benefit from resting. Instead, {$.playerHitpoints.getInjury()} is lost daily."
        },
        onCure:{
            EN:"removes infection"
        }
    }
},
]);