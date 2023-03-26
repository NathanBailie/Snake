function toDrawTheMovement() {
	let { body, dir } = snake;
	let head = body[0];
	toMove(head, body, dir);
	snake.body.pop();

	if (head.x === apple.x && head.y === apple.y) {
		toMove(head, body, dir);
		soundSwitcher && onPlaySound(`../sounds/sound${numberOfSound}.mp3`);
	};
};

function toMove(head, body, dir) {
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