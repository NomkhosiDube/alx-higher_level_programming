#!/usr/bin/node
//Should prints the addition of 2 integers

function add(a, b) {
    return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (!isNaN(parseInt(arg1)) && !isNaN(parseInt(arg2))) {
    console.log(add(parseInt(arg1), parseInt(arg2)));
} else {
    console.log("Missing or invalid arguments");
}

