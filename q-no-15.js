"use strict";
let guestList = ["Fouzia", "Salma", "Ghousia", "fakir",];
let canNotcome = "ghousia";
console.log(canNotcome + ' ' + "can't attendthe dinner");
let person = "Fouzia";
guestList[guestList.indexOf("CanNotCame")] = person;
guestList.forEach(name => {
    console.log(`Dear,${name}you are invited to dinner!,`);
});
