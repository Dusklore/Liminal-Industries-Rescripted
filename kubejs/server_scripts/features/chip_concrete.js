/**
* @param {Internal.BlockRightClickedEventJS} event
* @param {Number} chance
* @param {String} result_item
*/
function chip_concrete(event,chance,result_item){
    const [pos_x,pos_y,pos_z] = [event.block.getX() + 0.5,event.block.getY(),event.block.getZ() + 0.5]
    Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.deepslate_bricks.break","blocks",1,0,true)
    Client.level.spawnParticles("block kubejs:floor_tiles",false,pos_x,pos_y,pos_z,0,0,0,10,0.1)
    if (chance >= Math.random) {
        event.block.popItem(result_item)
    }
    return 1
}

BlockEvents.leftClicked("kubejs:floor_tiles", event => {
    const {hand, player} = event
  	if (event.item.id == "kubejs:crowbar") {
        chip_concrete(event,0.3,"kubejs:concrete_piece")
	} else if (event.item.hasTag("minecraft:pickaxes")) {
        chip_concrete(event,0.3,"kubejs:concrete_piece")
        player.damageHeldItem(hand, 1)
    }
})

BlockEvents.leftClicked("kubejs:floor_tiles_full", event => {
    if (event.block.getUp().id == "minecraft:air") {
        const {hand, player} = event
  	    if (event.item.id == "kubejs:crowbar") {
            chip_tiles(event,"kubejs:floor_tiles","kubejs:concrete_piece")
	    } else if (event.item.hasTag("minecraft:pickaxes")) {
            chip_tiles(event,"kubejs:floor_tiles","kubejs:concrete_piece")
            player.damageHeldItem(hand, 1)
        }
    }
})
