StartupEvents.registry('item', event => {

	event.create('battery_bowl').displayName('Bowl Of Batteries')
	event.create('clean_energy').displayName('Clean Energy')

})

ItemEvents.modification(event => {
  event.modify('kubejs:battery_bowl', item => {
	item.maxStackSize = 16
    item.foodProperties = food => {
        food.hunger(3)
        food.saturation(1)
        food.effect('minecraft:wither', 600, 1, 1)
    }
  })

  event.modify('kubejs:clean_energy', item => {
	item.maxStackSize = 16
    item.foodProperties = food => {
        food.hunger(6)
        food.saturation(3)
        food.effect('farmersdelight:comfort', 600, 0, 1)
    }
  })

  event.modify('supplementaries:soap', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
        food.fastToEat()
        food.effect('farmersdelight:comfort', 600, 0, 1)
        food.effect('minecraft:poison', 300, 0, 1)
    }
  })
  
  event.modify('kubejs:battery', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
        food.fastToEat()
        food.effect('minecraft:wither', 300, 1, 1)
    }
  })
})