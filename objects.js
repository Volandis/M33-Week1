// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot Chocolate"
//     ]
// };
// person.name OR person["name"] - they do the same thing
// const person = {
//     name: "Jamie",
//     age: 42,
// }

// console.log(person.name, person.age )
// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// };
// if (time <1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time <1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// let alarm = "";
// let day = "Sunday";

// const alarmclock = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }
// if (day == "Saturday" || day == "Sunday") {
//     alarm = alarmclock.weekendAlarm;
//     console.log(alarmclock.weekendAlarm);
// } else {
//     alarm = alarmclock.weekdayAlarm,
//     console.log(alarmclock.weekdayAlarm);
// }

// const person = {
//     name: "Jamie",
//     age: 42,
//     favSongs: [
//         "Foo Fighters - Monkey Wrench",
//         "RHCP - Otherside",
//         "Green Day - Basket Case",
//         "Disturbed - Sound of Silence"
//     ]
// }
// if (person.name == "Jamie") {
// console.log(person.favSongs)
// }

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe:()=>{
//         if(this.hasSpecialOffers){}
//         return "Time for a special offer!";
//     },
//     closedCafe: ()=>{
//         return "We are closed, come back tomorrow!"
//     }
// };
// if (time <1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time <1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// console.log(cafe.openCafe())

//Activity 1
// const person = {
//     name: "Jamie",
//     age: 42,
//     favSongs: [
//         "Foo Fighters - Monkey Wrench",
//         "RHCP - Otherside",
//         "Green Day - Basket Case",
//         "Disturbed - Sound of Silence",
//     ],
//     sayHi:()=>{
//         console.log(`Hello my name is ${person.name}`);
//         }
// }
// person.sayHi()

//Activity 2

// const pet = {
//     name: "Monty",
//     typeOfPet: "Dog",
//     age: 10,
//     colour: "Liver and White",
//     eat: ()=>{
//         console.log (`${pet.name} is eating.`)
//     },
//     drink: ()=>{
//         console.log (`${pet.name} is drinking.`)
//     }
// }

// pet.eat()
// pet.drink()

// Activity 3

const coffeeShop = {
    branch: "Eccles",
    drinks:{
        tea:1.2,
        coffee:1.1,
        water:1.0,
    },
    food:{
        doughnut:1.5,
        croissant:1.4,
        toast:1.2,
    },

    drinksOrdered(...drinks) {
        let drinkCost = 0;
        const drinksList = drinks.join(' & ');
        drinks.forEach(drink => (drinkCost += this.drinks[drink]));
        drinkCost = drinkCost.toString().split('.');
        drinkCost[1] = drinkCost[1];
        drinkCost = drinkCost.join('.');

        return this.fullOrder(drinksList, drinkCost);
    },

    foodOrdered(...food) {
        let foodCost = 0;
        const foodList = food.join(' & ');

        food.forEach(item => (foodCost += this.food[item]));

        foodCost = foodCost.toString().split('.');
        foodCost[1] = foodCost[1];
        foodCost = foodCost.join('.');

        return this.fullOrder(foodList, foodCost);
    },
    fullOrder(order, cost) {
        return console.log(
          `You ordered ${order} and it will be with you soon. Total order price is £${cost}0.`)
    },
}

coffeeShop.drinksOrdered('tea', 'coffee');
coffeeShop.foodOrdered('doughnut', 'toast');
