// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
/*
I used IF/Else statements to check the legnth of the two constants and echo to console log the results, 
based the GREATER or LESS operator for each code set.  A catch all 'else' statement set at the end - just in 
case no mach in first to IF statements.
*/

// Set one:
//const fruit1 = "apple";
//const fruit2 = "banana";
// Expected outcome: "banana"
if (fruit1.length > fruit2.length) {
    console.log(`${fruit1}`);
} else if (fruit1.length < fruit2.length) {
    console.log(`${fruit2}`);
} else {
    console.log(`Error Occurred`);
    }



// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// Expected outcome: "cherry"
if (fruit1.length > fruit2.length) {
    console.log(`${fruit1}`);
} else if (fruit1.length < fruit2.length) {
    console.log(`${fruit2}`);
} else {
    console.log(`Error Occurred`);
    }

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
/* I used IF statements to create three different conditions:
1st condition is checking if temp (42) LESS than Boiling point (212)
2nd condition is checking if temp (42) GREATER than Boiling point (212)
3rd condition is checking if temp (42) EQUAL to Boiling point
*/

/*
const temp = 42
// Expected output: "42 is below boiling point"
if (temp < 212) {
    console.log(`${temp} is below boiling point`);
}
*/

/*
const temp = 350
// Expected output: "350 is above boiling point"
if (temp > 212){ 
    console.log(`${temp} is above boiling point`);
}
*/

/*
const temp = 212
// Expected output: "212 is at boiling point"
if (temp === 212) {
    console.log(`${temp} is at boiling point`);
}
*/


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:  I wrote a 3rd statement - line 83 - to use the concat method to combing the two arrays into one then I executed 'length' method to get element count 9 on array

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const padresNew = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
console.log(padresNew.length);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
