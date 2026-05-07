ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	event.register(
        Commands.literal("backrooms")
		.requires(source => source.hasPermission(2))
		.then(Commands.literal("generation")
		.then(Commands.literal("node")
		.then(Commands.literal("first")
		.then(Commands.literal("poolrooms")
		    .executes(ctx => {
				let level = ctx.source.getLevel()
				global.generate_first_node(level)
				return 1
            })
        )
		.then(Commands.literal("backrooms")
		    .executes(ctx => {
				let level = ctx.source.getLevel()
				global.generate_first_node(level)
				return 1
            })
        ))))
    )
})