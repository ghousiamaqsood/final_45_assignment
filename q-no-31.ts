
let names=("ali");


type abc = {}

interface ab {}



let UserName: any []= 
["MUHAMMAD AHMED", "MUHAMMAD KAMIL", "MUHAMMAD ASLAM", "MAQSOOD AHMED",78]

UserName = []

if (UserName.length === 0) {
    console.log("your Array in Empty We need to find some users!")

}
// Using ForEach Loop On Array

UserName.forEach(oneUser => {

    if (oneUser === "Admin") {
        console.log(`Hello sir ${oneUser},Did you reseived my project file?`);

    } else {
        console.log(`Hello sir ${oneUser},Thank you for logging in again.`);
    }

})
