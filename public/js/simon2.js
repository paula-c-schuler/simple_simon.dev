$(document).ready(function() {
	// alert("ready");


});

var minNumber = 0;
var maxNumber = 3;
var buttons = ["0", "1", "2", "3"];


// get random number for Simon's sequence
function randomNumberFromRange(min,max)
{
    var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    console.log(randomNumber);
    return randomNumber;
}
var randomNumber = randomNumberFromRange(minNumber, maxNumber);
console.log(randomNumber + " is outside function");






function changeButton(randomNumber) {
	buttons.foreach(function(i = 0; i < buttons.length; i++) {
		if (buttons.[0] == randomNumber) {
			$("#green").animate({opacity: ".5"}, 2000);
		} else if (buttons.[1] == randomNumber) {
			$("#red").animate({opacity: ".5"}, 2000);
		} else if (buttons.[2] == randomNumber) {
			$("#blue").animate({opacity: ".5"}, 2000);
		} else if (buttons.[3] == randomNumber) {
			$("#yellow").animate({opacity: ".5"}, 2000);
		} 
	});
}


function buttonFlash (buttonToFlash){
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function(){
	buttonToFlash.style.opacity = "0.5"
	},800);
}

