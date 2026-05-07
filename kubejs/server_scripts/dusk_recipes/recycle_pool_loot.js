ServerEvents.recipes(event => {

	event.shapeless("thermal:cured_rubber", ["beachparty:pool_noodle"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:pool_noodle'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:rubber_ring_axolotl"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:rubber_ring_axolotl'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:rubber_ring_blue"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:rubber_ring_blue'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:rubber_ring_pink"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:rubber_ring_pink'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:rubber_ring_pelican"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:rubber_ring_pelican'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:rubber_ring_stripped"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:rubber_ring_stripped'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:floaty_boat"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:floaty_boat'
	)
	event.shapeless("farmersdelight:canvas", ["beachparty:beach_hat"])
	event.recipes.create.crushing([
		Item.of('farmersdelight:canvas'),
		Item.of('farmersdelight:canvas').withChance(0.5)
	],
		'beachparty:beach_hat'
	)
	event.shapeless("thermal:diving_fabric", ["beachparty:trunks"])
	event.recipes.create.crushing([
		Item.of('thermal:diving_fabric'),
		Item.of('minecraft:string').withChance(0.5)
	],
		'beachparty:trunks'
	)
	event.shapeless("thermal:diving_fabric", ["beachparty:bikini"])
	event.recipes.create.crushing([
		Item.of('thermal:diving_fabric'),
		Item.of('minecraft:string').withChance(0.5)
	],
		'beachparty:bikini'
	)
	event.shapeless("thermal:diving_fabric", ["beachparty:swim_wings"])
	event.recipes.create.crushing([
		Item.of('thermal:diving_fabric'),
		Item.of('minecraft:phantom_membrane').withChance(0.5)
	],
		'beachparty:swim_wings'
	)
	event.shapeless("thermal:cured_rubber", ["beachparty:crocs"])
	event.recipes.create.crushing([
		Item.of('thermal:cured_rubber'),
		Item.of('thermal:cured_rubber').withChance(0.5)
	],
		'beachparty:crocs'
	)
	event.shapeless("thermal:niter_dust", ["beachparty:seashell"])
	event.recipes.create.crushing([
		Item.of('thermal:niter_dust'),
		Item.of('thermal:niter_dust').withChance(0.5)
	],
		'beachparty:seashell'
	)
	event.remove({output: 'beachparty:beach_chair'})
	event.remove({output: 'beachparty:beach_sun_lounger'})
	event.remove({output: 'beachparty:beach_parasol'})
	event.shapeless("2x beachparty:palm_planks", ["beachparty:beach_chair"])
	event.shapeless("2x beachparty:palm_planks", ["beachparty:beach_sun_lounger"])
	event.shapeless("2x beachparty:palm_planks", ["beachparty:beach_parasol"])
	event.shapeless("2x beachparty:palm_planks", ["neapolitan:banana_stalk"])
	event.shapeless("2x beachparty:palm_planks", ["neapolitan:carved_banana_stalk"])
	let chopping = (output, input) => {
		event.recipes.farmersdelight.cutting(
			input,
			"#forge:tools/axes",
			[
				output,
				Item.of("minecraft:stick")
                .withChance(0.5)
			],
			"minecraft:block.wood.break");
	}
	chopping('6x beachparty:palm_planks', 'beachparty:beach_chair')
	chopping('6x beachparty:palm_planks', 'beachparty:beach_sun_lounger')
	chopping('6x beachparty:palm_planks', 'beachparty:beach_parasol')
	event.recipes.create.cutting('10x beachparty:palm_planks', 'beachparty:beach_chair')
	event.recipes.create.cutting('10x beachparty:palm_planks', 'beachparty:beach_sun_lounger')
	event.recipes.create.cutting('10x beachparty:palm_planks', 'beachparty:beach_parasol')
	event.recipes.create.cutting('6x beachparty:palm_planks', 'neapolitan:banana_stalk')
	event.recipes.create.cutting('6x beachparty:palm_planks', 'neapolitan:carved_banana_stalk')
	event.shapeless("3x kubejs:wallpaper", ["chalk:chalk_box"])
	event.shapeless("5x minecraft:gold_nugget", ["supplementaries:key"])
	event.shapeless("5x create:copper_nugget", ["supplementaries:wrench"])
	event.recipes.farmersdelight.cutting("exposure:album","#forge:tools/axes",["minecraft:leather","minecraft:phantom_membrane"],"minecraft:block.wood.break")
	event.remove({output: 'beachparty:mini_fridge'})
	event.remove({output: 'beachparty:sand_bucket_empty'})
	event.shapeless("2x kubejs:scrap", ["beachparty:empty_sand_bucket"])
	event.shapeless("kubejs:scrap", ["supplementaries:bubble_blower"])
	event.shapeless("minecraft:string", ["minecraft:fishing_rod"])
	event.shapeless("minecraft:string", ["minecraft:brush"])
	event.shapeless("2x minecraft:stick", ["supplementaries:flute"])
	event.shapeless("5x actuallyadditions:void_crystal_shard", ["beachparty:sunglasses"])
	let melting = (Input, Output, Amount) => {
		event.custom({"type": "tconstruct:melting",

			"ingredient": {
			"item": Input
			},
			"result": {
			"amount": Amount,
			"tag": Output
			},
			"temperature": 800,
			"time": 100
		})
	}
	melting(
		'supplementaries:key', 
		'tconstruct:molten_gold', 75
	)
	melting(
		'supplementaries:wrench', 
		'tconstruct:molten_copper', 250
	)
	melting(
		'kubejs:diamond_brush', 
		'tconstruct:molten_diamond', 100
	)
	melting(
		'beachparty:mini_fridge', 
		'tconstruct:molten_iron', 1000
	)
	event.custom({"type": "tconstruct:melting",
		"ingredient": {
		"tag": "refurbished_furniture:coolers"
		},
		"result": {
		"amount": 450,
		"tag": "tconstruct:molten_aluminum"
		},
		"temperature": 800,
		"time": 100
	})
	event.custom({"type": "tconstruct:melting",
		"ingredient": {
		"tag": "refurbished_furniture:grills"
		},
		"result": {
		"amount": 225,
		"tag": "tconstruct:molten_steel"
		},
		"temperature": 800,
		"time": 100
	})
})