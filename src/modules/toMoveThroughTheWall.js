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