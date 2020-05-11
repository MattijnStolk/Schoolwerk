window.addEventListener('load', () => {

function randomPosition(direction){
    return Math.floor(Math.random() * 100) + direction;
}





for(i = 0; i < 100; i++){
    let bubble = document.createElement("bubble");
    document.body.appendChild(bubble);

    let bubbleX = randomPosition("vw");
    let bubbleY = randomPosition("vh");
    bubble.style.transform = `translate(${bubbleX}, ${bubbleY})`;
}


let fishSpeedDirectionX = 2
let fishSpeedDirectionY = 0.35


gameLoop()

function gameLoop(){

    for(i = 0; i < 100; i++){
        let fish = document.createElement("fish");
        document.body.appendChild(fish);
    
        let fishX = randomPosition("vw");
        let fishY = randomPosition("vh");
        fish.style.transform = `translate(${fishX}, ${fishY})`;
    
        let randomHue = Math.random() * (360 - 1) + 1;
        fish.style.filter = `hue-rotate(${randomHue}deg)`;
    }

    if (fishX <= 0) fishSpeedDirectionX = 2
    else if (fishX >= screenWidth) fishSpeedDirectionX = -2

    if (fishY <= 0) fishSpeedDirectionY = 0.35
    else if (fishX >= screenHeight) fishSpeedDirectionY = -0.35


     fishx += fishSpeedDirectionX
     fishy += fishSpeedDirectionY

    Fish.style.transform = `translate(${fishX}px, ${fishY}px)`

     requestAnimationFrame(gameLoop)
}

})