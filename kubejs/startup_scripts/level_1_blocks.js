// priority: 0


StartupEvents.registry('block', event => {

//Wallpapers

let wallpapers = (id) => {
	event.create(id).displayName("Old Concrete")
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
	}

	wallpapers("wallpaper_concrete1")
	wallpapers("wallpaper_concrete2")
	wallpapers("wallpaper_concrete2_dark")
	wallpapers("wallpaper_concrete_pillar1")
	wallpapers("wallpaper_concrete_pillar_dark_hazard1")

let limestone = (id) => {
	event.create(id).displayName("Porous Limestone")
		.fullBlock(true)
		.material("stone")
		.soundType("tuff")
		.unbreakable()
	}

	limestone("porous_limestone1")
	limestone("porous_limestone2")

//Floor
	event.create('asphalt_floor').displayName('Asphalt Floor')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('wet_asphalt_floor').displayName('Wet Asphalt Floor')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
})