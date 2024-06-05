// Making a Array of Countries and print its Orignal Order
let countriesTovisit:string[] =["SaudiAriba","Phlaistin","TurkkI","Iraq"];
console.log ("Orignal orde", countriesTovisit);

// Print the Array Alphabtical order without modiying the Actual Array List
console.log ("AlphabeticalOrder:",[...countriesTovisit].sort());

// Show that the Array is still in its Origianl order
console .log ("Still in Orginal Order:",countriesTovisit);

// print the Array i the Reversed order without modifying the Actual Array List
console.log("Revers Order:",[... countriesTovisit].reverse());

// Show that the array is still in its Orgianl order
console.log("Still in Orginal Order:",countriesTovisit);

// We have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed:",countriesTovisit)

//print the array to show that it's back to its orginal order
console.log("Back to Orginal Order:",countriesTovisit.reverse());

//print the array to show that its order have been changed i Alphabetical order Now
console.log("Sored in Alpabetical order:",countriesTovisit.sort());

// print have changed again the orignal Array order Now in reverse order again
console.log("Orginal Array Reversed Again:",countriesTovisit.reverse());