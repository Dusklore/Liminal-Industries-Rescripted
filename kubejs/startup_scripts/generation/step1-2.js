//Step 1
/**
* @param {Internal.BlockEntityJS} entity
*/
global.tick_room_node = entity => {
	let node = entity.block
	const [pos_x,pos_y,pos_z] = [node.getX(),node.getY(),node.getZ()]
	const level = node.getLevel()
	if (level.getNearestPlayer(pos_x,pos_y,pos_z,100,false) != null) {
		let connector_1 = level.getBlock(pos_x - 22,pos_y,pos_z)
		let connector_2 = level.getBlock(pos_x + 22,pos_y,pos_z)
		let connector_3 = level.getBlock(pos_x,pos_y,pos_z - 22)
		let connector_4 = level.getBlock(pos_x,pos_y,pos_z + 22)
		let check1 = (connector_1.getId() == "kubejs:room_node_connector")
		let check2 = (connector_2.getId() == "kubejs:room_node_connector")
		let check3 = (connector_3.getId() == "kubejs:room_node_connector")
		let check4 = (connector_4.getId() == "kubejs:room_node_connector")
		if (check1) {tick_connector(connector_1)}
		if (check2) {tick_connector(connector_2)}
		if (check3) {tick_connector(connector_3)}
		if (check4) {tick_connector(connector_4)}
		if (!check1 && !check2 && !check3 && !check4) {
			let room_name = node.getEntityData().getCompound("data").getString("room")
			node.set("kubejs:dead_room_node_block")
			node.getEntityData().getCompound("data").putString("room",room_name)
		}
	}
}
//Step 2
/**
* @param {Internal.BlockContainerJS} node_connector
*/
function tick_connector(node_connector){
	let level = node_connector.getLevel()
	if (node_connector.getId() == "kubejs:room_node_connector") {
		let facing = node_connector.properties.get("facing")
		let other_connector = get_other_connector(node_connector,facing)
		let [other_pos_x,other_pos_z] = [other_connector.getX(),other_connector.getZ()]
		if (other_connector.id == "kubejs:room_node_connector" && other_connector.properties.get("facing") == get_opposite_direction(facing)) {
			node_connector.set("minecraft:bedrock")
			other_connector.set("minecraft:bedrock")
		} else if (!does_node_exist(other_pos_x,get_node_dimension_y(level),other_pos_z,level)) {
			generate_new_node(other_connector)
		}
	}
	return 1
}
/**
* @param {Internal.BlockContainerJS} node_connector
* @param {String} facing
*/
function get_other_connector(node_connector,facing){
	if (facing == "south") {
		return node_connector.getSouth().getSouth()
	} else if (facing == "east") {
		return node_connector.getEast().getEast()
	} else if (facing == "west") {
		return node_connector.getWest().getWest()
	}
	return node_connector.getNorth().getNorth()
}
/**
* @param {String} facing
*/
function get_opposite_direction(facing){
	if (facing == "south") {
		return "north"
	} else if (facing == "east") {
		return "west"
	} else if (facing == "west") {
		return "east"
	}
	return "south"
}
/**
* @param {Internal.Level} level
*/
function get_node_dimension_y(level){
	if (level.getDimension() == "minecraft:overworld") {
		return 48
	}
    return 72
}
/**
* @param {Number} pos_x
* @param {Number} dimension_y
* @param {Number} pos_z
* @param {Internal.ServerLevel} level
*/
function does_node_exist(pos_x,dimension_y,pos_z,level){
	let center_x = get_world_center(level) //get_world_center() is in step 3
	let center_z = get_world_center(level) //get_world_center() is in step 3
	let node_x = get_node_a(pos_x,center_x) //get_node_a() is in step 3
	let node_z = get_node_a(pos_z,center_z) //get_node_a() is in step 3
	let node = level.getBlock(node_x, dimension_y ,node_z)
    return is_block_node(node)
}
/**
* @param {Internal.BlockContainerJS} node
*/
function is_block_node(node){
	if (node.getId() == "kubejs:room_node_block") {return true}
	if (node.getId() == "kubejs:dead_room_node_block") {return true}
	if (node.getId() == "kubejs:redstone_room_node_block") {return true}
	if (node.getId() == "kubejs:layered_room_node_block") {return true}
	if (node.getId() == "kubejs:room_node_block_spawn") {return true}
    return false
}