var arr = ["usama ", "kasbati " , 12 , true]



// end se remove krega
arr.pop();

// end me add krdega
arr.push("ZS");

// start se remove krega
arr.shift(); 

// kahi se bh add krdega or khi se bh remove krdega
arr.splice(0,1,"sallu")

// start se add krega
arr.unshift("adil" , 130)

console.log(arr);

// create an empty array and insert the value through user input with index number...

var create = [];

create[0]="usama";
create[1]="kasbati";
create[2]="ZS";
create[3]="father";
create    [4]="mother";

console.log(create[3]);


// 1. Declare an empty array using JS literal notation to store
// student names in future.

var students =[];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var students2 =[];



// 3. Declare and initialize a strings array.

var students =["usama"];

// 4. Declare and initialize a numbers array.
var students =[12];


// 5. Declare and initialize a boolean array.
var students =[true];


// 6. Declare and initialize a mixed array.
var students =["usama",12,true];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


var educationqualification = ["Bs","Bcom","MS","Phil","Phd","HSC","BCS","BS","SSC",];

console.log("Qualification", educationqualification);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// Create an array to store student names

var studentNames = ["John", "Alice", "Bob"];

// Create an array to store student scores
var studentScores = [420, 350, 480];

// Calculate the total marks (assumed to be 500 for each student)
var totalMarks = 800;


// }
var perc = studentScores[0]/totalMarks*100;
var perc1 = studentScores[1]/totalMarks*100;
var perc2= studentScores[2]/totalMarks*100;


console.log("Score of John is 420","Percentage",perc)
console.log("Score of Alice is 350","Percentage",perc1)
console.log("Score of Bob is 480","Percentage",perc2)


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var scores = [320 , 330,340,350];
// Create an array to store student scores
var studentScores = [85, 70, 92, 65, 78, 88];

// Sort the array in ascending order
// studentScores.sort();

// Display the sorted array
console.log(studentScores);


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser


var arrcolor = ["blue","green","red","yellow","orange"]


console.log(arrcolor);
arrcolor.unshift("purple")
console.log(arrcolor)


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var arrcolor1 = ["blue","green","purple","yellow","orange"]


arrcolor1.push("Pink")
console.log(arrcolor1);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

var arrcolor = ["blue","green","red","yellow","orange"]


console.log(arrcolor);
arrcolor.unshift("purple","grey")
console.log(arrcolor)

// d. Delete the first color in the array. Display the updated
// array in your browser.

var arrcolor = ["blue","green","red","yellow","orange"]


console.log(arrcolor);
arrcolor.splice(0,1)
console.log(arrcolor)

// e. Delete the last color in the array. Display the updated
// array in your browser.

var arrcolor = ["blue","green","red","yellow","orange"]


console.log(arrcolor);
arrcolor.pop()
console.log(arrcolor)

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

var arrcolor = ["blue","green","red","yellow","orange"]


console.log(arrcolor);
arrcolor.splice(2,"grey",4,"white")
console.log(arrcolor)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var arrcolor = ["blue","green","red","yellow","orange"]


console.log(arrcolor);
arrcolor.splice(0,1)
console.log(arrcolor)