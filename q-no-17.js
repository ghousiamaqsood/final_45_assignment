"use strict";
// Creating a GUEDT liSt Arry
let guestList = ["tahir", "Fakir", "Aanabia", "fouzia"];
// Making Variable for those guest who cant come
let dontCome = guestList[0];
// Print the name of guest who cont come
console.log(dontCome, "can not came");
//  Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Abubakar");
// message print for Bigger Table
console.log("Good News! We have Found a Bigger Table For Dinner.");
// Adding a new guest at Starting index of array
guestList.unshift("Ghousia");
// Adding a new guest at ending index of array
guestList.push("UM E Romman");
//Get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle index of arry
guestList.splice(middleIndex, 0, "qeswa");
// print message for update list
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Asalam u Aliqum ${oneguest}, would you like to dinner with us`));
// inform that only tow guest can be invited for dinner
console.log("Unfortunately,the new dinner table wont arriveon time , so I can only tow guest to dinner with me");
// Useing while - loop to remove guests from the arrray until ojly tow names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry ,${removedGuest} I cant invite you to dinner`);
}
// Sending a invitatuions to the last 2 Guest on the list
console.log("invitation to the last 2 Guests ");
guestList.forEach(LastTow => console.log(`Luckly ${LastTow} ,you are still invited dinner`));
// Removing last tow Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
