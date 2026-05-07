//Server-Startup Bridge Functions
/**
* @param {Internal.BlockRightClickedEventJS} event
*/
global.locker_sculkling_right_click = event => {
	if (event.item == "kubejs:crowbar" && event.hand == "main_hand") {
		let open = event.block.properties.get("open")
		if (open != "true") {
			const [pos_x,pos_y,pos_z] = [event.block.getX() + 0.5,event.block.getY(),event.block.getZ() + 0.5]
			event.level.spawnParticles("minecraft:crit",false,pos_x,pos_y,pos_z,0.1,0.1,0.1,5,0.5)
			if (coin_flip(0.1)) {
				event.item.shrink(1)
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.shield.break","players",1,0,false)
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.zombie.attack_iron_door","blocks",1,1,false)
			} else {
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.zombie.attack_iron_door","blocks",1,2,false)
				locker_sculkling_doors(event.block,true,3)
			}
		}
	}
}
/**
* @param {Internal.BlockLeftClickedEventJS} event
*/
let hasAlreadyClicked = false //prevents the event from firing twice (false = first click; true = click release)
global.locker_sculkling_left_click = event => {
	hasAlreadyClicked = !hasAlreadyClicked
	let locker = event.getBlock()
	if (hasAlreadyClicked) {
		let [pos_x,pos_y,pos_z] = [locker.getX(),locker.getY(),locker.getZ()]
		let open = locker.properties.get("open")
		let hurt_immune = locker.properties.get("triggered")
		if (open == "true") {
			let locker_data = locker.getEntityData().getCompound("data")
			let death_timer = locker_data.getInt("death_timer")
			if (hurt_immune != "true") {
				if (!death_timer > 0) {
					let attack_damage = event.player.getAttributeTotalValue("minecraft:generic.attack_damage")
					if (attack_damage >= 1) {
						locker_sculkling_hurt(locker,attack_damage)
					}
				}
			} else {
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.shulker.hurt_closed","blocks",1,0,false)
			}
		} else {
			Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.shulker.hurt_closed","blocks",1,0,false)
		}
	}
}
/**
* @param {Internal.BlockEntityJS} entity
*/
global.locker_sculkling_tick_event = entity => {
	let locker = entity.block
	locker_sculkling_tick(locker)
}
//Functions
/**
* @param {Internal.BlockContainerJS} locker
*/
function locker_sculkling_tick(locker){
	let [pos_x,pos_y,pos_z] = [locker.getX(),locker.getY(),locker.getZ()]
	let level = locker.getLevel()
	let half = locker.properties.get("half")
	let open = locker.properties.get("open")
	let hurt_immune = locker.properties.get("triggered")
	let aggro_dist = 15
	if (half == "bottom") {
		if (is_locker_not_dead(locker)) {
			let player_nearby = is_player_nearby_locker(locker,aggro_dist)
			if (player_nearby) {locker_change_anger(locker,true)}
			if (is_locker_angry(locker)) {
				if (!player_nearby) {locker_change_anger(locker,false)}
			}
			if (open == "true") {
				if (player_nearby && is_locker_pissed(locker)) {locker_shoot_bullet(locker,level.getNearestPlayer(pos_x,pos_y,pos_z,aggro_dist,true))}
				if (!player_nearby) {locker_sculkling_doors(locker,false,10)}
				//if (locker_data.getBoolean("hurt_immune")) {locker_data.putBoolean("hurt_immune",false)}
			}
			if (!locker_door_timer(locker)) {
				if (open == "true") {locker_sculkling_doors(locker,false,10)}
				else if (player_nearby) {locker_sculkling_doors(locker,true,10)}
			}
		}
	}
}
/**
* @param {Internal.BlockContainerJS} locker
* @param {Internal.Player} player
*/
function locker_shoot_bullet(locker,player){
	let [pos_x,pos_y,pos_z] = [locker.getX() + 0.5,locker.getY() + 0.5,locker.getZ() + 0.5]
	let level = locker.getLevel()
	if (locker.getEntityData().getCompound("data").getInt("door_timer") > 1) {
		let facing = locker.properties.get("facing")
		if (facing == "north") {pos_z--}
		else if (facing == "south") {pos_z++}
		else if (facing == "east") {pos_x++}
		else if (facing == "west") {pos_x--}
		let bullet = level.createEntity("minecraft:shulker_bullet")
		let player_uuid = player.getNbt().get("UUID")
		bullet.mergeNbt({"Steps":7,"Target":player_uuid})
		bullet.setPos(pos_x,pos_y,pos_z)
		bullet.spawn()
		Client.level.playLocalSound(pos_x ,pos_y,pos_z,"minecraft:entity.shulker.shoot","blocks",1,1,false)
	}
    return 1
}
/**
* @param {Internal.BlockContainerJS} locker
* @param {Number} damage
*/
function locker_sculkling_hurt(locker,damage){
	let half = locker.properties.get("half")
	if (half == "bottom") {
		let [pos_x,pos_y,pos_z] = [locker.getX() + 0.5,locker.getY() + 0.5,locker.getZ() + 0.5]
		let locker_data = locker.getEntityData().getCompound("data")
		let health = locker_data.getInt("health")
		if (health > 0) {
			health = health - damage
			Client.level.playLocalSound(pos_x ,pos_y,pos_z,"minecraft:entity.shulker.hurt","blocks",1,2,false)
			locker_data.putInt("health",health)
			locker_data.putInt("anger",30)
			if (coin_flip(0.25)) {locker_sculkling_doors(locker,false,1)}
		} else {
			Client.level.playLocalSound(pos_x ,pos_y,pos_z,"minecraft:entity.shulker.death","blocks",1,2,false)
			locker_data.putInt("death_timer",2)
		}
	}
}
/**
* @param {Internal.BlockContainerJS} locker
* @param {Boolean} open
* @param {Number} time
*/
function locker_sculkling_doors(locker,open,time){
	let [pos_x,pos_y,pos_z] = [locker.getX() + 0.5,locker.getY() + 0.5,locker.getZ() + 0.5]
	let facing = locker.properties.get("facing")
	let above = locker.getUp()
	if (above.getId() == "kubejs:locker_sculkling") {
		above.set("kubejs:locker_sculkling",{"facing":facing,"half":"top","open":open,"triggered":false})
	}
	locker.set("kubejs:locker_sculkling",{"facing":facing,"half":"bottom","open":open,"triggered":false})
	if (open) {
		locker.getEntityData().getCompound("data").putInt("door_timer",time)
		Client.level.playLocalSound(pos_x ,pos_y,pos_z,"minecraft:entity.shulker.open","blocks",1,0,false)
		let locker_data = locker.getEntityData().getCompound("data")
		let health = locker_data.getInt("health")
		if (health == 0) {locker_data.putInt("health",20)}
	} else {
		locker.getEntityData().getCompound("data").putInt("door_timer",time)
		Client.level.playLocalSound(pos_x ,pos_y,pos_z,"minecraft:entity.shulker.close","blocks",1,0,false)
	}
	return 1
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function locker_door_timer(locker){
	let locker_data = locker.getEntityData().getCompound("data")
	let door_timer = locker_data.getInt("door_timer")
	if (door_timer > 0) {
		door_timer--
		locker_data.putInt("door_timer",door_timer)
		return true
	}
	return false
}

/**
* @param {Internal.BlockContainerJS} locker
* @param {boolean} increase
*/
function locker_change_anger(locker,increase){
	let locker_data = locker.getEntityData().getCompound("data")
	let anger = locker_data.getInt("anger")
	locker.level.server.runCommandSilent(`before locker change anger`)
	let distance = get_anger_distance(locker)
	if (increase && !anger >= 30) {
		for (let repeat = 0; repeat < distance; repeat++) {
			if (!anger >= 30) {
				anger++
			}
		}
		locker_data.putInt("anger",anger)
		return true
	} else if (anger > 0) {
		anger--
		locker_data.putInt("anger",anger)
		return true
	}
	return false
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function get_anger_distance(locker){
	//locker.level.server.runCommandSilent(`say ${player_in_locker_aabb(locker,10)}`)
	if (player_in_locker_aabb(locker,5)) {return 2}
	if (player_in_locker_aabb(locker,10)) {return 1}
	//if (player_in_locker_aabb(locker,15)) {return 1}
	return 0
}
/**
* @param {Internal.BlockContainerJS} locker
* @param {Number} distance 
*/
function player_in_locker_aabb(locker,distance){
	let [pos_x,pos_y,pos_z] = [locker.getX() + 0.5,locker.getY() + 0.5,locker.getZ() + 0.5]
	let y_dist = distance / 2
	let nearby_entities = locker.getLevel().getEntitiesWithin(AABB.of(pos_x - distance, pos_y - y_dist, pos_z - distance, pos_x + distance, pos_y + y_dist, pos_z + distance))
  	nearby_entities.forEach(element => {
    	if (element.getType() == "minecraft:player") {return true} //This doesnt work
    })
	return false
}
/**
* @param {Internal.BlockContainerJS} locker
* @param {number} distance
*/
function is_player_nearby_locker(locker,distance){
	let [pos_x,pos_y,pos_z] = [locker.getX() + 0.5,locker.getY() + 0.5,locker.getZ() + 0.5]
	let player = locker.level.getNearestPlayer(pos_x,pos_y,pos_z,distance,true)
	if (player != null) {return true}
	return false
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function is_locker_angry(locker){
	let locker_data = locker.getEntityData().getCompound("data")
	let anger = locker_data.getInt("anger")
	if (anger > 0) {return true}
	return false
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function is_locker_pissed(locker){
	let locker_data = locker.getEntityData().getCompound("data")
	let anger = locker_data.getInt("anger")
	if (anger > 10) {return true}
	return false
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function is_locker_not_dead(locker){
	let locker_data = locker.getEntityData().getCompound("data")
	let death_timer = locker_data.getInt("death_timer")
	if (death_timer > 0) {
		if (death_timer != 1) {
			death_timer--
			locker_data.putInt("death_timer",death_timer)
		} else {
			let [pos_x,pos_y,pos_z] = [locker.getX() + 0.5,locker.getY() + 0.5,locker.getZ() + 0.5]
			locker.level.spawnParticles("minecraft:cloud",false,pos_x,pos_y,pos_z,0.5,0.5,0.5,20,0)
			open_locker(locker)
		}
		return false
	}
	return true
}
/**
* @param {Internal.BlockContainerJS} locker
* @param {String} click
*/
function is_click_locker_front(locker,click){
	let facing = locker.properties.get("facing")
	if (facing == "north") {facing = "south"}
	else if (facing == "south") {facing = "north"}
	else if (facing == "east") {facing = "west"}
	else if (facing == "west") {facing = "east"}
	if (click == facing) {
	}
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function sculkling_attempt_to_teleport(locker){
	let [pos_x,pos_y,pos_z] = [locker.getX(),locker.getY(),locker.getX()]
	let check_block = find_random_locker_nearby(locker)
	if (check_block.getId() == "kubejs:pool_locker_single") {
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.enderman.teleport","blocks",1,1,false)
		//locker_sculkling_doors(check_block,true,3)
		//convert_locker_to_shulker()
		//convert_shulker_to_locker()
		return true
	}
	return false
}
/**
* @param {Internal.BlockContainerJS} locker
*/
function find_random_locker_nearby(locker){
	let level = locker.getLevel()
	let [pos_x,pos_y,pos_z] = [locker.getX(),locker.getY(),locker.getX()]
	pos_x = pos_x + get_random_teleport_offset(15)
	pos_y = pos_y + get_random_teleport_offset(15)
	pos_z = pos_z + get_random_teleport_offset(15)
	let check_block = level.getBlock(pos_x,pos_y,pos_z)
	for (let check_limit = 0; check_limit < 15; check_limit++) {
		if (check_block.getId() == "kubejs:pool_locker_single") {
			return check_block
		}
	}
	return check_block
}
/**
* @param {Number} max_range
*/
function get_random_teleport_offset(max_range){
	let random_offset = Math.round((Math.random() * (max_range -0.001))-0.5)
	if (coin_flip(0.5)) {return random_offset * -1}
	return random_offset
}