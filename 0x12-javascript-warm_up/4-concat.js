#!/usr/bin/node
//Should prints two arguments passed to it, in the following format: “ is ”

const [arg1, arg2] = process.argv.slice(2);

console.log(`${arg1} is ${arg2}`);
