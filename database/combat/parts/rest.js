DATABASE = (window.DATABASE || []).concat([
{
    id:"rest-simple",
    tags:[ "rest", "shortrestaction" ],
    methods:{
        shortRestAction:{
            EN:"catch your breath"
        }
    },
    render:{
        EN:" - {$.capital($.makeCallListOf(0,\"shortrestaction\",\"shortRestAction\",1))}. Restore {$.playerHitpoints.getSmallCure()}.\n - A full night's sleep restores {$.playerHitpoints.getCure()}.\n{$.callAll(0,\"restaction\",\"onRest\")}\n"
    }
},
]);
