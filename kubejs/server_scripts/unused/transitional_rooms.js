
//This script is WIP and is unused

/*ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

	event.register(
        Commands.literal("backrooms")
		.requires(source => source.hasPermission(2))
		.then(Commands.literal("generation")
		.then(Commands.literal("rooms")
		.then(Commands.literal("panel")
		.then(Commands.literal("north")
		.then(Commands.argument('sector', Arguments.INTEGER.create(event))
            .executes(ctx => {
				const sector = Arguments.INTEGER.getResult(ctx, "sector")
				if (sector == 3) {

				}
            })
        ))
		.then(Commands.literal("south")
		.then(Commands.argument('sector', Arguments.INTEGER.create(event))
		    .executes(ctx => {
            })
        ))
	))))
})

/*ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

	event.register(
        Commands.literal("backrooms")
		.requires(source => source.hasPermission(2))
		.then(Commands.literal("generation")
		.then(Commands.literal("rooms")
		.then(Commands.literal("transitional")
		.then(Commands.argument('sector', Arguments.INTEGER.create(event))
		.then(Commands.argument('sector_north', Arguments.INTEGER.create(event))
		.then(Commands.argument('sector_south', Arguments.INTEGER.create(event))
		.then(Commands.argument('sector_east', Arguments.INTEGER.create(event))
		.then(Commands.argument('sector_west', Arguments.INTEGER.create(event))
		.executes(ctx => {
            	const sector = Arguments.INTEGER.getResult(ctx, "sector")
				const sector_north = Arguments.INTEGER.getResult(ctx, "sector_north")
				const sector_south = Arguments.INTEGER.getResult(ctx, "sector_south")
				const sector_east = Arguments.INTEGER.getResult(ctx, "sector_east")
				const sector_west = Arguments.INTEGER.getResult(ctx, "sector_west")

				if (sector == 3) {
					if (sector_north != 3) {

					}
				}

		})
	)))))))))
})*/