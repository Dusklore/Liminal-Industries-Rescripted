ServerEvents.recipes(event => {

event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
        {
            "fluid": "mekanism:dark_red",
            "amount": 1000
        },
        {
            "tag": "forge:dusts/sulfur"
        }
    ],
    "result": [
        {
            "item": "thermal:cinnabar"
        }
    ],
		"energy": 500
    })

event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
        {
            "fluid": "mekanism:aqua",
            "amount": 1000
        },
        {
            "tag": "forge:dusts/niter"
        }
    ],
    "result": [
        {
            "item": "thermal:apatite"
        }
    ],
		"energy": 500
    })

event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
        {
            "fluid": "mekanism:light_gray",
            "amount": 1000
        },
        {
            "tag": "forge:dusts/saltpeter"
        }
    ],
    "result": [
        {
            "item": "thermal:niter"
        }
    ],
		"energy": 500
    })
})