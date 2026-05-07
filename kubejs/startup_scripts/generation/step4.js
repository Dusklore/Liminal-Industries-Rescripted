//Step 4: Layered Room Node
/**
* @param {Internal.BlockEntityJS} entity
*/
global.tick_layered_node = entity => {
	let node = entity.block
	let level = entity.getLevel()
	if (!tick_slice(node,get_dimension_bottom(level))) {
		let room_name = node.getEntityData().getCompound("data").getString("room")
		node.set("kubejs:room_node_block")
		node.getEntityData().getCompound("data").putString("room",room_name)
		//goes back to step 1
	}
}
/**
* @param {Internal.Level} level
*/
function get_dimension_bottom(level){
	if (level.getDimension() == "minecraft:overworld") {
		return 0
	}
    return 24
}
/**
* @param {Number} node_y_bottom
* @param {Internal.BlockContainerJS} node
*/
function tick_slice(node,node_y_bottom){
	let server = node.getLevel().getServer()
	let dimension = node.getDimension()
	let [pos_x,pos_z] = [node.getX(),node.getZ()]
	let node_data = node.getEntityData().getCompound("data")
	let slice = node_data.getInt("slice")
	let room = node_data.getString("room")
	let panel_cutout = node_data.getBoolean("panel_cutout")
	if (slice > 0) {
		if (slice > 5) {return false}
		if (slice == 1) {server.runCommandSilent(`execute in ${dimension} positioned ${pos_x -23} ${node_y_bottom} ${pos_z - 23} run place template backrooms:slice1/${room} ~ ~ ~`)}
		else if (slice == 2) {server.runCommandSilent(`execute in ${dimension} positioned ${pos_x -23} ${node_y_bottom + 12} ${pos_z - 23} run place template backrooms:slice2/${room} ~ ~ ~`)}
		else if (slice == 3) {server.runCommandSilent(`execute in ${dimension} positioned ${pos_x -23} ${node_y_bottom + 24} ${pos_z - 23} run place template backrooms:slice3/${room} ~ ~ ~`)}
		else if (slice == 4) {server.runCommandSilent(`execute in ${dimension} positioned ${pos_x -23} ${node_y_bottom + 36} ${pos_z - 23} run place template backrooms:slice4/${room} ~ ~ ~`)}
		else if (slice == 5) {
			if (panel_cutout) {
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 23} ${node_y_bottom} ${pos_z - 23} run fill ~ 1 ~ ~ 45 ~46 minecraft:air replace kubejs:liminalstone`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 23} ${node_y_bottom} ${pos_z - 23} run fill ~ 1 ~ ~46 45 ~ minecraft:air replace kubejs:liminalstone`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 23} ${node_y_bottom} ${pos_z - 23} run fill ~46 1 ~ ~46 45 ~46 minecraft:air replace kubejs:liminalstone`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x - 23} ${node_y_bottom} ${pos_z - 23} run fill ~ 1 ~46 ~46 45 ~46 minecraft:air replace kubejs:liminalstone`)
			} else {return false}
		}
		slice++
		node_data.putInt("slice",slice)
	}
    return true
}