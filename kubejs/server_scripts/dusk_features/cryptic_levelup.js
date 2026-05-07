BlockEvents.rightClicked('create:experience_block', event => {
	if (event.item.id == 'minecraft:enchanted_book') {
		let server = event.getServer()
		let position = event.block.getPos()
		let dimension = event.level.getDimension()
		let pos_x = position.getX()
		let pos_y = position.getY()
		let pos_z = position.getZ()
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run title @a[distance=..5] actionbar {"text":"Knowlege absorbed, feed me more...","bold":true,"color":"green"}`)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.end_portal_frame.fill","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:enchant",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,1,1,1,10,0)
		event.block.set("kubejs:cryptic_block")
		event.block.getEntityData().getCompound("data").putInt("knowledge",1)
		event.item.count--
		event.player.give('minecraft:book')
	}
})

BlockEvents.rightClicked('kubejs:cryptic_block', event => {
	if (event.item.id == 'minecraft:enchanted_book') {
		let server = event.getServer()
		let position = event.block.getPos()
		let dimension = event.level.getDimension()
		let pos_x = position.getX()
		let pos_y = position.getY()
		let pos_z = position.getZ()
		let knowledge = 0
		let block_data = event.block.getEntityData().getCompound("data")
		knowledge = block_data.getInt("knowledge")
		knowledge++
		block_data.putInt("knowledge",knowledge)
		if (knowledge >= 300) {
			server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run summon item ~ ~ ~ {Motion:[0.0,0.3,0.0],Item:{id:"endrem:cryptic_eye",Count:1b}}`)
			Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.evoker.cast_spell","blocks",1,0,true)
			event.block.set("minecraft:air")
		} else {
			server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run title @a[distance=..5] actionbar {"text":"Knowlege absorbed, feed me more...","bold":true,"color":"green"}`)
		}
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.end_portal_frame.fill","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:enchant",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,1,1,1,10,0)
		event.item.count--
		event.player.give('minecraft:book')
	}
})