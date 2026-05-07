execute as @e[type=minecraft:marker,tag=rail_node,tag=pos_x] at @s if entity @s in minecraft:overworld if entity @p[distance=..100] run function backrooms:railrooms/exit_attempt/pos_x
execute as @e[type=minecraft:marker,tag=rail_node,tag=neg_x] at @s if entity @s in minecraft:overworld if entity @p[distance=..100] run function backrooms:railrooms/exit_attempt/neg_x
execute as @e[type=minecraft:marker,tag=rail_node,tag=pos_z] at @s if entity @s in minecraft:overworld if entity @p[distance=..100] run function backrooms:railrooms/exit_attempt/pos_z
execute as @e[type=minecraft:marker,tag=rail_node,tag=neg_z] at @s if entity @s in minecraft:overworld if entity @p[distance=..100] run function backrooms:railrooms/exit_attempt/neg_z

execute as @e[type=minecraft:marker,tag=rail_node] unless entity @s[tag=pos_x] unless entity @s[tag=neg_x] unless entity @s[tag=pos_z] unless entity @s[tag=neg_z] run kill @s