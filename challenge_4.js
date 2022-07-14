/*Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430*/

const firstBill = 275;
const secondBill = 40;
const thirdBill = 430;

// const billPercentFirst = (15 / 100) * 275;
// const billPercentFirstTwo = (20 / 100) * 275;
// const firstBillSummary = billPercentFirst + firstBill;
// const firstBillSummaryTwo = billPercentFirstTwo + firstBill;

// const billPercentSecond = (15 / 100) * 40;
// const billPercentSecondTwo = (20 / 100) * 40;
// const secondBillSummary = billPercentSecond + secondBill;
// const secondBillSummaryTwo = billPercentSecondTwo + secondBill;

// const billPercentThird = (15 / 100) * 430;
// const billPercentThirdTwo = (20 / 100) * 430;
// const thirdBillSummary = billPercentThird + thirdBill;
// const thirdBillSummaryTwo = billPercentThirdTwo + thirdBill;

// firstBill >= 50 && firstBill <= 300 ? console.log(`Rachunek za ${firstBill} z procentem ${billPercentFirst} wynosi ${firstBillSummary}`) : console.log(`Rachunek za ${firstBill} z procentem ${billPercentFirstTwo} wynosi ${firstBillSummaryTwo}`);

// secondBill >= 50 && secondBill <= 300 ? console.log(`Rachunek za ${secondBill} z procentem ${billPercentSecond} wynosi ${secondBillSummary}`) : console.log(`Rachunek za ${secondBill} z procentem ${billPercentSecondTwo} wynosi ${secondBillSummaryTwo}`);

// thirdBill >= 50 && thirdBill <= 300 ? console.log(`Rachunek za ${thirdBill} z procentem ${billPercentThird} wynosi ${thirdBillSummary}`) : console.log(`Rachunek za ${thirdBill} z procentem ${billPercentThirdTwo} wynosi ${thirdBillSummaryTwo}`);

const tip = firstBill <= 300 && firstBill >= 50 ? 275 * .15 : 275 * .2;
console.log(`Kwota z napiwkiem wynosi ${firstBill + tip}`);
