ServerEvents.recipes(event => {
	
	let alloying = (output, Input1, Input2, count, time) => {
    event.custom({
		"type": "immersiveengineering:alloy",
		"input0": {
		  "item": Input1
		},
		"input1": {
		  "base_ingredient": {
			"item": Input2
		  }
		},
		"result": {
		  "item": output,
		  "count": count
		},
		"time": time
	  })
	}

	alloying(
		'kubejs:copycat_alloy',
		'minecraft:clay_ball', 
		'minecraft:cobblestone',
		1, 200
	)
	alloying(
		'kubejs:copycat_alloy',
		'create:zinc_ingot', 
		'minecraft:iron_ingot', 
		2, 200
	)

	event.replaceInput(
		{id:"copycats:crafting/copycat_block"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_trapdoor"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_slope_layer"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_slope_byte"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_vertical_stairs"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_vertical_half_layer"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_wooden_button"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_folding_door"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_slab"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_stairs"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
	event.replaceInput(
		{id:"copycats:crafting/copycat_vertical_step"},
  		"create:zinc_ingot",
  		"kubejs:copycat_alloy"
	)
})