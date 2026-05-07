//Server-Startup Bridge Functions
/**
* @param {Internal.BlockPlacedEventJS} event
*/
global.place_locker_event = event => {
	let bottom = event.getBlock()
	let top = event.getBlock().getUp()
	if (bottom.getId() == "kubejs:pool_locker_single") {
		if (top.getId() == "minecraft:air") {
			let facing = bottom.properties.get("facing")
			top.set("kubejs:pool_locker_single",{"half":"top","facing":facing})
		} else {
			event.cancel()
		}
	} else if (bottom.getId() == "kubejs:pool_locker_double") {
		if (top.getId() == "minecraft:air") {
			let facing = bottom.properties.get("facing")
			top.set("kubejs:pool_locker_double",{"half":"top","facing":facing})
		} else {
			event.cancel()
		}
	} else if (bottom.getId() == "kubejs:open_pool_locker_single") {
		if (top.getId() == "minecraft:air") {
			let facing = bottom.properties.get("facing")
			top.set("kubejs:open_pool_locker_single",{"half":"top","facing":facing,"slot_0_occupied":coin_flip(0.25),"slot_1_occupied":coin_flip(0.25),"slot_2_occupied":coin_flip(0.25),"slot_3_occupied":coin_flip(0.25)})
			bottom.set("kubejs:open_pool_locker_single",{"half":"bottom","facing":facing,"slot_0_occupied":coin_flip(0.25),"slot_1_occupied":coin_flip(0.25),"slot_2_occupied":coin_flip(0.25),"slot_3_occupied":coin_flip(0.25)})
		} else {
			event.cancel()
		}
	} else if (bottom.getId() == "kubejs:open_pool_locker_double") {
		let box4 = coin_flip(0.50)
		let box3 = coin_flip_w_prereq(0.50,box4)
		let box2 = coin_flip_w_prereq(0.50,box3)
		let box1 = coin_flip_w_prereq(0.50,box2)
		if (top.getId() == "minecraft:air") {
			let facing = bottom.properties.get("facing")
			let towel_colour = get_towel_colour()
			top.set("kubejs:open_pool_locker_double",{"half":"top","facing":facing,"slot_0_occupied":coin_flip(0.25),"slot_1_occupied":coin_flip(0.25),"slot_2_occupied":false,"slot_3_occupied":false,"age":`${towel_colour}`})
			bottom.set("kubejs:open_pool_locker_double",{"half":"bottom","facing":facing,"slot_0_occupied":box1,"slot_1_occupied":box2,"slot_2_occupied":box3,"slot_3_occupied":box4})
		} else {
			event.cancel()
		}
	}
}