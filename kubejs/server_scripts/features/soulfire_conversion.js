/**
* @param {Internal.BlockRightClickedEventJS} event
* @param {Boolean} fire
* @param {String} result_id
*/
function soulfire_convert_common(event,fire,result_id){
    if (event.item.getId() == "eidolon:soulfire_wand") {
        const player = event.getPlayer()
        const level = player.getLevel()
        if (!player.isFake() && !player.isShiftKeyDown()) {
            const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
            level.spawnParticles("minecraft:soul_fire_flame",false,pos_x,pos_y,pos_z,1,1,1,10,0.01)
            level.spawnParticles("minecraft:sculk_soul",false,pos_x,pos_y,pos_z,1,1,1,10,0.1)
            Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:particle.soul_escape","blocks",5,0,true)
            Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.flintandsteel.use","blocks",1,1,true)
            event.block.set(result_id)
            if (fire && event.block.getUp().id == "minecraft:air") {
                event.block.getUp().set("minecraft:soul_fire")
            }
            event.item.setDamageValue(event.item.getDamageValue() + 1)
		    if (event.item.getDamageValue() >= event.item.getMaxDamage()) {
			    event.item.shrink(1)
		    }
        } 
    }
    return 1
}

ItemEvents.rightClicked ("eidolon:soulfire_wand", event => {
    let player = event.getPlayer()
    if (!player.isFake() && !player.isShiftKeyDown()) {
        event.cancel()
    }
})

BlockEvents.rightClicked("kubejs:carpet", event => {
    soulfire_convert_common(event,true,"kubejs:soul_carpet")
})

BlockEvents.rightClicked("kubejs:soggy_carpet", event => {
    soulfire_convert_common(event,true,"kubejs:soul_carpet")
})

BlockEvents.rightClicked("kubejs:soul_carpet", event => {
    soulfire_convert_common(event,true,"kubejs:soul_carpet")
})

BlockEvents.rightClicked("minecraft:sand", event => {
    soulfire_convert_common(event,true,"minecraft:soul_sand")
})

BlockEvents.rightClicked("minecraft:dirt", event => {
    soulfire_convert_common(event,true,"minecraft:soul_soil")
})

BlockEvents.rightClicked("kubejs:wallpaper1", event => {
    soulfire_convert_common(event,false,"kubejs:stripped_wallpaper")
})

BlockEvents.rightClicked("minecraft:bricks", event => {
    soulfire_convert_common(event,false,"minecraft:nether_bricks")
})

BlockEvents.rightClicked("minecraft:cobblestone", event => {
    soulfire_convert_common(event,false,"minecraft:blackstone")
})