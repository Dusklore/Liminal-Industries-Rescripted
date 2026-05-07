// priority: 0


StartupEvents.registry('block', event => {

//Walls

	event.create('tunnel_wallpaper').displayName('Tunnel Wall')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('tunnel_wallpaper_soft').displayName('NoClip Tunnel Wall')
		.model('kubejs:block/tunnel_wallpaper')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.noDrops()
		.noCollision()

	event.create('tunnel_wallpaper_slab', 'slab').displayName('Tunnel Wall Slab')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.waterlogged()

	event.create('tunnel_wallpaper_stairs', 'stairs').displayName('Tunnel Wall Stairs')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.waterlogged()

//Floor
	event.create('tunnel_floor').displayName('Tunnel Floor')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()

	event.create('tunnel_floor_slab', 'slab').displayName('Tunnel Floor Slab')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.waterlogged()

	event.create('tunnel_floor_stairs', 'stairs').displayName('Tunnel Floor Stairs')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")
		.unbreakable()
		.waterlogged()
})
