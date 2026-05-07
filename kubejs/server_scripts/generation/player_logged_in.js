PlayerEvents.loggedIn(event => {
	let player = event.player
	let server = event.server
	server.runCommandSilent(`execute as ${player.getUuid()} run tellraw @s[gamemode=creative] {"text":"You joined the world in creative. Click this text if you want to go to a superflat test world.","bold":true,"color":"white","clickEvent":{"action":"run_command","value":"/execute in backrooms:limbo run tp @s ~ ~ ~"}}`)
	let spawned = player.persistentData.getBoolean("spawned")
	if (!spawned) {
		player.persistentData.putBoolean("spawned",true)
		global.enter_backrooms(player)
	}
})