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