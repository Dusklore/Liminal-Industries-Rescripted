// priority: 0

StartupEvents.registry('block', event => {

	event.create('wallpaper_fake').displayName('Fake Wallpaper')
		.model('kubejs:block/wallpaper1')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.tagBlock('minecraft:mineable/axe')

	event.create('brittle_porous_stone').displayName('Brittle Porous Stone')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('brittle_porous_stone_dark').displayName('Brittle Dark Porous Stone')
		.model('kubejs:block/missing_tiles_empty')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('pool_tiles_fake').displayName('Fake Pool Tiles')
		.model('kubejs:block/pool_tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('wet_pool_tiles_fake').displayName('Fake Wet Pool Tiles')
		.model('kubejs:block/pool_tiles_wet')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('pool_tiles_missing_fake').displayName('Fake Missing Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('pool_tiles_golden_half_fake').displayName('Fake Pool Tiles Golden Half')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('pool_tiles_golden_fake').displayName('Fake Pool Tiles Golden')
		.model('kubejs:block/pool_tiles_golden')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.tagBlock('minecraft:mineable/pickaxe')
})
