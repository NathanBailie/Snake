"use strict"

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let scoreWindow = document.querySelector('.scoreWindow');
let scoreText = document.querySelector('.scoreWindow p');
let restartButton = document.querySelector('.scoreWindow__restart');
let timerWindow = document.querySelector('.timerWindow');

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
let animationId1;
let animationId2;

let timer = 3;
let timerId;
toCreateBasicData();
toStartPlaying();

function toPlayGame() {
	let { dir } = snake;
	let head = snake.body[0];
	let { body } = snake;

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

		if (index !== 0 && index !== 1 && head.x === cell.x && head.y === cell.y
			// || score === 1
		) {
			cancelAnimationFrame(animationId1);
			cancelAnimationFrame(animationId2);
			scoreText.textContent = score;
			scoreWindow.style.transform = 'translate(-50%, -50%)';
		};

		toMoveThroughTheWall(cell);
	});

	toDrawTheMovement(snake);
};
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

restartButton.addEventListener('click', () => {
	toCreateBasicData();
	toStartPlaying();
	toChangeTheDir(snake);
	scoreWindow.style.transform = 'translate(-50%, 100%)';
});

function toCreateBasicData() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	score = 0;
	count = 0;
	timer = 3;
	timerWindow.textContent = '';
	snake = {
		dir: 'right',
		body: [
			{ x: 119, y: 119 },
			{ x: 119 - cellSize, y: 119 },
			{ x: 119 - cellSize * 2, y: 119 },
		],
	};
	apple = {
		x: getRandomNum(0, 29) * cellSize,
		y: getRandomNum(0, 29) * cellSize,
	};
	timerWindow.style.display = 'flex';
};

function toStartPlaying() {
	timerId = setInterval(() => {
		if (timer >= 1) {
			timerWindow.textContent = timer;
			timer--;
		} else {
			clearInterval(timerId);
			timerWindow.style.display = 'none';
			animationId2 = requestAnimationFrame(toPlayGame);
		}
	}, 1000);
};