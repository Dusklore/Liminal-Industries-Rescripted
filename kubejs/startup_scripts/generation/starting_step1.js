/**
* @param {Internal.Player} player
*/
global.enter_backrooms = player => {
	enter_area("backrooms",player)
}
/**
* @param {Internal.Player} player
*/
global.enter_poolrooms = player => {
	enter_area("poolrooms",player)
}
/**
* @param {Internal.Player} player
* @param {String} area
*/
function enter_area(area, player){
	let server = player.getServer()
    if (area == "backrooms") {
        player.teleportTo("minecraft:overworld",-1000,23,-1000,0,0)
		let first_flag = server.persistentData.getCompound("backrooms").getBoolean("generated")
		if (!first_flag) {
			server.persistentData.merge({"backrooms":{"generated":true,"spawn":{"x":-1000,"y":23,"z":-1000}}})
			let level = player.getLevel()
			global.generate_first_node(level) //Step 2
		}
        return 1
    } else if (area == "poolrooms") {
        player.teleportTo("backrooms:poolrooms",0,65,0,0,0)
        let first_flag = server.persistentData.getCompound("poolrooms").getBoolean("generated")
	    if (!first_flag) {
		    server.persistentData.merge({"poolrooms":{"generated":true,"spawn":{"x":0,"y":65,"z":0}}})
			let level = player.getLevel()
			global.generate_first_node(level) //Step 2
			level.playLocalSound(0,65,0,"minecraft:entity.player.splash.high_speed","blocks",1,0,true)
			level.playLocalSound(0,65,0,"minecraft:entity.player.splash","blocks",1,1,true)
			level.playLocalSound(0,65,0,"minecraft:entity.player.splash","blocks",1,0,true)
			level.playLocalSound(0,65,0,"minecraft:ambient.underwater.enter","blocks",1,0,true)
			level.playLocalSound(0,95,0,"minecraft:ambient.cave","blocks",35,0,true)
			level.playLocalSound(0,95,0,"minecraft:ambient.cave","blocks",35,0,true)
			level.playLocalSound(0,95,0,"minecraft:ambient.cave","blocks",35,0,true)
			level.playLocalSound(0,95,0,"minecraft:ambient.cave","blocks",35,0,true)
			level.playLocalSound(0,95,0,"minecraft:ambient.cave","blocks",35,0,true)
			level.spawnParticles("particular:water_splash_emitter",false,0,65,0,0,0,0,30,1.5)
			level.spawnParticles("minecraft:bubble",false,0,65,0,2,2,2,200,0)
			level.spawnParticles("minecraft:falling_water",false,0,66,0,2,5,2,100,1)
	    }
        return 1
    }
    return 0
}