//Array of current users

let current_users =["Anabia","Ume Rooman","qeswa","Mubashra","Abubakar"]

//Array of new user

let new_user =["Anusha","Faiq","Fahad","subhan", "fouzia",]

// Loop through new_users to check for usernames avaiblity
 new_user. forEach(new_one_user =>{
    
 // Making a Condition for username already exist and save in our_condition variable
 let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()) 
    
   // print Different messages using If-Else statements
   
   if(our_condition){
   
    console.log(`Sorry ${new_one_user} is already taken!`)
   } else{ 
    console.log(`This Username ${new_one_user} is available`)
}
 })
