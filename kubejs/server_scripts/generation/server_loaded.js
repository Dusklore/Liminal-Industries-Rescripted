ServerEvents.loaded(event => {
	let server = event.getServer()
	let first_flag = server.persistentData.getCompound("backrooms").getBoolean("generated")
	if (!first_flag) {
		server.gameRules.set("commandBlockOutput","false")
		server.gameRules.set("doTraderSpawning","false")
		server.gameRules.set("doInsomnia","false")
		server.gameRules.set("doPatrolSpawning","false")
		server.gameRules.set("disableRaids","true")
		server.gameRules.set("doDaylightCycle","false")
		let overworld_data = server.getWorldData().overworldData()
		overworld_data.setXSpawn(-1000)
		overworld_data.setYSpawn(23)
		overworld_data.setZSpawn(-1000)
		server.scoreboard.addPlayerTeam("sculk")
		server.persistentData.merge({"custom_gamerules":{"activeFeatureNodes":true},"backrooms":{"generated":false,"spawn":{"x":-1000,"y":23,"z":-1000}},"poolrooms":{"generated":false,"spawn":{"x":0,"y":65,"z":0}}})
	}
})