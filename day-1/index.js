const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
    input: fs.createReadStream('./day-1/data.txt'),
    output: process.stdout,
    terminal: false
});

const valuemap = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

const terms = Object.keys(valuemap);

let total = 0;

file.on('line', (line) => {

    let min = terms.map(term => {
        if (line.includes(term)) {
            return { term, index: line.indexOf(term) };
        }
    })
        .filter(n => n)
        .sort((a, b) => a.index - b.index)[0];

    let max = terms.map(term => {
        if (line.includes(term)) {
            return { term, index: line.lastIndexOf(term) };
        }
    })
        .filter(n => n)
        .sort((a, b) => b.index - a.index)[0];

    let n0 = valuemap[min.term];
    let n1 = valuemap[max.term];

    let num = Number.parseInt(String(n0) + String(n1));
    total += num;
});


file.on('close', () => {
    console.log(total);
})