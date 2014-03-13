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
	$(".open").pageslide({modal: true }); 
	
	//full page sliders
	$.fn.fullpage({
				slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['first', 'secondPage', '3rdPage', '4thpage', 'lastPage']
			});

	
});

