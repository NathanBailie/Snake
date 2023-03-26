function toStartPlaying() {
	timerId = setInterval(() => {
		if (timer >= 1) {
			timerWindow.textContent = timer;
			timer--;
		} else {
			clearInterval(timerId);
			timerWindow.style.display = 'none';
			animationId2 = requestAnimationFrame(game);
		};
	}, 1000);
	scoreWindow.style.transform = 'translate(-50%, 100%)';
	container.style.boxShadow = '0px 0px 5px 2px #ffbbff';
};