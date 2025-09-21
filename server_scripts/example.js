
ServerEvents.recipes(event => {
    event.shaped('kubejs:resarchblock', [
        'ABA',
        'CDE',
        'AGA'        

    ],
    { 
        A: 'create:copper_casing',
        B: 'create:redstone_link',
        D: 'create:precision_mechanism',
        G: 'create:large_cogwheel',
        E: 'minecraft:anvil',
        C: 'crusty_chunks:hammer' 
    })
})