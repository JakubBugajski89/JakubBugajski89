/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44*/

const calcTip = function (price) {
    if ((price >= 50) && (price <= 300)) {
        priceWith15 = price * .15;
        return priceWith15;
    }
    else {
        priceWith20 = price * .20;
        return priceWith20;
    }
}

const calcTipWithBill = function (price) {
    if ((price >= 50) && (price <= 300)) {
        priceWith15 = price * .15; // instrukcja trójpozycyjna
        return price + priceWith15;
    }
    else {
        priceWith20 = price * .20;
        return price + priceWith20;
    }
}

const bills = [125, 555, 44];

const firstTip = calcTip(bills[0]); // te zmienne można od razu zapisać w tablicy - bez tworzenia dodatkowych zmiennych
const secondTip = calcTip(bills[1]);
const thirdTip = calcTip(bills[2]);

const tips = [firstTip, secondTip, thirdTip];

const firstBillWithTip = calcTipWithBill(bills[0]);
const secondBillWithTip = calcTipWithBill(bills[1]);
const thirdBillWithTip = calcTipWithBill(bills[2]);

const billsWithTips = [firstBillWithTip, secondBillWithTip, thirdBillWithTip];

console.log(tips);
console.log(billsWithTips);

// wystarczy funkcja tips + pobieranie elementów z tablicy bills i tips oraz ich suma