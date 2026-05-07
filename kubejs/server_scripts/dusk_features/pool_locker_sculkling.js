BlockEvents.placed("kubejs:locker_sculkling",event => {
	let bottom = event.getBlock()
	let top = event.getBlock().getUp()
	if (top.getId() == "minecraft:air") {
		let facing = bottom.properties.get("facing")
		top.set("kubejs:locker_sculkling",{"half":"top","facing":facing,"open":false})
		bottom.set("kubejs:locker_sculkling",{"half":"bottom","facing":facing,"open":false})
	} else {
		event.cancel()
	}
})
BlockEvents.leftClicked("kubejs:locker_sculkling", event => {
	global.locker_sculkling_left_click(event)
})

BlockEvents.rightClicked("kubejs:locker_sculkling",event => {
	global.locker_sculkling_right_click(event)
})

EntityEvents.hurt("minecraft:player", event  => {
	if (event.source.getType() == "mob") {
		const attacker = event.source.getImmediate()
		if (attacker.getType() == "minecraft:shulker_bullet") {
			const player = event.getPlayer()
			player.removeAllEffects()
			player.potionEffects.add("minecraft:blindness",100,0,true,false)
			player.potionEffects.add("minecraft:instant_damage",20,0,true,false)
		}
	}
})