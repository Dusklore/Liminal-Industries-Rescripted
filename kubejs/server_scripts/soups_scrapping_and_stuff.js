//Credit goes to Cyansoup for scrapping recipes

ServerEvents.recipes(event => {

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

	//melting

	melting(
		'farmersdelight:cooking_pot', 
		'tconstruct:molten_iron', 
		450
	)

	melting(
		'supplementaries:speaker_block', 
		'tconstruct:molten_emerald', 
		100
	)

	melting(
		'supplementaries:clock_block', 
		'tconstruct:molten_gold', 
		360
	)

	melting(
		'create:cuckoo_clock', 
		'tconstruct:molten_gold', 
		360
	)

	melting(
		'thermal:item_buffer', 
		'tconstruct:molten_tin', 
		360
	)

	melting(
		'supplementaries:spring_launcher', 
		'tconstruct:earth_slime', 
		2250
	)

	melting(
		'refurbished_furniture:dark_stove', 
		'tconstruct:molten_iron', 
		900
	)

	melting(
		'refurbished_furniture:dark_microwave', 
		'tconstruct:molten_tin', 
		900
	)

	melting(
		'refurbished_furniture:dark_toaster', 
		'tconstruct:molten_nickel', 
		900
	)

	melting(
		'refurbished_furniture:dark_electricity_generator', 
		'tconstruct:molten_gold', 
		900
	)

	melting(
		'refurbished_furniture:dark_fridge', 
		'tconstruct:molten_iron', 
		2160
	)

	//crushing

	event.recipes.create.crushing([
		'3x create:andesite_alloy'
	],
	'create_low_heat:burner'
	)

	event.recipes.create.crushing([
		'3x minecraft:bone_meal',
		Item.of('minecraft:clay').withChance(0.5)
	],
	'refurbished_furniture:plate'
	)

	event.recipes.create.crushing([
		'2x minecraft:glowstone_dust',
		Item.of('2x minecraft:glowstone_dust').withChance(0.5),
		'2x minecraft:redstone_dust',
		Item.of('2x minecraft:redstone_dust').withChance(0.5)
	],
	'minecraft:redstone_lamp'
	)

	//farmers delight cutting

	event.recipes.farmersdelight.cutting(
        "minecraft:enchanted_book",
        "#minecraft:axes",
        [
			'3x minecraft:paper',
			'minecraft:leather',
 			Item.of('actuallyadditions:solidified_experience').withChance(0.5)
        ],
	);

	event.recipes.farmersdelight.cutting(
        "supplementaries:lunch_basket",
        "#minecraft:axes",
        [
			'minecraft:stripped_bamboo_log'
        ],
	);

	event.recipes.farmersdelight.cutting(
        "brewinandchewin:coaster",
        "#minecraft:axes",
        [
			'2x farmersdelight:straw'
        ],
	);

	event.recipes.farmersdelight.cutting(
        "miners_delight:sticky_basket",
        "#minecraft:axes", // tool
        [ // results
			'2x minecraft:stick',
 			Item.of('minecraft:cobweb').withChance(0.75)
        ],
        // "" // sound
	);

	event.recipes.farmersdelight.cutting(
        "create:cuckoo_clock",
        "#minecraft:axes",
        [
			'6x minecraft:oak_planks',
 			'minecraft:clock'
        ],
	);

	event.recipes.farmersdelight.cutting(
        "supplementaries:clock_block",
        "#minecraft:axes",
        [
			'6x minecraft:dark_oak_planks',
 			'minecraft:clock'
        ],
	);

	//create cutting

	event.recipes.create.cutting([
		'3x minecraft:gunpowder'
	],
	'minecraft:tnt'
	)

	event.recipes.create.cutting([
		'4x minecraft:paper'
	],
	'supplementaries:present'
	)

	event.recipes.create.cutting([
		'4x immersiveengineering:treated_wood_horizontal'
	],
	'immersiveengineering:wooden_barrel'
	)

	event.recipes.create.cutting([
		'6x minecraft:oak_planks',
		'minecraft:clock'
	],
	'create:cuckoo_clock'
	)

	event.recipes.create.cutting([
		'6x minecraft:dark_oak_planks',
		'minecraft:clock'
	],
	'supplementaries:clock_block'
	)

	//sofas, stools

	event.shapeless("minecraft:white_wool", ["refurbished_furniture:white_sofa"])
	event.shapeless("minecraft:white_wool", ["refurbished_furniture:white_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:white_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:white_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:white_wool"
		],
		"refurbished_furniture:white_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:white_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:white_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:white_wool"
		],
		"refurbished_furniture:white_stool")


	event.shapeless("minecraft:orange_wool", ["refurbished_furniture:orange_sofa"])
	event.shapeless("minecraft:orange_wool", ["refurbished_furniture:orange_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:orange_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:orange_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:orange_wool"
		],
		"refurbished_furniture:orange_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:orange_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:orange_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:orange_wool"
		],
		"refurbished_furniture:orange_stool")


	event.shapeless("minecraft:magenta_wool", ["refurbished_furniture:magenta_sofa"])
	event.shapeless("minecraft:magenta_wool", ["refurbished_furniture:magenta_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:magenta_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:magenta_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:magenta_wool"
		],
		"refurbished_furniture:magenta_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:magenta_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:magenta_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:magenta_wool"
		],
		"refurbished_furniture:magenta_stool")


	event.shapeless("minecraft:light_blue_wool", ["refurbished_furniture:light_blue_sofa"])
	event.shapeless("minecraft:light_blue_wool", ["refurbished_furniture:light_blue_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:light_blue_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:light_blue_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:light_blue_wool"
		],
		"refurbished_furniture:light_blue_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:light_blue_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:light_blue_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:light_blue_wool"
		],
		"refurbished_furniture:light_blue_stool")


	event.shapeless("minecraft:yellow_wool", ["refurbished_furniture:yellow_sofa"])
	event.shapeless("minecraft:yellow_wool", ["refurbished_furniture:yellow_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:yellow_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:yellow_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:yellow_wool"
		],
		"refurbished_furniture:yellow_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:yellow_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:yellow_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:yellow_wool"
		],
		"refurbished_furniture:yellow_stool")


	event.shapeless("minecraft:lime_wool", ["refurbished_furniture:lime_sofa"])
	event.shapeless("minecraft:lime_wool", ["refurbished_furniture:lime_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:lime_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:lime_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:lime_wool"
		],
		"refurbished_furniture:lime_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:lime_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:lime_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:lime_wool"
		],
		"refurbished_furniture:lime_stool")


	event.shapeless("minecraft:pink_wool", ["refurbished_furniture:pink_sofa"])
	event.shapeless("minecraft:pink_wool", ["refurbished_furniture:pink_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:pink_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:pink_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:pink_wool"
		],
		"refurbished_furniture:pink_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:pink_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:pink_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:pink_wool"
		],
		"refurbished_furniture:pink_stool")


	event.shapeless("minecraft:gray_wool", ["refurbished_furniture:gray_sofa"])
	event.shapeless("minecraft:gray_wool", ["refurbished_furniture:gray_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:gray_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:gray_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:gray_wool"
		],
		"refurbished_furniture:gray_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:gray_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:gray_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:gray_wool"
		],
		"refurbished_furniture:gray_stool")


	event.shapeless("minecraft:light_gray_wool", ["refurbished_furniture:light_gray_sofa"])
	event.shapeless("minecraft:light_gray_wool", ["refurbished_furniture:light_gray_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:light_gray_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:light_gray_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:light_gray_wool"
		],
		"refurbished_furniture:light_gray_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:light_gray_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:light_gray_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:light_gray_wool"
		],
		"refurbished_furniture:light_gray_stool")


	event.shapeless("minecraft:cyan_wool", ["refurbished_furniture:cyan_sofa"])
	event.shapeless("minecraft:cyan_wool", ["refurbished_furniture:cyan_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:cyan_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:cyan_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:cyan_wool"
		],
		"refurbished_furniture:cyan_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:cyan_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:cyan_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:cyan_wool"
		],
		"refurbished_furniture:cyan_stool")


	event.shapeless("minecraft:purple_wool", ["refurbished_furniture:purple_sofa"])
	event.shapeless("minecraft:purple_wool", ["refurbished_furniture:purple_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:purple_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:purple_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:purple_wool"
		],
		"refurbished_furniture:purple_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:purple_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:purple_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:purple_wool"
		],
		"refurbished_furniture:purple_stool")


	event.shapeless("minecraft:blue_wool", ["refurbished_furniture:blue_sofa"])
	event.shapeless("minecraft:blue_wool", ["refurbished_furniture:blue_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:blue_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:blue_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:blue_wool"
		],
		"refurbished_furniture:blue_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:blue_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:blue_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:blue_wool"
		],
		"refurbished_furniture:blue_stool")


	event.shapeless("minecraft:green_wool", ["refurbished_furniture:green_sofa"])
	event.shapeless("minecraft:green_wool", ["refurbished_furniture:green_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:green_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:green_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:green_wool"
		],
		"refurbished_furniture:green_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:green_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:green_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:green_wool"
		],
		"refurbished_furniture:green_stool")


	event.shapeless("minecraft:red_wool", ["refurbished_furniture:red_sofa"])
	event.shapeless("minecraft:red_wool", ["refurbished_furniture:red_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:red_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:red_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:red_wool"
		],
		"refurbished_furniture:red_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:red_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:red_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:red_wool"
		],
		"refurbished_furniture:red_stool")


	event.shapeless("minecraft:black_wool", ["refurbished_furniture:black_sofa"])
	event.shapeless("minecraft:black_wool", ["refurbished_furniture:black_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:black_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:black_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:black_wool"
		],
		"refurbished_furniture:black_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:black_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:black_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:black_wool"
		],
		"refurbished_furniture:black_stool")
})