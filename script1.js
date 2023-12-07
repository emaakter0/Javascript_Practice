function calculate(){

var feesPerCourse = parseFloat(prompt("Enter Fees per Course:"));
var totalCoursesRegistered = parseInt(prompt("Enter Total Courses Registered:"));

var discount = 0;
var libraryFees = 0;

var totalFees = feesPerCourse * totalCoursesRegistered;


if (totalFees > 50000 && totalCoursesRegistered > 5) {
  discount = 0.10; // 10% discount
  libraryFees = 5000;
} else if (totalFees > 40000 && totalCoursesRegistered > 4) {
  discount = 0.05; // 5% discount
  libraryFees = 4000;
} else {
  discount = 0.02; // 2% discount
  libraryFees = 2000;
}

var totalPayableFees = totalFees - (totalFees * discount) + libraryFees;

document.getElementById("result").textContent = `Total Payable Fees:${totalPayableFees}`;

}