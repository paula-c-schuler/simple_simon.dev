// Exercise 05.5 Simple Simon Game, JavaScript version 
// To Be Completed

var simonSequence = [];
var userSequence = [];
var click;

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
var clicksDisplay = document.getElementById("clicks");

// works
var getSimonSelection = function () {
	var simonSelection = colors[Math.floor(Math.random() * 4)];
	// console.log(simonSelection + " is Simons new number");

	simonSequence.push(simonSelection);
	// console.log(simonSequence + " is simons array");
	i = 0;
	var timeoutId = setTimeout (function() {
		playSimonSequence(simonSequence);
	}, 500 );
}

// works
function playSimonSequence(simonSequence) {
	// console.log(simonSequence);
	// console.log(simonSequence.length);
	if (i < simonSequence.length) {
		if (simonSequence[i] == "purple") {
			buttonToFlash = btn0;
			buttonFlash(buttonToFlash);		
		} else if (simonSequence[i] == "blue") {
			buttonToFlash = btn1;
			buttonFlash(buttonToFlash);
		} else if (simonSequence[i] == "green") {
			buttonToFlash = btn2;
			buttonFlash(buttonToFlash);		
		} else if (simonSequence[i] == "pink") {
			buttonToFlash = btn3;
			buttonFlash(buttonToFlash);		
		} 
		i++;
		var timeoutId = setTimeout (function() {
			playSimonSequence(simonSequence);
			userSequence = [];
		}, 1000 );
	} else {
		click = 0;
	}
}


// works for user and simon
function buttonFlash (buttonToFlash) {
	// console.log("in Flash");
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function() {
		buttonToFlash.style.opacity = "0.5"
	}, 500 );
}

// Listeners call userPlays
// Adds user choice to array and calls function to flash button
// works
var userPlays = function() {
	var userPick = this.value;
	// console.log(userPick + "is userPick");
	
	if (userPick == "0") {
		buttonFlash(btn0);
		userPick = "purple";
		userSequence.push("purple");
		// console.log(userSequence);
	} else if (userPick == "1") {
		buttonFlash(btn1);
		userPick = "blue";
		userSequence.push("blue");
		// console.log(userSequence);
	} else if (userPick == "2") {
		buttonFlash(btn2);
		userPick = "green";
		userSequence.push("green");
		// console.log(userSequence);
	} else if (userPick == "3") {
		buttonFlash(btn3);
		userPick = "pink";
		userSequence.push("pink");
		// console.log(userSequence);
	} 
	console.log(userSequence + " is user array in userPlays");
	console.log(simonSequence + " is simonSequence in userPlays");
	compare(simonSequence, userPick, click);
}		

// Should get a match or no match for each user button push
// Only getting one match so far 
var compare = function(simonSequence, userPick, click) {
	console.log(simonSequence + " is in compare");
	console.log(click + " is click");
	if (userSequence[click] == simonSequence[click]) {
		console.log("Match in compare");
		click++;
		if (userSequence.length == simonSequence.length)
			console.log("Full match.");
	} else {
		alert("Game Over");
	}
}
	

btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
start.addEventListener("click", getSimonSelection, false);




