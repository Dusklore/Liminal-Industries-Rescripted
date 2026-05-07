ServerEvents.recipes(event => {

    event.shaped('kubejs:sculk_scrubber', [
		' C ', 
		'EDE',
		'ABA'  
		],{
		A: 'immersiveengineering:component_electronic',
		B: 'thermal:rf_coil',
		C: 'thermal:device_nullifier',
		D: 'immersiveengineering:light_engineering',
		E: 'minecraft:iron_bars'
	})
    
})

BlockEvents.rightClicked('kubejs:sculk_scrubber', event => {
	let scrubber = event.block
	if (scrubber.getDown().getId() == "minecraft:sculk") {
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.warden.death","blocks",1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.respawn_anchor.charge","blocks",1,0,true)
		event.level.spawnParticles("minecraft:sonic_boom",false,pos_x,pos_y,pos_z,0,0,0,1,0.1)
		scrubber.set("kubejs:sculked_sculk_scrubber")
	} else if (event.getPlayer() != null) {
		event.player.tell("You need to place the scrubber on sculk!")
	}
})