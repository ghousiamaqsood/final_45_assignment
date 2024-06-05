#!/usr/bin/env node
let persoName:string = "Maqsood ahmed";
console.log("Lowercase: " + persoName.toLowerCase());
console.log("uppercase: " + persoName .toUpperCase());
console.log(persoName.replace(/\b\w/g,(char) => char.toUpperCase()));