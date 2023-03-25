function drawFood() {
	context.fillStyle = 'orangered';
	// square
	// context.fillRect(apple.x, apple.y, cellSize - 1, cellSize - 1);

	// circle
	const radius = cellSize / 2;
	const x = apple.x + radius;
	const y = apple.y + radius;
	context.beginPath();
	context.arc(x, y, radius, 0, getRadians(360));
	context.fill();
};