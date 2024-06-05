"use strict";
// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_The(magicians) {
    return magicians.map(name => `The ${name}`);
}
// define an array of magiciane names
let magicians_names = ["Harry Black Stone", "Siegfried", "David Blaine"];
// Making a copy of Orignal array through . slice() function
let copy_magician_names = magicians_names.slice();
// Modify the copyed array to include "The with thier names
let copy_The_magicians = make_The(copy_magician_names);
// show both array original and copied
// original
console.log("Original Array\n");
show_magicians(magicians_names);
// copied
console.log("\nCopied Array\n");
show_magicians(copy_The_magicians);
