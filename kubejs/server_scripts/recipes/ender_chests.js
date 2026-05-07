ServerEvents.recipes(event => {

    event.remove({mod: 'enderchests'})
	event.shaped(
		'2x enderchests:ender_chest',
		[ 
		'RSR', 
		'SCS',
		'RER'  
		],{
		  S: 'ae2:spatial_cell_component_2',
		  R: 'kubejs:reality_alloy',
		  C: 'minecraft:chest',
		  E: 'minecraft:echo_shard'
	})

	event.remove({mod: 'endertanks'})
	event.shaped(
		'2x endertanks:ender_tank',
		[ 
		'RSR', 
		'SCS',
		'RER'  
		],{
		  S: 'ae2:spatial_cell_component_2',
		  R: 'kubejs:reality_alloy',
		  C: 'minecraft:bucket',
		  E: 'minecraft:echo_shard'
	})
})

