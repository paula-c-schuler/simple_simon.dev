//******** SIMPLE SIMON GAME JAVASCRIPT ************
//SET GLOBAL VARIABLES

buttons = document.getElementsByClassName("buttons");
var simonSequence = [];
var userSequence = [];
var round = 0;

var btn0 = document.getElementById("box0");
var btn1 = document.getElementById("box1");
var btn2 = document.getElementById("box2");
var btn3 = document.getElementById("box3"); 
var btnPlay = document.getElementById("play");


// USER SAYS LETS PLAY ***********************
//WORKS
var playSimon = function(){
	console.log("play is heard");
	getSimonSelection();
}
// GENERATES RANDOM VALUE FOR SIMON TO FOLLOW *******
//WORKS
var getSimonSelection = function (){
	var simonSelection = Math.floor(Math.random() * 4);
	console.log(simonSelection + " is Simons new number");
	simonSequence.push(simonSelection);
	// console.log(simonSequence + " is simons array");	
	round++;
	console.log(round + " is round");
	roundUpdate(round);
	if (round == 1){
		yourTurn();
		if (simonSelection == "0"){
		buttonFlash(btn0);
		} else if (simonSelection == "1"){
		buttonFlash(btn1);
		} else if (simonSelection == "2"){
			buttonFlash(btn2);
		} else if (simonSelection == "3"){
			buttonFlash(btn3);
		}
	} else animateSimon(simonSequence);
} 

function yourTurn (){
	document.getElementById("talk").innerHTML = "It is your turn!";
	enablePlayer();
}

function roundUpdate (round){
	document.getElementById("roundCounter").innerHTML = "Round " + round;
}

function buttonFlash (buttonToFlash){
	console.log("in buttonFlash");
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function(){
	buttonToFlash.style.opacity = "0.5"
	},800);
}
function animateSimon(simonSequence){
	console.log("in animateSimon");
	disablePlayer();
	var i = 0;
	var simonsTurn = setInterval(function(){
	if (i < simonSequence.length){
		var buttonDance = setInterval(function(){
		if (simonSequence[i] == "0"){
		buttonFlash(btn0);
		} else if (simonSequence[i] == "1"){
		buttonFlash(btn1);
		} else if (simonSequence[i] == "2"){
			buttonFlash(btn2);
		} else if (simonSequence[i] == "3"){
			buttonFlash(btn3);
		} else {clearInterval(simonsTurn);

		}
		},1000);
	}
	i++;
	enablePlayer();
	usersTurn();
	}, 1000);
}
function usersTurn (){
	document.getElementById("talk").innerHTML = "Your turn!";
}

var userPlays = function(){
	var userPick = this.value;
	console.log(userPick + " is users pick");
	if (this.value == "0"){
		buttonFlash(btn0);
	} else if (this.value == "1"){
	buttonFlash(btn1);
	} else if (this.value == "2"){
		buttonFlash(btn2);
	} else if (this.value == "3"){
		buttonFlash(btn3);
	} 
	userSequence.push(this.value);
	console.log(userSequence + " is users array");
	compareSequences(userSequence,simonSequence);
	}

function compareSequences(userSequence, simonSequence){
	var compareTurns = setInterval(function(){
		console.log(userSequence + " is in compareSequences");
		console.log(simonSequence + " is in compareSequences");
	for (var i = 0; i < simonSequence.length; i++){
		if (userSequence[i] != simonSequence[i]){
			gameOver();
		} else 
			continueGame();
		}	
	}, 3000;
}

function continueGame(simonSequence){
	console.log(simonSequence + " is simons array");
	document.getElementById("talk").innerHTML = "Time for Simon.";
	getSimonSelection(simonSequence);
}

function gameOver(){
	document.getElementById("talk").innerHTML = "Game Over.";
	userSequence = [];
	round = 1;
}

function enablePlayer(){
btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
}
function disablePlayer(){
btn0.removeEventListener("click", userPlays, false);
btn1.removeEventListener("click", userPlays, false);
btn2.removeEventListener("click", userPlays, false);
btn3.removeEventListener("click", userPlays, false);
}
btnPlay.addEventListener("click", playSimon, false);




