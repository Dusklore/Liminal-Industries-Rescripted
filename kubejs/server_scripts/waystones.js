ServerEvents.recipes(event => {
	event.remove({ output: '#waystones:waystones' })
	event.remove({ output: '#waystones:sharestones' })
	event.remove({ output: 'waystones:warp_plate' })
})
	