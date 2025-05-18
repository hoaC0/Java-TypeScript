// .map - method
// accepts a callback function and applies it to each element in the array

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);



function square(element) {
    return Math.pow(element, 2);
}

// console.log(squares);

const students = ["Morina", "Mira", "Mira", "Mira", "Mira"];
const uppdercaseStudents = students.map(uppercase);

function uppercase(element) {
    return element.toUpperCase();
}

// console.log(uppdercaseStudents);

const parts = students[0].split("");
console.log(parts);