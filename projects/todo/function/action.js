/*---------------------------------------------------------------------------------

	Project Name: todo
	Project Description: A Thinkful Shopping List App
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 1.8
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	var doCount = 0;
	setFocus();

	$("form").submit(function(event){
		
		event.preventDefault();

		var newItem = $.trim($('#newItem').val());
		if (newItem == '') {
			setFocus();
		} else{
			addItem(newItem);
		};
		

	});

	/*--- Add the new item to the list and increase the count ---*/
	function addItem(item) {
		doCount++;
		console.log(doCount);
		$('#do').text(doCount);
		$("#list").prepend("<li>" + item + "</li>");
		console.log(item + " - added.");
		setFocus();
	}

	/*--- Clear and Set focus to the inputbox ---*/
	function setFocus() {
		$('#newItem').val('');
		document.getElementById("newItem").focus();
	}


});

