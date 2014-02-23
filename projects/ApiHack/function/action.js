/*---------------------------------------------------------------------------------

	Project Name: Through my lens
	Project Description: A Thinkful API Hack on Flickr
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 0.1
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){

	//Api Key generated for "Through my Lens" gallery
    var apiKey = 'cee36aa98fe80de8c8015e5135ce44d5';
    var photoID, photoURL, $image;

    //JSON request for my photos
    $.getJSON('http://api.flickr.com/services/rest/?&method=flickr.people.getPhotos&api_key=' + apiKey + '&user_id=97971741@N08&format=json&jsoncallback=?',
    function(data){

                	//Looping through each photo in the retrieved data
                    $.each(data.photos.photo, function(i,item){

                    	//get the photo id
                    	photoID = item.id;
                    	console.log(photoID);

                    	//create the photo url
                    	//var photoURL = 'http://www.flickr.com/photos/jeyakarthika/'+photoID+'/';
                    	photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_z.jpg';

                    	//create the image html structure
                        $image = $('<a href="'+photoURL+'"><img src="'+photoURL+'" /></a>');

                        //add the image to the DOM
                        $image.appendTo('#image-container');

                    });

                    $("#image-container").justifiedGallery({
                    		'rowHeight' : 160, 
							'fixedHeight' : true,
							'captions' : false,
							'target' : '_blank',
							'margins' : 2
                    });

    });
	
});