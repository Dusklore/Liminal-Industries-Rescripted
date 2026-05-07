
//This script is a WIP and is currently unused

/*ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

		event.register(
        Commands.literal("backrooms")
		.requires(source => source.hasPermission(2))
		.then(Commands.literal("generation")
		.then(Commands.literal("node")
		.then(Commands.literal("set_exits")
		    .executes(ctx => {

				let server = ctx.source.getServer()
				let level = ctx.source.getLevel()
               	let position = ctx.source.getPosition()
				let dimension = ctx.source.getLevel().getDimension()
				let pos_x = position.x()
				let pos_y = position.y()
				let pos_z = position.z()
				let north = true
				let south = true
				let east = true
				let west = true

				let node_block = level.getBlock(pos_x - 1,pos_y,pos_z - 1)
				node_block.set("kubejs:room_node_block")
				let node_data = node_block.entityData.getCompound("data")
				node_data.putInt("sector", server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms info node sector`))
				node_data.put("exits",{})
				if (north) {
					let node_x_north = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z - 26} run backrooms generation node get x`)
					let node_z_north = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z - 26} run backrooms generation node get z`)
					let north_sector = server.runCommandSilent(`execute in ${dimension} positioned ${node_x_north} ${pos_y} ${node_z_north} run backrooms info node sector`)
					node_data.getCompound("exits").put("north",{"sector":north_sector})
				}
				if (south) {
					let node_x_south = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z + 26} run backrooms generation node get x`)
					let node_z_south = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z + 26} run backrooms generation node get z`)
					let south_sector = server.runCommandSilent(`execute in ${dimension} positioned ${node_x_south} ${pos_y} ${node_z_south} run backrooms info node sector`)
					node_data.getCompound("exits").put("south",{"sector":south_sector})
				}
				if (east) {
					let node_x_east = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 26} ${pos_y} ${pos_z} run backrooms generation node get x`)
					let node_z_east = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 26} ${pos_y} ${pos_z} run backrooms generation node get z`)
					let east_sector = server.runCommandSilent(`execute in ${dimension} positioned ${node_x_east} ${pos_y} ${node_z_east} run backrooms info node sector`)
					node_data.getCompound("exits").put("east",{"sector":east_sector})
				}
				if (west) {
					let node_x_west = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 26} ${pos_y} ${pos_z} run backrooms generation node get x`)
					let node_z_west = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 26} ${pos_y} ${pos_z} run backrooms generation node get z`)
					let west_sector = server.runCommandSilent(`execute in ${dimension} positioned ${node_x_west} ${pos_y} ${node_z_west} run backrooms info node sector`)
					node_data.getCompound("exits").put("west",{"sector":west_sector})
				}
				//node_data = node_block.entityData.getCompound("data")
				//node_block.set("kubejs:dead_room_node_block")
				//node_block.entityData.getCompound("data").put("data",node_data)
				return 1
            })
        )))
    )
})*/