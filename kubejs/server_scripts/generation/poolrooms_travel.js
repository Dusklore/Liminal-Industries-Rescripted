ServerEvents.recipes(event => {
	event.remove({output: "blockofsky:void_block"})
})

EntityEvents.hurt("minecraft:player", event  => {
	if (event.source.getType() == "fall") {
		const player = event.getPlayer()
		const [pos_x,pos_y,pos_z] = [player.getX(),player.getY(),player.getZ()]
		if (event.level.getBlock(pos_x,pos_y - 1,pos_z).getId() == "blockofsky:void_block") {
			if (event.level.getDimension() == "backrooms:poolrooms") {
				global.enter_backrooms(event.getPlayer())
				event.cancel()
			}
		}
	}
})

BlockEvents.rightClicked("blockofsky:void_block", event  => {
	if (!event.player.isFake()) {
		global.enter_backrooms(event.getPlayer())
	}
})

BlockEvents.rightClicked('kubejs:poolrooms_portal', event => {
	global.enter_poolrooms(event.getPlayer())
})