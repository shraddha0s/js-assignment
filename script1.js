const student = {
    name: "helsinki",
    age:24,
    projects:{
 diceGame:"Two players dice game using JavaScript"
    }

}
//console.log(student.name);
//console.log(student.age);
console.log("Destructor");
const {name,age} =student;
console.log(name,age);
const {projects:{diceGame}}=student;
console.log(diceGame);