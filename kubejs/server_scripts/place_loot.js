


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	//Requires: get_loot()
	//Requires: get_direction()
	//Requires: get_opposite_direction()
	//Requires: place_loot()
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("rooms")
		.then(Commands.literal("loot")
		.then(Commands.literal("common")
		    .executes(ctx => {
				let level = ctx.source.getLevel()
                let position = ctx.source.getPosition()
				let pos_x = position.x() - 1
				let pos_y = position.y()
				let pos_z = position.z() - 1
				let loot_spot = level.getBlock(pos_x,pos_y,pos_z)
				let loot = get_loot("common")
				let loot_id = loot["id"]
				if (loot_id == "rare_loot") {
					loot = get_loot("rare")
					loot_id = loot["id"]
				}
				let loot_placement = loot["placement"]
				let loot_dirction = "none"
				if (loot_placement == "directional_opposite") {loot_dirction = get_opposite_direction(pos_x,pos_y,pos_z,level)} 
				else if (loot_placement == "directional") {loot_dirction = get_direction(pos_x,pos_y,pos_z,level)}
				place_loot(loot_id,loot_placement,loot_dirction,loot_spot)
				return 1
            })
        )
		.then(Commands.literal("rare")
		    .executes(ctx => {
				let level = ctx.source.getLevel()
                let position = ctx.source.getPosition()
				let pos_x = position.x() - 1
				let pos_y = position.y()
				let pos_z = position.z() - 1
				let loot_spot = level.getBlock(pos_x,pos_y,pos_z)
				let loot = get_loot("rare")
				let loot_id = loot["id"]
				let loot_placement = loot["placement"]
				let loot_dirction = "none"
				if (loot_placement == "directional_opposite") {loot_dirction = get_opposite_direction(pos_x,pos_y,pos_z,level)} 
				else if (loot_placement == "directional") {loot_dirction = get_direction(pos_x,pos_y,pos_z,level)}
				place_loot(loot_id,loot_placement,loot_dirction,loot_spot)
				return 1
            })
        )
		.then(Commands.literal("epic")
		    .executes(ctx => {
				let level = ctx.source.getLevel()
                let position = ctx.source.getPosition()
				let pos_x = position.x() - 1
				let pos_y = position.y()
				let pos_z = position.z() - 1
				let loot_spot = level.getBlock(pos_x,pos_y,pos_z)
				let loot = get_loot("epic")
				let loot_id = loot["id"]
				let loot_placement = loot["placement"]
				let loot_dirction = "none"
				if (loot_placement == "directional_opposite") {loot_dirction = get_opposite_direction(pos_x,pos_y,pos_z,level)} 
				else if (loot_placement == "directional") {loot_dirction = get_direction(pos_x,pos_y,pos_z,level)}
				place_loot(loot_id,loot_placement,loot_dirction,loot_spot)
				return 1
            })
        )
		.then(Commands.literal("water")
		    .executes(ctx => {
				let level = ctx.source.getLevel()
                let position = ctx.source.getPosition()
				let pos_x = position.x() - 1
				let pos_y = position.y()
				let pos_z = position.z() - 1
				let loot_spot = level.getBlock(pos_x,pos_y,pos_z)
				let loot = get_loot("water")
				let loot_id = loot["id"]
				let loot_placement = loot["placement"]
				let loot_dirction = "none"
				if (loot_placement == "directional_opposite") {loot_dirction = get_opposite_direction(pos_x,pos_y,pos_z,level)} 
				else if (loot_placement == "directional") {loot_dirction = get_direction(pos_x,pos_y,pos_z,level)}
				place_loot_water(loot_id,loot_placement,loot_dirction,loot_spot)
				return 1
            })
        )
    )))
})