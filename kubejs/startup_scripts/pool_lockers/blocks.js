// priority: 0


StartupEvents.registry('block', event => {
    
    event.create('pool_locker_single').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.unbreakable()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
        })
        .blockEntity(entityInfo => {
		})
		
    event.create('pool_locker_double').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.unbreakable()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
        })
        .blockEntity(entityInfo => {
		})

	event.create('open_pool_locker_single').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_0_OCCUPIED)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_1_OCCUPIED)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_2_OCCUPIED)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_3_OCCUPIED)
		.unbreakable()
		.transparent(true)
		.defaultCutout()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_0_OCCUPIED, true)
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_1_OCCUPIED, true)
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_2_OCCUPIED, true)
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_3_OCCUPIED, true)
        })
        .blockEntity(entityInfo => {
		})
		
    event.create('open_pool_locker_double').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_0_OCCUPIED)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_1_OCCUPIED)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_2_OCCUPIED)
		.property(BlockProperties.CHISELED_BOOKSHELF_SLOT_3_OCCUPIED)
		.property(BlockProperties.AGE_25)
		.unbreakable()
		.transparent(true)
		.defaultCutout()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_0_OCCUPIED, true)
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_1_OCCUPIED, true)
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_2_OCCUPIED, true)
			state.set(BlockProperties.CHISELED_BOOKSHELF_SLOT_3_OCCUPIED, true)
			state.set(BlockProperties.AGE_25, 0)
        })
        .blockEntity(entityInfo => {
		})

	event.create('locker_sculkling').displayName('Pool Locker')
        .soundType("metal")
        .property(BlockProperties.FACING)
        .property(BlockProperties.HALF)
		.property(BlockProperties.OPEN)
        .property(BlockProperties.TRIGGERED)
		.unbreakable()
		.transparent(true)
		.defaultCutout()
        .placementState(state => {
            state.set(BlockProperties.FACING, state.horizontalDirection.opposite)
            state.set(BlockProperties.HALF, 'bottom')
			state.set(BlockProperties.OPEN, false)
            state.set(BlockProperties.TRIGGERED, false)
        })
		.blockEntity(entityInfo => {
			entityInfo.serverTick(20, 0, entity => {
				global.locker_sculkling_tick_event(entity)
			})
		})
})
