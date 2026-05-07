BlockEvents.leftClicked("kubejs:carpet", event  => {
	//function backrooms:carpet_fix
	let item = event.getItem()
	let carpet = event.getBlock()
	let position = carpet.getPos()
	if (item.hasTag("forge:tools/knives")) {
		item.setDamageValue(item.getDamageValue() + 1)
		if (carpet.getUp().id == "minecraft:air") {
			carpet.offset(0,1,0).popItem("1x kubejs:cut_carpet")
			if (0.05 > Math.random()) {
				carpet.set("kubejs:drain_breakable")
				Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.lantern.hit","blocks",1,0,true)
			} else {
				carpet.set("kubejs:floor_tiles")
				Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.wool.break","blocks",1,1.5,true)
			}
		}
		if (item.getDamageValue() >= item.getMaxDamage()) {
			item.shrink(1)
		}
	}
})

BlockEvents.leftClicked("kubejs:soul_carpet", event  => {
	//function backrooms:carpet_fix
	let item = event.getItem()
	let carpet = event.getBlock()
	let position = carpet.getPos()
	if (item.hasTag("forge:tools/knives")) {
		item.setDamageValue(item.getDamageValue() + 1)
		if (carpet.getUp().id == "minecraft:air") {
			carpet.offset(0,1,0).popItem("1x kubejs:cut_carpet")
			if (0.05 > Math.random()) {
				carpet.set("kubejs:drain")
				Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.lantern.hit","blocks",1,0,true)
			} else {
				carpet.set("kubejs:floor_tiles")
				Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.wool.break","blocks",1,1.5,true)
			}
		}
		if (item.getDamageValue() >= item.getMaxDamage()) {
			item.shrink(1)
		}
	}
})

BlockEvents.leftClicked("kubejs:soggy_carpet", event  => {
	//function backrooms:carpet_fix
	let item = event.getItem()
	let carpet = event.getBlock()
	let position = carpet.getPos()
	if (item.hasTag("forge:tools/knives")) {
		item.setDamageValue(item.getDamageValue() + 1)
		if (carpet.getUp().id == "minecraft:air") {
			carpet.offset(0,1,0).popItem("1x kubejs:cut_carpet")
			if (0.05 > Math.random()) {
				carpet.set("kubejs:drain")
				Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.lantern.hit","blocks",1,0,true)
			} else {
				carpet.set("kubejs:floor_tiles")
				Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.wool.break","blocks",1,1.5,true)
			}
		}
		if (item.getDamageValue() >= item.getMaxDamage()) {
			item.shrink(1)
		}
	}
})

BlockEvents.leftClicked("kubejs:carpet_grass", event  => {
	let item = event.getItem()
	let carpet = event.getBlock()
	let position = carpet.getPos()
	if (item.hasTag("forge:tools/knives")) {
		if (0.5 > Math.random()) {
			carpet.offset(0,1,0).popItem("1x minecraft:string")
			Client.level.playLocalSound(position.x,position.y,position.z,"minecraft:block.wool.break","blocks",1,1.5,true)
			carpet.set("minecraft:air")
			event.getPlayer().damageHeldItem(1)
		}
	}
})

BlockEvents.rightClicked('kubejs:drain_breakable', event => {
	if (event.item.id == 'kubejs:crowbar') {
		const [pos_x, pos_y, pos_z] = [event.block.getX(),event.block.getY(),event.block.getZ()]
		event.block.set("kubejs:poolrooms_portal")
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:entity.zombie.attack_iron_door","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.armor.equip_netherite","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:item.axe.scrape","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.underwater.loop.additions.ultra_rare","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.underwater.loop.additions.ultra_rare","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.underwater.loop.additions.ultra_rare","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.underwater.loop.additions.ultra_rare","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.underwater.loop.additions.ultra_rare","blocks",0.1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ambient.underwater.loop.additions.ultra_rare","blocks",0.1,0,true)
		Client.level.spawnParticles("minecraft:campfire_cosy_smoke",false,pos_x,pos_y,pos_z,0.3,0.3,0.3,10,0.01)
		Client.level.spawnParticles("minecraft:block kubejs:drain",false,pos_x,pos_y,pos_z,0.3,0.3,0.3,10,0.01)
	}
})