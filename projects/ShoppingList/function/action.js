/*---------------------------------------------------------------------------------

	Project Name: todo
	Project Description: A Thinkful Shopping List App
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 1.8
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	var doCount = 2;
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
	$('#list').on('click', 'li.listitem', checkoff);

	/*--- Delete the item ---*/
	$('li.listitem').on('click', 'a.delete', deleteItem);

	

	/*--- Delete Function ---*/
	function deleteItem(){
		console.debug("delete");
		if($(this).parent().hasClass("checked")) {
			doneCount--;
			updateCount();
			//$(this).parent().fadeOut('slow', function(){
				$(this).parent().remove();
			//});
			console.debug("DELETE PARENT" + $(this).parent());
			return false;
		} else {
			doCount--;
			updateCount();
			//$(this).parent().fadeOut('slow', function(){
				$(this).parent().remove();
			//});
			console.debug($(this).parent());
			return false;
		};
    	
	}

	/*--- Check off Function ---*/
	function checkoff(){
		console.debug("Check");
		$(this).toggleClass("checked");
		if($(this).hasClass("checked")) {
			$('#list').append(this);
			console.debug("CHECK" + $(this));
			doCount--;
			doneCount++;
			updateCount();
		} else {
			$('#list').prepend(this);			
			console.debug($(this));
			doneCount--;
			doCount++;
			updateCount();
		}
		
	}

	/*--- Add the new item to the list and increase the count ---*/
	function addItem(item) {
		doCount++;
		updateCount();
		$("#list").prepend('<li class="listitem"><span class="item">' + item + '</span><a href="#" class="delete"></a></li>');
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

