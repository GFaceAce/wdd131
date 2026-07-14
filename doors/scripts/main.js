const doors = [
    {
        image: "images/door01.jpg",
        alt: "A wooden door."
    },
    {
        image: "images/door02.jpg",
        alt: "A simple black door."
    },
    {
        image: "images/door03.jpg",
        alt: "A bright orange door."
    },
    {
        image: "images/door04.jpg",
        alt: "A brown door."
    },
    {
        image: "images/door05.png",
        alt: "A door comprised of shapes."
    },
    {
        image: "images/door06.jpg",
        alt: "An dark orange door."
    },
    {
        image: "images/door07.jpg",
        alt: "A yellow door."
    },
    {
        image: "images/door08.png",
        alt: "A blue door."
    },
    {
        image: "images/door09.jpg",
        alt: "A white door."
    },
    {
        image: "images/door10.jpg",
        alt: "A red door."
    },
    {
        image: "images/door11.jpg",
        alt: "A modern black door."
    },
    {
        image: "images/door12.jpg",
        alt: "A bronze door."
    }
];

let roomNumber = 1;
let highScore = 0;

function getRandomDoors()
{
    const firstDoor = Math.floor(Math.random() * doors.length);
    const secondDoor = Math.floor(Math.random() * doors.length);
    return [
        doors[firstDoor],
        doors[secondDoor]
    ];
}

function doorTemplate(door) {
    return `<img class="door" src="${door.image}" alt="${door.alt}">`;
}

function displayDoors() {
    const gameSpace = document.querySelector("#game-space");
    const selectedDoors = getRandomDoors();
    gameSpace.innerHTML = selectedDoors
        .map(doorTemplate)
        .join("");
    addDoorListeners();
}

function addDoorListeners() {
    const doorImages = document.querySelectorAll(".door");
    doorImages.forEach(door => {
        door.addEventListener("click", chooseDoor);
    });
}

function chooseDoor() {
    const survived = Math.random() <0.5;
    if (survived) {
        roomNumber++;
        document.querySelector("#room-number").textContent = roomNumber;
        displayDoors();
    } else {
        alert("Game Over");
        document.querySelector("#restart").hidden = false;
        document.querySelector("#game-space").innerHTML = "";
        updateHighScore();
    }
}

function startGame() {
    roomNumber = 1;
    document.querySelector("#room-number").textContent = roomNumber;
    document.querySelector("#restart").hidden = true;
    displayDoors();
}

function updateHighScore() {
    if (roomNumber > highScore) {
        highScore = roomNumber;
        document.querySelector("#highscore").textContent = highScore;
    }
}

document.querySelector("#restart").addEventListener("click", startGame);
startGame();