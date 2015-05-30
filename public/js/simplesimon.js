// Exercise 05.5 Simple Simon Game, JavaScript version 
// To Be Completed

var simonSequence = [];
var userSequence = [];
var click = 0;

var start = document.getElementById("start");
var purple = document.getElementById("purple");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var pink = document.getElementById("pink");
var colors = ["purple", "blue", "green", "pink"];
var clicksDisplay = document.getElementById("clicks");

// works
var getSimonSelection = function () {
	var simonSelection = colors[Math.floor(Math.random() * 4)];

	simonSequence.push(simonSelection);
	
	i = 0;
	var timeoutId = setTimeout (function() {
		playSimonSequence(simonSequence);
	}, 500 );
}

// works
function playSimonSequence(simonSequence) {

	if (i < simonSequence.length) {
		if (simonSequence[i] == "purple") {
			buttonToFlash = purple;
			buttonFlash(buttonToFlash);		
		} else if (simonSequence[i] == "blue") {
			buttonToFlash = blue;
			buttonFlash(buttonToFlash);
		} else if (simonSequence[i] == "green") {
			buttonToFlash = green;
			buttonFlash(buttonToFlash);		
		} else if (simonSequence[i] == "pink") {
			buttonToFlash = pink;
			buttonFlash(buttonToFlash);		
		} 
		i++;
		var timeoutId = setTimeout (function() {
			playSimonSequence(simonSequence);
			userSequence = [];
		}, 1000 );
	} 
}


// works for user and simon
function buttonFlash (buttonToFlash) {
	
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function() {
		buttonToFlash.style.opacity = "0.5"
	}, 500 );
}


// Adds user choice to array and calls function to flash button
// works
// *** I WANT TO: FIND A WAY TO USE THE LISTENING OF CLICKS TO BE
// THE INDEX BY WHICH EACH CLICK IS COMPARED TO THE SIMON SEQUENCE
// IN THE COMPARE FUNCTION INSTEAD OF COMPARING BOTH WHOLE ARRAYS.
var userPlays = function() {
	var userPick = this.value;
	// click = click + 1;
	// console.log(click + " is click value");
	console.log(userPick + "is userPick");
	
	if (userPick == "0") {
		buttonFlash(purple);
		userPick = "purple";
		userSequence.push("purple");
		
	} else if (userPick == "1") {
		buttonFlash(blue);
		userPick = "blue";
		userSequence.push("blue");
		
	} else if (userPick == "2") {
		buttonFlash(green);
		userPick = "green";
		userSequence.push("green");
		
	} else if (userPick == "3") {
		buttonFlash(pink);
		userPick = "pink";
		userSequence.push("pink");
		
	} 
	console.log(userSequence + " is user array in userPlays");
	console.log(simonSequence + " is simonSequence in userPlays");
	var timeoutId = setTimeout (function() {
		compare(simonSequence, userSequence);
	}, 4000 );
}	


// works, compares both full arrays and records score
var compare = function(simonSequence, userSequence) {	 
	// console.log(click + " is click in compare");

	if (userSequence.length == simonSequence.length) {
		console.log("Full match.");
		var timeoutId = setTimeout (function() {
				// getSimonSelection(simonSequence);
				document.getElementById("clicks").innerHTML = "Player: " + userSequence.length;
		}, 300 );
	} else {
	alert("Game Over");
	}
}


purple.addEventListener("click", userPlays, false);
blue.addEventListener("click", userPlays, false);
green.addEventListener("click", userPlays, false);
pink.addEventListener("click", userPlays, false);
start.addEventListener("click", getSimonSelection, false);





