/**
* @param {Internal.BlockRightClickedEventJS} event
* @param {String} result_block
* @param {String} result_item
*/
function chip_wallpaper(event,result_block,result_item){
    const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
    Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.axe.strip","blocks",1,1,true)
    event.block.set(result_block)
    event.block.popItem(result_item)
    return 1
}

BlockEvents.rightClicked("kubejs:wallpaper1", event => {
    const {hand, player} = event
  	if (event.item.id == "kubejs:putty_knife") {
        chip_wallpaper(event,"kubejs:stripped_wallpaper","kubejs:wallpaper")
	} else if (event.item.hasTag("minecraft:axes")) {
        chip_wallpaper(event,"kubejs:stripped_wallpaper","kubejs:wallpaper")
        player.damageHeldItem(hand, 1)
    }
})

BlockEvents.rightClicked('kubejs:stripped_wallpaper', event => {

	if (event.item.id == 'kubejs:wallpaper') {
		event.item.count--
        event.block.set("kubejs:wallpaper1")
	}
})
