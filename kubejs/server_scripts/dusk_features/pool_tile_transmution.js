//This script was only a possible feature and is unused
/*BlockEvents.rightClicked('kubejs:porous_stone', event => {

	if (event.item.id == 'kubejs:pool_tile') {
		
    	const {hand, player} = event
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:block.deepslate_bricks.break master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:missing_tiles_half`)
		event.item.count--

		}
	})*/