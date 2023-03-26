function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
};

function onPlaySound(file) {
	let audio = new Audio(file);
	audio.autoplay = true;
	audio.volume = 0.5;
	audio.play();
};

function conditionChecker(e, nameOfTheClass) {
	return e.target.classList.value === '' &&
		e.target.parentElement.classList.contains(nameOfTheClass);
};

function activeClassSwitcher(e, array) {
	for (let elem of array.children) {
		elem.classList.remove('active');
	};

	e.target.classList.add('active');
};