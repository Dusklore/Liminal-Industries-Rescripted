LevelEvents.beforeExplosion(event => {
	let server = event.server
	let position = event.position
	let dimension = event.getLevel().getDimension()
	let pos_x = position.x()
	let pos_y = position.y()
	let pos_z = position.z()
	
	let exploder_id = event.exploder.entityType
	if (exploder_id == "entity.minecraft.creeper") {
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.generic.explode","blocks",5,1.5,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.warden.sonic_boom","blocks",5,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.warden.dig","blocks",5,2,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.warden.dig","blocks",5,2,true)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle minecraft:warped_spore ~ ~1 ~ 0 0 0 9 1000 force`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle minecraft:sculk_soul ~ ~1 ~ 0 0 0 0.3 20 force`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle minecraft:sonic_boom ~ ~ ~ 2 2 2 2 20 force`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run particle minecraft:dust_color_transition 0.1 0.1 0.1 2 0 0.6 0.6 ~ ~ ~ 2 2 2 0.1 200 force`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run place feature minecraft:sculk_patch_deep_dark ~ ~ ~`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~5 0 ~5 ~-5 46 ~-5 kubejs:ceilling_lamp_breaking replace kubejs:ceilling_lamp`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~5 0 ~5 ~-5 46 ~-5 kubejs:ceilling_lamp_breaking replace kubejs:ceilling_lamp_off`)
		server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run effect give @a[distance=..5] darkness 5 0 true`)
	}
})

ItemEvents.dropped(event => {
	let server = event.server
	let item_id = event.getItem().getId()
	let position = event.entity.position()
	let pos_x = position.x()
	let pos_y = position.y()
	let pos_z = position.z()
	if (item_id == "immersiveengineering:stick_steel") {
		server.scheduleInTicks(20, callback => {
  			Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:custom.metal_pipe_close","blocks",10,1,true)
		})
	}
})