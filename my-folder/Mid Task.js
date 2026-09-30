const studentName = "Nahid";
const marks = [80, 65, 90, 45, 70];

marks.push(55);

function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  return total;
}

function calculateAverage(total, subjectCount) {
  return total / subjectCount;
}

function getGrade(average) {
  if (average >= 80) {
    return "A+";
  } else if (average >= 70) {
    return "A";
  } else if (average >= 60) {
    return "B";
  } else if (average >= 50) {
    return "C";
  } else {
    return "F";
  }
}

function getResult(average) {
  if (average >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

function findHighestMark(marks) {
  let highest = marks[0];
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }
  return highest;
}

function countPassedSubjects(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      count++;
    }
  }
  return count;
}

const total = calculateTotal(marks);
const average = calculateAverage(total, marks.length);
const grade = getGrade(average);
const result = getResult(average);

console.log("Student Name: " + studentName);
console.log("Marks: " + marks);
console.log("Total: " + total);
console.log("Average: " + average);
console.log("Grade: " + grade);
console.log("Result: " + result);
console.log("Highest Mark: " + findHighestMark(marks));
console.log("Passed Subjects: " + countPassedSubjects(marks));
