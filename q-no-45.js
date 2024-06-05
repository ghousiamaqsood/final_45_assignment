"use strict";
function CarInfo(manufacturer, modelName, options) {
    return Object.assign({ manufacturer: manufacturer, modelName: modelName }, options);
}
// call the function with required information and additional name-value pairs
let Car = CarInfo(`Toyota`, `GM-9999`, { color: ` Blue`, Year: 2023 });
// the returned object
console.log(Car);
