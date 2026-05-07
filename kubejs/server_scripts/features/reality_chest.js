BlockEvents.rightClicked("kubejs:reality_chest", event => {
	//const desert_loot_table = [{"id":"chess","chance":0.5},{"id":"botania:black_lotus","chance":0.35}]
	const chest = event.block
	const [pos_x,pos_y,pos_z] = [chest.getX() + 0.5,chest.getY(),chest.getZ() + 0.5]
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.chest.open","blocks",1,1,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:block.chest.locked","blocks",1,0,true)
	Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.armor.equip_iron","blocks",1,0,true)
	chest.popItem("minecraft:dune_armor_trim_smithing_template")
	chest.set("minecraft:air")
})