ItemEvents.firstRightClicked(event => {
    if(event.item.id == "kubejs:party_popper" && !event.player.isFake()) {
        const player = event.player
        const [pos_x,pos_y,pos_z] = [player.getX(),player.getY(),player.getZ()]
        Client.level.spawnParticles("supplementaries:confetti",false,pos_x,pos_y,pos_z,0,0,0,5000,0.5)
        //Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:custom.party_horn","blocks",1,0,false)
        Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.firework_rocket.blast","blocks",1,0,false)
        Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.firework_rocket.twinkle","blocks",1,0,false)
        event.item.count--
    }
})