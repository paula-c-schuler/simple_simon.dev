// Exercise 05.5 Simple Simon Game, JavaScript version 
// To Be Completed

var simonSequence = [];
var userSequence = [];
var clicks = "";

var btn0 = document.getElementById("purple");
var btn1 = document.getElementById("blue");
var btn2 = document.getElementById("green");
var btn3 = document.getElementById("pink"); 
var start = document.getElementById("start");
var purple = document.getElementById("purple");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var pink = document.getElementById("pink");
var colors = ["purple", "blue", "green", "pink"];
var	buttons = [btn0, btn1, btn2, btn3];

// works
var getSimonSelection = function (){
	var simonSelection = colors[Math.floor(Math.random() * 4)];
	console.log(simonSelection + " is Simons new number");
	// var simonSequence = [];
	simonSequence.push(simonSelection);
	console.log(simonSequence + " is simons array");
	
	playSimonSequence(simonSequence);
}


function playSimonSequence(simonSequence){

	if (simonSequence == "purple"){
		buttonToFlash = btn0;
		buttonFlash(buttonToFlash);
	} else if (simonSequence == "blue"){
		buttonToFlash = btn1;
		buttonFlash(buttonToFlash);
	} else if (simonSequence == "green"){
		buttonToFlash = btn2;
		buttonFlash(buttonToFlash);
	} else if (simonSequence == "pink"){
		buttonToFlash = btn3;
		buttonFlash(buttonToFlash);
	} else {
	}
}





// works for user
function buttonFlash (buttonToFlash){
	console.log("in Flash");
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function(){
		buttonToFlash.style.opacity = "0.5"
	}, 500 );
}

// Listeners call userPlays
// Adds user choice to array and calls function to flash button
// works
var userPlays = function(){
	var userPick = this.value;
	console.log(userPick);
	console.log("is userPick");
	
	if (userPick == "0"){
		buttonFlash(btn0);
		userSequence.push("purple");
		console.log(userSequence);
	} else if (userPick == "1"){
		buttonFlash(btn1);
		userSequence.push("blue");
		console.log(userSequence);
	} else if (userPick == "2"){
		buttonFlash(btn2);
		userSequence.push("green");
		console.log(userSequence);
	} else if (userPick == "3"){
		buttonFlash(btn3);
		userSequence.push("pink");
		console.log(userSequence);
	} 
	console.log(userSequence + " is user array in userPlays");
	console.log(simonSequence + " is simonSequence in userPlays");
	compare();

}		


	var compare = function() {
		console.log(simonSequence);
		console.log(userSequence);
		if (userSequence.length == 1) {
			if (userSequence[0] == simonSequence[0]) {
				console.log("Match in compare");
				getSimonSelection(simonSequence);
			}
		}
			console.log(simonSequence + " is simonSequence in compare loop");
			console.log(userSequence + " is userSequence in compare loop");
	}
	
	
	



btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
start.addEventListener("click", getSimonSelection, false);




