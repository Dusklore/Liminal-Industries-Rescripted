EntityEvents.hurt("minecraft:player", event => {
	let attacker = event.getSource().getImmediate()
	if (attacker != null) {
		if (attacker.type == "minecraft:ravager") {
			let position = attacker.getPos()
			Client.level.playLocalSound(position.x(),position.y(),position.z(),"minecraft:entity.wither.break_block","blocks",1,1,true)
		}
	}
})

PlayerEvents.respawned(event => {
	if(event.player.getY() >= 46) {
		event.player.setX(-1000.5)
		event.player.setY(23)
		event.player.setZ(-1000.5)
		event.player.setLevel("minecraft:overworld")
	}
})