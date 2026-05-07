BlockEvents.rightClicked("kubejs:oil_carpet", event => {
	if (event.item.id == "minecraft:sponge") {
		let above = event.block.getUp()
		const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		if (above.getId() == "minecraft:air"	|| above.getId() == "minecraft:light") {
			above.set("thermal:crude_oil_fluid")
		}
		if (above.getUp().getId() == "minecraft:air"	|| above.getUp.getId() == "minecraft:light") {
			above.getUp().set("thermal:crude_oil_fluid")
		}
		Client.level.playLocalSound(pos_x,pos_y + 1,pos_z,"minecraft:block.lava.ambient","blocks",1,2,true)
		Client.level.playLocalSound(pos_x,pos_y + 1,pos_z,"minecraft:item.bucket.empty_lava","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:squid_ink",false,pos_x,pos_y + 1,pos_z,0.5,3,0.5,100,0.01)
		event.cancel()
		}
	})