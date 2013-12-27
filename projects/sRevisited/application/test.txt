
$(document).ready(function(){

	var $hoveredBox = $('section .product-box');
	
	$hoveredBox.mouseenter( function(e) {
			console.log("mouseenter");
			var $target = $(this).attr('id');
			hovereffect(e, $target);
			console.log("returned back to mouse enter function");
    });

    $hoveredBox.mouseleave( function(e) {
			console.log("mouseleave");
			var $target = $(this).attr('id');
			hovereffect(e, $target);
			console.log("returned back to mouse leave function");
    });

});

/*---  What should happen on hover ---*/
function hovereffect(event, $target) {

	event.preventDefault();
	console.log("Entered hovereffect function");

	console.log("target var-- "+ $target);

	if ($('.hidden').hasClass($target)) {
		console.log("entered hovereffect function if");
		hideToggle($target);
		console.log("returned back to hovereffect function if");
	};

	console.log("returning back to mouse event function");
	return true;
}

/*--- toggling the class hide ---*/
function hideToggle($target) {
    
    console.log("hide toggle target var-- "+ $target);

	$('.default').toggleClass("hide");
	$('.' + $target).toggleClass("hide");
	
	console.log("returning back to hovereffect function if");
	return true;
}