
// Enable strict mode
"use strict";

// create a const named $, equal to a arrow function  with the parameter placeholder name selector (its where I input a class, id , or name). 
// document.querySelector( ) is a js method that finds the first element in the dom that matches with the CSS 

const $ = selector => document.querySelector(selector);

// checks that page content loads then runs the process entry function on click.

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});


// Code the processEntry() function. It should get the user’s entry and make sure it’s a valid number greater than zero. If it isn’t valid, it should display an error message. If it is valid, 

function processEntry() {

    // get the string value from the input field income"
    const input = $("#income").value; 
    // parse the value 
    const income = parseFloat(input); 

    // checks that the input is a number , and checks to make sure that it is a number greater then zero.
    if (!isNaN(income) && income > 0 ) {
          // If it is valid, it should pass the value to a function named calculateTax(), which should return the tax amount. 
		  // That amount should then be displayed in the second text box. The focus should be moved to the first text box whether or not the entry is valid.
		  const tax = calculateTax(income); // Calculate tax based on income
		  $("#tax").value = tax.toFixed(2); // Display the tax rounded to 2 decimal places in the "tax" field
	  } else {
            // Otherwise, display an alert dialog box for the error. 
            alert("Error: Please enter a valid number greater then 0.")
        } 
    }
      
	/* Code the calculateTax() function. To start, just write the code for calculating the tax for
	any amount within the first two brackets in the table above. The user’s entry should be
	converted to an integer, and the tax should be rounded to two decimal places. To test
	this, use income values of 9875 and 40125, which should display taxable amounts of
	987.50 and 4,617.50. */

	function calculateTax(income) {
		// local variable of function
		let taxOwed = 0;
		
		// Bracket 1 ($0 to $9,875):
		if (income <= 9875) {
			// Tax is 10% of income for any amount in this range.
			taxOwed = income * 0.10;

		// Bracket 2 ($9,875 to $40,125):
		} else if (income <= 40125) {
			// Base tax of $987.50 (10% of $9,875) + 12% of the amount over $9,875 (income - 9875)*.12.
			taxOwed = 987.50 + ((income - 9875) * 0.12);

		//Bracket 3 ($40,125 to $85,525): 
		} else if (income <= 85525) {
			// Base tax of $4,617.50 + 22% of the amount over $40,125.
			taxOwed = 4617.50 + ((income - 40125) * 0.22);

		// Bracket 4 ($85,525 to $163,300):
		} else if (income <= 163300) {
			// Base tax of $14,605.50 + 24% of the amount over $85,525.
			taxOwed = 14605.50 + ((income - 85525) * 0.24);
		
		// Bracket 5 ($163,300 to $207,350): 
		} else if (income <= 207350) {
			// Base tax of $33,271.50 + 32% of the amount over $163,300.
			taxOwed = 33271.50 + ((income - 163300) * 0.32);

	    // Bracket 6 ($207,350 to $518,400):
		} else if (income <= 518400) {
			// Base tax of $47,367.50 + 35% of the amount over $207,350.
			taxOwed = 47367.50 + ((income - 207350) * 0.35);
		
		//Bracket 7 (Over $518,400): 
		} else {
			// Base tax of $156,235 + 37% of the amount over $518,400.
			taxOwed = 156235 + ((income - 518400) * 0.37);
		}
	
		console.log(taxOwed); // Output tax amount for debugging
		return taxOwed; // Return the calculated tax amount , which then is the return for the function calculate tax which then is plug into the variable tax, then rounded to 2 decimals in process function.
	}
