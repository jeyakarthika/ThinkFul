/*---------------------------------------------------------------------------------

	Project Name: todo
	Project Description: A Thinkful Shopping List App
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 1.8
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	var doCount = 3;
	var doneCount = 1;
	updateCount();

	setFocus();
	$('#list').sortable();

	$("form").submit(function(event){
		
		event.preventDefault();

		var newItem = $.trim($('#newItem').val());
		if (newItem == '') {
			setFocus();
		} else{
			addItem(newItem);
		};
		

	});

	/*--- Check off the items ---*/
	$('#list').on('click', 'li', function() {
		$(this).toggleClass("checked");
		if($(this).hasClass("checked")) {
			$('#list').append(this);
			doCount--;
			doneCount++;
			updateCount();
		} else {
			$('#list').prepend(this);
			doneCount--;
			doCount++;
			updateCount();
		}
		
	});

	/*--- Delete the item ---*/
	$('#list li').on('click', '.delete', function(e){
		e.preventDefault();
		if($(this).parent().hasClass("checked")) {
			doneCount--;
			updateCount();
		} else {
			doCount--;
			updateCount();
		};
    	$(this).parent().remove();
	});

	/*--- Add the new item to the list and increase the count ---*/
	function addItem(item) {
		doCount++;
		updateCount();
		$("#list").prepend('<li><span class="item">' + item + '</span><a href="index.html" class="options box delete"></a></li>');
		console.log(item + " - added.");
		setFocus();
	}

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

