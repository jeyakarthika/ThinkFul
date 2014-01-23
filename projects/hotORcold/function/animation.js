/*---------------------------------------------------------------------------------

	Project Name: hotORcold
	Project Description: A Thinkful Hot or Cold Project Revisited
	File Name: animation.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 1.0.0
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	/*--- Generate Random Number ---*/
	var randomNumber = generateNumber();
	var guessFlag = true;
	var guessCount = 0;
	var userChoice;

	/*--- On Submit ---*/
	$("form").submit(function(){
    	alert("Submitted");
    	/*--- Prompt for User's Guess ---*/
		do {
			userChoice = getChoice();
			guessCount++;
			guessFlag = checkChoice(userChoice);
			if (!guessFlag) {
				guessFlag = checkTemparature(Math.abs(randomNumber - userChoice));
			};
		} while(guessFlag);

  	});
	
	

	console.log("You needed " + guessCount + " guesses for that!!");

	/*--- Generate Random Number ---*/
	function generateNumber() {

		var generatedNumber = Math.floor((Math.random()*100)+1);
		console.log("Generated Random Number = "+ generatedNumber);

		return generatedNumber;
	}

	/*--- Prompt for User's Guess ---*/
	function getChoice() {
		var userChoice = prompt("Guess the Number","Your Guess");
		console.log("User Choice = "+ userChoice);
		return userChoice;
	}

	/*--- Check if the User's Guess meets the rules---*/
	function checkChoice(userChoice) {
		if (isNaN(userChoice)) {
			console.log("Please enter a number!");
			return true;
		} else if (userChoice < 1 || userChoice > 100) {
			console.log("Please enter a number between 1 and 100!");
			return true;
		}else if ($.trim(userChoice) == '') {
			console.log("Please enter your guess!");
			return true;
		} else {
			return false;
		};
	}

	/*--- Check the temparature for feedback ---*/
	function checkTemparature(guessDifference) {

		if (guessDifference == 0) {
			console.log("Yay! You guessed it!!");
			return false;
		} else if (guessDifference <= 5) {
			console.log("Your Guess is getting too hot!");
			return true;
		} else if (guessDifference <= 10){
			console.log("Your Guess is getting hot!");
			return true;
		} else if (guessDifference>=10 && guessDifference <= 20) {
			console.log("Your Guess is getting Warm!");
			return true;
		} else if (guessDifference>=20 && guessDifference <= 30) {
			console.log("Your Guess is getting cold!");
			return true;
		} else if (guessDifference>=30 && guessDifference <= 40) {
			console.log("Your Guess is getting very cold!");
			return true;
		} else {
			console.log("Your Guess is getting freezing cold!");
			return true;
		}

	}

});
