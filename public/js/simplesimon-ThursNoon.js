//******** SIMPLE SIMON GAME JAVASCRIPT ************
//SET GLOBAL VARIABLES

buttons = document.getElementsByClassName("buttons");
var simonSequence = [];
var userSequence = [];
var round = 1;

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
	console.log(simonSequence + " is simons array");
	console.log(simonSequence.length + " sequence length");
	round = simonSequence.length;
	// console.log(round + " is round");
	
	var timeoutId = setTimeout (function(){
	document.getElementById("roundCounter").innerHTML 
	= "Round: " + round;
	},2000);
	}
	animateSimon(simonSequence);
}


function animateSimon(simonSequence){
	var i = 0:
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
			usersTurn();
		}
		},1000);
	}
	i++;
	}, 1000);
}

function buttonFlash (buttonToFlash){
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function(){
	buttonToFlash.style.opacity = "0.5"
	},800);
}


function usersTurn (){
	var timeoutId = setTimeout (function(){
	document.getElementById("roundCounter").innerHTML = "Your turn!";
	},2000);
}
//ADD USER CHOICE TO USER ARRAY and MODIFIES BUTTON.
// WORKS
var userPlays = function(){
	var userPick = this.value;
	console.log(userPick " is users pick");
	if (this.value == "0"){
		buttonFlash(btn0);
		} else if (this.value == "1"){
		buttonFlash(btn1);
		} else if (this.value == "2"){
			buttonFlash(btn2);
		} else if (this.value == "3"){
			buttonFlash(btn3);
		} 
	compareSequences(userPick);
		
	// buttonToFlash = userPick
	// (buttons[userPick].style.opacity = "1");
	// var timeoutId = setTimeout (function(){
	// buttons[userPick].style.opacity = "0.5";
	// }, 1000);
	// userSequence.push(this.value);
	// console.log(userSequence + " is users array");
}

function compareSequences(userPick){
	// for (var i = 0; i < userSequence.length; i++){
	// 	console.log(userSequence);
	// 	console.log(simonSequence);
		if (userSequence[i] !== simonSequence[i]){
			var timeoutId = setTimeout (function(){
			document.getElementById("roundCounter")
			.innerHTML = "Try Again";
			},300);
			userSequence = [];
			console.log(userSequence + " is user array");
			simonSequence = [];
		} 
		if (userSequence.length == simonSequence.length){
			round = userSequence.length;
			console.log(round + " is round");
			var timeoutId = setTimeout (function(){
			document.getElementById("roundCounter").innerHTML = "Great job!";
			},100);
			// continueGame(simonSequence);
		}
		// var timeoutId = setTimeout (function(){
				// document.getElementById("roundCounter").innerHTML = "Round: " + round;
				// },2000);
		// console.log(userSequence + " is userSequence");
		// console.log(simonSequence + " is simonSequence");	
	}
}	

function continueGame(simonSequence){
	console.log(simonSequence + " is simons array");
	getSimonSelection(simonSequence);
}


btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
btnPlay.addEventListener("click", playSimon, false);


/**************************************/

/*TODO: RANDOMLY SELECT BUTTONS - THEY FADE IN, THEN OUT*/
//  and variable for the selection array
/*TODO: USER CAN CLICK THE BUTTON THAT WAS RANDOMIZED*/
/*TODO: RANDOM SELECT AND THEN USER SELECT AND ADD RANDOM AGAIN*/
/*TODO: CONTINUE PROCESS UNTIL USER MISSES A BUTTON*/
/*TODO: INSTALL A CLICK COUNTER FOR USER*/
// assign variables to hold html elements
//function to randomly get square
//listen for user input and decide if true or false
//count the round if true
//add to sequence if true
//recycle game
//if false, do not count, ask if want to play again
//timeout to reload page if no response
//if no response, time out the game





