BlockEvents.rightClicked('kubejs:carpet', event => {
	if (event.item.id == 'minecraft:wet_sponge') {
		let carpet = event.block
		let [pos_x,pos_y,pos_z] = [carpet.getX(),carpet.getY(),carpet.getZ()]
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.coral_block.place","blocks",1,0,false)
		carpet.level.spawnParticles("minecraft:falling_water",false,pos_x,pos_y + 0.1,pos_z,1,0,1,100,0)
		if (carpet.getNorth() == "kubejs:carpet") {
			carpet.getNorth().set("kubejs:soggy_carpet")
		}
		if (carpet.getSouth() == "kubejs:carpet") {
			carpet.getSouth().set("kubejs:soggy_carpet")
		}
		if (carpet.getEast() == "kubejs:carpet") {
			carpet.getEast().set("kubejs:soggy_carpet")
		}
		if (carpet.getWest() == "kubejs:carpet") {
			carpet.getWest().set("kubejs:soggy_carpet")
		}
		event.item.shrink(1)
		event.player.give("minecraft:sponge")
	}
})

BlockEvents.rightClicked('kubejs:soggy_carpet', event => {
	if (event.item.id == 'minecraft:sponge') {
		let carpet = event.block
		let [pos_x,pos_y,pos_z] = [carpet.getX(),carpet.getY(),carpet.getZ()]
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.coral_block.place","blocks",1,0,false)
		carpet.level.spawnParticles("minecraft:cloud",false,pos_x,pos_y + 0.2,pos_z,0.5,0.1 ,0.5,5,0.001)
		carpet.set("kubejs:carpet")
		event.item.shrink(1)
		event.player.give("minecraft:wet_sponge")
	}
})