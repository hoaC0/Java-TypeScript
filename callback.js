// callback 
// function as an argument, that can be called later / initialized later
// called via "callback();" in the function

function hallo(callback, name) {
    console.log("Hello ");
    callback(name);
}

function name1(name) {
    console.log(name);
}

function name2(name) {
    console.log(name);
}

hallo(name1, "Morina");