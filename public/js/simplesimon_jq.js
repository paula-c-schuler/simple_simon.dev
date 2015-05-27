// Exercis 05.5 Simple Simon Game using jQuery
// To Be Completed
$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
    "use strict";

	var simonSequence = [];
	var userSequence = [];

	var btn0 = $("#purple");
	var btn1 = $("#blue");
	var btn2 = $("#green");
	var btn3 = $("#pink"); 
	var start = $("#start");
	var score = 0;

// Gets a random number and stores it in an array
	var getSimonSelection = function() {
		var simonSelection = Math.floor(Math.random() * 4);
		// console.log(simonSelection + " is Simons random");
		if (simonSelection == 0) {
			simonSequence.push("0");
		} else if (simonSelection == 1) {
			simonSequence.push("1");
		} else if (simonSelection == 2) {
			simonSequence.push("2");
		} else if (simonSelection == 3) {
			simonSequence.push("3");
		} 
		console.log(simonSequence + " is simonSequence");
		playSimonSequence(simonSequence);
	}

// Plays the buttons of Simon's array
	var playSimonSequence = function(simonSequence) {
		console.log(simonSequence + " is in playSimonSequence");

		for (var i = 0; i < simonSequence.length; i++) {
			// console.log([i]);
			if (simonSequence[i] == "0") {
				console.log(simonSequence[i]);
				$('#purple').fadeTo(1000, 1.0);
	    		$('#purple').fadeTo(1000, 0.5);
			} else if (simonSequence[i] == "1") {
				console.log(simonSequence[i]);
				$('#blue').fadeTo(1000, 1.0);
	    		$('#blue').fadeTo(1000, 0.5);
			} else if (simonSequence[i] == "2") {
				console.log(simonSequence[i]);
				$('#green').fadeTo(1000, 1.0);
	    		$('#green').fadeTo(1000, 0.5);
			} else if (simonSequence[i] == "3") {
				console.log(simonSequence[i]);
				$('#pink').fadeTo(1000, 1.0);
	    		$('#pink').fadeTo(1000, 0.5);
			} 
		}
	}

// Compares arrays, continues or ends the game
// Not working yet, issues with data type of simonSequence 
	var compare = function (userSequence, simonSequence) {
		var intervalCompare = setInterval(function () {
		console.log(userSequence + " is userSequence in compare");
		console.log(simonSequence + "is simonSequence in compare");
	    if (userSequence == simonSequence) {
	    	console.log("They Match");
	        clearInterval(intervalCompare);
	        console.log('All done');
	    } else if (userSequence != simonSequence) {
	    	console.log("no match");
	    	clearInterval(intervalCompare);
	    } else 
	    	clearInterval(intervalCompare);
	  
		}, 1000);
	}

// Event listeners remember user choice and remember in array, animates buttons
	$('#purple').click(function() {
	    userSequence.push("0");
	    console.log(userSequence + " is userSequence");
	    // playUserSequence(userSequence);
	    $(this).fadeTo(1000, 1.0);
	    $(this).fadeTo(1000, 0.5);

	    compare(userSequence, simonSequence);
	});

	$('#blue').click(function() {
		userSequence.push("1");
		console.log(userSequence + " is userSequence");
	    $('#blue').fadeTo(1000, 1.0);
	    $('#blue').fadeTo(1000, 0.5);
	    compare(userSequence, simonSequence);
	});
	$('#green').click(function() {
		userSequence.push("2");
		console.log(userSequence + " is userSequence");
		$('#green').fadeTo(1000, 1.0);
	    $('#green').fadeTo(1000, 0.5);
	    compare(userSequence, simonSequence);
	});
	$('#pink').click(function() {
		userSequence.push("3");
		console.log(userSequence + " is userSequence");
	    $('#pink').fadeTo(1000, 1.0);
	    $('#pink').fadeTo(1000, 0.5);
	    compare(userSequence, simonSequence);
	});
	



	$('#start').click(function() {
		getSimonSelection();
	});

});


