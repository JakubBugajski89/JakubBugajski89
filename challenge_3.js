/* There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

const dolphinsFirstScore = 97;
const dolphinsSecondScore = 112;
const dolphinsThirdScore = 81;

const koalasFirstScore = 109;
const koalasSecondScore = 95;
const koalasThirdScore = 86;

const dolphinsAverageScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
const koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

if (dolphinsAverageScore > koalasAverageScore && (dolphinsAverageScore >= 100)) {
    console.log(`Dolphins average score is bigger`);
}
else if ((koalasAverageScore > dolphinsAverageScore) && (koalasAverageScore >= 100)) {
    console.log(`Koalas average score is bigger`);
}
else if ((dolphinsAverageScore === koalasAverageScore) && (dolphinsAverageScore >= 100) && (koalasAverageScore >= 100)) {
    console.log(`There is a draw. Scores are the same`);
}
else {
    console.log(`Noone wins`);
}







// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;

// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 123;

// const dolphinsAverageScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// const koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

// if ((dolphinsAverageScore > koalasAverageScore) && (dolphinsAverageScore > 100)) {
//     console.log(`Dolphins average score is bigger`);
// }
// else if ((koalasAverageScore > dolphinsAverageScore) && (koalasAverageScore > 100)) {
//     console.log(`Koalas average score is bigger`);
// }
// else {
//     console.log(`There is a draw. Scores are the same`);
// }






// const dolphinsFirstScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinsThirdScore = 89;

// const koalasFirstScore = 88;
// const koalasSecondScore = 91;
// const koalasThirdScore = 110;

// const dolphinsAverageScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// const koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphins average score is bigger`);
// }
// else if (koalasAverageScore > dolphinsAverageScore) {
//     console.log(`Koalas average score is bigger`);
// }
// else {
//     console.log(`There is a draw. Scores are the same`);
// }