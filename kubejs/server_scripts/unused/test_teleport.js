ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("test_tele")
		.then(Commands.argument('node_pos', Arguments.BLOCK_POS.create(event))
            .executes(ctx => {
				const position = Arguments.VEC3.getResult(ctx, "node_pos")
				const [pos_x, pos_y, pos_z] = [position.x(), position.y(), position.z()]
				let locker = ctx.source.level.getBlock(pos_x,pos_y,pos_z)
				let check_block = find_random_locker_nearby(locker)
				if (check_block.getId() == "kubejs:pool_locker_single") {
					ctx.source.server.runCommandSilent(`say locker at: ${check_block.getX()} ${check_block.getY()} ${check_block.getZ()}`)
				} else {
					ctx.source.server.runCommandSilent(`say no locker was found: ${check_block.getX()} ${check_block.getY()} ${check_block.getZ()}`)
				}
				return 1
            })
        ))
    )
})

