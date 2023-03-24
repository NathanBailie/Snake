"use strict"

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let scoreWindow = document.querySelector('.scoreWindow');
let scoreText = document.querySelector('.scoreWindow p');
let restartButton = document.querySelector('.scoreWindow__restart');
let timerWindow = document.querySelector('.timerWindow');

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

// from toStartPlaying.js - starts the timer and then the game
// toStartPlaying();

restartButton.addEventListener('click', () => {
	toCreateTheBasicData();
	toStartPlaying();
	scoreWindow.style.transform = 'translate(-50%, 100%)';
});