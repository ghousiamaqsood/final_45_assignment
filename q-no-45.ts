interface Car{

   manufacturer: string;
   modelName : string;
   [key: string]:any; //Allow any additional Properties

      
   function CarInfo (manufacturer: string, modelName: string, options: Partial <Car>): Car {
   
   
 return{
   manufacturer: manufacturer,
   modelName : modelName,
   ... options
 };
 
 


   }

// call the function with required information and additional name-value pairs
let Car = CarInfo(`Toyota`,`GM-9999`,{color:` Blue`,Year: 2023});

// the returned object
console.log(Car);




