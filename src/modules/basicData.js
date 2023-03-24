function toCreateTheBasicData() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	cellSize = 17;
	count = 0;
	score = 0;
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