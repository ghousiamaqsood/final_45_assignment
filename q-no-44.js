"use strict";
// Define a function with a rest parameter that accept items arugment representing our sadwiches
function makeSadwiches(...items) {
    console.log("\nMaking a sandwich with following items: \n");
    items.forEach(Singleitem => console.log(Singleitem));
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of aeguments
makeSadwiches("Chicken", "Cheese", "Mayo");
makeSadwiches("Bread", "chicken", "vegetable", "butter", "cheese");
makeSadwiches("Chicken", "Cheese", "Mayonnaise", "kechup");
