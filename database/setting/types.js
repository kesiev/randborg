DATABASE = (DATABASE || []).concat([
{
    id:"rpg-settingset-1",
    tags:[ "rpgsetting", "set" ],
    requires:[
        { times:2, id:"rpgsetting", ofTagBags:[ [ "rpgsetting", "single" ] ] }
    ]
},{
    id:"rpg-settingset-2",
    tags:[ "rpgsetting", "set" ],
    requires:[
        { times:3, id:"rpgsetting", ofTagBags:[ [ "rpgsetting", "single" ] ] }
    ]
},{
    id:"rpg-setting-1",
    tags:[ "rpgsetting", "single" ],
    addFlags:[ "setting-fantasy" ]
},{
    id:"rpg-setting-2",
    tags:[ "rpgsetting", "single" ],
    addFlags:[ "setting-grim" ]
},{
    id:"rpg-setting-3",
    tags:[ "rpgsetting", "single" ],
    addFlags:[ "setting-investigation" ]
},{
    id:"rpg-setting-4",
    tags:[ "rpgsetting", "single" ],
    addFlags:[ "setting-cyberpunk" ]
},{
    id:"rpg-setting-5",
    tags:[ "rpgsetting", "single" ],
    addFlags:[ "setting-japan" ]
},{
    id:"rpg-setting-6",
    tags:[ "rpgsetting", "single" ],
    addFlags:[ "setting-wildwest" ]
}
]);