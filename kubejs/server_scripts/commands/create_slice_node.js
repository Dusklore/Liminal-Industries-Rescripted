ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("create")
		.then(Commands.literal("layered_node")
		.then(Commands.argument('node_pos', Arguments.BLOCK_POS.create(event))
            .executes(ctx => {
				const position = Arguments.VEC3.getResult(ctx, "node_pos")
				const [pos_x, pos_y, pos_z] = [position.x(), position.y(), position.z()]
				const level = ctx.source.getLevel()
				let node = level.getBlock(pos_x,pos_y,pos_z)
				node.set("kubejs:layered_room_node_block")
				let node_data = node.getEntityData().getCompound("data")
				node_data.putInt("slice",1)
				node_data.putString("room","bamboo_room")
				node_data.putBoolean("panel_cutout",false)
				return 1
            })
        )))
    )
})