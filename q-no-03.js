#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let persoName = "Maqsood ahmed";
console.log("Lowercase: " + persoName.toLowerCase());
console.log("uppercase: " + persoName.toUpperCase());
console.log(persoName.replace(/\b\w/g, (char) => char.toUpperCase()));
