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
	x: getRandomNum(0, 30) * cellSize,
	y: getRandomNum(0, 30) * cellSize,
};

function toPlayGame() {
	let { dir } = snake;
	let head = snake.body[0];
	let { body } = snake;

	// slowing the speed of the game
	requestAnimationFrame(toPlayGame);
	if (++count < 5) {
		return;
	};
	count = 0;

	context.clearRect(0, 0, canvas.width, canvas.height);

	// apple painting
	context.fillStyle = 'orangered';
	context.fillRect(apple.x, apple.y, cellSize - 1, cellSize - 1);

	for (let cell of snake.body) {
		context.fillStyle = 'darkorange';
		context.fillRect(cell.x, cell.y, cellSize - 1, cellSize - 1);

		// an inspect - apple has not create in the same cell with the snake's body's cells
		while (apple.x === cell.x || apple.y === cell.y) {
			apple.x = getRandomNum(0, 30) * cellSize;
			apple.y = getRandomNum(0, 30) * cellSize;
		};

		// snake pass through the wall
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

	// the snake's movement
	if (dir === 'right') {
		body.unshift({ x: head.x + cellSize, y: head.y })
		body.pop();
	};
	if (dir === 'left') {
		body.unshift({ x: head.x - cellSize, y: head.y })
		body.pop();
	};
	if (dir === 'up') {
		body.unshift({ x: head.x, y: head.y - cellSize })
		body.pop();
	};
	if (dir === 'down') {
		body.unshift({ x: head.x, y: head.y + cellSize })
		body.pop();
	};
};
requestAnimationFrame(toPlayGame);


document.addEventListener('keydown', (e) => {
	if ((e.key === 'ArrowRight' ||
		e.key === 'd' ||
		e.key === 'в') &&
		snake.dir !== 'left') {
		snake.dir = 'right';
	};
	if ((e.key === 'ArrowLeft' ||
		e.key === 'a' ||
		e.key === 'ф') &&
		snake.dir !== 'right') {
		snake.dir = 'left';
	};
	if ((e.key === 'ArrowUp' ||
		e.key === 'w' ||
		e.key === 'ц') &&
		snake.dir !== 'down') {
		snake.dir = 'up';
	};
	if ((e.key === 'ArrowDown' ||
		e.key === 's' ||
		e.key === 'ы') &&
		snake.dir !== 'up') {
		snake.dir = 'down';
	};
});


function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};