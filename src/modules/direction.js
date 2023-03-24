function toChangeTheDir() {
	document.addEventListener('keydown', (e) => {
		if ((e.key === 'ArrowRight' ||
			e.key === 'd' ||
			e.key === 'в') &&
			snake.dir !== 'left' &&
			snake.dir !== 'right') {
			snake.dir = 'right';
			toDrawTheMovement(snake);
		};
		if ((e.key === 'ArrowLeft' ||
			e.key === 'a' ||
			e.key === 'ф') &&
			snake.dir !== 'right' &&
			snake.dir !== 'left') {
			snake.dir = 'left';
			toDrawTheMovement(snake);
		};
		if ((e.key === 'ArrowUp' ||
			e.key === 'w' ||
			e.key === 'ц') &&
			snake.dir !== 'down' &&
			snake.dir !== 'up') {
			snake.dir = 'up';
			toDrawTheMovement(snake);
		};
		if ((e.key === 'ArrowDown' ||
			e.key === 's' ||
			e.key === 'ы') &&
			snake.dir !== 'up' &&
			snake.dir !== 'down') {
			snake.dir = 'down';
			toDrawTheMovement(snake);
		};
	});
};