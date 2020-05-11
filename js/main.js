window.addEventListener('load', () => {
    //create the fish element
    let elementFish = document.createElement("fish")
    document.body.appendChild(elementFish)

    //create the bubble element
    let elementBubble = document.createElement("bubble")
    document.body.appendChild(elementBubble)

    //get the fish and the bubble element
    let fish = document.getElementsByClassName("fish")
    let bubble = document.getElementsByClassName("bubble")

    //put the screen demensions
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight

    //put the coordinates in the fish variable

    fish = {
        x: randomNumber(screenWidth),
        y: randomNumber(screenHeight),
        color: randomNumber(360)
    }  

    //put the coordinates in the bubble variable
    bubble = {
        x: 20,
        y: 100
    }

    //determine on what speed the fish is going to be moving
    let fishSpeedDirectionX = 2
    let fishSpeedDirectionY = 0.35


    //call the gameloop for the first time
    gameLoop()
    


function gameLoop(){

       if (fish.x <= 0) fishSpeedDirectionX = 2
       else if (fish.x >= screenWidth) fishSpeedDirectionX = -2

       if (fish.y <= 0) fishSpeedDirectionY = 0.35
       else if (fish.y >= screenHeight) fishSpeedDirectionY = -0.35


        fish.x += fishSpeedDirectionX
        fish.y += fishSpeedDirectionY
    


    elementFish.style.transform = `translate(${fish.x}px, ${fish.y}px)`
    
    requestAnimationFrame(gameLoop)
}


function randomNumber(max){
    return Math.random() * (max - 0) + 0
}


})

