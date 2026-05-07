// priority: 0


StartupEvents.registry('block', event => {

	event.create('long_range_wall_destroyer').displayName('Long-Range Wall Piercer')
		.fullBlock(true)
		.material("stone")
		.soundType("lantern")
		.tagBlock('minecraft:mineable/pickaxe')
			.property(BlockProperties.FACING)
		.placementState(c =>{
		c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
		.blockstateJson = {
			"variants": {
				"facing=up": {
					"model": `kubejs:block/long_range_wall_destroyer`,
					"x": 180
				},
				"facing=down": {
					"model": `kubejs:block/long_range_wall_destroyer`,
					"x": 0
				},
				"facing=north": {
					"model": `kubejs:block/long_range_wall_destroyer`,
					"x": 90,
					"y": 180
				},
				"facing=east": {
					"model": `kubejs:block/long_range_wall_destroyer`,
					"x": 90,
					"y": 270
				},
				"facing=south": {
					"model": `kubejs:block/long_range_wall_destroyer`,
					"x": 90,
					"y": 0
				},
				"facing=west": {
					"model": `kubejs:block/long_range_wall_destroyer`,
					"x": 90,
					"y": 90
				}
			}
		}

})
