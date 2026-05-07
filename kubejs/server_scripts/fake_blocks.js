// priority: 0

ServerEvents.recipes(event => {

let create = (block, item, result) => {
	event.remove({output: result})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"item": block},
			{"item": item}],
		"results": [
			{"item": result}]
	})
}

create("kubejs:brittle_porous_stone_dark", "kubejs:pool_tile", "kubejs:pool_tiles_missing_fake")
create("kubejs:pool_tiles_missing_fake", "kubejs:pool_tile", "kubejs:pool_tiles_fake")
create("kubejs:brittle_porous_stone_dark", "kubejs:pool_tile_golden", "kubejs:pool_tiles_golden_fake")
create("kubejs:pool_tiles_missing_fake", "kubejs:pool_tile_golden", "kubejs:pool_tiles_golden_half_fake")

let rock_gen = (output, adjacent, below) => {
    event.custom({
        "type": "thermal:rock_gen",
        "adjacent": adjacent,
        "below": below,
        "result": {
            "item": output
        }
      })
    }

	rock_gen('kubejs:brittle_porous_stone', 
        'minecraft:water',
        'kubejs:soul_carpet'
    )
    rock_gen('kubejs:brittle_porous_stone_dark', 
        'minecraft:packed_ice',
        'kubejs:soul_carpet'
    )

})