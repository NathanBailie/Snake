"use strict"

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let cellSize = 17;
let count = 0;
let snake = {
	dir: 'right',
	body: [
		{ x: 119, y: 100 },
		{ x: 119 - cellSize, y: 100 },
		{ x: 119 - cellSize * 2, y: 100 },
	],
};
let apple = {
	x: getRandomNum(0, 30) * cellSize,
	y: getRandomNum(0, 30) * cellSize,
};

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