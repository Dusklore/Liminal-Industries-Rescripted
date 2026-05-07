/**
* @param {Number} center_a
* @param {Number} pos_a
*/
function get_node_a(pos_a, center_a){
	let node_a = 0;
	let parcel_dist_a = Math.floor(Math.abs(pos_a - (center_a)) / 23)
	if (parcel_dist_a > 0) {
    if (parcel_dist_a % 2 == 0) {
        parcel_dist_a = Math.floor(parcel_dist_a - 1)
    }
        }
		parcel_dist_a = Math.ceil(parcel_dist_a / 2)
		if (pos_a > center_a) {
            node_a = center_a + parcel_dist_a * 46
        } else if (pos_a < center_a) {
            node_a = center_a + parcel_dist_a * 46 * (-1)
        } else {
            node_a = center_a
		}
		node_a = Math.floor(node_a)
    return node_a
}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event

	event.register(
        Commands.literal("backrooms")
		.requires(source => source.hasPermission(2))
		.then(Commands.literal("generation")
		.then(Commands.literal("node")
		.then(Commands.literal("get")
		.then(Commands.literal("x")
            .executes(ctx => {

				let player = ctx.source.getPlayer()
				let server = ctx.source.getServer()
                let pos_x = ctx.source.getPosition().x()
				let dimension = ctx.source.getLevel().getDimension()
				
				let center_x = server.runCommandSilent(`execute in ${dimension} run backrooms info world center_x`)
				let node_x = get_node_a(pos_x,center_x)

				if (player != null) {
					player.tell(`Current Node X: ${node_x}`)
				}
				return node_x
            })
        )
		.then(Commands.literal("z")
		    .executes(ctx => {

				let player = ctx.source.getPlayer()
				let server = ctx.source.getServer()
                let pos_z = ctx.source.getPosition().z()
				let dimension = ctx.source.getLevel().getDimension()
				
				let center_z = server.runCommandSilent(`execute in ${dimension} run backrooms info world center_x`)
				let node_z = get_node_a(pos_z,center_z)
				
				if (player != null) {
					player.tell(`Current Node Z: ${node_z}`)
				}
				return node_z
            })
        ))))
    )
})