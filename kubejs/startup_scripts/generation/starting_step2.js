/**
* @param {Internal.ServerLevel} level
*/
global.generate_first_node = level => {
	generate_first_node(level)
}
/**
* @param {Internal.BlockEntityJS} entity
*/
global.tick_spawn_node = entity => {
	let node = entity.block
	if (insta_generate_room(node)) {
		node.set("kubejs:room_node_block")
	}
}
/**
* @param {Internal.ServerLevel} level
*/
function generate_first_node(level){
	let node = get_first_dimension_node(level)
	if (!is_block_node(node)) { //is_block_node() is in step 2
		node.set("kubejs:room_node_block_spawn")
		let [node_x,node_y,node_z] = [node.getX(),node.getY(),node.getZ()]
		level.getBlock(node_x,node_y,node_z - 22).set("kubejs:room_node_connector",{"facing":"north"})
		level.getBlock(node_x,node_y,node_z + 22).set("kubejs:room_node_connector",{"facing":"south"})
		level.getBlock(node_x - 22,node_y,node_z).set("kubejs:room_node_connector",{"facing":"west"})
		level.getBlock(node_x + 22,node_y,node_z).set("kubejs:room_node_connector",{"facing":"east"})
	}
	return 1
}
/**
* @param {Internal.BlockContainerJS} node
*/
function insta_generate_room(node){
	let level = node.getLevel()
	let node_y_bottom = get_dimension_bottom_y(level)
	let dimension = level.getDimension()
	let [node_x,node_z] = [node.getX(),node.getZ()]
	let room = get_starting_room_name(level)
	let pass1 = level.server.runCommandSilent(`execute in ${dimension} positioned ${node_x -23} ${node_y_bottom} ${node_z - 23} run place template backrooms:slice1/${room} ~ ~ ~`)
	let pass2 = level.server.runCommandSilent(`execute in ${dimension} positioned ${node_x -23} ${node_y_bottom + 12} ${node_z - 23} run place template backrooms:slice2/${room} ~ ~ ~`)
	let pass3 = level.server.runCommandSilent(`execute in ${dimension} positioned ${node_x -23} ${node_y_bottom + 24} ${node_z - 23} run place template backrooms:slice3/${room} ~ ~ ~`)
	let pass4 = level.server.runCommandSilent(`execute in ${dimension} positioned ${node_x -23} ${node_y_bottom + 36} ${node_z - 23} run place template backrooms:slice4/${room} ~ ~ ~`)
	return (pass1 && pass2 && pass3 && pass4)
}
/**
* @param {Internal.ServerLevel} level
*/
function get_first_dimension_node(level){
	let dimension = level.getDimension()
	if (dimension == "minecraft:overworld") {
		return level.getBlock(-1000,get_node_dimension_y(level),-1000) //get_node_dimension_y() is in step 2
	}
	return level.getBlock(0,get_node_dimension_y(level),0) //get_node_dimension_y() is in step 2
}
/**
* @param {Internal.Level} level
*/
function get_dimension_bottom_y(level){
	if (level.getDimension() == "minecraft:overworld") {
		return 0
	}
    return 24
}
/**
* @param {Internal.ServerLevel} level
*/
function get_starting_room_name(level){
	let dimension = level.getDimension()
	if (dimension == "minecraft:overworld") {
		return "base_room"
	} else if (dimension == "backrooms:poolrooms") {
		return "starting_pool"
	}
	return "base_room"
}