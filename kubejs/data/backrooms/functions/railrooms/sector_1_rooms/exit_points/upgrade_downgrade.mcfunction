#upgrades
execute if block ~23 48 ~ minecraft:lime_concrete run scoreboard players set North NodeExits 1
execute if block ~23 48 ~46 minecraft:lime_concrete run scoreboard players set South NodeExits 1
execute if block ~ 48 ~23 minecraft:lime_concrete run scoreboard players set West NodeExits 1
execute if block ~46 48 ~23 minecraft:lime_concrete run scoreboard players set East NodeExits 1
#downgrades
execute if block ~23 48 ~ minecraft:red_concrete run scoreboard players set North NodeExits 0
execute if block ~23 48 ~46 minecraft:red_concrete run scoreboard players set South NodeExits 0
execute if block ~ 48 ~23 minecraft:red_concrete run scoreboard players set West NodeExits 0
execute if block ~46 48 ~23 minecraft:red_concrete run scoreboard players set East NodeExits 0
#simple_code
scoreboard players set Simple NodeExits 0
execute if score North NodeExits matches 1 run scoreboard players add Simple NodeExits 1000
execute if score South NodeExits matches 1 run scoreboard players add Simple NodeExits 100
execute if score East NodeExits matches 1 run scoreboard players add Simple NodeExits 10
execute if score West NodeExits matches 1 run scoreboard players add Simple NodeExits 1