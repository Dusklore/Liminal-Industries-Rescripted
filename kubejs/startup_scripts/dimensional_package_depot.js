StartupEvents.registry('block', event => {

event.create('dark_casing')
	.fullBlock(true)
	.material("wood")
	.soundType("wood")
    .tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:mineable/axe')

event.create('dimensional_package_depot')
	.fullBlock(false)
	.material("wood")
	.soundType("wood")
    .tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:mineable/axe')
	.box(0, 0, 0, 16, 12, 16)
	.blockEntity(entityInfo => {
		entityInfo.serverTick(20, 0, entity => {
			global.tick_dimensional_package_depot(entity)
		})
	})
})

/**
* @param {Internal.BlockEntityJS} entity
*/
global.tick_dimensional_package_depot = entity => {
	let depot = entity.block
	//const [pos_x,pos_y,pos_z] = [depot.getX(),depot.getY(),depot.getZ()]
	//const level = depot.getLevel()
	tick_dimensional_depot(depot,depot)
}
/**
* @param {Internal.BlockRightClickedEventJS} event
*/
global.right_click_dimensional_depot_event = event => {
	let depot = event.getBlock()
	let card = event.getItem()
	let card_data = card.getNbt().getCompound("Location")
	let address = card_data.getString("name")
	let dimension = card_data.getString("levelKey")
	let position = card_data.getCompound("blockpos")
	//let [pos_x,pos_y,pos_z] = [position.getInt("X"),position.getInt("Y"),position.getInt("Z")]
	let depot_data = depot.getEntityData().getCompound("data")
	let address_data = depot_data.getCompound("address_list")
	address_data.put(address,{"dimension":dimension,"position":position})
	depot_data.put("address_list",address_data)
	depot.setEntityData({"data":depot_data})
	card.shrink(1)
}

/**
* @param {Internal.BlockContainerJS} depot
* @param {Internal.BlockContainerJS} destination
*/
function tick_dimensional_depot(depot,destination){
	const level = depot.getLevel()
	//const new_dimension = destination.getLevel().getDimension()
	const [pos_x,pos_y,pos_z] = [depot.getX(),depot.getY(),depot.getZ()]
	let nearby_entities = level.getEntitiesWithin(AABB.of(pos_x + 0.1, pos_y, pos_z + 0.1, pos_x + 0.9, pos_y + 1, pos_z + 0.9))
	nearby_entities.forEach(element => {
		if (element.getType() == "create:package") {
			let address = element.getNbt().getCompound("Box").getCompound("tag").getString("Address")
			if (address != "") {
				if (does_depot_have_address(depot,address)) {
					let new_dimension = get_depot_destination_dimension(depot,address)
					let destination = get_depot_destination(depot,address)
					let [pos_x,pos_y,pos_z] = [destination.getX(),destination.getY(),destination.getZ()] 
					element.teleportTo(new_dimension,pos_x + 0.5,pos_y,pos_z + 0.5,0,0)
				} else {
					level.server.runCommandSilent(`say no address was found`)
				}
				
			} else {
				level.server.runCommandSilent(`say no address was found`)
			}
		}
	})
}
/**
* @param {Internal.BlockContainerJS} depot
* @param {String} new_dimension
* @param {String} address
*/
function does_depot_have_address(depot,address){
	let address_list = depot.getEntityData().getCompound("data").getCompound("address_list")
	let address_data = address_list.getCompound(address)
	if (address_data.isEmpty()) {
		return false
	}
	return true
}
/**
* @param {Internal.BlockContainerJS} depot
* @param {String} address
*/
function get_depot_destination_dimension(depot,address){
	let address_list = depot.getEntityData().getCompound("data").getCompound("address_list")
	let address_data = address_list.getCompound(address)
	let dimension = address_data.getString("dimension")
	return dimension
}
/**
* @param {Internal.BlockContainerJS} depot
* @param {String} address
*/
function get_depot_destination(depot,address){
	let address_list = depot.getEntityData().getCompound("data").getCompound("address_list")
	let address_data = address_list.getCompound(address)
	let dimension = address_data.getString("dimension")
	let position = address_data.getCompound("position")
	let [pos_x,pos_y,pos_z] = [position.getInt("X"),position.getInt("Y"),position.getInt("Z")]
	let level = depot.getLevel()
	let new_level = level.server.getLevel(dimension)
	let destination = new_level.getBlock(pos_x,pos_y,pos_z)
	//if (destination.getId() == "kubejs:dimensional_package_depot") {}
	return destination
}