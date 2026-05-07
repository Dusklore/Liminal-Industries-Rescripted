scoreboard players set max RNG_Constant 17
function backrooms:rng

execute if score RNG RNG_Variable matches 1..5 run function backrooms:railrooms/sector_1_rooms/exit_points/northsouth
execute if score RNG RNG_Variable matches 6..7 run function backrooms:railrooms/sector_1_rooms/exit_points/northeast
execute if score RNG RNG_Variable matches 8..9 run function backrooms:railrooms/sector_1_rooms/exit_points/northwest
execute if score RNG RNG_Variable matches 10..11 run function backrooms:railrooms/sector_1_rooms/exit_points/northsoutheast
execute if score RNG RNG_Variable matches 12..13 run function backrooms:railrooms/sector_1_rooms/exit_points/northsouthwest
execute if score RNG RNG_Variable matches 14..15 run function backrooms:railrooms/sector_1_rooms/exit_points/northeastwest
execute if score RNG RNG_Variable matches 16 run function backrooms:railrooms/sector_1_rooms/exit_points/all

function backrooms:railrooms/sector_1_rooms/exit_points/upgrade_downgrade
function backrooms:railrooms/sector_1_rooms/general