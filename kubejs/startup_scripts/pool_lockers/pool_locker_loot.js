function loot_pool_floaties(){
	let pool_floaties = ["beachparty:floaty_boat","beachparty:rubber_ring_pelican","beachparty:rubber_ring_axolotl"]
	let common_floaties = ["beachparty:pool_noodle","beachparty:rubber_ring_pink","beachparty:rubber_ring_blue","beachparty:rubber_ring_pink","beachparty:rubber_ring_blue","beachparty:rubber_ring_stripped"]
	let loot_pool = pool_floaties.concat(common_floaties,common_floaties,common_floaties)
	return loot_pool[Math.round((Math.random() * (loot_pool.length -0.001))-0.5)]
}
function loot_clothing(){
	let common_clothing = ["beachparty:bikini","beachparty:trunks","beachparty:beach_hat"]
	let other_clothing = ["beachparty:crocs","beachparty:sunglasses","beachparty:swim_wings"]
	let personal_items = ["exposure:album","exposure:camera","supplementaries:wrench","supplementaries:key"]
	let loot_pool = personal_items.concat(common_clothing,common_clothing,common_clothing,other_clothing,other_clothing)
	return loot_pool[Math.round((Math.random() * (loot_pool.length -0.001))-0.5)]
}
function loot_picnic(){
	let common_appliances = ["beachparty:beach_sun_lounger","beachparty:beach_chair","beachparty:beach_parasol","beachparty:mini_fridge"]
	let coolers = ["refurbished_furniture:red_cooler","refurbished_furniture:white_cooler","refurbished_furniture:blue_cooler","refurbished_furniture:cyan_cooler"]
	let grills = ["refurbished_furniture:red_grill","refurbished_furniture:black_grill","refurbished_furniture:blue_grill","refurbished_furniture:cyan_grill"]
	let loot_pool = grills.concat(coolers,coolers,common_appliances,common_appliances,common_appliances)
	return loot_pool[Math.round((Math.random() * (loot_pool.length -0.001))-0.5)]
}
function loot_games(){
	let common_kids = ["beachparty:beach_ball","beachparty:sand_bucket_empty","supplementaries:bubble_blower","supplementaries:soap","supplementaries:soap","supplementaries:confetti_popper","chalk:chalk_box","beachparty:seashell","beachparty:coconut_open"]
	let other_activities = ["table_top_craft:tic_tac_toe","xercapaint:item_palette","table_top_craft:red_concrete_connect_four","minecraft:brush","minecraft:fishing_rod","supplementaries:flute","table_top_craft:chess_piece_figure"]
	let rare_activities = ["musketmod:pistol","supplementaries:slingshot","beachparty:message_in_a_bottle","kubejs:diamond_brush"]
	let loot_pool = rare_activities.concat(other_activities,other_activities,common_kids,common_kids,common_kids)
	return loot_pool[Math.round((Math.random() * (loot_pool.length -0.001))-0.5)]
}
function loot_armour_trims(){
	let stone_trims = ["minecraft:sentry_armor_trim_smithing_template","minecraft:vex_armor_trim_smithing_template","minecraft:wild_armor_trim_smithing_template","minecraft:coast_armor_trim_smithing_template"]
	let mud_trims = ["minecraft:shaper_armor_trim_smithing_template","minecraft:shaper_armor_trim_smithing_template","minecraft:raiser_armor_trim_smithing_template","minecraft:wayfinder_armor_trim_smithing_template"]
	let dimensional_trims = ["minecraft:snout_armor_trim_smithing_template","minecraft:rib_armor_trim_smithing_template","minecraft:eye_armor_trim_smithing_template","minecraft:spire_armor_trim_smithing_template"]
	let rare_trims = ["minecraft:netherite_upgrade_smithing_template","neapolitan:primal_armor_trim_smithing_template"]
	let other_trims = ["minecraft:dune_armor_trim_smithing_template","minecraft:ward_armor_trim_smithing_template","minecraft:tide_armor_trim_smithing_template","minecraft:silence_armor_trim_smithing_template"]
	let loot_pool = stone_trims.concat(mud_trims,dimensional_trims,rare_trims,other_trims)
	return loot_pool[Math.round((Math.random() * (loot_pool.length -0.001))-0.5)]
}
function loot_beach_discs(){
	let music_discs = ["beachparty:music_disc_beachparty","beachparty:music_disc_vocalista","beachparty:music_disc_wild_veins","beachparty:music_disc_pridelands","beachparty:music_disc_caribbean_beach","beachparty:overgrown_disc"]
	return music_discs[Math.round((Math.random() * (loot_pool.length -0.001))-0.5)]
}