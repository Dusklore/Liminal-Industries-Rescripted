ServerEvents.recipes(event => {

	event.shaped(
		'2x kubejs:wall_destroyer',
		[ 
		'SBS', 
		'EPE',
		'SHS'  
		],{
		  S: 'immersiveengineering:plate_steel',
		  B: 'botania:lens_mine',
		  E: 'immersiveengineering:component_electronic',
		  P: 'minecraft:prismarine_crystals',
		  H: 'immersiveengineering:heavy_engineering'
	})
})

BlockEvents.rightClicked('kubejs:wall_destroyer', event => {
	let machine = event.block
	let machine_direction = machine.properties.get("facing")
	let wall = machine
	let other_machine = machine
	let opposite_direction = "none"
	if (machine_direction == "north") {
		wall = machine.getSouth()
		other_machine = wall.getSouth()
		opposite_direction = "south"
	} else if (machine_direction == "south") {
		wall = machine.getNorth()
		other_machine = wall.getNorth()
		opposite_direction = "north"
	} else if (machine_direction == "west") {
		wall = machine.getEast()
		other_machine = wall.getEast()
		opposite_direction = "east"
	} else if (machine_direction == "east") {
		wall = machine.getWest()
		other_machine = wall.getWest()
		opposite_direction = "west"
	} else if (machine_direction == "down") {
		wall = machine.getUp()
		other_machine = wall.getUp()
		opposite_direction = "up"
	} else if (machine_direction == "up") {
		wall = machine.getDown()
		other_machine = wall.getDown()
		opposite_direction = "down"
	}
	let pos_x = wall.getX()
	let pos_y = wall.getY()
	let pos_z = wall.getZ()
	if (wall.id != "minecraft:air" && (other_machine.properties.get("facing") == opposite_direction)) {
		wall.set("minecraft:air")
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.shroomlight.break","blocks",3,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.respawn_anchor.deplete","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:dust_color_transition 0 0.5 1 5 0 1 1", false, pos_x + 0.5, pos_y, pos_z + 0.5, 0.5, 0.5, 0.5, 50, 0)
	}
})