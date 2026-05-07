/**
* @param {Internal.CommandContext<Internal.CommandSourceStack>} ctx
* @param {Internal.Vector3d} position
* @param {String} feature_type
* @param {String} sub_type_name
* @param {String} sub_type
*/
function create_feature_node_command(ctx,position,feature_type,sub_type_name,sub_type){
	const [pos_x, pos_y, pos_z] = [position.x(), position.y(), position.z()]
	const level = ctx.source.getLevel()
	let node = level.getBlock(pos_x,pos_y,pos_z)
	node.set("kubejs:feature_node")
	node.getEntityData().getCompound("data").putString("feature_type",feature_type)
	node.getEntityData().getCompound("data").putString(sub_type_name,sub_type)
    return 1
}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("blocks")
		.then(Commands.literal("tick")
		.then(Commands.literal("feature_node")
		.then(Commands.argument('node_pos', Arguments.BLOCK_POS.create(event))
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				const [pos_x, pos_y, pos_z] = [position.x(), position.y(), position.z()]
				const level = ctx.source.getLevel()
				const player = ctx.source.getPlayer()
				let node = level.getBlock(pos_x,pos_y,pos_z)
				if (node.getId() == "kubejs:feature_node") {
					if (player != null) {
						player.tell(`The block at ${pos_x} ${pos_y} ${pos_z} has been ticked!`)
					}
					tick_feature_node(node,level)
				} else if (player != null) {
					player.tell(`The block at ${pos_x} ${pos_y} ${pos_z} is not a Feature Node!`)
				}
				return 1
            })
        ))))
    )
	//The command for setting the feature node blocks. Could be used by players for schematics
	event.register(
        Commands.literal("backrooms")
		.then(Commands.literal("create")
		.then(Commands.literal("feature_node")
		.then(Commands.argument('node_pos', Arguments.BLOCK_POS.create(event))
		.then(Commands.literal("mob")
		.then(Commands.literal("warden")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"mob","mob_type","warden")
				return 1
            })
		).then(Commands.literal("ravager")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"mob","mob_type","ravager")
				return 1
            })
		).then(Commands.literal("blaze")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"mob","mob_type","blaze")
				return 1
            })
    	)).then(Commands.literal("spawner")
		.then(Commands.literal("spider")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","spider")
				return 1
            })
		).then(Commands.literal("cave_spider")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","cave_spider")
				return 1
            })
		).then(Commands.literal("slime")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","slime")
				return 1
            })
		).then(Commands.literal("creeper")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","creeper")
				return 1
            })
		).then(Commands.literal("guardian")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","guardian")
				return 1
            })
		).then(Commands.literal("husk")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","husk")
				return 1
            })
		).then(Commands.literal("drowned")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"spawner","mob_type","drowned")
				return 1
            })
		)).then(Commands.literal("loot")
		.then(Commands.literal("common")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"loot","loot_type","common")
				return 1
            })
		).then(Commands.literal("rare")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"loot","loot_type","rare")
				return 1
            })
		).then(Commands.literal("epic")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"loot","loot_type","epic")
				return 1
            })
		).then(Commands.literal("water")
            .executes(ctx => {
				/** @type {Internal.Vector3d} */
            	const position = Arguments.VEC3.getResult(ctx, "node_pos")
				create_feature_node_command(ctx,position,"loot","loot_type","water")
				return 1
            })
		))
	))))
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments} = event
	
	event.register(
        Commands.literal("gamerule")
		.then(Commands.literal("activeFeatureNodes")
		.then(Commands.argument("value", Arguments.BOOLEAN.create(event))
		    .executes(ctx => {
				const value = Arguments.BOOLEAN.getResult(ctx, "value")
				const player = ctx.source.getPlayer()
				const server = ctx.source.getServer()
				server.persistentData.merge({"custom_gamerules":{"activeFeatureNodes":value}})
				if (player != null) {
					player.tell(`The gamerule activeFeatureNodes is now set to: ${value}`)
				}
				return 1
            })
        ))
    )
})