BlockEvents.broken('mekanism:radioactive_waste_barrel', event => {
    let position = event.block.getPos()
    let server = event.server
    let dimension = event.level.dimension
    let pos_x = position.getX()
    let pos_y = position.getY()
    let pos_z = position.getZ()
    Client.level.playLocalSound(pos_x,pos_y,pos_z,"mekanism:item.geiger_medium","blocks",1,2,false)
    Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.zombie.attack_iron_door","blocks",1,1,false)
    Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.lava.extinguish","blocks",1,0,false)
    event.level.spawnParticles("minecraft:dust_color_transition 0 1 0 5 0 1 1",false,pos_x,pos_y,pos_z,5,5,5,100,0.1)
    event.level.spawnParticles("minecraft:dust_color_transition 0 1 0 5 0 1 1",false,pos_x,pos_y,pos_z,5,5,5,100,0.1)
    server.runCommandSilent(`execute in ${dimension} run summon area_effect_cloud ${pos_x} ${pos_y} ${pos_z} {Particle:"dust_color_transition 0 1 0 1 0 1 1",Radius:1f,RadiusPerTick:0.05f,Duration:150,Effects:[{Id:20,Amplifier:5b,Duration:60,ShowParticles:0b}]}`)
})