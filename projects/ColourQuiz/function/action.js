/*---------------------------------------------------------------------------------

	Project Name: todo
	Project Description: A Thinkful Shopping List App
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 2.0
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	var questionNumber = 0;
	var $question = $('#question');
	var $c1 = $('#choice1');
	var $c2 = $('#choice2');
	var $c3 = $('#choice3');
	var $c4 = $('#choice4');
	var $c5 = $('#choice5');
	var answer = "";
	var named = 0;
	var missed = 0;

	var colours = {
		data: [
				{ 
					hue: 'pink', 
					shades: ['Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'red', 
					shades: ['IndianRed',	'LightCoral', 'Salmon',	'DarkSalmon', 'LightSalmon', 'Crimson',	'Red', 'FireBrick',	'DarkRed'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'orange', 
					shades: ['Coral', 'Tomato', 'OrangeRed', 'DarkOrange', 'Orange', 'Gold'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'yellow', 
					shades: ['Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'green', 
					shades: ['GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen', 'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'DarkSeaGreen'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'cyan', 
					shades: ['LightSeaGreen', 'DarkCyan', 'Teal', 'MediumAquamarine', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'CadetBlue'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'blue', 
					shades: ['SteelBlue', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'BlueViolet', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'purple', 
					shades: ['Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'brown', 
					shades: ['Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'white', 
					shades: ['White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'grey', 
					shades: ['Gainsboro', 'LightGrey', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black'],
					question: '',
					choices: [],
					answer: ''
				},
				{ 
					hue: 'all', 
					shades: ['IndianRed',	'LightCoral', 'Salmon',	'DarkSalmon', 'LightSalmon', 'Crimson',	'Red', 'FireBrick',	'DarkRed', 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed', 'Coral', 'Tomato', 'OrangeRed', 'DarkOrange', 'Orange', 'Gold', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen', 'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'DarkSeaGreen', 'LightSeaGreen', 'DarkCyan', 'Teal', 'MediumAquamarine', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue', 'SteelBlue', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'BlueViolet', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGrey', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black'],
					question: '',
					choices: [],
					answer: ''
				}
		],

		generate: function() {
			var rand, start, len = 0, flag = 0;
			var tempQ = {
				name: "",
				choices: [],
				answer: ""
			};
			while (len < colours.data.length) {
				rand = Math.floor(Math.random()*colours.data[len].shades.length);
				colours.data[len].question = colours.data[len].shades[rand];
				
				switch (rand) {
				case 0:
				  start = 0;
				  break;
				case 1:
				  start = 0;
				  break;
				case 2:
				  start = 0;
				  break;
				case 3:
				  start = 0;
				  break;	
				default:
				  start = rand - 4;
				  break;
				}

				while (flag < 5) {
					colours.data[len].choices[flag] =  colours.data[len].shades[start];
					flag++;
					start++;
				};
				flag = 0;

				colours.data[len].answer = colours.data[len].question;

				len++;
			};
		},

		init: function() {
			questionNumber = 0;
			answer = "";
			named = 0;
			missed = 0;
			updateCount();

  			$(".result").slideUp(500);

			for (var i = 1; i <= 12; i++) {
				mark(i, '#282828');
			};

  			$('#next').text('Next');
			$(".welcome").slideDown(500);
			colours.generate();
			newQuestion();
		},

		next: function() {
			updateCount();
			$(".result").slideDown(500);
			newQuestion();
		},

		exit: function() {
			updateCount();
			$(".result").slideDown(500);
		}

	};

	colours.init();
	

	function newQuestion() {
		if (questionNumber < 12) {
			$question.slideDown('slow').text(colours.data[questionNumber].question);
			$c1.slideDown('slow').addClass(colours.data[questionNumber].choices[0]);
			$c2.slideDown('slow').addClass(colours.data[questionNumber].choices[1]);
			$c3.slideDown('slow').addClass(colours.data[questionNumber].choices[2]);
			$c4.slideDown('slow').addClass(colours.data[questionNumber].choices[3]);
			$c5.slideDown('slow').addClass(colours.data[questionNumber].choices[4]);
			answer = colours.data[questionNumber].answer;

			questionNumber++;
		} else {
			questionNumber++;
		};
	};

	$('#choices').on('click', 'li', function(e){
		e.preventDefault();
		var selected = $(this).attr('class');
		if (selected == answer) {
			$('#feedback').text('You got it!');
			updateCount(named++);
			mark(questionNumber, answer);
		} else {
			$('#feedback').text('Sorry!');
			updateCount(missed++);
			mark(questionNumber, "#282828");
		};
		$(this).text('');
		$question.text('');
		$('ul li').removeClass();
		if (questionNumber <= 12) {
			colours.next();
		} else {
			colours.exit();
		};
	});

	function updateCount() {
		$('#qNumber').text((named+missed)+' / 12');
	}

	/*--- Mark the results ---*/
	function mark(qno, bg) {
		var $targetid = $('li#'+qno);
		$targetid.css("background-color", bg);
	}

  	/*--- Start Game ---*/
  	$("a.game").click(function(e){
  		e.preventDefault();
  		$(".welcome").slideUp(500);
  	});

  	$("#next").click(function(e){
  		e.preventDefault();
  		if (questionNumber > 13) {
  			colours.init();
  		} else if (questionNumber > 12) {
  			if (named == 12) {
  				$('#feedback').text('Awesome! You Win.');
  			} else{
	  			$('#feedback').text('Sorry! You lose.');
  			};
  			$('#next').text('Play Again?');
  			newQuestion();
  		} else {
  			$(".result").slideUp(500);
  		};
  	});

});



