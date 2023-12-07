function calculate(){
var age = parseInt(prompt("Enter Age:"));
var totalCoursesCompleted = parseInt(prompt("Enter Total Courses Completed:"));


var scholarshipAmount = 3500;

if (age > 25 || totalCoursesCompleted > 35) {
  scholarshipAmount = 20000;
} else if (age > 20 || totalCoursesCompleted > 25) {
  scholarshipAmount = 15000;
}

document.getElementById("result").textContent = `Scholarship Amount: ${scholarshipAmount}`;
}