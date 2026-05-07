//Step 3: Calculate sector of new node and generate it
/**
* @param {Internal.BlockContainerJS} connector
*/
function generate_new_node(connector){
	let level = connector.getLevel()
	let dimension = level.getDimension()
	let [center_x,center_z] = [get_world_center(level),get_world_center(level)]
	let [pos_x,pos_z] = [connector.getX(),connector.getZ()]
	let node_x = get_node_a(pos_x,center_x)
	let node_y = get_node_dimension_y(level) //get_node_dimension_y() is in step 1-2
	let node_z = get_node_a(pos_z,center_z)
	let connector_north = level.getBlock(node_x,node_y,node_z - 22)
	let connector_south = level.getBlock(node_x,node_y,node_z + 22)
	let connector_west = level.getBlock(node_x - 22,node_y,node_z)
	let connector_east = level.getBlock(node_x + 22,node_y,node_z)
	let pass1 = (connector_north.id == "minecraft:air")
	let pass2 = (connector_south.id == "minecraft:air")
	let pass3 = (connector_west.id == "minecraft:air")
	let pass4 = (connector_east.id == "minecraft:air")
	if (pass1 && pass2 && pass3 && pass4) {
		let sector = get_sector(node_x,node_z,center_x,center_z,dimension)
		let node = level.getBlock(node_x,node_y,node_z)
		node.set("kubejs:layered_room_node_block")
		let node_data = node.getEntityData().getCompound("data")
		node_data.putInt("slice",1)
		node_data.putString("room",get_random_room(sector))
		node_data.putBoolean("panel_cutout",has_panel_cutout(sector))
		connector_north.set("kubejs:room_node_connector", {"facing":"north"})
		connector_south.set("kubejs:room_node_connector", {"facing":"south"})
		connector_west.set("kubejs:room_node_connector", {"facing":"west"})
		connector_east.set("kubejs:room_node_connector", {"facing":"east"})
	}
}
/**
* @param {Internal.ServerLevel} level
*/
function get_world_center(level){
	let dimension = level.getDimension()
	if (dimension == "minecraft:overworld") {
		return -1000
	}
    return 0
}
/**
* @param {Number} center_a
* @param {Number} pos_a
*/
function get_node_a(pos_a, center_a){
	let node_a = 0;
	let parcel_dist_a = Math.floor(Math.abs(pos_a - (center_a)) / 23)
	if (parcel_dist_a > 0) {
    	if (parcel_dist_a % 2 == 0) {parcel_dist_a = Math.floor(parcel_dist_a - 1)}
    }
	parcel_dist_a = Math.ceil(parcel_dist_a / 2)
	if (pos_a > center_a) {
        node_a = center_a + parcel_dist_a * 46
    } else if (pos_a < center_a) {
        node_a = center_a + parcel_dist_a * 46 * (-1)
    } else {
        node_a = center_a
	}
	node_a = Math.floor(node_a)
    return node_a
}
/**
* @param {Number} pos_x
* @param {Number} pos_z
* @param {Number} world_center_x
* @param {Number} world_center_z
* @param {Internal.ServerLevel} dimension
*/
function get_sector(pos_x, pos_z, world_center_x, world_center_z, dimension){
	if (dimension == "minecraft:overworld") {
		let distance = Math.sqrt(((world_center_z - pos_z) ** 2) + ((world_center_x - pos_x) ** 2))
		let distance_points = [1800,1600,1450,1400,1350,1300,1100,1000,700,650,600,550,250,100]
		let sectors = [2,5,2,3,6,3,2,4,2,3,6,3,2,1]
		let chosen_sector = 0
		for (let count = 0; count < distance_points.length; count++) {
			let distance_check = distance_points[count]
			if (distance > distance_check) {
				chosen_sector = sectors[count]
				break
			}
		}
		return chosen_sector
	}
	if (dimension == "backrooms:poolrooms") {
		return 7
	}
	return 0
}
/**
* @param {Number} sector
*/
function has_panel_cutout(sector) {
	if (sector == 3) {return true}
	if (sector == 4) {return true}
	if (sector == 5) {return true}
	if (sector == 6) {return true}
	return false
}