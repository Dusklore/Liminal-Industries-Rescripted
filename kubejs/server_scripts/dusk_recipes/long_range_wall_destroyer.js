ServerEvents.recipes(event => {

	event.shaped(
		'2x kubejs:long_range_wall_destroyer',
		[ 
		'ITI', 
		'AMA',
		'IBI'  
		],{
		  I: 'botania:terrasteel_ingot',
		  M: 'botania:lens_mine',
		  T: 'kubejs:half_frame_top',
		  B: 'kubejs:half_frame_bottom',
		  A: 'immersiveengineering:component_electronic_adv'
	})

})

/**
* @param {Internal.BlockContainerJS} wall
*/
function break_wall(wall) {
	let pos_x = wall.getX()
	let pos_y = wall.getY()
	let pos_z = wall.getZ()
	if (wall.id != "kubejs:long_range_wall_destroyer") {
		wall.set("minecraft:air")
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.shroomlight.break","blocks",3,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.respawn_anchor.deplete","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:dust_color_transition 0 0.5 1 5 0 1 1", false, pos_x + 0.5, pos_y, pos_z + 0.5, 0.5, 0.5, 0.5, 50, 0)
	}
}
/**
* @param {Internal.BlockContainerJS} wall
* @param {String} direction
*/
function get_wall_offset(wall,direction) {
	if (direction == "north") {return wall.getNorth()}
	if (direction == "south") {return wall.getSouth()}
	if (direction == "east") {return wall.getEast()}
	if (direction == "west") {return wall.getWest()}
	if (direction == "up") {return wall.getUp()}
	if (direction == "down") {return wall.getDown()}
	return wall
}

/**
* @param {Internal.BlockContainerJS} wall
* @param {String} direction
*/
function break_wall_line(wall,direction) {
	for (let count = 0; count < 10; count++) {
		if (wall.id == "kubejs:long_range_wall_destroyer" && wall.properties.get("facing") == direction) {
			break
		} else {
			break_wall(wall)
		}
		wall = get_wall_offset(wall,direction)
	}
}

/**
* @param {Internal.BlockContainerJS} wall
* @param {String} direction
*/
function check_wall_line(wall,direction) {
	if (wall.id != "minecraft:air") {
		for (let count = 0; count < 10; count++) {
			if (wall.id == "kubejs:long_range_wall_destroyer" && wall.properties.get("facing") == direction) {
				return true
			}
			wall = get_wall_offset(wall,direction)
		}
	}
	return false
}

BlockEvents.rightClicked('kubejs:long_range_wall_destroyer', event => {
	let machine = event.block
	let machine_direction = machine.properties.get("facing")
	if (machine_direction == "north") {if (check_wall_line(machine.getSouth(),"south")) {break_wall_line(machine.getSouth(),"south")}}
	else if (machine_direction == "south") {if (check_wall_line(machine.getNorth(),"north")) {break_wall_line(machine.getNorth(),"north")}}
	else if (machine_direction == "east") {if (check_wall_line(machine.getWest(),"west")) {break_wall_line(machine.getWest(),"west")}}
	else if (machine_direction == "west") {if (check_wall_line(machine.getEast(),"east")) {break_wall_line(machine.getEast(),"east")}}
	else if (machine_direction == "up") {if (check_wall_line(machine.getDown(),"down")) {break_wall_line(machine.getDown(),"down")}}
	else if (machine_direction == "down") {if (check_wall_line(machine.getUp(),"up")) {break_wall_line(machine.getUp(),"up")}}
})