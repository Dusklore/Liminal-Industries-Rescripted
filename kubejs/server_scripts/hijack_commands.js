ServerEvents.command('backrooms', event => {
	let player = event.getParseResults().getContext().getSource().player
	if (player != null) {
		if (!player.gameMode.isCreative()) {
			player.tell("§cOnly players in creative may use this command!")
			event.cancel()
		}
	}
})

/*ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:poolrooms_enter") {
		let source = event.getParseResults().getContext().getSource()
		let dimension = source.getLevel().getDimension()
		let pos_x = source.getPosition().x()
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z()
		event.server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run backrooms enter poolrooms`)
		event.cancel()
	}
})

ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:poolrooms_exit") {
		let source = event.getParseResults().getContext().getSource()
		let player = event.player
		let dimension = source.getLevel().getDimension()
		let pos_x = source.getPosition().x()
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z()
		event.server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run ftbquests change_progress @a[distance=..10] complete 25DBA9EE127F3CE4`)
		if (player != null) {
			player.teleportTo("backrooms:poolrooms",0,65,0,0,0)
		} else {
			event.server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run execute as @e[distance=..7] in minecraft:overworld run tp @s -1000 23 -1000`)
		}
		event.cancel()
	}
})

//I dont know what the point was. Spawns in loot? I caught a few rooms using it
/*ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:common_loot_infinite") {
		let source = event.getParseResults().getContext().getSource()
		let level = source.getLevel()
		let dimension = source.getLevel().getDimension()
		let pos_x = source.getPosition().x()
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z()
		event.server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y} ${pos_z + 0.5} run backrooms rooms loot common`)
		level.getBlock(pos_x - 1,pos_y,pos_z - 1).set("minecraft:air")
		event.cancel()
	}
})*/

//Removes all redundant node command blocks
/*ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:room_node_generation") {
		let source = event.getParseResults().getContext().getSource()
		let level = source.getLevel()
		let pos_x = source.getPosition().x()
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z()
		level.getBlock(pos_x - 1,pos_y,pos_z - 1).set("minecraft:air")
		event.cancel()
	}
})

ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:common_loot") {
		let source = event.getParseResults().getContext().getSource()
		let level = source.getLevel()
		let dimension = level.getDimension()
		let server = source.getServer()
		let pos_x = source.getPosition().x() - 1
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z() - 1
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms create feature_node ~ ~ ~ loot common`)
		event.cancel()
	}
})

ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:common_water_loot") {
		let source = event.getParseResults().getContext().getSource()
		let level = source.getLevel()
		let dimension = level.getDimension()
		let server = source.getServer()
		let pos_x = source.getPosition().x() - 1
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z() - 1
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms create feature_node ~ ~ ~ loot water`)
		event.cancel()
	}
})

ServerEvents.command('function', event => {
	let command = event.getInput()
	if (command == "function backrooms:spawner_drowned") {
		let source = event.getParseResults().getContext().getSource()
		let level = source.getLevel()
		let dimension = level.getDimension()
		let server = source.getServer()
		let pos_x = source.getPosition().x() - 1
		let pos_y = source.getPosition().y()
		let pos_z = source.getPosition().z() - 1
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run backrooms create feature_node ~ ~ ~ spawner drowned`)
		event.cancel()
	}
})*/