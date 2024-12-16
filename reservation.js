"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // Move focus to the “Arrival date” text box when the page loads
    $("#arrival_date").focus();

    // Define the custom pattern method for the arrival_date field
    $.validator.addMethod("pattern", function (value, element, regex) {
        return this.optional(element) || regex.test(value);
    }, "Please enter a valid value.");

    // Set up form validation
    $("#reservation_form").validate({
        rules: {
            arrival_date: {
                required: true,
                pattern: /^\d{2}\/\d{2}\/\d{2}$/ // Custom date format (00/00/00)
            },
            nights: {
                required: true,
                digits: true, // Check if it's numeric
                min: 1 // Ensure it is a positive number
            },
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                pattern: /^\d{3}-\d{3}-\d{4}$/ // Match phone number like 999-999-9999
            }
        },
        messages: {
            arrival_date: {
                required: "Please enter an arrival date.",
                pattern: "Please enter a valid date in the format 00/00/00."
            },
            nights: {
                required: "Please enter the number of nights.",
                digits: "Please enter a valid number of nights.",
                min: "Number of nights must be at least 1."
            },
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            name: {
                required: "Please enter your name.",
                minlength: "Your name must be at least 2 characters long."
            },
            phone: {
                required: "Please enter your phone number.",
                pattern: "Please enter a valid phone number in the format 999-999-9999."
            }
        },

        // Function to place the error message in the appropriate span
        errorPlacement: function (error, element) {
            element.siblings("span.error").html(error);
        },

        // Submit handler for when the form is valid
        submitHandler: function (form) {
            // Form is valid, redirecting to response.html
            form.action = "response.html"; // Set the form action to the next page
            form.submit(); // Submit the form
        }
    });
});


	  

	// A value must be entered into each text box.

	// for arrival date should be numeric in the 00/00/00 format 

	// The number of nights must be numeric.

	// the error should be in the span text box 

	// The email address must match the pattern that’s provided.
	// Be sure to trim the entries and put them back into the controls regardless of whether
	// the entries are valid.

	// // Prevent form submission if validation fails
	// if (!isValid) {
	// 	event.preventDefault();
	// 	}
	// });

	// })
	
	


// Open the HTML, CSS, and JavaScript files in the provided zip file.
// Then, run the application and click the Submit Request button to see the page that’s displayed when the form is submitted to the server.

		// it send you to the response.hmtl no validation 

// 2. In the JavaScript file, note that the ready event handler contains the declaration for a constant named emailPattern that contains the pattern that will be used to validate the email address.
	// noted 

// 3. Code a statement that moves the focus to the “Arrival date” text box.
	// f$("arrival_date").focus();

// 4. Code an event handler for the submit event of the form. This event handler should

// validate the user entries. If any of the entries are invalid, the code should cancel the submission of the form. The validation is as follows:
// A value must be entered into each text box.
// The number of nights must be numeric.
// The email address must match the pattern that’s provided.
// Be sure to trim the entries and put them back into the controls regardless of whether
// the entries are valid.


// I spent way longer then i thought i needed too due to thinking that using jquery would be better, which it was just had to research and debug alot.



// 5. After you get this working, you will add it as a 5th page for your project that you will
// integrate the image swap application into. You can use the existing images.


// 6. Once all your files are completed you will upload them to a Github Pages repository and
// submit a link to your index page so I can test your site. Make sure you test it before
// submitting the link. Make sure I can navigate to each page from your main menu that should
// be located on all pages. At this stage you should have a 5 page site with a consistent look
// and layout for all pages
