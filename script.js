const  dino = document.getElementById("dino");
const  cactus = document.getElementById("cactus");

document.addEventListener("keydown", (event) => {
    if(event.code === "Space") {
        if(dino.classList != "jump") {
            dino.classList.add("jump");

            setTimeout(() => {
                dino.classList.remove("jump");
            }, 300);
        }
        cactus.classList.add("moving");
    }
});

const detectCollision = () => {
    // get x position
    let dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get t position
    let cactusPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusPosition < 50 && cactusPosition > 0 && dinoPosition >= 140) {
        alert("Game Over");
    }
};

setInterval(() => {
    detectCollision();
}, 10);
