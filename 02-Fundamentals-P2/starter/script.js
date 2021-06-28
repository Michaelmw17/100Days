'use strict';


// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :)');

// const interface = 'Audio';
// const private = 534;


// Functions
// function logger() {
//     console.log('My name is Michael');
// }
// Calling / running / invoking function
// logger();
// logger();
// logger();


// function fruitProcessor (apples, oranges){
//     // console.log(apples, oranges)
//     const juice = `You've created a juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice)
// // console.log( fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice);

// const num = Number('23')


// function calcAge1(birthYear) {
//     // const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2);

//Arrow functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age2 = calcAge3(1991);
// console.log(age2);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 -  age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// // const years = yearsUntilRetirement(1991)
// // console.log(years);
// console.log( yearsUntilRetirement(1991, 'me'))
// console.log( yearsUntilRetirement(2001, 'him'))

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor (apples, oranges){

//     const applesPieces = cutFruitPieces (apples);
//     const orangesPieces = cutFruitPieces (oranges);

//     // console.log(apples, oranges)
//     const juice = `You've created a juice with ${applesPieces} pieces of  apples and ${orangesPieces} pieces of oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,12);
// console.log(appleJuice)
// console.log(fruitProcessor(2,3))

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 -  age;

//         if (retirement > 0 ) {
//             console.log(`${firstName} retires in ${retirement} years`)
//             return retirement
//         } else {
//             console.log(`${firstName} has already retires in ${retirement} years`)
//             return -1;
//         }
//     return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }
// // const years = yearsUntilRetirement(1991)
// // console.log(years);
// console.log( yearsUntilRetirement(1998, 'Mike'))
// console.log( yearsUntilRetirement(1950, 'Someone else'))

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c ) / 3 

// let  DolphinScore = calcAverage(44, 23, 71);
// let  KoalasScore = calcAverage(65, 54, 49);
//     console.log(DolphinScore, KoalasScore)

// const  checkWinner = function( avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 *   avgKoalas) {
//         console.log(`Dolphins win the trophy 🏆  ${avgDolphins} vs ${avgKoalas}`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win the trophy 🏆  ${avgKoalas} vs ${avgDolphins}`)
//     } else {
//         console.log(`no one wins`)
//     }
// }
//     checkWinner(DolphinScore, KoalasScore)
// checkWinner(89,655)

// // Test 2 


//     DolphinScore = calcAverage(85, 54, 41);
//     KoalasScore = calcAverage(23, 34, 27);
//     console.log(DolphinScore, KoalasScore)

// checkWinner(DolphinScore, KoalasScore)

// const friends =  [
//     'Bob', 
//     'Jonas', 
//     'Peter',

// ]
// console.log(friends)

// const y = new Array(1991,1984, 2008, 2020)
// console.log(y)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)
// const firstName = 'Michael'

// const michael = [firstName, 'Watt', 2021 - 1998, 'teacher', friends]


// console.log(michael)
// //Exercise

// const calcAge = function (birthYear) {
//     return 2037 - (birthYear)
// }
// const years = [1990, 1967, 2002, 2010, 2018]

// const ageOne = calcAge(years[0])
// const ageTwo = calcAge(years[1])
// const ageThree = calcAge(years[years.length - 1])
// console.log(ageOne, ageTwo, ageThree)

// const ages = [
//     calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])
// ]
// console.log(ages)
// const friends =  [
//     'Bob', 
//     'Jonas', 
//     'Peter',

// ]
// //Add Element
// friends.push('Jay')
// console.log(friends)

// friends.unshift('John')
// console.log(friends)

// //Remove Element
// friends.pop()
// const popped = friends.pop()
// console.log(friends)
// console.log(popped)

// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Bob'))

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44]
// const tip =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tip)

// const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]
// console.log(bills, tip, totals)