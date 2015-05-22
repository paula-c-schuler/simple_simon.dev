


buttons = document.getElementsByClassName("buttons");
var simonSequence = [];
var userSequence = [];
var round = 1;

var btn0 = document.getElementById("box0");
var btn1 = document.getElementById("box1");
var btn2 = document.getElementById("box2");
var btn3 = document.getElementById("box3"); 
var btnPlay = document.getElementById("play");



// works
var getSimonSelection = function (){
	var simonSelection = Math.floor(Math.random() * 4);
	console.log(simonSelection + " is Simons new number");

	simonSequence.push(simonSelection);
	console.log(simonSequence + " is simons array");

	round = simonSequence.length;
	
	var timeoutId = setTimeout (function(){
		// document.getElementById("roundCounter").innerHTML = "Score: " + round;
	},500);
	animateSimon(simonSequence);
}


function animateSimon(simonSequence){
	i = 0;
	var simonsTurn = setInterval(function(){

		
		if (simonSequence[i] == "0"){
			buttonToFlash = btn0;
			buttonFlash(buttonToFlash);
		} else if (simonSequence[i] == "1"){
			buttonToFlash = btn1;
			buttonFlash(buttonToFlash);
		} else if (simonSequence[i] == "2"){
			buttonToFlash = btn2;
			buttonFlash(buttonToFlash);
		} else if (simonSequence[i] == "3"){
			buttonToFlash = btn3;
			buttonFlash(buttonToFlash);
		} else {
			clearInterval(simonsTurn);
		}
		i++;
	}, 500);
}


function buttonFlash (buttonToFlash){
	
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function(){
		buttonToFlash.style.opacity = "0.5"
	}, 500);
}



// Listeners call userPlays
// Adds user choice to array and calls function to flash button
// works
var userPlays = function(){
	var userPick = this.value;
	console.log(userPick + " is users pick");
	userSequence.push(userPick);
	i = 0;
	var userTurn = setInterval(function(){

		if (this.value == "0"){
		buttonFlash(btn0);
		} else if (this.value == "1"){
			buttonFlash(btn1);
		} else if (this.value == "2"){
			buttonFlash(btn2);
		} else if (this.value == "3"){
			buttonFlash(btn3);
		} 
		i++;
	}, 1500);

	// if (this.value == "0"){
	// 	buttonFlash(btn0);
	// } else if (this.value == "1"){
	// 	buttonFlash(btn1);
	// } else if (this.value == "2"){
	// 	buttonFlash(btn2);
	// } else if (this.value == "3"){
	// 	buttonFlash(btn3);
	// } 
	
	console.log(userSequence + " is user array in userPlays");
	console.log(simonSequence + "simonSequence in userPlays");
	compareSequences(userPick);

}		

function compareSequences(userPick){
	console.log(userSequence + " is user array in compare function");
	console.log(simonSequence + " is simon in compare function");
		
	if (userSequence !== simonSequence){
		var timeoutId = setTimeout (function(){
			alert("Game over.");
			location.reload();
		}, 3000);
	} else 
		var timeoutId = setTimeout (function(){
			document.getElementById("play").innerHTML = "YAY!" + round;
		},500);
		// getSimonSelection();
}	

// function continueGame(simonSequence){
// 	console.log(simonSequence + " is simons array");
// 	getSimonSelection();
// }


btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
btnPlay.addEventListener("click", getSimonSelection, false);


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





