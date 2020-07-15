console.log("String Functions");

let str1="This is javascript Program for string function.It is web application";
console.log('Length',str1.length);

console.log('LowerCase :',str1.toLowerCase());
console.log('UpperCase :',str1.toUpperCase());
console.log('Substring :',str1.substring(0,6));
console.log('replace :',str1.replace('javascript','java'));
var a=str1.indexOf("is");
console.log('indexOf :',a);
console.log('lastindexOf :',str1.lastIndexOf("is"));

console.log("Array");
var cars = ["Alto", "Swift", "BMW"];
console.log("Create Array :",cars);
console.log("Reverse Array :",cars.reverse());
console.log("Array or not :",Array.isArray(cars));