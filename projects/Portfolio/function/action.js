/*---------------------------------------------------------------------------------

	Project Name: Portfolio
	Project Description: A ThinkFul Portfolio Site
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 0.1
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	//page slide to reveal modal navigation
	$(".open").pageslide({direction: "left", modal: true}); 
	
	//full page sliders
	$.fn.fullpage({
				slidesColor: ['#FECC00', '#69C673', '#FC575F', '#33C1C9'],
				slidesNavigation: true
			});

	
});

