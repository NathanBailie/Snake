function drawFood() {
	context.fillStyle = foodColor;
	if (foodType === 'Circle') {
		const radius = cellSize / 2;
		const x = apple.x + radius;
		const y = apple.y + radius;
		context.beginPath();
		context.arc(x, y, radius, 0, getRadians(360));
		context.fill();
	} else if (foodType === 'Square') {
		context.fillRect(apple.x, apple.y, cellSize - 1, cellSize - 1);
	};
};