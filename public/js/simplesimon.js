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
var getSimonSelection = function (randomButton){
	var simonSelection = Math.floor(Math.random() * 4);
	console.log(simonSelection + " is Simons new number");
	// simonSequence.push(simonSelection);
	console.log(buttons[simonSelection]
		+ " is simonSelection in buttons.");
	animateSimon(simonSequence);
	buttons[simonSelection].style.opacity = "1";
	var timeoutId = setTimeout (function(){
	buttons[simonSelection].style.opacity = "0.5";
	}, 2000);
	simonSequence.push(simonSelection);
	console.log(simonSequence + " is simons array");
	if (simonSequence.length == 1){
		console.log(simonSequence.length + " sequence length");
	
		var timeoutId = setTimeout (function(){
		document.getElementById("roundCounter").innerHTML = "Your turn!";
		},2000);
	}
	animateSimon(simonSequence);
	// return random;
}
function animateSimon(simonSequence){
	for (var i = 0; i < simonSequence.length; i++){
		if (simonSequence[i] == "0"){
			btn0.style.opacity = "1";
			var timeoutId = setTimeout (function(){
			btn0.style.opacity = "0.5";
			}, 2000);
		} else if (simonSequence[i] == "1"){
			btn1.style.opacity = "1";
			var timeoutId = setTimeout (function(){
			btn1.style.opacity = "0.5";
			}, 2000);
		} else if (simonSequence[i] == "2"){
			btn2.style.opacity = "1";
			var timeoutId = setTimeout (function(){
			btn2.style.opacity = "0.5";
			}, 2000);
		} else if (simonSequence[i] == "3"){
			btn3.style.opacity = "1";
			var timeoutId = setTimeout (function(){
			btn3.style.opacity = "0.5";
			}, 2000);
		} else {usersTurn();
		}
	}
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
	console.log(userPick);
	(buttons[userPick].style.opacity = "1");
	var timeoutId = setTimeout (function(){
	buttons[userPick].style.opacity = "0.5";
	}, 2000);

	userSequence.push(this.value);
	console.log(userSequence + " is users array");
	compareSequences();
}

function compareSequences(){
	for (var i = 0; i < userSequence.length; i++){
		console.log(userSequence);
		console.log(simonSequence);
		if (userSequence[i] == simonSequence[i]){
			round = round + 1;
			// console.log(round + " is round count");
			var timeoutId = setTimeout (function(){
				document.getElementById("roundCounter").innerHTML = "Round: " + round;
				},3000);
		console.log(userSequence + " is userSequence");
		console.log(simonSequence + " is simonSequence");
		continueGame(simonSequence);
		} else {
			var timeoutId = setTimeout (function(){
			document.getElementById("roundCounter")
			.innerHTML = "Try Again";
			},3000);
			round = 0;
			userSequence = [];
			simonSequence = [];
		}
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





