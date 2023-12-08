function calculateGrade(totalMarks) {
    if (totalMarks >= 90) {
        return "Grade: A";
    } else if (totalMarks >= 85) {
        return "Grade: A-";
    } else if (totalMarks >= 80) {
        return "Grade: B+";
    } else if (totalMarks >= 75) {
        return "Grade: B";
    } else if (totalMarks >= 70) {
        return "Grade: B-";
    } else if (totalMarks >= 65) {
        return "Grade: C+";
    } else if (totalMarks >= 60) {
        return "Grade: C";
    } else if (totalMarks >= 55) {
        return "Grade: C-";
    } else if (totalMarks >= 50) {
        return "Grade: D+";
    } else if (totalMarks >= 45) {
        return "Grade: D";
    } else {
        return "Grade: F";
    }
}

// Get input from the user
var totalMarks = parseFloat(prompt("Enter the total marks of the course:"));

// Check if the entered total marks are valid
if (!isNaN(totalMarks)) {
    // Calculate and display the final grade
    var finalGrade = calculateGrade(totalMarks);
    document.write(finalGrade);
} else {
    document.write("Invalid input. Total marks should be a number.");
}
