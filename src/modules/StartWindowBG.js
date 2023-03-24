function toChangeStartWindowBG() {
	let startWindow = document.querySelector('.startWindow');

	startWindow.style.background = `url(../img/bg/snake${getRandomNum(1, 9)}.png) center center / cover no-repeat`;
}