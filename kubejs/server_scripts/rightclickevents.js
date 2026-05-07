
BlockEvents.rightClicked('kubejs:ceilling_lamp_broken', event => {

	if (event.item.id == 'kubejs:fluorescent_tube') {
		event.item.count--
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run backrooms blocks interact restore_lamp`)
		}
	})

BlockEvents.rightClicked('kubejs:black_hole', event => {
	if (event.item.id == 'ae2:singularity') {
			event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run backrooms blocks interact blackhole`)
		}
	})

BlockEvents.rightClicked('eidolon:shadow_gem_block', event => {
	if (event.item.id == 'create:chromatic_compound') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function backrooms:shadow_conversion`)
		event.item.count--
		event.player.give('create:shadow_steel')
	}
})

ItemEvents.rightClicked('minecraft:lava_bucket', event => {
    if( event.item.count > 1){
		event.cancel()
	}
})

ServerEvents.recipes(event => {

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "minecraft:brush"
		},
		"block_in": "kubejs:carpet",
		"post": [
			{
				"type": "damage_item"
			},
			{
				"type": "add_item_cooldown",
				"s": 0.1
			},
			{
				"type": "execute",
				"command": "particle minecraft:campfire_signal_smoke ~ ~0.3 ~ 1 0.1 1 0.001 2 force",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:item.brush.brushing.generic master @a ~ ~ ~ 1 1",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "summon item ~ ~ ~ {Motion:[0.2,0.3,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"hide": "true",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon item ~ ~ ~ {Motion:[-0.3,0.4,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"hide": "true",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon item ~ ~ ~ {Motion:[0.0,0.2,-0.3],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"hide": "true",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon item ~ ~ ~ {Motion:[0.4,0.2,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"hide": "true",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon item ~ ~ ~ {Motion:[-0.3,0.3,-0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
				"hide": "true",
					"contextual": {
					"type": "chance",
					"chance": 0.10
				}
			},
			{
				"type": "execute",
				"command": "summon silverfish ~ ~ ~ {Motion:[0.0,0.4,0.0]}",
				"hide": "true",
					"contextual": {
					"type": "chance",
					"chance": 0.05
				}
			}
		]
})

event.custom({
	"type": "lychee:block_interacting",
	"item_in": {
		"item": "kubejs:diamond_brush"
	},
	"block_in": "kubejs:carpet",
	"post": [
		{
			"type": "prevent_default"
		},
		{
			"type": "add_item_cooldown",
			"s": 0.1
		},
		{
			"type": "execute",
			"command": "particle minecraft:campfire_signal_smoke ~ ~0.3 ~ 1 0.1 1 0.001 2 force",
			"hide": "true"
		},
		{
			"type": "execute",
			"command": "playsound minecraft:item.brush.brushing.generic master @a ~ ~ ~ 1 1",
			"hide": "true"
		},
		{
			"type": "execute",
			"command": "summon item ~ ~ ~ {Motion:[0.2,0.3,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
			"hide": "true",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
			"command": "summon item ~ ~ ~ {Motion:[-0.3,0.4,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
			"hide": "true",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
			"command": "summon item ~ ~ ~ {Motion:[0.0,0.2,-0.3],Item:{id:'kubejs:carpet_dust',Count:1b}}",
			"hide": "true",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
			"command": "summon item ~ ~ ~ {Motion:[0.4,0.2,0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
			"hide": "true",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		},
		{
			"type": "execute",
			"command": "summon item ~ ~ ~ {Motion:[-0.3,0.3,-0.1],Item:{id:'kubejs:carpet_dust',Count:1b}}",
			"hide": "true",
				"contextual": {
				"type": "chance",
				"chance": 0.10
			}
		}
	]
	})

	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:hot_steel"
		},
		"block_in": "minecraft:water_cauldron",
		"post": [
			{
				"type": "execute",
				"command": "execute if block ~ ~ ~ water_cauldron[level=1] run setblock ~ ~ ~ cauldron",
				"hide": "true"
			},
						{
				"type": "execute",
				"command": "execute if block ~ ~ ~ water_cauldron[level=2] run setblock ~ ~ ~ water_cauldron[level=1]",
				"hide": "true"
			},
						{
				"type": "execute",
				"command": "execute if block ~ ~ ~ water_cauldron[level=3] run setblock ~ ~ ~ water_cauldron[level=2]",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "particle minecraft:cloud ~ ~0.5 ~ 0.3 0.3 0.3 0.001 10 force",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.fire.extinguish master @a ~ ~ ~ 0.15 2",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.bubble_column.upwards_inside master @a ~ ~ ~ 1 2",
				"hide": "true"
			},
			{
				"type": "if",
				"contextual": [
					{
						"type": "chance",
						"chance": 0.80
					}
				],
				"then": [
					{
						"type": "execute",
						"command": "give @a[limit=1,sort=nearest] immersiveengineering:ingot_steel",
						"hide": "true"
					}
				],
				"else": [
					{
						"type": "execute",
						"command": "give @a[limit=1,sort=nearest] kubejs:cracked_steel",
						"hide": "true"
					}
				]
			}
		]
	})
	event.custom({
		"type": "lychee:block_interacting",
		"item_in": {
			"item": "kubejs:cut_carpet"
		},
		"block_in": "kubejs:floor_tiles",
		"post": [
			{
				"type": "execute",
				"command": "playsound minecraft:block.wool.place master @a ~ ~ ~ 1 1",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "execute as @a[distance=..0.7] at @s run tp @s ~ ~0.1 ~",
				"hide": "true"
			},
			{
				"type": "place",
				"block": "kubejs:carpet"
			}
		]
	})
})