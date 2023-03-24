function toDrawTheMovement() {
	let head = snake.body[0];
	toMove(snake, head);
	snake.body.pop();
	if (head.x === apple.x && head.y === apple.y) {
		toMove(snake, head);
	};
};

function toMove(snake) {
	let { body, dir } = snake;
	let head = snake.body[0];
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