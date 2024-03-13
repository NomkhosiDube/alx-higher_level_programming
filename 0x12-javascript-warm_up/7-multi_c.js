#!/usr/bin/node
//Should prints 3 lines: (like 1-multi_languages.js) but by
// using an array of string and a loop

const arg = process.argv[2];

if (!isNaN(parseInt(arg))) {
    const x = parseInt(arg);
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}

