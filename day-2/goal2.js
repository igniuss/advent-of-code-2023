const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
    input: fs.createReadStream('./day-2/data.txt'),
    output: process.stdout,
    terminal: false
});

let total = 0;
file.on('line', (line) => {
    let split = line.split(':');
    let index = Number.parseInt(split[0].substring("Game ".length));
    let games = split[1].split(";")
    let invalid = games.some(invalidGame);
    
    if(invalid == false) { 
        total += index 
        console.log(`${line} is possible! ${invalid}`)
    }
    // console.log(games);
});


file.on('close', () => {
    console.log(total);
})

const Colors = {
    red: 0,
    green: 1,
    blue: 2,
}

// R, G, B
const Limits = [12, 13, 14]
getData("3 blue, 4 red")
function getData(str) {
     // data is formatted as 3 blue, 2 red, 8 green
     let split = str.split(', ');
     let invalid = Object.keys(Colors).map(color => {
         return split.map(element => {
             let index = element.indexOf(color);
             if( index != -1) {
                 let number = Number.parseInt(element.substring(0, index - 1).trim());
                 if(Limits[Colors[color]] < number) {
                     return true;
                 }
             }
             return false;
         });
     })
     console.log(invalid);
     return invalid;
}
/**
 * 
 * @param {String} str 
 * @returns {Boolean} invalid
 */

function invalidGame(str) {
    // data is formatted as 3 blue, 2 red, 8 green
    let split = str.split(', ');
    let invalid = Object.keys(Colors).some(color => {
        return split.some(element => {
            let index = element.indexOf(color);
            if( index != -1) {
                let number = Number.parseInt(element.substring(0, index - 1).trim());
                if(Limits[Colors[color]] < number) {
                    return true;
                }
            }
            return false;
        });
    })
    console.log(invalid);
    return invalid;
}