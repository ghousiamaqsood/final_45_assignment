// Define the function to show magicians names

function show_magicians (magicians: string []){
    magicians.forEach(name => console.log (name));
         
}


    function  make_The(magicians: string[]){
   return magicians.map(name =>`The ${name}`);
}

// define an array of magiciane names
let magicians_names = ["Harry Black Stone","Siegfried","David Blaine"]
// Call make_great function to modidied magicians names
let The_magicians = make_The(magicians_names);
// call show_magicians tht show modified list of magicians
console.log(The_magicians)