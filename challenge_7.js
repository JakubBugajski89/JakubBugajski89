/*Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:*/


const arrBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < arrBills.length; i++) {
    const calcTip = function (price) {
        const tip = (price > 50 && price < 300) ? price * .15 : price * .2;
        return tip;
    }
    tips.push(calcTip(arrBills[i]));

    const totalPrice = arrBills[i] + tips[i];
    totals.push(totalPrice);
}

console.log(tips);
console.log(totals);

let sum = 0;
const calcAverage = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const averageResult = sum / arr.length;
    console.log(averageResult);
    return averageResult;
}

calcAverage([2, 4, 6]);