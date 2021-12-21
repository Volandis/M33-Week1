// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     }
//     else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans()

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(300, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

//Activity 1

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(5))
// above is a declaration (from example) - below it is changed to an arrow function 
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(5))

//Activity 2

// let orderCount = 0;

// const takOrder = (topping1, topping2) => {
//     orderCount++;
//     console.log(`Pizza with ${topping1} and ${topping2}. This is order number ${orderCount}.`);
// }

// takOrder("pineapple", "ham");
// takOrder("ham", "mushroom");

//Activity 3
const storedPin = 1234
let balance = 1000

const cashMachine = (enteredPin, withdrawAmount) => {
    if (enteredPin == storedPin && withdrawAmount <= balance) {
        console.log("Your PIN is correct.");
        balance = balance - withdrawAmount;
        console.log(`Please take your £${withdrawAmount}. Your new balance is £${balance}`);
    }
    else if (enteredPin == storedPin && withdrawAmount > balance) {
        console.log("Your PIN is correct.");
        console.log("You do not have enough funds to withdraw that amount. Please try again.");
    }
    else {
            console.log("Your PIN is incorrect. Please try again.")
    }
}


cashMachine (1234, 1100)
