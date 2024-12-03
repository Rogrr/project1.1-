// Enable strict mode
"use strict";



// 1. Open the zip file provided. Since you will use your own images I do not provide them.
// This zip contains an empty JavaScript file named image_gallery.js (You can add your code to this file), an index and a css file. I would suggest getting it working before adding to a new page on your site but this is entirely up to you.



// 2. In the JavaScript file, add an event handler for the ready() event method.

// when page loads the ready () is triggered. 
$(document).ready(function() {
    console.log("DOM fully loaded."); 
  
    // Use the each() method to run a function for each <a> element in the unordered list of items.
    // Preload images by looping through each <a> tag inside #image_list
    $("#image_list a").each( function(index, element) {
        
    // Then, add jQuery code that gets the URL and caption for each image and preloads the image. 
        
        // Get the image URL from the href attribute of the <a> element
        const url = $(element).attr("href") 

        // Get the image caption from the title attribute of the <a> element
        const caption =  $(element).attr("title");  
       
        // load the image short form --- long form  for reference -->   const image = document.createElement("img");   
        const image = new Image();
      
        // set the image source to preloads image 
        image.src = url; 

        // Create a message string with the index and description 
        const imageNumber = index + 1;  // Add 1 to make the index human-readable
        const message = "Preloaded image " + imageNumber + ":";

        //  Log the message along with the URL and caption
        console.log(message, url, "Caption:", caption);

    });

    // Add an event handler for the click() event method of each link.

    // The jQuery code for this event handler should display the image and caption for the link that was clicked. In addition, it should use the evt parameter to cancel the default action of the link.

    $("#image_list a").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
    
     // Get the URL and caption for the clicked link
     const url = $(this).attr("href");
     const caption = $(this).attr("title");

    //  update the display image and caption
    // Change the src of the main image
    $("#image").attr("src", url); 
    // Update the caption text
    $("#caption").text(caption); 
    });

    // focus on the first link when the page loads
    $("#image_list a:first").focus();
});

// In this exercise, you’ll develop an Image Gallery application that displays different images when the user clicks on the links at the top of the page. This works like the Image Swap application of figure 8-14.


// 1. Open the zip file provided. Since you will use your own images I do not provide them.
// This zip contains an empty JavaScript file named image_gallery.js (You can add your code to this file), an index and a css file. I would suggest getting it working before adding to a new page on your site but this is entirely up to you.


// 2. In the JavaScript file, add an event handler for the ready() event method.

// 3. Use the each() method to run a function for each <a> element in the unordered list of items. 
// Then, add jQuery code that gets the URL and caption for each image and preloads the image. 
// You can get the URL from the href attribute of the <a> element, and you can get the caption from the title attribute.



// 4. Add an event handler for the click() event method of each link. 
// The function for this event handler should accept a parameter named evt. The jQuery code for this event handler should display the image and caption for the link that was clicked. In addition, it should use the evt parameter to cancel the default action of the link.



// 5. Add a jQuery statement that moves the focus to the first link on the page when the page is loaded.

// 6. After you get this working, you will add it as a 3rd page for your project with your own images.

// 7. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your site. Make sure you test it before submitting the link. Make sure I can navigate to each page from your main menu that should be located on all pages. At this stage you should have a 3 page site with a consistent look and layout for all pages.
