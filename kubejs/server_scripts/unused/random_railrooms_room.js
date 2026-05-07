
//This script is WIP and is unused

/*ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

    event.register(
        Commands.literal("get_random_rail_code")
        .then(Commands.argument('sector', Arguments.INTEGER.create(event))
		.then(Commands.argument('direction', Arguments.STRING.create(event))
		
            .executes(ctx => {
            	const sector = Arguments.INTEGER.getResult(ctx, "sector")
				const direction = Arguments.INTEGER.getResult(ctx, "direction")

				var server = ctx.source.getServer()
				var random_room = server.runCommandSilent(`random_room 17`)

				if (random_room >= 0 && random_room <= 5) {
					var type = "straight"
                } else if (random_room >= 6 && random_room <= 7) {
            		var type = "turn1"
                } else if (random_room >= 8 && random_room <= 9) {
            		var type = "turn2"
                } else if (random_room >= 10 && random_room <= 11) {
            		var type = "tjunction1"
                } else if (random_room >= 12 && random_room <= 13) {
            		var type = "tjunction2"
                } else if (random_room >= 14 && random_room <= 15) {
            		var type = "tjunction3"
                } else if (random_room >= 16) {
            		var type = "all"
                }

				if (direction == "posx") {
					if (type = "straight") {
						var code = server.runCommandSilent(`adjust_room_exits false false true true`)
                    } else if (type = "turn1") {
            			var code = server.runCommandSilent(`adjust_room_exits false true false true`)
                    } else if (type = "turn2") {
            			var code = server.runCommandSilent(`adjust_room_exits true false false true`)
                    } else if (type = "tjunction1") {
            			var code = server.runCommandSilent(`adjust_room_exits true true false true`)
                    } else if (type = "tjunction2") {
            			var code = server.runCommandSilent(`adjust_room_exits false true true true`)
                    } else if (type = "tjunction3") {
            			var code = server.runCommandSilent(`adjust_room_exits true false true true`)
                    } else {
            			var code = server.runCommandSilent(`adjust_room_exits true true true true`)
                    }
				} else if (direction == "negx") {
					if (type = "straight") {
						var code = server.runCommandSilent(`adjust_room_exits false false true true`)
                    } else if (type = "turn1") {
            			var code = server.runCommandSilent(`adjust_room_exits false true true false`)
                    } else if (type = "turn2") {
            			var code = server.runCommandSilent(`adjust_room_exits true false true false`)
                    } else if (type = "tjunction1") {
            			var code = server.runCommandSilent(`adjust_room_exits true true true false`)
                    } else if (type = "tjunction2") {
            			var code = server.runCommandSilent(`adjust_room_exits false true true true`)
                    } else if (type = "tjunction3") {
            			var code = server.runCommandSilent(`adjust_room_exits true false true true`)
                    } else {
            			var code = server.runCommandSilent(`adjust_room_exits true true true true`)
                    }
				} else if (direction == "posz") {
					if (type = "straight") {
						var code = server.runCommandSilent(`adjust_room_exits true true false false`)
                    } else if (type = "turn1") {
            			var code = server.runCommandSilent(`adjust_room_exits true false true false`)
                    } else if (type = "turn2") {
            			var code = server.runCommandSilent(`adjust_room_exits true false false true`)
                    } else if (type = "tjunction1") {
            			var code = server.runCommandSilent(`adjust_room_exits true true true false`)
                    } else if (type = "tjunction2") {
            			var code = server.runCommandSilent(`adjust_room_exits true true false true`)
                    } else if (type = "tjunction3") {
            			var code = server.runCommandSilent(`adjust_room_exits true false true true`)
                    } else {
            			var code = server.runCommandSilent(`adjust_room_exits true true true true`)
                    }
				} else if (direction == "posz") {
					if (type = "straight") {
						var code = server.runCommandSilent(`adjust_room_exits true true false false`)
                    } else if (type = "turn1") {
            			var code = server.runCommandSilent(`adjust_room_exits false true true false`)
                    } else if (type = "turn2") {
            			var code = server.runCommandSilent(`adjust_room_exits false true false true`)
                    } else if (type = "tjunction1") {
            			var code = server.runCommandSilent(`adjust_room_exits true true true false`)
                    } else if (type = "tjunction2") {
            			var code = server.runCommandSilent(`adjust_room_exits true true false true`)
                    } else if (type = "tjunction3") {
            			var code = server.runCommandSilent(`adjust_room_exits false true true true`)
                    } else {
            			var code = server.runCommandSilent(`adjust_room_exits true true true true`)
                    }
				}
				server.runCommandSilent(`say ${code}`)
				return code
            })
        ))
    )
	event.register(
        Commands.literal("generate_random_railrooms_room")
        .then(Commands.argument('sector', Arguments.INTEGER.create(event))
		.then(Commands.argument('direction', Arguments.STRING.create(event))
		
            .executes(ctx => {
            	const sector = Arguments.INTEGER.getResult(ctx, "sector")
				const direction = Arguments.INTEGER.getResult(ctx, "direction")

				var server = ctx.source.getServer()
				var random_room = server.runCommandSilent(`random_room 17`)
            })
        ))
    )
})*/