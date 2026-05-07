//This script is a WIP and is unused
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

    event.register(
        Commands.literal("adjust_room_exits")
        .then(Commands.argument('north', Arguments.BOOLEAN.create(event))
		.then(Commands.argument('south', Arguments.BOOLEAN.create(event))
		.then(Commands.argument('east', Arguments.BOOLEAN.create(event))
		.then(Commands.argument('west', Arguments.BOOLEAN.create(event))
            .executes(ctx => {
            	const north = Arguments.BOOLEAN.getResult(ctx, "north")
				const south = Arguments.BOOLEAN.getResult(ctx, "south")
				const east = Arguments.BOOLEAN.getResult(ctx, "east")
				const west = Arguments.BOOLEAN.getResult(ctx, "west")
				
				var server = ctx.source.getServer()
				var position = ctx.source.getPosition()
				var code = 0
				
				//upgrade
				var upgrade_north = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~23 0 ~ minecraft:lime_concrete`)
				var upgrade_south = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~-23 0 ~ minecraft:lime_concrete`)
				var upgrade_east = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~ 0 ~23 minecraft:lime_concrete`)
				var upgrade_west = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~ 0 ~-23 minecraft:lime_concrete`)
				//downgrade
				var downgrade_north = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~23 0 ~ minecraft:red_concrete`)
				var downgrade_south = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~-23 0 ~ minecraft:red_concrete`)
				var downgrade_east = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~ 0 ~23 minecraft:red_concrete`)
				var downgrade_west = server.runCommandSilent(`execute positioned ${position.x} 0 ${position.z} if block ~ 0 ~-23 minecraft:red_concrete`)
				//overrides
				if (upgrade_north == 1) {
					north = true
				} else if (downgrade_north == 1) {
					north = false
				}
				if (upgrade_south == 1) {
					south = true
				} else if (downgrade_south == 1) {
					south = false
				}
				if (upgrade_east == 1) {
					east = true
				} else if (downgrade_east == 1) {
					east = false
				}
				if (upgrade_west == 1) {
					west= true
				} else if (downgrade_west == 1) {
					west = false
				}
				//code
				if (north == true) {
					code = code + 1000
				}
				if (south == true) {
					code = code + 100
				}
				if (east == true) {
					code = code + 10
				}
				if (west == true) {
					code = code + 1
				}
				return code
            })
        ))))
    )
})