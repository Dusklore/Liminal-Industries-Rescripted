/**
* @param {Internal.BlockRightClickedEventJS} event
* @param {String} result_block
* @param {String} result_item
*/
function chip_tiles(event,result_block,result_item){
    const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
    Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.deepslate_bricks.break","blocks",1,0,true)
    event.block.set(result_block)
    event.block.popItem(result_item)
    return 1
}

BlockEvents.rightClicked("kubejs:pool_tiles", event => {
    const {hand, player} = event
  	if (event.item.id == "kubejs:crowbar") {
        chip_tiles(event,"kubejs:missing_tiles_half","kubejs:pool_tile")
	} else if (event.item.hasTag("minecraft:pickaxes")) {
        chip_tiles(event,"kubejs:missing_tiles_half","kubejs:pool_tile")
        player.damageHeldItem(hand, 1)
    }
})
BlockEvents.rightClicked("kubejs:missing_tiles_half", event => {
    const {hand, player} = event
  	if (event.item.id == "kubejs:crowbar") {
        chip_tiles(event,"kubejs:missing_tiles_empty","kubejs:pool_tile")
	} else if (event.item.hasTag("minecraft:pickaxes")) {
        chip_tiles(event,"kubejs:missing_tiles_empty","kubejs:pool_tile")
        player.damageHeldItem(hand, 1)
    }
})
BlockEvents.rightClicked("kubejs:floor_tiles", event => {
    const {hand, player} = event
  	if (event.item.id == "kubejs:crowbar") {
        chip_tiles(event,"kubejs:floor_tiles","kubejs:concrete_piece")
	} else if (event.item.hasTag("minecraft:pickaxes")) {
        chip_tiles(event,"kubejs:floor_tiles","kubejs:concrete_piece")
        player.damageHeldItem(hand, 1)
    }
})

BlockEvents.rightClicked('kubejs:missing_tiles_half', event => {
	if (event.item.id == 'kubejs:pool_tile') {
        const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		event.item.count--
        event.block.set("kubejs:pool_tiles")
        Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.deepslate_bricks.break","blocks",1,2,true)
	}
})
BlockEvents.rightClicked('kubejs:missing_tiles_empty', event => {
	if (event.item.id == 'kubejs:pool_tile') {
        const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		event.item.count--
        event.block.set("kubejs:missing_tiles_half")
        Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.deepslate_bricks.break","blocks",1,2,true)
	}
})
