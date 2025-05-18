//forEach 
//
// output each element of an array the easy way
//

/* 

cpp:

for (type variableName : arrayName) {
  // code block to be executed
}

*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element) {
    console.log(element);
}

function double(element) {
    console.log(element * 2);
}