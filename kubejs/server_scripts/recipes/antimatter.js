ServerEvents.recipes(event => {

			event.remove({id: 'mekanism:processing/refined_obsidian/ingot/from_dust'})
			event.remove({id: 'mekanism:processing/lategame/antimatter/from_pellet'})

            event.custom({"type":"mekanism:oxidizing",
				"input":{"ingredient":{"tag":"forge:pellets/antimatter"}},
				"output":{"amount":1,
				"gas":"mekanism:antimatter"}})

            event.custom({
				"type":"mekanism:injecting",
				"chemicalInput":{"amount":2,
				"gas":"mekanism:osmium"},
				"itemInput":{"ingredient":{"item":"mekanism:dust_refined_obsidian"}},
				"output":{"item":"mekanism:ingot_refined_obsidian"}
			})

			event.custom({
				"type":"mekanism:nucleosynthesizing",
				"duration":100,
				"gasInput":{"amount":1,"gas":"mekanism:antimatter"},
				"itemInput":{"ingredient":{"item":"mekanism:ingot_refined_obsidian"}},
				"output":{"item":"mekanism:alloy_atomic"}
			})
})