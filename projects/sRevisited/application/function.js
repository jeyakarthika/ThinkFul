/*---------------------------------------------------------------------------------

	Project Name: sRevisited
	Project Description: A Thinkful 37Signals Clone Project Revisited
	File Name: function.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 2.0.0
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	/*--- Day of the Week Animation Section ---*/
	var today = new Date();
	var weekdays = new Array("Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday");
	var day = weekdays[today.getDay()];
	$('#happyday').append("Happy "+day+".");
	

	/*--- Header Hover Animation Section ---*/
	var $hoveredBox = $('section .product-box');

	//When hovered on..
	$hoveredBox.mouseenter( function(e) {
		var $target = $(this).attr('id');
		hovereffect(e, $target);
	});
	//When hovered off..
	$hoveredBox.mouseleave( function(e) {
		var $target = $(this).attr('id');
		hovereffect(e, $target);
	});

});

/*---  What should happen on hover ---*/
function hovereffect(event, $target) {

	event.preventDefault();

	if ($('.hidden').hasClass($target)) {
		hideToggle($target);
	};

	return true;
}


/*--- toggling the class hide ---*/
function hideToggle($target) {

    $('.default, .'+ $target).toggleClass("hide");
	
	return true;
}