// ASSESSMENT 1: Coding Conceptual Questions  - Thounda Craig (websitesupport247)

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"];
console.log(colors.push("indigo"));

// a) Your answer:  the JS 'push' method should append 'indigo' to the end of the 'colors' array & 
show the index of the new entry (index 5).

// b) Verify and explain:
5                       // The number 5 is giving the array index for the new element added using 'push'


// --------------------1) What will this log?

const cohort = "LEARN 2022";
console.log(cohort.length);

/* a) Your answer: console.log results should display an integer - number of characters which includes 'white space'. That count
should be 10.
*/
// b) Verify and explain:
10                          // 10 is the return value displayed from console log from the 'length' method.
                            // the 'length' method returns the number of elementsa found within the array.


// --------------------2) What will this log?

const greeting = "Hello World!";
console.log(greeting[4]);

/* a) Your answer: console.log should show the the leter 'o' which that count starts from index 'zero' which that zero index is to value 'H'.
Thus, counting from index ZERO to index FOUR will point to the letter 'o' which - theoritically - is th FIFTH element in the string.
*/
// b) Verify and explain:
o                           //  as stated, above, executing the console.log command on the 4th index, parsed the element which letter 'o'
undefined


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:  The 1st const is the array of elements then the 2nd const (line 48) being called as an argument in 1st array

// b) Verify and explain:
Ruby                        // the result is the 2nd element (index 1) called b/c console.log(languages[1] the actual command parsed



// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"];
console.log(weekendDays.toUpperCase());

// a) Your answer:  toUpperCase() method is used only on strings so in this case - in using an array - will not yield a results.
// b) Verify and explain:

// Below is the error which is a result of the 'toUpperCase' method trying to be called on an array instead of a string
// To correct this error require calling the 'toString' method prior to the 'toUpperCase' method.
oncaught TypeError: weekendDays.toUpperCase is not a function
    at <anonymous>:2:25
(anonymous) @ VM61:2




// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"];
console.log(typeof dataTypes.length);

/* a) Your answer:  I was a bit confused when viewing line # 71 at 1st in thinking of the results
However, in thinking thru line 72 which is getting the count or number of elements in the array 
then made me see that the 'typeOf' method is going to check on that result which is a NUMBER.
*/
// b) Verify and explain:
const dataTypes = ["number", "string", "Boolean"];
console.log(typeof dataTypes.length);
VM65:2 number
