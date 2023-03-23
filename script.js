"use strict"

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let cellSize = 17;
let count = 0;
let snake = {
	dir: 'right',
	body: [
		{ x: 119, y: 119 },
		{ x: 119 - cellSize, y: 119 },
		{ x: 119 - cellSize * 2, y: 119 },
	],
};
let apple = {
	x: getRandomNum(0, 29) * cellSize,
	y: getRandomNum(0, 29) * cellSize,
};
let score = 0;
let condition = 'game';
let animationId1;
let animationId2;


function toPlayGame() {
	let { dir } = snake;
	let head = snake.body[0];
	let { body } = snake;
	// slowing the speed of the game
	animationId1 = requestAnimationFrame(toPlayGame);
	if (++count < 4) {
		return;
	};
	count = 0;
	context.clearRect(0, 0, canvas.width, canvas.height);

	drawFood();
	body.forEach((cell, index) => {
		context.fillStyle = 'darkorange';
		context.fillRect(cell.x, cell.y, cellSize - 1, cellSize - 1);

		if (index === 0 && (cell.x === apple.x && cell.y === apple.y)) {
			score += 1;
		};

		if (index !== 0 && (cell.x === apple.x && cell.y === apple.y)) {
			apple.x = getRandomNum(0, 29) * cellSize;
			apple.y = getRandomNum(0, 29) * cellSize;
		};

		// if the snake bites itself, the game is finishes
		if (index !== 0 && index !== 1 && head.x === cell.x && head.y === cell.y) {
			condition = 'finish';
			cancelAnimationFrame(animationId1);
			cancelAnimationFrame(animationId2);
		};

		toMoveThroughTheWall(cell);
	});

	// this function draws the snake's movement and gives to it's body one more cell when it eats the apple
	toDrawTheMovement(snake);
};

if (condition === 'game') {
	animationId2 = requestAnimationFrame(toPlayGame);
};

// to change the direction of snake's moving when we press the button
toChangeTheDir(snake);


function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function drawFood() {
	context.fillStyle = 'orangered';
	context.fillRect(apple.x, apple.y, cellSize - 1, cellSize - 1);
};

function toMoveThroughTheWall(cell) {
	if (cell.x >= canvas.width) {
		cell.x = 0;
	} else if (cell.x < 0) {
		cell.x = canvas.width - cellSize;
	};

	if (cell.y >= canvas.height) {
		cell.y = 0;
	} else if (cell.y < 0) {
		cell.y = canvas.height - cellSize;
	};
};

function toDrawTheMovement(snake) {
	let head = snake.body[0];
	toMove(snake, head);
	snake.body.pop();
	// when the snake eats an apple, she takes one more cell to her body
	if (head.x === apple.x && head.y === apple.y) {
		toMove(snake, head);
	};
};

function toMove(snake, head) {
	let { body, dir } = snake;
	switch (dir) {
		case 'right':
			body.unshift({ x: head.x + cellSize, y: head.y });
			break;
		case 'left':
			body.unshift({ x: head.x - cellSize, y: head.y });
			break;
		case 'up':
			body.unshift({ x: head.x, y: head.y - cellSize });
			break;
		case 'down':
			body.unshift({ x: head.x, y: head.y + cellSize });
			break;
		default:
			break;
	};
};

function toChangeTheDir(snake) {
	document.addEventListener('keydown', (e) => {
		if ((e.key === 'ArrowRight' ||
			e.key === 'd' ||
			e.key === 'в') &&
			snake.dir !== 'left') {
			snake.dir = 'right';
			toDrawTheMovement(snake);
		};
		if ((e.key === 'ArrowLeft' ||
			e.key === 'a' ||
			e.key === 'ф') &&
			snake.dir !== 'right') {
			snake.dir = 'left';
			toDrawTheMovement(snake);
		};
		if ((e.key === 'ArrowUp' ||
			e.key === 'w' ||
			e.key === 'ц') &&
			snake.dir !== 'down') {
			snake.dir = 'up';
			toDrawTheMovement(snake);
		};
		if ((e.key === 'ArrowDown' ||
			e.key === 's' ||
			e.key === 'ы') &&
			snake.dir !== 'up') {
			snake.dir = 'down';
			toDrawTheMovement(snake);
		};
	});
};