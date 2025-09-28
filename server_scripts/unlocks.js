

FTBQuestsEvents.completed('5E4FEDA33F5C27D1', event => {
    const team = event.team;
    if (!team) return;
    team.members.forEach(player => {
        player.unlockRecipes(['minecraft:stone_stairs']);
    });
});

