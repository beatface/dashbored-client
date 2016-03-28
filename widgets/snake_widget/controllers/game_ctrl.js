"use strict";

SnakeApp.controller('SnakeCtrl', ["$scope", "$window", function($scope, $window) {

    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');
    var score = 0;
    var level = 0;
    var direction = 0;
    var snake = new Array(3);
    var active = true;
    var speed = 500;
    var map;

    (function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '16px Quicksand';
        ctx.fillText('Snake!', ((canvas.width / 2) - (ctx.measureText('Snake!').width / 2)), 50);
        ctx.font = '12px Quicksand';
        ctx.fillText("Click 'Start game'", ((canvas.width / 2) - (ctx.measureText("Click 'Start game'").width / 2)), 70);
    })()

    $scope.startGame = () => {
        active = true;
        // Initialize the matrix.
        map = new Array(26);
        for (var i = 0; i < map.length; i++) {
            map[i] = new Array(26);
        }
        canvas.width = 264;
        canvas.height = 284;
        map = generateSnake(map);
        map = generateFood(map);
        drawGame();
    };


    angular.element($window).on('keydown', (e) => {
        if (e.keyCode === 38 && direction !== 3) {
            direction = 2; // Up
        } else if (e.keyCode === 40 && direction !== 2) {
            direction = 3; // Down
        } else if (e.keyCode === 37 && direction !== 0) {
            direction = 1; // Left
        } else if (e.keyCode === 39 && direction !== 1) {
            direction = 0; // Right
        }
    });

    function drawGame() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Traverse all the body pieces of the snake, starting from the last one
        for (var i = snake.length - 1; i >= 0; i--) {
            if (i === 0) {
                switch(direction) {
                    case 0: // Right
                        snake[0] = { x: snake[0].x + 1, y: snake[0].y };
                        break;
                    case 1: // Left
                        snake[0] = { x: snake[0].x - 1, y: snake[0].y };
                        break;
                    case 2: // Up
                        snake[0] = { x: snake[0].x, y: snake[0].y - 1 };
                        break;
                    case 3: // Down
                        snake[0] = { x: snake[0].x, y: snake[0].y + 1 };
                        break;
                }
                // checking if snake hits wall, then game is over
                if (snake[0].x < 0 ||
                    snake[0].x >= 26 ||
                    snake[0].y < 0 ||
                    snake[0].y >= 26) {
                    showGameOver();
                    return;
                }
                // checking if snake hits food, if so, make new food and add to snake body length
                if (map[snake[0].x][snake[0].y] === 1) {
                    score += 1;
                    map = generateFood(map);
                    // add to snake body
                    snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
                    map[snake[snake.length - 1].x][snake[snake.length - 1].y] = 2;
                    // level up if score is a multiple of 100
                    if ((score % 10) === 0) {
                        level += 1;
                    }
                // check if snake hit itself
                } else if (map[snake[0].x][snake[0].y] === 2) {
                    showGameOver();
                    return;
                }
                map[snake[0].x][snake[0].y] = 2;
            } else {
                // as snake moves, clear last matrix piece to show snake movement
                if (i === (snake.length - 1)) {
                    map[snake[i].x][snake[i].y] = null;
                }
                snake[i] = { x: snake[i - 1].x, y: snake[i - 1].y };
                map[snake[i].x][snake[i].y] = 2;
            }
        }

        // Draw the border as well as the score
        drawMain();

        // Start cycling the matrix
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                if (map[x][y] === 1) {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
                } else if (map[x][y] === 2) {
                    ctx.fillStyle = 'rgba(46, 196, 182, 0.9)';
                    ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
                }
            }
        }
        if (active) {
            setTimeout(drawGame, speed - (level * 50));
        }
    } // end function drawGame()


    function drawMain() {
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.strokeRect(2, 20, canvas.width - 5, canvas.height - 24);

        ctx.fillStyle = 'black';
        ctx.font = '12px Quicksand';
        ctx.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);

        ctx.save();
        ctx.font = 'bold 102px Quicksand';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centreX = canvas.width / 2;
        var centreY = canvas.height / 2;
        ctx.fillText(score.toString(), centreX, centreY);
        ctx.restore();
    } // end drawMain()

    function generateFood(map) {
        // Generate a random position for the rows and the columns.
        var rndX = Math.round(Math.random() * 25),
            rndY = Math.round(Math.random() * 25);
        // make sure food is not placed on or under snake body
        while (map[rndX][rndY] === 2) {
            rndX = Math.round(Math.random() * 25);
            rndY = Math.round(Math.random() * 25);
        }
        map[rndX][rndY] = 1;
        return map;
    } // end generateFood()

    function generateSnake(map) {
        // Generate a random position for the row and the column of the head.
        var rndX = Math.round(Math.random() * 25),
            rndY = Math.round(Math.random() * 25);
        // check that snake does not start off with part of body out of bounds
        while ((rndX - snake.length) < 0) {
            rndX = Math.round(Math.random() * 25);
        }

        for (var i = 0; i < snake.length; i++) {
            snake[i] = { x: rndX - i, y: rndY };
            map[rndX - i][rndY] = 2;
        }

        return map;
    } // end generateSnake()

    function showGameOver() {
        active = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '16px Quicksand';
        ctx.fillText('Game Over!', ((canvas.width / 2) - (ctx.measureText('Game Over!').width / 2)), 50);
        ctx.font = '12px Quicksand';
        ctx.fillText('Your Score Was: ' + score, ((canvas.width / 2) - (ctx.measureText('Your Score Was: ' + score).width / 2)), 70);
    } // end showGameOver()

}]);

angular.bootstrap(document.getElementById("snake-widget"), ['SnakeWidget']);
