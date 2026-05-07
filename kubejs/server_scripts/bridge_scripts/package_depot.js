BlockEvents.rightClicked("kubejs:dimensional_package_depot",event => {
	if (event.item.getId() == "tempad:location_card") {
		global.right_click_dimensional_depot_event(event)
	}
})