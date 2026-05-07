StartupEvents.registry('block', event => {

	event.create('room_node_block')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				global.tick_room_node(entity)
			})
		})

	event.create('redstone_room_node_block')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms generation tick redstone_node`)
			})
		})

	event.create('unstable_room_node_block')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				global.tick_unstable_node(entity)
			})
		})

	event.create('layered_room_node_block')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				global.tick_layered_node(entity)
			})
		})

	event.create('room_node_block_spawn')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				global.tick_spawn_node(entity)
			})
		})

	event.create('dead_room_node_block')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.blockEntity(entityInfo => {
		})

	event.create('room_node_connector','cardinal')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()

	event.create('dead_room_node_connector','cardinal')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()
})