buttons = document.getElementsByClassName("buttons");
var simonSequence = [];
var userSequence = [];
var interval = 1000;
var delay = 2000;
var round = 0;
var roundLength = 0;

var btn1 = document.getElementById("box1");
var btn2 = document.getElementById("box2");
var btn3 = document.getElementById("box3");
var btn4 = document.getElementById("box4");

DOES TIME CONTROL THIS OR THE BUTTON PUSH? 

//Get a random-generated button selection, 
//it turns the button color.
//button listener hears a button.
//if user presses same sequence,
//get another added randomthat turns the button color
//if user presses same sequence,
//and so on
//else if false
//prompt to reset and play again
//if no response in 10 seconds, then reset all data

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval); 


var simonSequence = function (randomButton){
	var simonBox = Math.floor(Math.random() * (4 - 1)) + 1;
	console.log(simonBox + " is random number");
	buttons[i].style.opacity == 

}
	//changes opacity of chosen button 1 second
	//changes it back 
	// adds choice to array of the choices


confirm("It's Simple Simon! Do you want to play? Click OK!");
	if (true){
		simonSequence();
	} else alert("Bummer ...")

var userListener = function (){
	if 
	userSequence.push(this.value);
	console.log(userSequence + " is userSequence");
}
btn1.addEventListener("click", userListener, false);
btn2.addEventListener("click", userListener, false);
btn3.addEventListener("click", userListener, false);
btn4.addEventListener("click", userListener, false);


// document.getElementById("play").addEventListener("click", FUNCTION, false);





// function compareSelection(simonSelection,userSelection){
// 	on each iteration
// 	index each and match them up
// 	if (true) {

// 	};
// }
// function continue(simonSequence){}


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






