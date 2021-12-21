// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// // coffeeOrder[1] = "Ann - Vanilla latte"; //replaces the 2nd item in the list

// // console.log(coffeeOrder.length); // length of list

// // coffeeOrder.push("Donna - espresso"); //adds a new item to the end of the list
// coffeeOrder.pop() //removes the last item from the list
// console.log(coffeeOrder);

// let favouriteSongs = [
//     "Foo Fighters - Everlong",
//     "Disturbed - Sound of Silence",
//     "RHCP - Otherside"
// ];
// favouriteSongs.push("Green Day - Basket Case","Foo Fighters - Monkey Wrench")
// favouriteSongs.pop()

// console.log(favouriteSongs);

// favouriteSongs.shift()
// console.log(favouriteSongs);
// // removes the first item
// favouriteSongs.unshift("Foo Fighters - Monkey Wrench")
// console.log(favouriteSongs);
// // adds items to the start of the list

// let favDrinks = ["Pepsi", "Fanta", "Hot Chocolate"];

// // console.log(favDrinks[0]);
// // console.log(favDrinks[1]);
// // console.log(favDrinks[2]);

// // for(let i = 0; i < favDrinks.length; i++) {
// //     console.log(favDrinks[i]);    
// // }

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++) {
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// let age = 15;

// while( age < 18) {
//     console.log("You're a child!");
//     age++;
// }

// console.log("You're an adult!");

let cards = ["Diamonds","Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);