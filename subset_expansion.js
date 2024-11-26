// Enable strict mode
"use strict";


// 1. Open the HTML, CSS, and JavaScript files in the provided zip file: Then, run the application to see that the first paragraph of text is displayed for each topic, along with a link that lets you display additional text. Note, however, that the links don’t work.

// we good Confirmed 

// 2. Review the HTML. Note that each topic consists of two div elements followed by an <a> element. Also, note that a class named “hide” is assigned to the second div element of each topic. Then, review the style rule for this class.

// confirmed 

// 3. In the JavaScript file, add an event handler for the ready() event method.

$(document).ready(function() {
    // 4. Within the ready() event method, code an event handler for the click() event method of the <a> elements. Note: you dont want all the A events just whats in the body might have to adjust later
    // even is a parameter to be used later
    $("#jdom a").click(function(event) {

    // This event handler should start by preventing the default action of the link  and storing the clicked link in a constant. 

        // Prevent the default action of the link (so it doesn't navigate), .preventDefault() is a method
        event.preventDefault();

        // Store the clicked <a> element in a constant, $(this) Refers to the specific <a> element that was clicked it is a standa way to reference elements triggered by event.
        const clickedLink = $(this);

    // Then, it should use the toggleClass() method to add or remove the “hide” class from the div element above the link element that’s clicked depending on whether that class is present.

        // Find the div element above the clicked <a> link using .prev method
        const toggleClassDiv = clickedLink.prev("div");


        // Toggle the "hide" class on the div above the clicked link using toggleClass method
        toggleClassDiv.toggleClass("hide");

         // Change the text of the link based on whether the div is hidden to show more or showless 
         if (toggleClassDiv.hasClass("hide")) {
            clickedLink.text("Show more");
        } else {
            clickedLink.text("Show less");
        }
    });
});




// 5. Complete the click() event handler by testing if the div element above the current link element has the “hide” class. If it doesn’t, change the text for the link to “Show less”. If it does, change it back to “Show more”.

// good now I gotta see if it work in the boot strap page cause there more a elements


// 7. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your application. Make sure you test it before submitting the link. Make sure I can navigate to each page from your main menu that should be located on both pages.