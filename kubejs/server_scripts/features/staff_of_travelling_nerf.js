BlockEvents.rightClicked(event => {
	if (event.getItem() == "enderio:staff_of_travelling") {
		if (event.player != null) {
			event.player.tell("This item may not be used on a block!")
		}
		event.cancel()
	}
})