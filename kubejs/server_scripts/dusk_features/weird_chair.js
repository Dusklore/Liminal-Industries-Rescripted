ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("tick")
		.then(Commands.literal("weird_chair")
		    .executes(ctx => {
                let position = ctx.source.getPosition()
				let level = ctx.source.getLevel()
				let pos_x = position.x() - 1
				let pos_y = position.y()
				let pos_z = position.z() - 1
				let chair = level.getBlock(pos_x,pos_y,pos_z)
				let direction = chair.properties.get("facing")
				let player = level.getNearestPlayer(pos_x,pos_y,pos_z,10,true)
				if (player != null) {
					let directions = ["north","south","east","west"]
					let facing_blocks = {"south": chair.getNorth(),"north": chair.getSouth(),"west": chair.getEast(),"east": chair.getWest()}
					let facing_block = facing_blocks["north"]
					facing_block = facing_blocks[direction]
					if (facing_block.getDown().id == "minecraft:air") {
						chair.set("minecraft:air")
						facing_block.getDown().set("kubejs:weird_chair", {facing:direction})
					} else if (facing_block.id == "minecraft:air") {
						chair.set("minecraft:air")
						facing_block.set("kubejs:weird_chair", {facing:direction})
					} else if (facing_block.getUp().id == "minecraft:air") {
						chair.set("minecraft:air")
						facing_block.getUp().set("kubejs:weird_chair", {facing:direction})
					} else {
						let random_direction = directions[Math.round((Math.random() * (4 - 0.001)) - 0.5)]
						chair.set("kubejs:weird_chair", {facing:random_direction})
					}
				}
            })
        )))
    )
})

BlockEvents.leftClicked("kubejs:weird_chair", event => {
	let dimension = event.level.dimension
	let position = event.block.getPos()
	event.server.runCommandSilent(`execute in ${dimension} positioned ${position.getX()} ${position.getY()} ${position.getZ()} run backrooms blocks tick weird_chair`)
})

BlockEvents.rightClicked("kubejs:weird_chair", event => {
	let dimension = event.level.dimension
	let position = event.block.getPos()
	if (!event.player.isShiftKeyDown()) {
		event.player.setX(position.getX() + 0.5)
		event.player.setY(position.getY() + 0.5)
		event.player.setZ(position.getZ() + 0.5)
	}
	event.server.runCommandSilent(`execute in ${dimension} positioned ${position.getX()} ${position.getY()} ${position.getZ()} run backrooms blocks tick weird_chair`)
})