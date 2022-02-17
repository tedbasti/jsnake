const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x:10, y:10}];
const movement = {x:5, y:5};
let currentDirection = 'r';

const drawSnake = function(pos) {
    ctx.beginPath();
    ctx.rect(pos.x,pos.y,5,5);
    ctx.fillStyle = "violet";
    ctx.fill();
    ctx.closePath();
}

const drawScreen = function() {
    //Clearscreen
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //Draw the "snake"
    snake.forEach(drawSnake);
}

const mainLoop = function() {
    switch (currentDirection) {
        case 'r':
            snake[0].x=snake[0].x+movement.x;
            break;
        case 'l':
            snake[0].x=snake[0].x-movement.x;
            break;
        case 'u':
            snake[0].y=snake[0].y-movement.y;
            break;
        case 'd':
            snake[0].y=snake[0].y+movement.y;
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
