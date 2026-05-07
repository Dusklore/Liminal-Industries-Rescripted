/**
* @param {Internal.BlockRightClickedEventJS} event
*/
function sculk_restrict_placement(event) {
	if (event.item.id != 'kubejs:sculk_scrubber') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"text":"You can't place blocks on sculk!","color":"white"}`)
		event.cancel()
	}
}

BlockEvents.rightClicked('minecraft:sculk', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('kubejs:sculk_tendrils', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('minecraft:sculk_vein', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('minecraft:sculk_sensor', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('minecraft:sculk_shrieker', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('kubejs:sculk_shroom', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('kubejs:sculk_slab', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('kubejs:sculk_stairs', event => {
	sculk_restrict_placement(event)
})
BlockEvents.rightClicked('minecraft:spawner', event => {
	sculk_restrict_placement(event)
})