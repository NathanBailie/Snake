function game() {
	let { body, dir } = snake;
	let head = snake.body[0];

	// slows the speed of the snake
	animationId1 = requestAnimationFrame(game);
	if (++count < 4) {
		return;
	};
	count = 0;
	context.clearRect(0, 0, canvas.width, canvas.height);

	// from drawFood.js - draws the food
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
		// from toMoveThroughTheWall.js - do it possible to move through the wall for the snake
		toMoveThroughTheWall(cell);
	});

	// from movement.js - draws the movement of the snake
	toDrawTheMovement(snake);

	// from toChangeTheDir - changes the direction of the snake's movement by pressing the control buttons
	toChangeTheDir(snake);
};