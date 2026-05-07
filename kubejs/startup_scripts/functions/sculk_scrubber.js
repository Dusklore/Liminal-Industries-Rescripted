/**
* @param {Internal.BlockEntityJS} entity
*/
global.tick_sculk_scrubber = entity => {
	let node = entity.block
	let level = node.getLevel()
	let server = level.getServer()
	let dimension = level.getDimension()
	let block_data = node.getEntityData().getCompound("data")
	let timer = block_data.getInt("timer")
	let [pos_x,pos_y,pos_z] = [node.getX(),node.getY(),node.getZ()]
	if (timer < 30) {
		pos_x++
		pos_z++
		timer++
		block_data.putInt("timer",timer)
		let cleanse_radius = 0
		let burst_timestamps = [5,10,15,20,25]
		burst_timestamps.forEach((element) => {
			if (timer == element) {
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"block.sculk.break","blocks",1,0,true)
				Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.respawn_anchor.set_spawn","blocks",1,1,true)
				level.spawnParticles("minecraft:sculk_soul",false,pos_x,pos_y,pos_z,1,1,1,10,0)
				level.spawnParticles("minecraft:sonic_boom",false,pos_x,pos_y,pos_z,0,0,0,1,0.1)
				level.spawnParticles("minecraft:dust_color_transition 0 1 1 4 0 0 0", false,1,0.5,1,10,0.1)
				level.spawnParticles("minecraft:dust_color_transition 0 1 1 4 0 0 0", false,1,0.5,1,10,0.1)
				level.spawnParticles("minecraft:dust_color_transition 0 1 1 4 0 0 0", false,1,0.5,1,10,0.1)
				level.spawnParticles("minecraft:dust_color_transition 0 1 1 4 0 0 0", false,1,0.5,1,10,0.1)
				cleanse_radius = block_data.getInt("cleanse_radius")
				cleanse_radius++
				block_data.putInt("cleanse_radius",cleanse_radius)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~${cleanse_radius} ~${cleanse_radius} ~${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} minecraft:air replace kubejs:sculk_tendrils`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~${cleanse_radius} ~${cleanse_radius} ~${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} minecraft:air replace kubejs:sculk_shroom`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~${cleanse_radius} ~${cleanse_radius} ~${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} minecraft:air replace #kubejs:soft_sculk`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~${cleanse_radius} ~${cleanse_radius} ~${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} minecraft:air replace minecraft:sculk_vein`)
				server.runCommandSilent(`execute in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run fill ~${cleanse_radius} ~${cleanse_radius} ~${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} ~-${cleanse_radius} kubejs:porous_stone replace #kubejs:block_sculk`)
			}
		})
		if (timer == 30) {
			Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.respawn_anchor.deplete","blocks",1,0,true)
		}
	}
}