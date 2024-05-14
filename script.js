const tipsData = [
    { title: "Build Quickly", description: "Practice building structures quickly in order to gain high ground advantage in fights." },
    { title: "Use Headphones", description: "Wear headphones to hear enemy footsteps and gunshots more clearly, giving you an advantage in locating opponents." },
    { title: "Land Strategically", description: "Choose your landing spot wisely. Landing in crowded areas can result in quick eliminations, while landing in quieter areas can allow for safer looting." },
    { title: "Manage Inventory", description: "Keep your inventory organized and prioritize essential items such as weapons, healing items, and materials for building." },
    { title: "Stay in Motion", description: "Keep moving during battles to make yourself a harder target to hit. Jumping, crouching, and strafing can all help you avoid enemy fire." },
    { title: "Practice Aim", description: "Regularly practice your aim in creative mode or in aim training maps to improve your accuracy and increase your chances of winning fights." },
    { title: "Watch the Storm", description: "Always be aware of the storm's movement and plan your rotations accordingly to avoid getting caught outside the safe zone." },
    { title: "Stay Calm", description: "Remain calm and composed during intense situations. Panic can lead to poor decision-making and costly mistakes." },
    { title: "Learn from Others", description: "Watch experienced players on platforms like Twitch or YouTube to learn new strategies and techniques." }
];

const tipsContainer = document.getElementById("tipsContainer");

// Function to display tips
function displayTips() {
    tipsContainer.innerHTML = "";
    tipsData.forEach(tip => {
        const tipElement = document.createElement("div");
        tipElement.classList.add("tip");
        tipElement.innerHTML = `
            <h2>${tip.title}</h2>
            <p>${tip.description}</p>
        `;
        tipsContainer.appendChild(tipElement);
    });
}

// Call the function to display tips
displayTips();
