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
