ServerEvents.recipes(event => {
    
    event.shaped('immersiveengineering:concrete', [
        'CC',
        'CC'
        ],{
        C: 'kubejs:concrete_piece',
    })

    event.recipes.create.mixing([Fluid.of('immersiveengineering:concrete', 50)], 'kubejs:concrete_piece').lowheated()
})