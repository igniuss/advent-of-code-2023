const { input } = require('./input');

function parse(input) {
    return input.map((line) => {
        const regex = /Game (\d+): (.+)$/gm;
        const [, id, rest] = regex.exec(line);
        const picks = rest.split(/[;,] /);
        
        const selection = picks.map((pick) => {
            let [, num, color] = /(\d+) (\w+)/.exec(pick);
            return [parseInt(num), color];
        });

        return {
            id: parseInt(id),
            max: selection.reduce(
                (acc, [num, color]) => {
                    acc[color] = Math.max(acc[color], num);
                    return acc;
                },
                { red: 0, green: 0, blue: 0 }
            ),
        };
    });
}

const games = parse(input);

let solution = 0;
for (let { id, max } of games) {
    if (max.red <= 12 && max.green <= 13 && max.blue <= 14) {
        solution += id;
    }
}

console.log(solution);

let solution_2 = 0;
for (let { _, max } of games) {
	solution_2 += max.red * max.blue * max.green;
}

console.log(solution_2);