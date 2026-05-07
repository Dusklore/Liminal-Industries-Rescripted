ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("test")
		    .executes(ctx => {
				let server = ctx.source.getServer()
				let pos_x = ctx.source.player.getX()
				let pos_y = ctx.source.player.getY()
				let pos_z = ctx.source.player.getZ()
				server.runCommandSilent(`execute positioned ${pos_x} ${pos_y} ${pos_z} run fill ~ 1 ~ ~46 10 ~46 minecraft:structure_void replace minecraft:barrier`)
				server.runCommandSilent(`execute positioned ${pos_x} ${pos_y} ${pos_z} run fill ~ 11 ~ ~46 20 ~46 minecraft:structure_void replace minecraft:barrier`)
				server.runCommandSilent(`execute positioned ${pos_x} ${pos_y} ${pos_z} run fill ~ 21 ~ ~46 30 ~46 minecraft:structure_void replace minecraft:barrier`)
				server.runCommandSilent(`execute positioned ${pos_x} ${pos_y} ${pos_z} run fill ~ 31 ~ ~46 40 ~46 minecraft:structure_void replace minecraft:barrier`)
				server.runCommandSilent(`execute positioned ${pos_x} ${pos_y} ${pos_z} run fill ~ 41 ~ ~46 47 ~46 minecraft:structure_void replace minecraft:barrier`)
            })
        )
    )
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("test3")
		    .executes(ctx => {
				global.test34(ctx.source.getServer())
            })
        )
    )
})