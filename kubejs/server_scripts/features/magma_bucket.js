/**
* @param {Internal.BlockRightClickedEventJS} event
* @param {String} bucket
*/
function magma_bucket(event,bucket){
		event.item.count--
		event.player.give(bucket)
		const [pos_x,pos_y,pos_z] = [event.block.getX() + 0.5,event.block.getY() + 1,event.block.getZ() + 0.5]
		let mob = event.level.createEntity("minecraft:magma_cube")
		mob.mergeNbt({"Health":1,"Size":0})
		mob.setPos(pos_x,pos_y,pos_z)
		mob.spawn()
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.bucket.empty_lava","blocks",1,0,true)
		Client.level.spawnParticles("minecraft:lava",false,pos_x,pos_y,pos_z,0,0,0,10,0.5)
		event.cancel()
    return 1
}

BlockEvents.rightClicked(/.*/, event => {
	if (event.item.id == 'tconstruct:magma_bucket') {
		magma_bucket(event,"minecraft:bucket")
	}
	if (event.item.id == 'miners_delight:copper_cup') {
		event.cancel()
	}
})