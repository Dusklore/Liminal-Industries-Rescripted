BlockEvents.rightClicked("kubejs:controller_wallpaper",event => {
	if (event.item.hasTag("forge:tools/shears")) {
		const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		const facing = event.block.properties.get("facing")
		event.block.set("kubejs:controller_wallpaper_dead",{"facing":facing})
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.sheep.shear","blocks",1,1,false)
		event.block.popItem("1x immersiveengineering:wire_copper")
		//event.player.damageHeldItem()
	}
})

BlockEvents.rightClicked("kubejs:controller_wallpaper_dead",event => {
	if (event.item.getId() == "immersiveengineering:wire_copper") {
		const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		const facing = event.block.properties.get("facing")
		event.block.set("kubejs:controller_wallpaper",{"facing":facing})
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.bundle.insert","blocks",1,1,false)
		event.item.shrink(1)
	}
})

//This could be a possible feature
/*BlockEvents.rightClicked("kubejs:stripped_wallpaper",event => {
	if (event.item.getId() == "immersiveengineering:toolupgrade_powerpack_induction") {
		const [pos_x,pos_y,pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.bundle.insert","blocks",1,1,false)
		event.item.shrink(1)
		const facing = event.getFacing()
		event.block.set("kubejs:controller_wallpaper_dead",{"facing":facing})
	}
})*/