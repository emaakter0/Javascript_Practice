// function calculateGrade(totalMarks) {
var totalMarks = parseFloat (prompt("Enter the total marks of the course:"));

if (totalMarks >= 90) {
    document.write("Grade: A");
} else if (totalMarks >= 85) {
    document.write("Grade: A-");
} else if (totalMarks >= 80) {
    document.write("Grade:B+");
} else if (totalMarks >= 75) {
    document.write("Grade: B");
} else if (totalMarks >= 70) {
    document.write("Grade: B-");
} else if (totalMarks >= 65) {
    document.write("Grade: C+");
} else if (totalMarks >= 60) {
    document.write("Grade: C");
} else if (totalMarks >= 55) {
    document.write("Grade: C-");
} else if (totalMarks >= 50) {
    document.write("Grade: D+");
} else if (totalMarks >= 45) {
    document.write("Grade: D");
} else {
    document.write("Grade: F");
}
// }
