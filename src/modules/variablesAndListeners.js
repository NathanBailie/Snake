"use strict"

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let scoreWindow = document.querySelector('.scoreWindow');
let scoreText = document.querySelector('.scoreWindow p');
let startButton = document.querySelector('.startWindow__startButton');
let backButton = document.querySelector('.scoreWindow__back');
let restartButton = document.querySelector('.scoreWindow__restart');
let timerWindow = document.querySelector('.timerWindow');
let container = document.querySelector('.container');
let mainWraper = document.querySelector('.mainWraper');
// let startWindowWraper = document.querySelector('.startWindowWraper');
let settingsButton = document.querySelector('.startWindow__settingsButton');
let settingWindow = document.querySelector('.settingsWindow');
let okButton = document.querySelector('.settingsWindow__okButton');

// settings
let soundCheckbox = document.querySelector('.customCheckbox');
let sounds = document.querySelector('.sounds');
let fieldColors = document.querySelector('.fieldColor');
let snakeColors = document.querySelector('.snakeColor');
let foodColors = document.querySelector('.foodColor');
let foodTypes = document.querySelector('.foodType');
let gameWraper = document.querySelector('.gameWraper');

let cellSize;
let count;
let animationId1;
let animationId2;
let score;
let timer;
let timerId;
let snake;
let apple;
// from basicData.js - creating the basic data
toCreateTheBasicData();

// from StartWindowBG.js - add one of images to the start window's background
toChangeStartWindowBG();

let soundSwitcher = false;
let numberOfSound = 5;
let fieldColor = 'linear-gradient(220deg, #404040, #413f48)';
let snakeColor = 'darkorange';
let foodColor = 'orangered';
let foodType = 'Circle';

// toStartPlaying();

restartButton.addEventListener('click', () => {
	toCreateTheBasicData();
	toStartPlaying();
});

startButton.addEventListener('click', () => {
	toCreateTheBasicData();
	toStartPlaying();
	mainWraper.style.transform = 'translateX(-50%)';
});

backButton.addEventListener('click', () => {
	toCreateTheBasicData();
	mainWraper.style.transform = 'translateX(0)';
	container.style.boxShadow = '0 0 5px 2px #b9ad25';
	setTimeout(() => {
		scoreWindow.style.transform = 'translate(-50%, 100%)';
	}, 600);
	toChangeStartWindowBG();
});

settingsButton.addEventListener('click', () => {
	settingWindow.style.transform = 'translate(-50%, -50%)';
});

sounds.addEventListener('click', (e) => {
	if (conditionChecker(e, 'sounds')) {
		let number = e.target.textContent;
		numberOfSound = number;
		onPlaySound(`../sounds/sound${numberOfSound}.mp3`);
		activeClassSwitcher(e, sounds);
	};
});

fieldColors.addEventListener('click', (e) => {
	if (conditionChecker(e, 'fieldColor')) {
		let background = getComputedStyle(e.target).getPropertyValue('background');
		fieldColor = background.match(/linear-gradient.+\)\)/)[0];
		gameWraper.style.background = fieldColor;
		activeClassSwitcher(e, fieldColors);
	};
});

snakeColors.addEventListener('click', (e) => {
	if (conditionChecker(e, 'snakeColor')) {
		let background = getComputedStyle(e.target).getPropertyValue('background');
		snakeColor = background.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/)[0];
		activeClassSwitcher(e, snakeColors);
	};
});

foodColors.addEventListener('click', (e) => {
	if (conditionChecker(e, 'foodColor')) {
		let background = getComputedStyle(e.target).getPropertyValue('background');
		foodColor = background.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/)[0];
		activeClassSwitcher(e, foodColors);
	};
});

foodTypes.addEventListener('click', (e) => {
	if (conditionChecker(e, 'foodType')) {
		foodType = e.target.textContent;
		activeClassSwitcher(e, foodTypes);
	};
});

soundCheckbox.addEventListener('click', (e) => {
	soundSwitcher = e.target.checked;
});

okButton.addEventListener('click', () => {
	settingWindow.style.transform = 'translate(-50%, 100%)';
});