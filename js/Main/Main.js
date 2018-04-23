var canvas, canvasContext;
var paused = false;

var playerCar = new carClass();
var timer = new TimerClass();

var levelLoaded = false;

const FRAMES_PER_SECOND = 30;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	colorRect(0,0, canvas.width,canvas.height, 'black');
	var loadingText = "LOADING IMAGES";
	var textWidth = canvasContext.measureText(Math.floor(loadingText));
	colorText(loadingText, canvas.width/2 - textWidth.width * 2, canvas.height/2, 'white');
	loadImages();
	setUpImages();
	menuMusic.loopSong();
}

function imageLoadingDoneSoStartGame() {
	startGame();
}

function startGame() {
	setInterval(updateAll, 1000/FRAMES_PER_SECOND);
	setupInput();
}

function loadTrack(whichLevel) {
	trackGrid = whichLevel.slice();
	playerCar.reset(hippoCarPic, "Angry Bird");
	DontCookMusic.loopSong();
}


function updateAll() {
	if(paused){
		return;
	}
	moveAll();
	drawAll();
	// particles.update();
}

function moveAll() {
	if (isKitchenMode || (launchMeatMode || launchPlantMode)) {
		pongPaddleMove();
	} else {
		playerCar.move();
	}
	updateGameStates();
	cameraFollow();
}

function drawAll() {
    setGameStates();
    particles.draw();
    timer.drawTimer();
    timer.alertMessage();
}