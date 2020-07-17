//let x=50;
var x=prompt();
console.log(x);
if(x>=50)
{
    console.log("Marks are 50 and grade is B");
}
else
{
  console.log("Failed");
}

var z=(x>=50 ? "Marks are 50 and grade is B":"Failed");
console.log(z);

// Set the student's grade
const grade = 50;

switch (true) {
    // If score is 70 or greater
    case grade >= 70:
        console.log("Marks are 70 and grade is A");
        break;
    // If score is 50 or greater
    case grade >= 50:
        console.log("Marks are 50 and grade is B");
        break;
    // If score is 35 or greater
    case grade >= 35:
        console.log("Marks are 35 and grade is C");
        break;
   
    // Anything 35 or below is failing
    default:
        console.log("Failed");
}