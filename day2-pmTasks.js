// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
//     console.log("ObvsCheck again");
// }
// else {
//     console.log("What it isn't raining?");
// }

// let day = "Saturday";
// if (day == "Saturday" || day == "Sunday") {
//     console.log("It's weekend!")
// }
// else {
//     console.log("When's weekend?")
// }

// Activity 1
// let age = 21
// country = "USA"
// if (age > 17 && country == "UK") {
//     console.log("Yes i can serve you.");
// }
// else if (age > 20 && country == "USA") {
//     console.log("Yes i can serve you.");
// }
// else {
//     console.log("You aren't old enough");
// }

//Activity 2
// let pizzaTopping = "sausage"
// switch(pizzaTopping) {
//     case "mushroom":
//     case "ham":
//     console.log("This is an important ingredient for me pizza.");
//     break
//     case "tuna":
//     case "anchovies":
//     console.log(`${pizzaTopping} should not be on a pizza.`);
//     break
//     default:
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`);
// }

// Activity 3
// let password = "goodword"
// if (password.length < 8) {
//     console.log("Your password is too short.");
// }
// else {
// console.log(password);
// }

//Activity 4
// let num = 9
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisiable by 3 or 5")
// }
// else {
//     console.log("That isn't divisible by 3 or 5.")
// }

//Activity 5
// let num = 2
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizz buzz")
// }
// else if (num % 3 == 0) {
//     console.log("fizz")
// }
// else if (num % 5 == 0) {
//     console.log("buzz")
// }
// else {
//     console.log(num)
// }

//Activity 6
// let num =1000010
// let numRev = num + "";
// if (numRev.split("").reverse().join("") == num){
//     console.log(`${num} is a palindrome.`)
// }
// else {
//     console.log(`${num} is not a palindrome.`)
// }

//Activity 7
// let time = 18
// let placeOfWork = "CodeNation Coding Bootcamp"
// let townOfHome = "Eccles"

// if (time > 7 && time < 9) {
//     console.log(`I'm on my way to ${placeOfWork}.`);
// }
// else if (time >= 9 && time < 17) {
//     console.log(`I'm at work at ${placeOfWork}.`);
// }
// else if (time >=17 && time < 19) {
//     console.log(`I've left ${placeOfWork} and am on my way home in ${townOfHome}.`);
// }
// else {
//     console.log(`I'm at home in ${townOfHome}.`);
// }

//Activity 8
// let lotsOfLetters = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let lastVowelIndex =0;

// for (let i = 0; i < vowels.length; i++) {
//     let index = lotsOfLetters.lastIndexOf(vowels[i]);
//     if (index >= lastVowelIndex){
//         highestIndex = index;
//     }
// }
// console.log(highestIndex)

//Activity 9
// let word = "wow";
// if (word.charAt(0) == word.charAt(word.length-1)) {
//     console.log("True")
// }
// else {
//     console.log("False")
// }

//Activity 10
// let num1 = 5;
// let num2 = 6;
// let total = num1 + num2;

// if (total % 2 == 0) {
//     console.log(`The sum is ${total} and is even.`);
// }
// else {
//     console.log(`${num1 * num2}`);
// }