function get_zero_rooms(){
	let sector_zero = ["zero1","zero2","zero3","zero4","zero5","zero6","zero7"]
    return sector_zero
}
function get_common_rooms(){
	let sector_common1 = ["bedrock1","3_way","6_pillars","bamboo_room","banana","base_room","blue_cube","cannonballs","cardboard_castle","cardboard_house"]
	let sector_common2 = ["chair_pillars","connected_cross","corridor","corridor2","cross_section","weird_chair","empty_pool","empty_pool2","eye_pit","grass_table"]
	let sector_common3 = ["hanging_sign","huge_1","huge_2","huge_3","huge_4","huge_hidden","large_cross","logic","long_gap","long_kitchen"]
	let sector_common4 = ["long_stairs","mail_room","main_cross_1","main_cross_2","main_cross_3","main_cross_4","main_cross_5","main_cross_6","meteor_3","moist"]
	let sector_common5 = ["moyai","origin","pillars","piss_room","plate_room","reception","reception2","red_carpet","red_chair","ring_open"]
	let sector_common6 = ["rings","rotating_chair","scale","secret_error","semi_hiden","sofa_pillars","stairs","stop_wall","sugar_cube"]
	let sector_common7 = ["toaster_trap","toilet","vending_machine","trampoline_jump","trampoline","tree","up_down","vending_machine","wallpaper"]
	let sector_common8 = ["wallpaper2","dance_music","padded_bird","sunset","corridor3"]
	let sector_common = sector_common1.concat(sector_common2,sector_common3,sector_common4,sector_common5,sector_common6,sector_common7,sector_common8)
    return sector_common
}
function get_community_rooms(){
	let community_rooms1 = ["flooded_hall_vinoren","polychromatizen1","zanodarceilingv1","wenbell_straftat_backrooms_02","wenbell_straftat_backrooms_01","thegroovysloth9","thegroovysloth3","thegroovysloth","office_sib315","n0tquitenull_sk8p4rk"]
	let community_rooms2 = ["mars_xoxoxo","ldanvil_corridor_ring","l1minalspace_musuem","l1minalspace_bookstore1.2","itsevelyn_ender_drain","itsevelyn_certus_meteor","blueduck_hotel_junction","gecco_testchamber00","cyansoup_suburb_intersection","cyansoup_ruinedsmeltery"]
	let community_rooms = community_rooms1.concat(community_rooms2)
    return community_rooms
}
function get_sector2_rooms(){
	let sector_common = get_common_rooms()
	let sector2_1 = ["condoslime","ceilling_nest","creeper_room","empty","end_room","husk_overpass","husk_room","long_stairs_sculk","oil_drop","oil_drop2"]
	let sector2_2 = ["pitfalls","ravager_staircase","seige_1","seige_2","seige_3","seige_4","semi_hiden_sculk","silicon","spider_fridge","spider_oil"]
	let sector2_3 = ["spider_pit","spider_ramp","spider_shaft","spider_trench","strange_hole","the_pit","traffic_hole","water_depth","amethyst_1","amethyst_2"]
	let sector2_4 = ["soap_box","warden","herobrine_1","herobrine_2","bedrock2","husk_cross1","husk_cross2","husk_cross3","husk_cross4","husk_cross5"]
	let sector2_5 = ["husk_cross6","stair_cross","escalate_1","escalate_2","pink_ravager"]
	let community_rooms = get_community_rooms()
	let sector2 = sector_common.concat(sector2_1,sector2_2,sector2_3,sector2_4,sector2_5,community_rooms)
    return sector2
}
function get_sector7_rooms(){
	let sector7_c1 = ["poolrooms_zanodar_t-junctiondeeppool_1_v1","poolrooms_zanodar_t-junction_2_v4","poolrooms_zanodar_t-junction_1_v4","poolrooms_wenbell_bridges_1_v2","poolrooms_wenbell_babel_1_v2"]
	let sector7_c2 = ["poolrooms_markaabo_originaltwist_empty_pool2_v1","poolrooms_markaabo_originaltwist_empty_pool_v1","poolrooms_markaabo_mapoolpicchu_1_v4","poolrooms_markaabo_lockerarea_1_v1","zanodar_poolrooms_smallcylinder_1_v1"]
	let sector7_c3 = ["markaabo_poolrooms_doorwayshigh_1_v1","markaabo_poolrooms_doorwayslow_2_v1","markaabo_poolrooms_infinity_1_v1","markaabo_poolrooms_lockerroomcorridor_1_v1","wenbell_poolrooms_4waypit_1_v1"]
	let sector7_c4 = ["wenbell_poolrooms_antechamber_1_v1","wenbell_poolrooms_corridor_2_v1","wenbell_poolrooms_pinwheel_1_v1"]
	let sector7_1 = ["pool_eye","pool_corridor","pool_ballpit","pool_drowned_cliff","base_pool","pool_press","pool_3_way_sculked","pool_3_way","pool_coridors","pillarfall_pool"]
	let sector7_2 = ["starting_pool","pool_4_way","pool_inverted_stair","pool_exit","pool_sky_stairs","pool_gold_shrine","pool_me_controler","pool_chair_gathering","pool_guardianfall","pool_fall_hole"]
	let sector7_3 = ["pool_spider_pit","pool_4_way","pool_sculked_4_way","pool_heaven","pool_sky_cube","pool_cobble_house","pool_cake","pool_silver_pools","pool_exit"]
	let sector7 = sector7_1.concat(sector7_2,sector7_3,sector7_c1,sector7_c2,sector7_c3,sector7_c4)
    return sector7
}
/**
* @param {Number} sector
*/
function get_sector_list(sector) {
	if (sector == 1) {return get_common_rooms()}
	if (sector == 2) {return get_sector2_rooms()}
	if (sector == 3) {return ["void2"]}
	if (sector == 4) {return ["void4"]}
	if (sector == 5) {return ["void3"]}
	if (sector == 6) {return ["base_void","void5"]}
	if (sector == 7) {return get_sector7_rooms()}
	return get_zero_rooms()
}
/**
* @param {Number} sector
*/
function get_random_room(sector) {
	let sector_list = get_sector_list(sector)
	let room_num = Math.round((Math.random() * (sector_list.length -0.001))-0.5)
	return sector_list[room_num]
}