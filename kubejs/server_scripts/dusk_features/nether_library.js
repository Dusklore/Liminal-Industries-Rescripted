ItemEvents.crafted("kubejs:unstable_compound",event => {
	event.item.setCount(0)
	const dimension = event.level.getDimension()
	const player = event.getPlayer()
	if (player != null) {
		const [pos_x,pos_y,pos_z] = [player.getX(),player.getY(),player.getZ()]
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.generic.explode","blocks",1,2,false)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.glass.break","blocks",1,1,false)
		Client.level.spawnParticles("minecraft:explosion",false,pos_x,pos_y,pos_z,1,1,1,25,0)
		Client.level.spawnParticles("minecraft:crimson_spore",false,pos_x,pos_y,pos_z,1,0,1,100,0)
		Client.level.spawnParticles("minecraft:crimson_spore",false,pos_x,pos_y,pos_z,1,0,1,100,0)
		if (dimension != "minecraft:the_nether") {
			player.teleportTo("minecraft:the_nether",0,50,0,0,0)
			Client.level.playLocalSound(0,50,0,"minecraft:ambient.nether_wastes.mood","blocks",100,0,false)
			Client.level.playLocalSound(0,50,0,"minecraft:ambient.nether_wastes.mood","blocks",100,0,false)
			Client.level.playLocalSound(0,50,0,"minecraft:ambient.nether_wastes.mood","blocks",100,0,false)
			Client.level.playLocalSound(0,50,0,"minecraft:ambient.nether_wastes.mood","blocks",100,0,false)
			Client.level.playLocalSound(0,50,0,"minecraft:ambient.nether_wastes.mood","blocks",100,0,false)
		}
	}
})

EntityEvents.hurt("minecraft:player", event  => {
	const dimension = event.level.getDimension()
	if (event.source.getType() == "fall") {
		if (dimension == "minecraft:the_nether") {
			event.cancel()
		}
	}
})

BlockEvents.rightClicked("supplementaries:clock_block", event  => {
	const dimension = event.level.getDimension()
	const player = event.getPlayer()
	if (dimension == "minecraft:the_nether") {
		if (player != null) {
			player.teleportTo("minecraft:overworld",-1000,23,-1000,0,0)
			Client.level.playLocalSound(-1000,23,-1000,"supplementaries:block.bellows.retract","blocks",10,0,false)
			Client.level.playLocalSound(-1000,23,-1000,"supplementaries:block.globe.spin","blocks",10,0,false)
		}
	}
})

BlockEvents.rightClicked("kubejs:soggy_carpet", event  => {
	if (event.item.getId() == "minecraft:glass_bottle") {
		event.player.give("1x kubejs:carpet_fluid")
		event.item.shrink(1)
		const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.bottle.fill","blocks",1,1,false)
	}
})

ServerEvents.recipes(event => {
	event.shapeless("kubejs:unstable_compound", ["thermal:redstone_mushroom_spores","kubejs:carpet_fluid"])
})