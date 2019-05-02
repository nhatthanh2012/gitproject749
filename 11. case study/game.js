var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ball = {
    x: 20,
    y: 20,
    dx: 4,
    dy: 6,
    radius: 20,
    score: 0,
};
var paddle = {
    speed: 20,
    width: 150,
    height: 15,
    x: 0,
    y: canvas.height - 15,
    isMovingLeft: false,
    inMovingRight: false,
};

var isGameOver = false;
document.addEventListener('keyup', function (event) {
    console.log('KEY UP');
    console.log(event);
    if (event.keyCode == 37) {
        paddle.isMovingLeft = false;
    }
    else if (event.keyCode == 39) {
        paddle.isMovingRight = false;
    }
});

document.addEventListener('keydown', function (event) {
    console.log('KEY DOWN');
    console.log(event);
    if (event.keyCode == 37) {
        paddle.isMovingLeft = true;
    }
    else if (event.keyCode == 39) {
        paddle.isMovingRight = true;
    }
});
function drawball() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();
    context.closePath()
}
function drawPaddle() {
    context.beginPath();
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}
function drawScore() {
    context.beginPath();
    context.font = "20px Georgia";
    context.fillStyle = 'red'
    context.fillText("score: " + ball.score, 20, 20);
    context.closePath()
}

function xuLyVaCham_ball() {
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y < ball.radius) {
        ball.dy = -ball.dy;
    }
}
function xuLyVaCham_paddle() {
    if (ball.x + ball.radius >= paddle.x &&
        ball.x - ball.radius <= paddle.x + paddle.width &&
        ball.y + ball.radius >= canvas.height - paddle.height) {
        ball.dy = -ball.dy;
        ball.score++
    }

}
function update_toaDo() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}
function update_paddlePosition() {
    if (paddle.isMovingLeft) {
        paddle.x -= paddle.speed;
    } else if (paddle.isMovingRight) {
        paddle.x += paddle.speed;
    };

    if (paddle.x < 0) {
        paddle.x = 0
    } else if (paddle.x > canvas.width - paddle.width) {
        paddle.x = canvas.width - paddle.width;
    }
}
function checkGameOver() {
    if (ball.y > canvas.height - ball.radius) {
        isGameOver = true;
    }
}
function handleGameOver() {
    console.log('GAME OVER')
}

function draw() {
    if (!isGameOver) {       
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawball();
        drawPaddle();
        drawScore()
        update_paddlePosition();
        xuLyVaCham_ball();
        xuLyVaCham_paddle();
        update_toaDo();
        checkGameOver();
        requestAnimationFrame(draw);
    } else {
        handleGameOver();
    }
} draw()
function startGame() {
    location.reload()
}


