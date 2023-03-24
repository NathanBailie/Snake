function toStartPlaying() {
	timerId = setInterval(() => {
		if (timer >= 1) {
			timerWindow.textContent = timer;
			timer--;
		} else {
			clearInterval(timerId);
			timerWindow.style.display = 'none';
			animationId2 = requestAnimationFrame(game);
		}
	}, 1000);
};