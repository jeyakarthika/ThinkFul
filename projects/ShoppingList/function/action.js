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
	$('#list').on('click', 'div.delete', deleteItem);
	

	/*--- Delete Function ---*/
	function deleteItem(){
		console.log("Deleting...");
		if($(this).parent().hasClass("checked")) {
			doneCount--;
			updateCount();
			$(this).parent().slideUp('slow', function(){
				$(this).remove();
			});
			console.debug($(this).parent());
			return false;
		} else {
			doCount--;
			updateCount();
			$(this).parent().slideUp('slow', function(){
				$(this).remove();
			});
			console.debug($(this).parent());
			return false;
		};
    	
	}

	/*--- Check off Function ---*/
	function checkoff(){
		console.log("Checking Off...");
		if($(this).hasClass("checked")) {
			$(this).slideUp('slow', function(){
				$(this).slideDown('slow').prependTo('#list');
			});
			console.debug($(this));
			doCount++;
			doneCount--;
			updateCount();
		} else {
			$(this).slideUp('slow', function(){
				$(this).slideDown('slow').appendTo('#list');
			});			
			console.debug($(this));
			doneCount++;
			doCount--;
			updateCount();
		}
		$(this).toggleClass("checked");
		
	}

	/*--- Add the new item to the list and increase the count ---*/
	function addItem(item) {
		doCount++;
		updateCount();
		$('<li class="listitem"><span class="item">' + item + '</span><div class="delete"></div></li>').hide().prependTo('#list').slideDown('slow');
		console.log("You have now added " + item + "!");
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

