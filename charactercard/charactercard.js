const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,

    levelUp() {
        this.level += 1;
        updateDisplay();
    },

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            updateDisplay();
            alert("Character died");
            return;
        }

        updateDisplay();
    }
};

// Update the HTML display with current values
function updateDisplay() {
    document.querySelector("#name").textContent = character.name;
    document.querySelector("#character-class").textContent = character.class;
    document.querySelector("#character-level").textContent = character.level;
    document.querySelector("#character-health").textContent = character.health;
}

// Button event listeners
document.querySelector("#level-up-btn").addEventListener("click", () => {
    character.levelUp();
});

document.querySelector("#attack-btn").addEventListener("click", () => {
    character.attacked();
});

// Initial render
updateDisplay();