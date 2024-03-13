#!/usr/bin/node
//Should prints a square

const size = process.argv[2];

if (!isNaN(parseInt(size))) {
    const sizeInt = parseInt(size);
    for (let i = 0; i < sizeInt; i++) {
        console.log("X".repeat(sizeInt));
    }
} else {
    console.log("Missing size");
}

