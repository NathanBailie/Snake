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

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};