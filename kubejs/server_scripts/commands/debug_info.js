ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

	event.register(
        Commands.literal("backrooms")
		//.requires(source => source.hasPermission(2))
		.then(Commands.literal("info")
		.then(Commands.literal("node")
		.then(Commands.literal("existence")
		    .executes(ctx => {
				let player = ctx.source.getPlayer()
				let level = ctx.source.getLevel()
                let position = ctx.source.getPosition()
				let pos_x = position.x()
				let pos_z = position.z()
				if (does_node_exist(pos_x,48,pos_z,level)) {
					if (player != null) {
						player.tell(`The node at ${pos_x}, ${pos_z} currently exists`)
						return 1
					}
				}
				return 0
            })
        )))
    )
})