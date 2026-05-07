ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	event.register(
        Commands.literal("backrooms")
        .requires(source => source.hasPermission(2))
		.then(Commands.literal("enter")
		.then(Commands.literal("poolrooms")
		    .executes(ctx => {
				let player = ctx.source.entity
                enter_area("poolrooms",player)
				//player.teleportTo("backrooms:poolrooms",0,65,0,0,0)
				//server.runCommandSilent(`execute in backrooms:poolrooms unless score first_pool_gen first_pool_gen matches 1 run backrooms generation node first poolrooms`)
				//server.runCommandSilent(`scoreboard objectives add first_pool_gen dummy`)
				//server.runCommandSilent(`scoreboard players set first_pool_gen first_pool_gen 1`)
				return 1
            })
        )
		.then(Commands.literal("backrooms")
		    .executes(ctx => {
				let player = ctx.source.entity
                enter_area("backrooms",player)
				return 1
            })
        ))
    )
})