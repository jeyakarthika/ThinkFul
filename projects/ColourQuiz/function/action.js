/*---------------------------------------------------------------------------------

	Project Name: todo
	Project Description: A Thinkful Shopping List App
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 2.0
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	var colour = [
		{ 
			name: 'IndianRed', 
			choices: ['DarkRed','FireBrick', 'Crimson', 'IndianRed', 'LightCoral'], 
			answer: 'IndianRed' 
		},
		{ 
			name: 'Pink', 
			choices: ['MediumVioletRed', 'DeepPink', 'HotPink', 'LightPink', 'Pink'], 
			answer: 'Pink' 
		},
		{ 
			name: 'Orange', 
			choices: ['Tomato', 'OrangeRed', 'DarkOrange', 'Orange', 'Gold'], 
			answer: 'Orange' 
		},
		{ 
			name: 'Moccasin', 
			choices: ['LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod'], 
			answer: 'Moccasin' 
		},
		{ 
			name: 'Purple', 
			choices: ['BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple'], 
			answer: 'Purple' 
		},
		{ 
			name: 'Green', 
			choices: ['SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen'], 
			answer: 'Green' 
		},
		{ 
			name: 'Dodger Blue', 
			choices: ['Aquamarine', 'Turquoise', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue'], 
			answer: 'Dodger Blue' 
		},
		{ 
			name: 'Chocolate', 
			choices: ['Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon'], 
			answer: 'Chocolate' 
		},
		{ 
			name: 'OldLace', 
			choices: ['Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory'], 
			answer: 'OldLace' 
		},
		{ 
			name: 'Silver', 
			choices: ['LightGrey', 'Silver', 'DarkGray', 'Gray', 'DimGray'], 
			answer: 'Silver' 
		},
	];

	var questionNumber = 0;
	var $question = $('#question');
	var $c1 = $('#choice1');
	var $c2 = $('#choice2');
	var $c3 = $('#choice3');
	var $c4 = $('#choice4');
	var $c5 = $('#choice5');
	var answer = "";
	var doCount = 0;
	var doneCount = 0;
	updateCount();
	announce('welcome');
	

	function newQuestion() {
		if (questionNumber < 10) {
			$question.text(colour[questionNumber].name);
			$c1.addClass(colour[questionNumber].choices[0]);
			$c2.addClass(colour[questionNumber].choices[1]);
			$c3.addClass(colour[questionNumber].choices[2]);
			$c4.addClass(colour[questionNumber].choices[3]);
			$c5.addClass(colour[questionNumber].choices[4]);
			answer = colour[questionNumber].answer;
			questionNumber++;
		} else {
			announce('exit');
			console.log("Quiz Completed");
		};
	};

	$('#choices').on('click', 'li',function(e){
		e.preventDefault();
		var selected = $(this).attr('class');
		if (selected == answer) {
			$(this).text('You got it!');
			updateCount(doCount++);
		} else {
			$(this).text('Sorry!').delay;
			updateCount(doneCount++);
		};
		$(this).text('');
		$('ul li').removeClass();
		newQuestion();
	});

	function updateCount() {
		$('#do').text(doCount);
		$('#done').text(doneCount);
		$('#total').text(doCount + doneCount);
	}

	function announce(mode) {
		switch(mode) {
			case 'welcome':
    			$(".overlay").fadeIn(1000);
				newQuestion();
				console.log('welcome');
				break;
			case 'exit':
				$(".overlay").fadeIn(1000);
				console.log('Exit');
				break;
		}
	}

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


/*
	var doCount = 3;
	var doneCount = 1;
	var x = 6; // can be any number
	var rand = Math.floor(Math.random()*x) + 1;
	updateCount();

	function setFocus() {
		$('#newItem').val('');
		document.getElementById("newItem").focus();
	}

	function updateCount() {
		$('#do').text(doCount);
		$('#done').text(doneCount);
		$('#total').text(doCount + doneCount);
	}
*/
