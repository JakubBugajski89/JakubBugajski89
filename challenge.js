/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27*/


// ----------------------------------------------------------------------
// const calcAverage = score => {
//     const averageFirstScore = score / 3;
//     const averageSecondScore = score / 3;

//     return averageFirstScore, averageSecondScore;
// }

// const checkWinner = function (avgDolhins, avgKoalas) {
//     const firstScore = calcAverage(avgDolhins);
//     const secondScore = calcAverage(avgKoalas);

//     if (firstScore >= (secondScore * 2)) {
//         console.log(`Dolphins wins ${firstScore} vs. ${secondScore}`);
//     } else if (secondScore >= (firstScore * 2)) {
//         console.log(`Koalas wins ${secondScore} vs. ${firstScore}`);
//     }
//     else {
//         console.log("Noone wins");
//     }
// }

// console.log(checkWinner(180, 84));
// --------------------------------------------------------------------------

const calcAverage = (a, b, c) => a + b + c / 3;

let scoreDolphins = 44 + 23 + 71;
let scoreKoalas = 65 + 54 + 49;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas wins ${avgKoalas} vs. ${avgDolphins}`);
    }
    else {
        console.log("Noone wins");
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = 85 + 54 + 41;
scoreKoalas = 23 + 34 + 27;
console.log(checkWinner(scoreDolphins, scoreKoalas));