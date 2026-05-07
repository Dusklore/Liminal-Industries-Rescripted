LevelEvents.beforeExplosion(event => {
	let size = Math.round(event.getSize())
	let server = event.server
	let position = event.position
	let dimension = event.getLevel().getDimension()
	let pos_x = position.x()
	let pos_y = position.y()
	let pos_z = position.z()
	
	server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~-${size} ~-${size} ~-${size} ~${size} ~${size} ~${size} kubejs:ceilling_lamp_breaking replace kubejs:ceilling_lamp`)
	server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~-${size} ~-${size} ~-${size} ~${size} ~${size} ~${size} kubejs:ceilling_lamp_breaking replace kubejs:ceilling_lamp_off`)
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("tick")
		.then(Commands.literal("breaking_lamp")
		    .executes(ctx => {
				let server = ctx.source.getServer()
				let position = ctx.source.getPosition()
				let dimension = ctx.source.getLevel().getDimension()
				let pos_x = position.x()
				let pos_y = position.y()
				let pos_z = position.z()

				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run setblock ~ ~ ~ kubejs:ceilling_lamp_broken`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run summon item ~ ~-0.5 ~ {Motion:[-0.1,0.0,0.1],Item:{id:"kubejs:fluorescent_tube",Count:1b}}`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run playsound block.glass.break master @a ~ ~ ~ 1 0`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run playsound minecraft:entity.firework_rocket.blast master @a ~ ~ ~ 1 2`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run playsound jeg:item.pistol.silenced_fire master @a ~ ~ ~ 1 1`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle block kubejs:ceilling_lamp ~ ~ ~ 0.5 0.5 0.5 0.01 50 force`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle firework ~ ~ ~ 0.1 0.1 0.1 0.05 5 force`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle minecraft:white_ash ~ ~ ~ 0.5 0.5 0.5 0.1 50 force`)
				while (pos_y > 0) {
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} if block ~ ~ ~ minecraft:light run setblock ~ ~ ~ minecraft:air`)
					pos_y--
				}
				return 1
            })
        )))
    )

	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("interact")
		.then(Commands.literal("restore_lamp")
		    .executes(ctx => {
				let server = ctx.source.getServer()
				let position = ctx.source.getPosition()
				let dimension = ctx.source.getLevel().getDimension()
				let pos_x = position.x()
				let pos_y = position.y()
				let pos_z = position.z()

				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run setblock ~ ~ ~ kubejs:ceilling_lamp`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run playsound immersiveengineering:tesla master @a ~ ~ ~ 1 1.5`)
				while (pos_y > 0) {
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} if block ~ ~ ~ minecraft:air run setblock ~ ~ ~ minecraft:light`)
					pos_y--
					if (server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} if block ~ ~-5 ~ minecraft:air`) == 0) {
						break
					}
				}
				return 1
            })
        )))
    )
})