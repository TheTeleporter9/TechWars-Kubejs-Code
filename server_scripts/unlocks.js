
ServerEvents.ftbquests.completed(event => {
    const team = event.team; // the team that completed the quest
    if (!team) return;

    // Check if the completed quest matches the FTB quest ID
    if (event.quest.id === "5E4FEDA33F5C27D1") {
        // Unlock recipes for the team
        team.members.forEach(player => {
            player.unlockRecipes([
                "create:cogwheel",
                "create:mechanical_belt"
            ]);
        });
    }
});

