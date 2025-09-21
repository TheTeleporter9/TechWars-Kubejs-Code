// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')


StartupEvents.registry('block', event => {
    event.create('resarchblock')
    .displayName('Resarch Tree Block')
    .material('stone')
    .hardness(1.0)
    .resistance(2)
    .tagBlock('minecraft:stone')
    .requiresTool(true)
})

