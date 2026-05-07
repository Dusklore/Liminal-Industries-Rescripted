/*ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("tick")
		.then(Commands.literal("sculkling")
		    .executes(ctx => {
				let position = ctx.getSource().getPosition()
				let [pos_x,pos_y,pos_z] = [position.x(),position.y(),position.z()]
				let level = ctx.getSource().getLevel()
				let locker = level.getBlock(pos_x - 1,pos_y,pos_z - 1)
				Client.runCommandSilent(`say before tick!`)
				locker_sculkling_tick(locker)
				return 1
            })
        )
    )))
})*/

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

	event.register(
        Commands.literal("backrooms")
		.requires(source => source.hasPermission(2))
		.then(Commands.literal("generation")
		.then(Commands.literal("tick")
		.then(Commands.literal("connector")
            .executes(ctx => {
				let player = ctx.source.getPlayer()
				let level = ctx.source.getLevel()
				let server = ctx.source.getServer()
                let position = ctx.source.getPosition()
				let pos_x = position.x() - 1
				let pos_y = position.y()
				let pos_z = position.z() - 1
				let node_connector = level.getBlock(pos_x,pos_y,pos_z)
				let result = tick_connector(pos_x,pos_y,pos_z,level,server)
				if (player != null) {
					if (result == 1) {
						player.tell(`The connector at ${pos_x}, ${pos_y}, ${pos_z} has been ticked!`)
					} else {
						player.tell(`The block at ${pos_x}, ${pos_y}, ${pos_z} is not a connector!`)
					}
				}
				return 1
            })
        )))
	)
})