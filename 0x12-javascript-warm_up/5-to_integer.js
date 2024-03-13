#!/usr/bin/node
//Should prints two arguments passed to it, in the following format: “ is ”

const arg = process.argv[2];

if (!isNaN(parseInt(arg))) {
    console.log(`My number: ${parseInt(arg)}`);
} else {
    console.log("Not a number");
}

