
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_x
* @param {Number} pos_y
* @param {Number} pos_z
* @param {Internal.ServerLevel} level
* @param {Internal.BlockContainerJS} controller
*/
function controller_check(pos_x,pos_y,pos_z,level,controller) {
	let frame = level.getBlock(pos_x,pos_y,pos_z)
	if (frame.getId() == "kubejs:reality_controller" || frame.getId() == "kubejs:reality_controller_running") {
		let controller_x = Math.floor(controller.getX())
		let controller_y = Math.floor(controller.getY())
		let controller_z = Math.floor(controller.getZ())
		let frame_x = Math.floor(pos_x)
		let frame_y = Math.floor(pos_y)
		let frame_z = Math.floor(pos_z)
		if(controller_x == frame_x && controller_y == frame_y && controller_z == frame_z) {return true}
	}
	return false
}
//Requires: controller_check()
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_x
* @param {Number} pos_y
* @param {Number} pos_z
* @param {Internal.ServerLevel} level
* @param {Internal.BlockContainerJS} controller
*/
function check_bottom_layer(pos_x,pos_y,pos_z,level,controller) {

	//west side (9 blocks)
	for (let count = 0; count < 9; count++) {
		if (!controller_check(pos_x,pos_y,pos_z + count,level,controller)) {
			if (level.getBlock(pos_x,pos_y,pos_z + count).getId() != "kubejs:reality_frame") {return false}
		}
	}
	//east side (9 blocks)
	for (let count = 0; count < 9; count++) {
		if (!controller_check(pos_x + 8,pos_y,pos_z + count,level,controller)) {
			if (level.getBlock(pos_x + 8,pos_y,pos_z + count).getId() != "kubejs:reality_frame") {return false}
		}
	}
	//north side (7 blocks)
	for (let count = 1; count < 8; count++) {
		if (!controller_check(pos_x + count,pos_y,pos_z,level,controller)) {
			if (level.getBlock(pos_x + count,pos_y,pos_z).getId() != "kubejs:reality_frame") {return false}
		}
	}
	//south side (7 blocks)
	for (let count = 1; count < 8; count++) {
		if (!controller_check(pos_x + count,pos_y,pos_z + 8,level,controller)) {
			if (level.getBlock(pos_x + count,pos_y,pos_z + 8).getId() != "kubejs:reality_frame") {return false}
		}
	}
	return true
}
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_x
* @param {Number} pos_y
* @param {Number} pos_z
* @param {Internal.ServerLevel} level
*/
function check_pillar_blocks(pos_x,pos_y,pos_z,level) {
	//4 pillar blocks (7 times upwards)
	for (let count = 1; count < 8; count++) {
		if (level.getBlock(pos_x,pos_y + count,pos_z).getId() != "kubejs:reality_frame") {return false}
		if (level.getBlock(pos_x,pos_y + count,pos_z + 8).getId() != "kubejs:reality_frame") {return false}
		if (level.getBlock(pos_x + 8,pos_y + count,pos_z).getId() != "kubejs:reality_frame") {return false}
		if (level.getBlock(pos_x + 8,pos_y + count,pos_z + 8).getId() != "kubejs:reality_frame") {return false}
	}
	return true
}
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_x
* @param {String} direction
*/
function get_x_offset(pos_x,direction) {
	if (direction == "north" || direction == "up" || direction == "down" || direction == "south") {return pos_x - 4}
	if (direction == "east") {return pos_x - 8}
	return pos_x
}
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_z
* @param {String} direction
*/
function get_z_offset(pos_z,direction) {
	if (direction == "west" || direction == "east") {return pos_z - 4}
	if (direction == "south") {return pos_z - 8}
	return pos_z
}
//Requires: get_x_offset
//Requires: get_z_offset
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_x
* @param {Number} pos_y
* @param {Number} pos_z
* @param {Internal.ServerLevel} level
*/
function get_corner_block(pos_x,pos_y,pos_z,level) {
	let controller = level.getBlock(pos_x,pos_y,pos_z)
	if (controller.getId() == "kubejs:reality_controller" || controller.getId() == "kubejs:reality_controller_running") {
		let facing = controller.properties.get("facing")
		let block_x = get_x_offset(pos_x,facing)
		let block_z = get_z_offset(pos_z,facing)
		return level.getBlock(block_x,pos_y,block_z)
	}
	return level.getBlock(pos_x,pos_y,pos_z)
}
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_x
* @param {String} direction
*/
function get_core_x(pos_x,direction) {
	if (direction == "west") {return pos_x + 4}
	if (direction == "east") {return pos_x - 4}
	return pos_x
}
//This Function Is Imported From "generation/reality_check"
/**
* @param {Number} pos_z
* @param {String} direction
*/
function get_core_z(pos_z,direction) {
	if (direction == "north" || direction == "up" || direction == "down") {return pos_z + 4}
	if (direction == "south") {return pos_z - 4}
	return pos_z
}
//Requires: get_core_x()
//Requires: get_core_z()
//Requires: check_bottom_layer()
//Requires: check_bottom_layer()
//Requires: check_pillar_blocks()
//Requires: get_corner_block()
//This Function Is Imported From "generation/reality"
/**
* @param {Number} pos_x
* @param {Number} pos_y
* @param {Number} pos_z
* @param {Internal.ServerLevel} level
* @param {String} chip_type
*/
function start_reality(chip_type,pos_x,pos_y,pos_z,level) {
	let controller = level.getBlock(pos_x,pos_y,pos_z)
	let reality_charge = controller.getUp()
	if (reality_charge.getId() == "kubejs:reality_charge") {
		let corner_block = get_corner_block(pos_x,pos_y,pos_z,level)
		if (corner_block.id == "kubejs:reality_frame") {
			let corner_x = corner_block.getX()
			let corner_z = corner_block.getZ()
			let check1 = check_bottom_layer(corner_x,pos_y,corner_z,level,controller)
			let check2 = check_pillar_blocks(corner_x,pos_y,corner_z,level)
			let check3 = check_bottom_layer(corner_x,pos_y + 8,corner_z,level,controller)
			if (check1 && check2 && check3) {
				let direction = controller.properties.get("facing")
				let core_x = get_core_x(pos_x,direction)
				let core_y = pos_y + 4
				let core_z = get_core_z(pos_z,direction)
				let core = level.getBlock(core_x,core_y,core_z)
				let dimension = level.getDimension()
				Client.level.playLocalSound(pos_x,pos_y + 1,pos_z,"minecraft:item.bottle.fill_dragonbreath","blocks",1,0,true)
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"mekanism:tile.machine.antiprotonic_nucleosynthesizer","blocks",3,0,true)
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.illusioner.prepare_blindness","blocks",1,0,true)
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.ender_chest.open","blocks",1,0,true)
				level.spawnParticles("minecraft:dust_color_transition 1 0 1 5 0 0 0",false,pos_x,pos_y,pos_z,0.4,0.4,0.4,10,0.1)
				level.getServer().runCommandSilent(`execute in ${dimension} positioned ${core_x} ${core_y} ${core_z} run fill ~-3 ~-3 ~-3 ~3 ~3 ~3 minecraft:air`)
				reality_charge.set("kubejs:reality_charge_empty")
				controller.set("kubejs:reality_controller_running",{"facing":direction})
				core.set("kubejs:reality_core")
				let core_data = core.getEntityData().getCompound("data")
				core_data.put("controller",{"x":pos_x,"y":pos_y,"z":pos_z})
				core_data.putString("chip_type",chip_type)
				return 1
			}
			return 2
		}
		return 3
	}
	return 0
}
//This Function Is Imported From "generation/reality"
/**
* @param {Internal.BlockContainerJS} core
* @param {Internal.ServerLevel} level
* @param {Internal.MinecraftServer} server
*/
function generate_reality(core,level,server) {
	const [pos_x,pos_y,pos_z] = [core.getX(),core.getY(),core.getZ()]
	const dimension = level.getDimension()
	server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run stopsound @a master mekanism:tile.machine.antiprotonic_nucleosynthesizer`)
	level.spawnParticles("minecraft:dust_color_transition 0 1 1 7 0 0 1",false,pos_x,pos_y,pos_z,3,3,3,300,1)
	level.spawnParticles("minecraft:dust_color_transition 0 1 1 7 0 0 1",false,pos_x,pos_y,pos_z,3,3,3,300,1)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.warped_forest.mood","blocks",1,2,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.warped_forest.mood","blocks",1,2,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.warped_forest.mood","blocks",1,2,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.warped_forest.mood","blocks",1,2,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.beacon.deactivate","blocks",1,0,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.illusioner.mirror_move","blocks",1,2,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.ender_chest.close","blocks",1,0,true)
	let chip_type = core.getEntityData().getCompound("data").getString("chip_type")
	let controller_pos_data = core.getEntityData().getCompound("data").getCompound("controller")
	const [controller_x,controller_y,controller_z] = [controller_pos_data.getInt("x"),controller_pos_data.getInt("y"),controller_pos_data.getInt("z")]
	let controller = level.getBlock(controller_x,controller_y,controller_z)
	let direction = controller.properties.get("facing")
	core.set("minecraft:air")
	if (controller.getId() == "kubejs:reality_controller_running") {
		controller.set("kubejs:reality_controller",{"facing":direction})
	}
	let result = 1
	if (chip_type == "infinity") {
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.end_portal.spawn","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:flash",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,1,0)
		core.set("kubejs:black_hole")
	} else {
		result = server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 3} ${pos_y - 3} ${pos_z - 3} run place template backrooms:reality_${chip_type}`)
	}
	if (result == 0) {
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 3} ${pos_y - 3} ${pos_z - 3} run place template backrooms:reality_error`)
	}

}

BlockEvents.rightClicked("kubejs:reality_controller", event => {
	let player = event.getPlayer()
	let controller = event.block
	let level = event.getLevel()
	let pos_x = controller.getX()
	let pos_y = controller.getY()
	let pos_z = controller.getZ()
	let result
	if (event.item.getId() == "kubejs:data_chip1") {result = start_reality("cave",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip2") {result = start_reality("nether",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip3") {result = start_reality("osmium",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip4") {result = start_reality("grass",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip5") {result = start_reality("diamond",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip6") {result = start_reality("blaze",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip7") {result = start_reality("pyramid",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip8") {result = start_reality("end",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip9") {result = start_reality("room",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip10") {result = start_reality("portal",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip_error") {result = start_reality("error",pos_x,pos_y,pos_z,level)}
	else if (event.item.getId() == "kubejs:data_chip_infinity") {result = start_reality("infinity",pos_x,pos_y,pos_z,level)}
	if (player != null) {
		if (result == 0) {
			player.tell(`The reality charge is missing or empty`)
		} else if (result == 2) {
			player.tell(`The frame is incomplete`)
		} else if (result == 3) {
			player.tell(`The controller is in the wrong spot or the frame is incomplete`)
		}
	}
})


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	//Requires: get_corner_block()
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("reality")
		.then(Commands.literal("tick")
		    .executes(ctx => {
				let server = ctx.source.getServer()
                let position = ctx.source.getPosition()
				let level = ctx.source.getLevel()
				let dimension = level.getDimension()
				let pos_x = position.x() - 0.5
				let pos_y = position.y()
				let pos_z = position.z() - 0.5

				let core = level.getBlock(pos_x,pos_y,pos_z)
				let block_data = core.getEntityData().getCompound("data")
				let timer = block_data.getInt("timer")
				timer++
				block_data.putInt("timer",timer)

				let burst_timestamps = [50,75,100,110,113,116,118]
				let sound_timestamps = [20,40,60,80,100]
				let frame_checks = [10,20,30,40,50,60,70,80,90,100,110]

				frame_checks.forEach((element) => {
					if (timer == element) {
						let check = false
						let controller_pos_data = block_data.getCompound("controller")
						let controller_x = controller_pos_data.getInt("x")
						let controller_y = controller_pos_data.getInt("y")
						let controller_z = controller_pos_data.getInt("z")
						let controller = level.getBlock(controller_x,controller_y,controller_z)
						let corner_block = get_corner_block(controller_x,controller_y,controller_z,level)
						if (corner_block.id == "kubejs:reality_frame") {
							let corner_x = corner_block.getX()
							let corner_y = controller_y
							let corner_z = corner_block.getZ()
							let check1 = check_bottom_layer(corner_x,corner_y,corner_z,level,controller)
							let check2 = check_pillar_blocks(corner_x,corner_y,corner_z,level)
							let check3 = check_bottom_layer(corner_x,corner_y + 8,corner_z,level,controller)
							if (check1 && check2 && check3) {check = true}
						}
						if (!check) {
							Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.beacon.deactivate","blocks",10,0,true)
							core.set("minecraft:air")
							if (controller.getId() == "kubejs:reality_controller_running") {
								controller.set("kubejs:reality_controller")
							}
						}
					}
				})
				burst_timestamps.forEach((element) => {
					if (timer == element) {
						Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.nether_wastes.mood","blocks",10,2,true)
						Client.level.spawnParticles("minecraft:dust_color_transition 0 1 1 5 0 0.3 1",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0.3,0.3,0.3,5,0.1)
						Client.level.spawnParticles("minecraft:flash",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,1,0)
					}
				})
				sound_timestamps.forEach((element) => {
					if (timer == element) {
						Client.level.playLocalSound(pos_x,pos_y,pos_z,"mekanism:tile.machine.antiprotonic_nucleosynthesizer","blocks",3,0,true)
					}
				})
				Client.level.spawnParticles("supplementaries:rotation_trail_emitter",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,2,1)
				Client.level.spawnParticles("supplementaries:rotation_trail_emitter",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,2,1)
				Client.level.spawnParticles("supplementaries:rotation_trail_emitter",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,2,1)
				Client.level.spawnParticles("supplementaries:rotation_trail_emitter",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,2,1)
				Client.level.spawnParticles("supplementaries:rotation_trail_emitter",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,2,1)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y + 0.5} ${pos_z} run effect give @e[distance=..5] wither 1 9 true`)
				if (timer == 120) {
					generate_reality(core,level,server)
				}
				return 1
            })
        )
    )))

	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("tick")
		.then(Commands.literal("blackhole")
		    .executes(ctx => {
				let server = ctx.source.getServer()
                let position = ctx.source.getPosition()
				let level = ctx.source.getLevel()
				let dimension = level.getDimension()
				let pos_x = position.x() - 0.5
				let pos_y = position.y()
				let pos_z = position.z() - 0.5

				let block_data = level.getBlock(pos_x,pos_y,pos_z).getEntityData().getCompound("data")
				let timer = block_data.getInt("timer")
				timer++
				block_data.putInt("timer",timer)

				let burst_timestamps = [25,50,75,100,110,113,116,118]
				if (0.01 >= Math.random()) {
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.basalt_deltas.mood","blocks",1,1,true)
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.basalt_deltas.mood","blocks",1,1,true)
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.basalt_deltas.mood","blocks",1,1,true)
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.basalt_deltas.mood","blocks",1,1,true)
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.basalt_deltas.mood","blocks",1,0,true)
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.basalt_deltas.mood","blocks",1,0,true)
					Client.level.spawnParticles("minecraft:dripping_obsidian_tear",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,2,2,2,50,0)
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run particle minecraft:dust_color_transition 1 0 1 10 0 0 0 ~ ~ ~ 1 1 1 0.1 20 force`)
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run summon item ~1 ~-1 ~-2 {Item:{id:"mekanism:pellet_antimatter",Count:1b}}`)
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run summon item ~ ~1 ~2 {Item:{id:"mekanism:pellet_antimatter",Count:1b}}`)
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run summon item ~2 ~ ~1 {Item:{id:"mekanism:pellet_antimatter",Count:1b}}`)
				}
				burst_timestamps.forEach((element) => {
					if (timer == element) {
						Client.level.playLocalSound(pos_x,pos_y,pos_z,"mekanism:item.geiger_medium","blocks",10,2,true)
						Client.level.playLocalSound(pos_x,pos_y,pos_z,"mekanism:item.geiger_medium","blocks",10,2,true)
						Client.level.playLocalSound(pos_x,pos_y,pos_z,"mekanism:item.geiger_medium","blocks",10,2,true)
						Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.generic.explode","blocks",10,2,true)
						Client.level.spawnParticles("minecraft:explosion",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,1,1,1,10,0)
						Client.level.spawnParticles("mekanism:radiation",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,1,1,1,50,0)
						Client.level.spawnParticles("minecraft:flash",true,pos_x + 0.5,pos_y + 0.5,pos_z + 0.5,0,0,0,1,0)
					}
				})
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.crimson_forest.mood","blocks",1,2,true)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x + 0.5} ${pos_y + 0.5} ${pos_z + 0.5} run particle minecraft:dust_color_transition 0 0 0 10 0 0 0 ~ ~ ~ 0.75 0.75 0.75 0 10 force`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y + 0.5} ${pos_z} run effect give @e[distance=..5] wither 1 9 true`)
				if (timer == 120) {
					server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run setblock ~ ~ ~ minecraft:air`)
					Client.level.playLocalSound(pos_x,pos_y,pos_z,"botania:missile","blocks",10,0,true)
				}
				return 1
            })
        )
    )))
})

BlockEvents.rightClicked('kubejs:black_hole', event => {
	if (event.item.id == 'ae2:singularity') {
		let position = event.block.getPos()
		let pos_x = position.getX()
		let pos_y = position.getY()
		let pos_z = position.getZ()
		let block_data = event.block.getEntityData().getCompound("data")
		block_data.putInt("timer",0)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"actuallyadditions:reconstructor","blocks",10,0,true)
		event.item.count--
	}
})