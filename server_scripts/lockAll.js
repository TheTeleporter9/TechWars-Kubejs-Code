ServerEvents.recipes(event => {
    event.forEachRecipe(recepie => {
        
        const id = recepie.id
        const type = recepie.type;

        const keepPrefix = [
            "minecraft:"
        ];

        //Skip rezept:
            //if (recepie.type === "minecraft:acacia_boat") return;
                
            const keep = keepPrefix.some(preix => id.startsWith(preix));
            if (keep) return;

            event.remove({id: recepie.id});

    });
})