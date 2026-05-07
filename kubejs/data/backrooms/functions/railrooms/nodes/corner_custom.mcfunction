execute as @s[tag=!north] if block ~23 48 ~ minecraft:lime_concrete run tag @s add north
execute as @s[tag=!south] if block ~23 48 ~46 minecraft:lime_concrete run tag @s add south
execute as @s[tag=!west] if block ~ 48 ~23 minecraft:lime_concrete run tag @s add west
execute as @s[tag=!east] if block ~46 48 ~23 minecraft:lime_concrete run tag @s add east
#
execute as @s[tag=!north] if block ~23 48 ~ minecraft:air run tag @s add north
execute as @s[tag=!south] if block ~23 48 ~46 minecraft:air run tag @s add south
execute as @s[tag=!west] if block ~ 48 ~23 minecraft:air run tag @s add west
execute as @s[tag=!east] if block ~46 48 ~23 minecraft:air run tag @s add east
#
execute as @s[tag=!north] if block ~23 48 ~ minecraft:red_concrete run tag @s remove north
execute as @s[tag=!south] if block ~23 48 ~46 minecraft:red_concrete run tag @s remove south
execute as @s[tag=!west] if block ~ 48 ~23 minecraft:red_concrete run tag @s remove west
execute as @s[tag=!east] if block ~46 48 ~23 minecraft:red_concrete run tag @s remove east