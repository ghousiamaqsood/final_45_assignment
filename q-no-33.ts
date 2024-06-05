// Creating  a Array

let Number: number [] = [1, 2, 3, 4, 5, 6,7 ,8 ,9];

// Using For loop

for (let namber of Number) {
   
    let ordinalEnding: string;
    // Determine the ordinal ending based on the number

    if (   namber === 1){
        
          ordinalEnding ="st";
    

    }else if (namber ===2){
        ordinalEnding = "nd";
    
    
    
    }else if (namber ===3){
        ordinalEnding = "rd";
   }else{
    
    ordinalEnding = "th";
   }
   
   
//Print the number with its proper ordinal ending
console.log(`${namber} ${ ordinalEnding}`);

}


    


 


      

    
