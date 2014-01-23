/*---------------------------------------------------------------------------------

	Project Name: hotORcold
	Project Description: A Thinkful Hot or Cold Project Revisited
	File Name: animation.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 3.4
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){
	
	/*--- Variable Declarations ---*/
	var randomNumber;
	var guessFlag;
	var guessCount;
	var userChoice;
	var found = false;

	/*--- Creating a new Game ---*/
	newGame();

	/*--- On Submit ---*/
	$("form").submit(function(event){
		
		event.preventDefault();
    	
    	if (!found) {
			userChoice = $('#userGuess').val();
			console.log("User Choice = "+ userChoice);
			clearText();
			setFocus();
			guessFlag = checkChoice(userChoice);
			if (!guessFlag) {
				guessCount++;
				setCount(guessCount);
				$("ul#guessList").append("<li>" + userChoice + "</li>");
				guessFlag = checkTemparature(Math.abs(randomNumber - userChoice));
			};
		} else {
			setFeedback("You Won this game already! You need to start a new game.");
			//disableGuess();
		};
  	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Creat new game on click ---*/
  	$(".new").click(function(event){
  		event.preventDefault();
  		newGame();
  	});

	/*--- Create a New Game! ---*/
	function newGame() {
		guessFlag = true;
		guessCount = 0;
		found = false;
		$("ul#guessList li").remove();
		setFeedback("Make your Guess!");
		setCount(guessCount);
		randomNumber = generateNumber();
		setFocus();
		clearText();
	}

	/*--- Generate Random Number ---*/
	function generateNumber() {

		var generatedNumber = Math.floor((Math.random()*100)+1);
		console.log("Generated Random Number = "+ generatedNumber);

		return generatedNumber;
	}
	
	/*--- Set focus to the inputbox ---*/
	function setFocus() {
		document.getElementById("userGuess").focus();
	}

	/*--- Clear the text box ---*/
	function clearText() {
		$('#userGuess').val('');
	}

	/*--- Set the guess count ---*/
	function setCount(count) {
		$('#count').text(guessCount);
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
			setFeedback("No luck! I accept only numbers.");
			return true;
		} else if (userChoice < 1 || userChoice > 100) {
			setFeedback("Oops! Your guess has to be a number between 1 and 100!");
			return true;
		}else if ($.trim(userChoice) == '') {
			setFeedback("Please enter your guess!");
			return true;
		} else {
			return false;
		};
	}

	/*--- Check the temparature for feedback ---*/
	function checkTemparature(guessDifference) {

		if (guessDifference == 0) {
			setFeedback("Yay! You guessed it!!");
			found = true;
			return false;
		} else if (guessDifference <= 5) {
			setFeedback("Your Guess is getting too hot!");
			return true;
		} else if (guessDifference <= 10){
			setFeedback("Your Guess is getting hot!");
			return true;
		} else if (guessDifference>=10 && guessDifference <= 20) {
			setFeedback("Your Guess is getting Warm!");
			return true;
		} else if (guessDifference>=20 && guessDifference <= 30) {
			setFeedback("Your Guess is getting cold!");
			return true;
		} else if (guessDifference>=30 && guessDifference <= 40) {
			setFeedback("Your Guess is getting very cold!");
			return true;
		} else {
			setFeedback("Your Guess is freezing cold!");
			return true;
		}

	}

	/*--- Set the feedback ---*/
	function setFeedback(feedback) {
		$('#feedback').text(feedback);
	}

	/*--- Disable the submit button
	function disableGuess() {
    	document.getElementById("guessButton").disabled = 'true';
    	setFeedback("Submit disabled");
	} ---*/

});


