//This Function Is Imported From "generation/get_sector"
/**
* @param {Number} pos_x
* @param {Number} pos_z
* @param {Number} world_center_x
* @param {Number} world_center_z
* @param {Internal.ServerLevel} dimension
*/
function get_sector(pos_x, pos_z, world_center_x, world_center_z, dimension){
	if (dimension == "minecraft:overworld") {
		let distance = Math.sqrt(((world_center_z - pos_z) ** 2) + ((world_center_x - pos_x) ** 2))
		let distance_points = [1800,1600,1450,1400,1350,1300,1100,1000,700,650,600,550,250]
		let sectors = [2,5,2,3,6,3,2,4,2,3,6,3,2]
		let chosen_sector = 1

		for (let count = 0; count < distance_points.length; count++) {
			let distance_check = distance_points[count]
			if (distance > distance_check) {
				chosen_sector = sectors[count]
				break
			}
		}
		return chosen_sector
	}
	return 7
}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("info")
		.then(Commands.literal("node")
		.then(Commands.literal("sector")
		    .executes(ctx => {
				let player = ctx.source.getPlayer()
				let dimension = ctx.source.level.getDimension()
                let position = ctx.source.getPosition()
				let pos_x = position.x()
				let pos_z = position.z()
				let sector = get_sector(pos_x,pos_z,-1000,-1000,dimension)
				if (player != null) {
					player.tell(`The sector at ${pos_x}, ${pos_x} is ${sector}`)
				}
				return 7
            })
        )))
    )
})