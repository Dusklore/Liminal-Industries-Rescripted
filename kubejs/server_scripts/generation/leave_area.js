//This Function Is Imported From "player/leave_area"
/**
* @param {Internal.MinecraftServer} server
* @param {Internal.Player} player
* @param {String} area
*/
function leave_area(area, player, server){
    if (area == "backrooms") {
		server.runCommandSilent(`execute as ${player_uuid} in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run spreadplayers ~ ~ 5 10 false @s`)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:ui.toast.challenge_complete","master",1,0,true)
		Client.level.playLocalSound(pos_x,pos_y,pos_z,"minecraft:music.overworld.meadow","master",1,1,true)
		server.runCommandSilent(`execute as ${player_uuid} in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run title @s title {"text":"You have escaped","bold":true,"color":"gold"}`)
		server.runCommandSilent(`execute as ${player_uuid} in ${dimension} positioned ${pos_x} ${pos_y} ${pos_z} run title @s subtitle {"text":"The Backrooms","bold":true,"color":"yellow"}`)
		server.gameRules.set("doDaylightCycle","true")
        return 1
    } else if (area == "poolrooms") {
		server.runCommandSilent(`ftbquests change_progress ${player} complete 25DBA9EE127F3CE4`)
        player.teleportTo("minecraft:overworld",-1000,23,-1000,0,0)
        return 1
    }
    return 0
}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("leave")
		.then(Commands.literal("poolrooms")
			.requires(source => source.hasPermission(2))
		    .executes(ctx => {
				let player = ctx.source.getPlayer()
				let server = ctx.source.getServer()
				if (player != null) {
					leave_area("poolrooms", player, server)
					return 1
				}
				return 0
            })
        )
		.then(Commands.literal("backrooms")
		    .executes(ctx => {
				let player = ctx.source.getPlayer()
				let server = ctx.source.getServer()
				if (player != null) {
					leave_area("backrooms", player, server)
					return 1
				}
				return 0
            })
        ))
    )
})