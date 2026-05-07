// priority: 0


StartupEvents.registry('block', event => {

//Wallpapers

let wallpapers = (id) => {
	event.create(id).displayName("Manila Wallpaper")
		.fullBlock(true)
		.material("wood")
		.soundType("cherry_wood")
		.unbreakable()
	}

	wallpapers("wallpaper_manila1")
	wallpapers("wallpaper_manila2")
	wallpapers("wallpaper_manila3")

//Floor
	event.create('polished_wood_floor').displayName('Polished Wood Floor')
		.fullBlock(true)
		.material("wood")
		.soundType("wood")
		.unbreakable()
})