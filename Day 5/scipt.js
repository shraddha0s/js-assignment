let x=(prompt("Enter Number"));
console.log(Math.sign(x));
var value = Math.abs(-1);
console.log("First Test Value : " + value );
let arr=[0,1,2,3,4,5,6,7,8,9];
console.log("Array",arr);
//OddS
let odds = arr.filter(n => n%2)

console.log("Odd",odds);


//Cube
let cube1=arr.map(function(el){
    return el*el*el;
})
console.log("Cube",cube1);






