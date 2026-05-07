/**
* @param {Internal.ServerLevel} level
*/
function get_node_y(level){
	if (level.getDimension() == "minecraft:overworld") {
		return 48
	}
    return 72
}
/**
* @param {Internal.BlockContainerJS} circuit_breaker
* @param {Internal.BlockContainerJS} room_node
*/
function circuit_breaker_reset_shutdown(room_node,circuit_breaker){
	const [pos_x,pos_y,pos_z] = [circuit_breaker.getX(),circuit_breaker.getY(),circuit_breaker.getZ()]
	let room_node_data = room_node.getEntityData().getCompound("data")
	if (room_node.getId() == "kubejs:redstone_room_node_block") {
		room_node_data.merge({"shutdown":0,"circuit_breaker":{"x":pos_x,"y":pos_y,"z":pos_z}})
		if (!room_node_data.getBoolean("lights")) {
			turn_room_lights_on(room_node)
			//if (is_client_nearby(pos_x,pos_y,pos_z)) {
			//Client.level.playLocalSound(pos_x + 0.5,pos_y,pos_z + 0.5,"fairylights:cord.snap","blocks",0.2,0,true)
			//}
		}
	} else if (room_node.getId() == "kubejs:dead_room_node_block") {
		room_node.set("kubejs:redstone_room_node_block")
		room_node_data = room_node.getEntityData().getCompound("data")
		room_node_data.merge({"lights":true,"shutdown":0,"circuit_breaker":{"x":pos_x,"y":pos_y,"z":pos_z}})
	}
    return 1
}
/**
* @param {number} pos_x
* @param {number} pos_z
* @param {Internal.ServerLevel} level
*/
function get_room_node(pos_x,pos_z,level){
	const [node_x,node_y,node_z] = [get_node_a(pos_x,-1000),get_node_y(level),get_node_a(pos_z,-1000)]
	const room_node = level.getBlock(node_x,node_y,node_z)
    return room_node
}
/**
* @param {Internal.BlockContainerJS} room_node
*/
function are_room_lights_on(room_node){
	if (room_node.getId() != "kubejs:redstone_room_node_block") {
		return true
	} else if (room_node.getEntityData().getCompound("data").getBoolean("lights")) {
		return true
	}
	return false
}
/**
* @param {Internal.BlockContainerJS} room_node
*/
function turn_room_lights_off(room_node){
	const server = room_node.level.getServer()
	const dimension = room_node.level.getDimension()
	const [node_x,node_y,node_z] = [room_node.getX(),room_node.getY(),room_node.getZ()]
	room_node.getEntityData().getCompound("data").putBoolean("lights",false)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~-23 ~ 46 ~ kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~-23 ~ 46 ~ kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~23 ~ 46 ~ kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~23 ~ 46 ~ kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~-23 ~ 46 ~ minecraft:light[level=0] replace minecraft:light`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~-23 ~ 46 ~ minecraft:light[level=0] replace minecraft:light`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~23 ~ 46 ~ minecraft:light[level=0] replace minecraft:light`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~23 ~ 46 ~ minecraft:light[level=0] replace minecraft:light`)
	return true
}
/**
* @param {Internal.BlockContainerJS} room_node
*/
function turn_room_lights_on(room_node){
	const server = room_node.level.getServer()
	const dimension = room_node.level.getDimension()
	const [node_x,node_y,node_z] = [room_node.getX(),room_node.getY(),room_node.getZ()]
	room_node.getEntityData().getCompound("data").putBoolean("lights",true)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~-23 ~ 46 ~ kubejs:ceilling_lamp replace kubejs:ceilling_lamp_off`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~-23 ~ 46 ~ kubejs:ceilling_lamp replace kubejs:ceilling_lamp_off`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~23 ~ 46 ~ kubejs:ceilling_lamp replace kubejs:ceilling_lamp_off`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~23 ~ 46 ~ kubejs:ceilling_lamp replace kubejs:ceilling_lamp_off`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~-23 ~ 46 ~ minecraft:light replace minecraft:light[level=0]`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~-23 ~ 46 ~ minecraft:light replace minecraft:light[level=0]`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~-23 0 ~23 ~ 46 ~ minecraft:light replace minecraft:light[level=0]`)
	server.runCommandSilent(`execute in ${dimension} positioned ${node_x} ${node_y} ${node_z} run fill ~23 0 ~23 ~ 46 ~ minecraft:light replace minecraft:light[level=0]`)
	return true
}
/**
* @param {Internal.BlockContainerJS} room_node
*/
function ping_ciruit_breaker(room_node){
	const level = room_node.getLevel()
	let circuit_breaker_loc = room_node.getEntityData().getCompound("data").getCompound("circuit_breaker")
	let pos_x = circuit_breaker_loc.getInt("x")
	let pos_y = circuit_breaker_loc.getInt("y")
	let pos_z = circuit_breaker_loc.getInt("z")
	let circuit_breaker = level.getBlock(pos_x,pos_y,pos_z)
	Client.level.playLocalSound(pos_x + 0.5,pos_y,pos_z + 0.5,"immersiveengineering:chute","blocks",1,0,true)
	if (circuit_breaker.getId() != "cfm_circuit_breaker:circuit_breaker") {
		Client.level.playLocalSound(pos_x + 0.5,pos_y,pos_z + 0.5,"immersiveengineering:chute","blocks",1,0,true)
		Client.level.playLocalSound(pos_x + 0.5,pos_y,pos_z + 0.5,"immersiveengineering:electromagnet","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:firework",false,pos_x + 0.5,pos_y,pos_z + 0.5,0,0,0,50,0.2)
		Client.level.spawnParticles("minecraft:campfire_signal_smoke",false,pos_x + 0.5,pos_y,pos_z + 0.5,0.3,0.3,0.3,5,0)
	}
	return true
}
/**
* @param {Integer} cir_x
* @param {Integer} cir_y
* @param {Integer} cir_z
*/
function is_client_nearby(cir_x,cir_y,cir_z){
	let [pos_x,pos_y,pos_z] = [Client.player.getX(),Client.player.getY(),Client.player.getX()]
	let x_dist = Math.abs(cir_x - pos_x)
	let y_dist = Math.abs(cir_y - pos_y)
	let z_dist = Math.abs(cir_z - pos_z)
	if (x_dist > 30) {return false}
	if (y_dist > 30) {return false}
	if (z_dist > 30) {return false}
	return true
}
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

		event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("generation")
		.then(Commands.literal("tick")
		.then(Commands.literal("redstone_node")
            .executes(ctx => {
				const position = ctx.source.position
				const level = ctx.source.getLevel()
				const [pos_x, pos_y, pos_z] = [position.x() - 1, position.y(), position.z() - 1]
				const room_node = level.getBlock(pos_x,pos_y,pos_z)
				if (room_node.getId() == "kubejs:redstone_room_node_block") {
					let room_node_data = room_node.getEntityData().getCompound("data")
					let shutdown = room_node_data.getInt("shutdown")
					shutdown++
					room_node_data.putInt("shutdown",shutdown)
					if (room_node_data.getInt("shutdown") >= 3 && room_node_data.getBoolean("lights")) {
						turn_room_lights_off(room_node)
						ping_ciruit_breaker(room_node)
					}
				}
				return 1
            })
        )))
	)

	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("tick")
		.then(Commands.literal("controls")
            .executes(ctx => {
				let level = ctx.source.getLevel()
				let server = ctx.source.getServer()
                let position = ctx.source.getPosition()
				let dimension = level.getDimension()
				let pos_x = position.x() - 0.5
				let pos_y = position.y()
				let pos_z = position.z() - 0.5
				let opposite_check = "empty"
				let direction = "none"
				let dead = true
				let wallpaper = ctx.source.getLevel().getBlock(pos_x,pos_y,pos_z).getBlockState()
				let wallpaper_id = wallpaper.block.id
				
				if (wallpaper_id == "kubejs:controller_wallpaper" || wallpaper_id == "kubejs:controller_wallpaper_dead") {
					if (wallpaper_id == "kubejs:controller_wallpaper") {
						dead = false
					}
					direction = wallpaper.getValue(BlockProperties.HORIZONTAL_FACING)
					if (direction == "north") {
						pos_z--
						opposite_check = "south"
					} else if (direction == "south") {
						pos_z++
						opposite_check = "north"
					} else if (direction == "east") {
						pos_x++
						opposite_check = "west"
					} else if (direction == "west") {
						pos_x--
						opposite_check = "east"
					}
				}
				if (opposite_check != "empty") {

					let circuit_breaker = ctx.source.getLevel().getBlock(pos_x,pos_y,pos_z)
					let circuit_breaker_id = circuit_breaker.getId()
					let has_breaker = (circuit_breaker_id == "cfm_circuit_breaker:circuit_breaker" && circuit_breaker.properties.get("facing") == opposite_check)
					let is_active = false
					if (has_breaker) {
						let room_node = get_room_node(pos_x,pos_z,level)
						//circuit_breaker.getEntityData().merge({"Energy":1000})
						server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run data merge block ~ ~ ~ {Energy:1000}`)
						is_active = circuit_breaker.properties.get("powered")
						if (is_active == "true") {
							Client.level.playLocalSound(pos_x + 0.5,pos_y,pos_z + 0.5,"refurbished_furniture:block.electricity_generator.engine","blocks",0.1,0,false)
							circuit_breaker_reset_shutdown(room_node,circuit_breaker)
						}
					}
				}
				return 1
            })
        )))
	)

	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("rooms")
		.then(Commands.literal("lights")
		.then(Commands.literal("off")
            .executes(ctx => {
						const position = ctx.source.getPosition()
						const level = ctx.source.getLevel()
						let pos_x = position.x()
						let pos_z = position.z()
						let node_x = get_node_a(pos_x,-1000)
						let node_y = get_node_y(level)
						let node_z = get_node_a(pos_z,-1000)
						turn_room_lights_off(level.getBlock(node_x,node_y,node_z))
				return 1
            })
        )
		.then(Commands.literal("on")
            .executes(ctx => {
						const position = ctx.source.getPosition()
						const level = ctx.source.getLevel()
						let pos_x = position.x()
						let pos_z = position.z()
						let node_x = get_node_a(pos_x,-1000)
						let node_y = get_node_y(level)
						let node_z = get_node_a(pos_z,-1000)
						turn_room_lights_on(level.getBlock(node_x,node_y,node_z))
				return 1
            })
        )
	)))
})