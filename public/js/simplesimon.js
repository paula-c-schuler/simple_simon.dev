// Exercise 05.5 Simple Simon Game, JavaScript version 
// To Be Completed


buttons = document.getElementsByClassName("buttons");
var simonSequence = [];
var userSequence = [];
var score = 1;

var btn0 = document.getElementById("purple");
var btn1 = document.getElementById("blue");
var btn2 = document.getElementById("green");
var btn3 = document.getElementById("pink"); 
var start = document.getElementById("start");



// works
var getSimonSelection = function (){
	var simonSelection = Math.floor(Math.random() * 4);
	console.log(simonSelection + " is Simons new number");

	simonSequence.push(simonSelection);
	console.log(simonSequence + " is simons array");

	score = simonSequence.length;
	
	var timeoutId = setTimeout (function(){
		// document.getElementById("roundCounter").innerHTML = "Score: " + round;
	},500);
	playSimonSequence(simonSequence);
}


function playSimonSequence(simonSequence){
	
	var simonsTurn = setInterval(function(){

		
		if (simonSequence == "0"){
			buttonToFlash = btn0;
			buttonFlash(buttonToFlash);
		} else if (simonSequence == "1"){
			buttonToFlash = btn1;
			buttonFlash(buttonToFlash);
		} else if (simonSequence == "2"){
			buttonToFlash = btn2;
			buttonFlash(buttonToFlash);
		} else if (simonSequence == "3"){
			buttonToFlash = btn3;
			buttonFlash(buttonToFlash);
		} else {
			clearInterval(simonsTurn);
		}
		
	}, 500);
}

// works
function buttonFlash (buttonToFlash){
	console.log("in buttonToFlash");
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


	if (this.value == "0"){
		buttonFlash(btn0);
	} else if (this.value == "1"){
		buttonFlash(btn1);
	} else if (this.value == "2"){
		buttonFlash(btn2);
	} else if (this.value == "3"){
		buttonFlash(btn3);
	} 
	
	console.log(userSequence + " is user array in userPlays");
	console.log(simonSequence + "simonSequence in userPlays");
	// compare(userSequence);

}		



btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
start.addEventListener("click", getSimonSelection, false);




