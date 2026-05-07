ServerEvents.recipes(event => {

	event.recipes.thermal.bottler('ae2:flawless_budding_quartz', [
		Fluid.of('actuallyadditions:crystallized_oil', 1000), 
		'ae2:flawed_budding_quartz'])

	event.recipes.thermal.bottler('minecraft:budding_amethyst', [
		Fluid.of('actuallyadditions:crystallized_oil', 1000), 
		'minecraft:amethyst_block'])

	event.recipes.create.mixing(Fluid.of('actuallyadditions:crystallized_oil', 1000), [
		'actuallyadditions:crystallized_canola_seed',
		Fluid.of('actuallyadditions:refined_canola_oil', 1000)
	])
})