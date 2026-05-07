//This Function Is Imported From "generation/feature_node"
/**
* @param {Internal.BlockContainerJS} spawner
* @param {Internal.ServerLevel} level
*/
function tick_reality_spawner(spawner,level){
	const [pos_x,pos_y,pos_z] = [spawner.getX(),spawner.getY(),spawner.getZ()]
	let nearest_player = level.getNearestPlayer(pos_x,pos_y,pos_z,10,true)
	if (nearest_player != null) {
		let mob = level.createEntity("minecraft:blaze")
		mob.setPos(pos_x + 0.5,pos_y,pos_z + 0.5)
		mob.spawn()
		mob.spawn()
		mob.spawn()
		Client.level.spawnParticles("minecraft:flame",false,pos_x,pos_y,pos_z,1,1,1,25,0)
		spawner.set("air")
	}
    return 1
}