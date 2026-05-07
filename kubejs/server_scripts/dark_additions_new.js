ServerEvents.recipes(event => {

	let empowering = (output, Input, Input1, Input2, Input3, Input4, time, energy, colour) => {
    event.custom({
		"type": "actuallyadditions:empowering",
		"base": {
		  "item": Input
		},
		"color": colour,
		"energy": energy,
		"modifiers": [
		  {
			"item": Input1
		  },
		  {
			"item": Input2
		  },
		  {
			"item": Input3
		  },
		  {
			"item": Input4
		  }
		],
		"result": {
		  "item": output
		},
		"time": time
	  })
	}

	empowering(
		'kubejs:sculked_sculk_scrubber',
		'kubejs:sculk_scrubber',
		'actuallyadditions:solidified_experience',
		'actuallyadditions:solidified_experience',
		'actuallyadditions:solidified_experience',
		'actuallyadditions:solidified_experience',
		500, 50000, 0
	)

	event.custom({
		"type":"mekanism:metallurgic_infusing",
		"chemicalInput":{"amount":100,"tag":"mekanism:carbon"},
		"itemInput":{"ingredient":{"item":"ae2:charged_certus_quartz_crystal"}},
		"output":{"item":"actuallyadditions:black_quartz"}
	})

	event.recipes.createCrushing([
		'tconstruct:husk_head',
		Item.of('minecraft:rotten_flesh').withChance(0.06),
		Item.of('actuallyadditions:solidified_experience').withChance(0.01)
	],	'tconstruct:husk_head')

})