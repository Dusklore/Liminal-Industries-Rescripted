EntityEvents.hurt("minecraft:ravager", event => {
	let attacker = event.getSource().getImmediate()
	let server = event.getServer()
	let dimension = event.level.getDimension()
	if (attacker != null) {
		let position = event.entity.getPos()
		let pass = (server.runCommandSilent(`execute in ${dimension} positioned ${position.x()} ${position.y()} ${position.z()} run fill ~2 ~2 ~2 ~-2 ~-2 ~-2 air replace #kubejs:ravager_whitelist`) == 1)
		if (pass) {
			Client.level.playLocalSound(position.x(),position.y(),position.z(),"minecraft:entity.wither.break_block","blocks",1,1,true)
		}
	}
})

EntityEvents.hurt("minecraft:player", event => {
	let attacker = event.getSource().getImmediate()
	if (attacker != null) {
		if (attacker.type == "minecraft:ravager") {
			let position = attacker.getPos()
			Client.level.playLocalSound(position.x(),position.y(),position.z(),"minecraft:entity.wither.break_block","blocks",1,1,true)
		}
	}
})