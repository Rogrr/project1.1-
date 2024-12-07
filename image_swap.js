"use strict";

$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		// Create a new Image object for each link and preload the image
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		// Get the link that was clicked
		const link = evt.currentTarget;

		// Fade out the current image and caption over 1 second
		$("#image, #caption").fadeOut(1000, () => {

			// Callback function: After fade out, update the image source and caption

			// After fading out, update the image source to the one in the clicked link
			const imageURL = $(link).attr("href");
			$("#image").attr("src", imageURL);

			// Update the caption text to the title of the clicked link 
			const caption = $(link).attr("title");
			$("#caption").text(caption);

			// Fade in the new image and caption over 1 second
			$("#image, #caption").fadeIn(1000); 

		})
	
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready






// 1. Open the HTML, CSS, and JavaScript files in the provided zip file: (this include an image and thumbnail folder containing all the images needed. )
// Review the script tags in the HTML file to see that this application doesn’t use the slim version of the jQuery file. That way, the jQuery effects are available to this application.

	// it is using the slim version of JQuery ,  Change to full version . 

// 2. Review the code in the JavaScript file to see that it’s identical to the code for the Image Swap application in chapter 8. Now, run this application to see how it works.
    // just like the code from the last assignment, uses arrow functions though, and jquery.


// 3. Add statements to the JavaScript file that fade the caption and image out over a duration of one second.

	// use the fade out , fade in method


// 4. Modify the statements that display the new caption and image so the caption and image are faded in over a duration of one second. Then, run the application to see that this doesn’t work the way you might expect. Instead, the new caption and image are displayed and then faded out and back in.


// my when i click on the image its displayed in a new window i think i need to prevent default in the wrong location, I figure i have some syntax errors, ok i got it working but it is still loading fading out , then fades in. 

// 5. Add a callback function to the statement that fades out the image. Then, move the statements that display the new caption and image within this function. Now, the old caption and image should fade out and the new caption and image should fade in.


// had class syntax error added , flow is preload images on load --> listen for click --> on click get link --> fade out image --> after fade out change img source/caption to click link -->  Use updated caption --> Fade in --> cancel default action of link (leaving page) --> move focus to first thumbnail--> end 

// 6. After you get this working, you will add it as a 4th page for your project that you will integrate the image swap application into. You can use the existing images.


// 7. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your site. Make sure you test it before submitting the link. Make sure I can navigate to each page from your main menu that should
// be located on all pages. At this stage you should have a 4 page site with a consistent look and layout for all pages.