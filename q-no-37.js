"use strict";
// Making  a Function
function make_Shirt(size = "Large", printMessage = " I Love TypeScript") {
    console.log(`Creating a ${size} Shirt with the ${printMessage} prints on Shirt`);
}
// Calling a function with by-default values
make_Shirt();
// Calling a function now with Medium size and default message
make_Shirt("Medium");
// Calling a function now with small size and diffrent print message
make_Shirt("small", "I love Learning");
