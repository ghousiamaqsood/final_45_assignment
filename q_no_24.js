"use strict";
// test for equqlity and inequality with string.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Enquality test:", "Ghousia Maqsood" === "Ghousia Maqsood");
console.log("Enquality test:", "Ghousia Maqsood" !== "Fouzia Maqsood");
// test lower case function
console.log("lower case test:", "Ghousia Maqsood".toLowerCase() === "ghousia maqsood");
console.log("lower case test:", "ghousia maqsood".toLowerCase() !== "Ghousia Maqsood");
//Numerical test equality and inequqlity greater than and less than.
//equality test
console.log("Equality test:", 1000 === 1000);
//inequality test.
console.log("Enquality test:", 10 !== 9);
//greater than  and equality test.
console.log("greater than test:", 1000 > 100);
console.log("greater than and equal to test:", 10 >= 10);
// less than and equality test.
console.log("greater than and equal to test:", 10 >= 10);
console.log("less than test:", 100 >= 10);
// Test using "and" and "or"operaator
console.log("And operator test:", true && true);
console.log("Or operator test:", true || false);
//test wether in array
const car = [1, 2, 3, 4];
console.log("test number", car.includes(1));
//test weather not in array 
const car1 = [1, 2, 3, 4];
console.log("test number", !car.includes(5));
