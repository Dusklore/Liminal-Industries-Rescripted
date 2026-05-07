StartupEvents.registry('block', event => {

	event.create('soul_carpet')
		.fullBlock(true)
		.material("wool")
		.soundType("wool")
        .unbreakable()

	event.create('liminalstone')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()

	event.create('liminalstone_poolrooms').displayName('Liminalstone')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
        .unbreakable()

	event.create('controller_wallpaper','cardinal')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms blocks tick controls`)
			})
		})

	event.create('controller_wallpaper_dead','cardinal')
		.model('kubejs:block/controller_wallpaper_dead')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
        .unbreakable()

	event.create('ceilling_lamp_broken').displayName('Broken Ceiling Lamp')
		.unbreakable()
		.material("glass")
		.soundType("glass")

	event.create('ceilling_lamp_breaking').displayName('Broken Ceiling Lamp')
		.fullBlock(true)
		.material("glass")
		.soundType("glass")
        .unbreakable()
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms blocks tick breaking_lamp`)
			})
		})

	event.create('reality_core').displayName('Active Reality Core')
		.material("stone")
		.soundType("lantern")
        .unbreakable()
		.fullBlock(false)
		.box(4, 4, 4, 12, 12, 12)
		.blockEntity(entityInfo => {
			entityInfo.serverTick(10, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms blocks reality tick`)
			})
		})

	event.create('black_hole').displayName('Mini Black Hole')
		.material("stone")
		.soundType("stone")
        .unbreakable()
		.fullBlock(true)
		.blockEntity(entityInfo => {
			entityInfo.serverTick(10, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms blocks tick blackhole`)
			})
		})

	event.create('cryptic_block').displayName('Cryptic Block')
		.material("stone")
		.soundType("stone")
		.lightLevel(15)
        .unbreakable()
		.fullBlock(true)
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms blocks tick crytpic`)
			})
		})

	event.create('weird_chair','cardinal').displayName('Weird Chair')
		.material("wood")
		.soundType("wood")
		.hardness(2)
        .waterlogged()
		.fullBlock(false)
		.model('refurbished_furniture:block/oak_chair')
		.box(2, 0, 12, 4, 8, 14)
		.box(2, 10, 2, 14, 20, 4)
		.box(2, 8, 2, 14, 10, 14)
		.box(12, 0, 12, 14, 8, 14)
		.box(12, 0, 2, 14, 8, 4)
		.box(2, 0, 2, 4, 8, 4)
		.blockEntity(entityInfo => {
			entityInfo.serverTick(100, 0, entity => {

				let dimension = entity.level.getDimension()
				let position = entity.getBlockPos()
				let pos_x = position.x
				let pos_y = position.y
				let pos_z = position.z
				
				entity.level.getServer().runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms blocks tick weird_chair`)
			})
		})

	event.create('feature_node')
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.fullBlock(true)
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				global.tick_room_node(entity)
			})
		})

	event.create('reality_spawner')
		.material("stone")
		.soundType("stone")
		.hardness(2)
		.noDrops()
		.transparent(true)
		.defaultCutout()
		.fullBlock(true)
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				tick_reality_spawner(entity.block,entity.level)
			})
		})

	event.create('reality_chest','cardinal')
		.material("stone")
		.soundType("stone")
		.hardness(2)
		.noDrops()
		.fullBlock(true)
		.blockEntity(entityInfo => {
		})

	event.create('poolrooms_portal').displayName('Poolrooms Entrance')
		.material("lantern")
		.soundType("lantern")
		.unbreakable()
		.fullBlock(true)
		.box(0, 0, 0, 16, 15, 16)
		.lightLevel(1.0)

	event.create('poolrooms_exit').displayName('Poolrooms Exit')
		.material("lantern")
		.soundType("lantern")
		.unbreakable()
		.fullBlock(true)
		.box(0, 0, 0, 16, 15, 16)
})