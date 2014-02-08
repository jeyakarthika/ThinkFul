/*---------------------------------------------------------------------------------

	Project Name: todo
	Project Description: A Thinkful Shopping List App
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 2.0
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	var doCount = 3;
	var doneCount = 1;
	updateCount();

	/*--- Clear and Set focus to the inputbox ---*/
	function setFocus() {
		$('#newItem').val('');
		document.getElementById("newItem").focus();
	}

	/*--- Update the DO, DONE & TOTAL counts ---*/
	function updateCount() {
		$('#do').text(doCount);
		$('#done').text(doneCount);
		$('#total').text(doCount + doneCount);
	}
});

