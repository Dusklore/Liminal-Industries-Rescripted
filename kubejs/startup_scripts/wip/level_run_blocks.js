// priority: 0


StartupEvents.registry('block', event => {

//Wallpapers

let wallpapers = (id) => {
	event.create(id).displayName("Wallpaper")
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
	}

	wallpapers("wallpaper1_red")

//Ceiling
	event.create('ceilling_red').displayName('Ceiling')
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()

	event.create('ceilling_lamp_red').displayName('Ceiling Lamp')
		.unbreakable()
		.material("glass")
		.soundType("glass")
		.lightLevel(1.0)

//Traffic Poles

	let traffic_poles = (id, name) => {
		event.create(id).displayName(name)
			.fullBlock(true)
			.material("lantern")
			.soundType("lantern")
			.renderType("cutout")
			.fullBlock(false)
			.opaque(false)
			.hardness(1.0)
			.requiresTool(true)
			.tagBlock('minecraft:mineable/pickaxe')
			.item(item => 
				item.modelJson({
				  parent: 'minecraft:item/generated',
				  textures: {
					layer0: `kubejs:block/${id}`,
				  },
				})
			)
			.box(6, 0, 6, 10, 16, 10)
			.property(BlockProperties.FACING)
			.placementState(c =>{
			  c.set(BlockProperties.FACING, c.nearestLookingDirection.opposite)}
			)
            .blockstateJson = {
                "variants": {
					"facing=up": {
                        "model": `kubejs:block/${id}`,
                        "y": 0
                    },
					"facing=down": {
                        "model": `kubejs:block/${id}`,
						"y": 0
                    },
                    "facing=north": {
                        "model": `kubejs:block/${id}`,
                        "y": 0
                    },
                    "facing=east": {
                        "model": `kubejs:block/${id}`,
                        "y": 90
                    },
                    "facing=south": {
                        "model": `kubejs:block/${id}`,
                        "y": 180
                    },
					"facing=west": {
                        "model": `kubejs:block/${id}`,
                        "y": 270
                    }
                }
            }
	}

	traffic_poles('traffic_pole_red', 	'sign')
	traffic_poles('explantion2_sign_red', 	'sign')

//Lockers

    event.create('red_locker_single').displayName('Red Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.unbreakable()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
        })
		
    event.create('red_locker_double').displayName('Red Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.unbreakable()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
        })
})