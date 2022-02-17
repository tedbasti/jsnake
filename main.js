const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 10;
let y = 10;
const xMove = 5;
const yMove = 5;
let currentDirection = 'r';

const drawScreen = function() {
    //Clearscreen
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //Draw the "snake"
    ctx.beginPath();
    ctx.rect(x,y,5,5);
    ctx.fillStyle = "violet";
    ctx.fill();
    ctx.closePath();
}

const mainLoop = function() {
    switch (currentDirection) {
        case 'r':
            x=x+xMove;
            break;
        case 'l':
            x=x-xMove;
            break;
        case 'u':
            y=y-yMove;
            break;
        case 'd':
            y=y+yMove;
            break;
    }
    drawScreen();
}

const keyDownHandler = function(e) {
    if ((e.key == "Right" || e.key == "ArrowRight")
        && currentDirection != 'l') {
        currentDirection = 'r';
        console.log("Key right pressed");
    } else if ((e.key == "Left" || e.key == "ArrowLeft")
        && currentDirection != 'r') {
        currentDirection = 'l';
        console.log("Key left pressed");
    } else if ((e.key == "Down" || e.key == "ArrowDown")
        && currentDirection != 'u') {
        currentDirection = 'd';
        console.log("Key down pressed");
    } else if ((e.key == "Up" || e.key == "ArrowUp")
        && currentDirection != 'd') {
        currentDirection = 'u';
        console.log("Key up pressed");
    }
}

const initialize = function() {
    document.addEventListener("keydown", keyDownHandler, false);
    drawScreen();
    setInterval(mainLoop, 90);
    console.info("Canvas initialized");
}

initialize();


//const link = document.getElementById("myLink");
//link.onmouseover = move;
