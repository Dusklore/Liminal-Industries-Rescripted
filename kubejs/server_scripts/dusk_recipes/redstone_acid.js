ServerEvents.recipes(event => {
	event.recipes.thermal.centrifuge([
		Fluid.of('immersiveengineering:redstone_acid', 250),
		Item.of('minecraft:stick'),
		Item.of('minecraft:stick').withChance(0.30)
	], 
	'botania:redstone_root')

	event.shapeless("botania:redstone_root", ["botania:livingwood_twig","minecraft:redstone"])
})