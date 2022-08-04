console.log('Hello World');

//## Values and Variables
// var $myName = 'Sohana Shabnam';
// var myAge = 20;
// console.log($myName);


//Data Types in Javascript

//var myName = "Sohana Shabnam";
//console.log(myName);

//var myAge = 20;
//console.log(myAge);

//var iAmSohana = true;
//console.log(iAmSohana);

//## typeof operator
//console.log(typeof(iAmSohana));

//##Datatype practice
// console.log( 10 + "20");
// console.log( 9 - "5");// 1st bug
// console.log( " "+ " ");
// console.log( "Java"+"Script");
// console.log(" "+0);
// console.log("Sohana"-"Shabnam");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false-true);

//Interview Question 1
// Difference between null vs undefined?

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));// 2nd bug = object is not a datatype

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

//question 2
//What is NAN?

//NaN is a property of global object;
// In other words, it is a variable in global scope.
// The initial value of Nan is Not-A-Number

// NaN

// var myPhoneNumber = 8250326465;
// var myName = "Sohana Shabnam";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//  console.log("plz enter valid phone no");
// }

//NaN Practice

// console.log(NaN===NaN);
// console.log(Number.NaN===NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));


// Operators & Expressions :: 

//1> Assignment operators
// An assignment operator assigns a value to its left operand 
//based on the value of its right operand
// the simple assighnment operator is equal (=)

//var x = 5;
//var y = 5;

//learn about its style when we will see about ES6
//console.log(`Is both the x and y are equal : ${x == y}`);

//2> Arithmetic operators
//An arithmetic operator takes numerical values
// (either literals or variables) as their operandsand
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(3*4);
// console.log("Remainder Operator " + 27%4);

//Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x

// var num = 15;
// var newNum1 = num++ + 5; // post increment
// var newNum2 = ++num + 5; //pre increment

// console.log(num);
// console.log(newNum1);
// console.log(newNum2);

//Postfix increment operator means the expression is evaluated
// first using the original value of the variables and then the
// variable is incremented(increased)

//3> Comparison operstors
// A comparison operator compares its operands and returns a 
// logical value based on whether the comparison is true.

//var a = 30;
//var b = 10;

//Equal(==)
//console.log(a == b);

// Not Equal (!=)
//console.log( a != b);

// Greater than (>)
//console.log(a > b);

// // Greater than or equal (>=)
//console.log( a >= b );

// Less than (<)
//console.log(a<b);

//Less then or equal <=
//console.log(a<=b); 



// 4>Logical Operators

//var a = 30;
//var b = 10;

//logical AND(&&)
//The logical AND(&&) operator (logical conjusction) for a set of
//operands is true if and only if all of its operands are true

//console.log (a>b && b>a);

//logical OR(||)
// The logical OR(||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true

// console.log((a < b) || (b > 0) || (a > 0));

// logical NOT (!)
// The logical NOT(!) operator (logical complement, negation)
// takes truth to falsity and vice-versa.

//console.log(!((a>0) || (b<0)));
//console.log(!true);



// 5> String Concatenation(operators)
// The concatenation operator (+) concatenates two returning 
// another string that is union of the strings
//var myName = "Sohana";

//console.log(myName + " Shabnam");
//console.log(myName + " Masuk");
//console.log(myName + " Afridi");



// 5>Challenge Time--->
//1)) What is the output of 3**3?(it is a exponentiation operator)
// sol::
//console.log(3**3);// 3*3*3
//console.log(9**2);//9*9
//console.log(10**-1);//1/10

//2)) What will be the output , when we add a number and a string??
//Sol:: 
//console.log(5 + "Shabnam");
//console.log(5-"shabnam");

//3))Write a program to swap two numbers?( using third variables)
//Sol::
//var a = 5;
//var b =10;

//Output b=5; a=10

//var c = b; //c=10
//b = a; // b=5
//a = c;

//console.log("the value of a is "+ a);
//console.log("the value of b is "+ b);

//4))Write a program to swap two numbers?(without using third variables)
//Sol::
//var a = 5;
//var b = 10;
// Output b=5; a=10;

//a=a+b; // a=15;
//b=a-b; // b=5;
//a=a-b; // a=10

//console.log("the value of a is "+ a);
//console.log("the value of b is "+ b);


//??Interview Question ??//
//What is the difference between == and ===?

// Sol::
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);// it only check value
// console.log(num1 === num2);// it check value and datatype both


/**** Section 6 Control Statement -
 * if .....Else
 */

//The if Statement executes a statement if a specified condition is truthy.
//If the condition is falsy, another statement can be executed

// if raining = raincoat
// else no raincoat

//var tomorrow = 'rain';

// if(tomorrow == "rain") 
// {
//     console.log("take a raincoat");
// }else{
//     console.log("No need to take a raincoat");
// }

// var year = 2020;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("The year "+ year + " is a leap year");
//         }else{
//             console.log("The year "+ year + " is not a leap year");
//         }

//     }else{
//         console.log("The year "+ year + " is  a leap year");
//     }

// }else{
//     console.log("The year "+ year + " is not a leap year");
// }



//What is truthy and Falsy values in Javascript?
// we have total 5 falsy values in javascript
//0," ",undefined ,nul, NaN, false** is false anyway

//if(score = 0){
 //  console.log("yeah, we won the game");
//}else{
  //  console.log("OMG, we loss the game ");
//}


// 2> Conditional (ternary) operator
//The conditional (ternary) operator is the only that takes three
//operands

//var age=18;
//console.log((age >= 18) ? "you can vote" : "you can't vote");

//3> Switch Statement
// Evaluates an expression, matching the expresssion's value to a
// case clause, and executes statements associated with that case

// 1st without break statement
// Find the Area of circle, triangle and rectangle?

// var area = "circle" ;
// var PI =3.142, l=5, b=4, r=3;

// switch(area){
//     case 'circle':
//         console.log("the area of the circle is : " + PI*r**2);
//         break;

//     case 'triangle':
//         console.log("the area of the triangle is : " + (l*b)/2);
//         break;

//     case 'circle':
//         console.log("the area of the circle is : " + (l*b));
//         break;

//     default:
//         console.log("please enter valid data");
// }



//4> While Loop Statement
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true

//var num=0;
//block scope
//while(num <= 1000){
//    console.log(num);
//    num++;
//}


//5> Do-While LOOP
// var num = 0 ;
//  do{
//      console.log(num); 
//      num++;
//  }while(num<=10);


//6>for loop
//for(var num=0; num <= 10; num++){
  //  console.log(num);
//}

// Table in javascript
// 
// for(var num=1; num<=10 ; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = "+ tableOf*num);
// }



//*****************Functions in JAVA SCRIPT */
//A JavaScript function is a block of code designed to perform a particular tak


//@@ Function definition

// Before we use a function, we need to define it.

//A function definition (also called a function declaration, or function statement)
//consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the functions , enclosed in parentheses and separated by commas. The JavaScript statements that define the functions , enclosed in curley brackets, {.....}

// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }



// ii>calling a function
// Defining a function does not execute it.
//A JavaScript function is executed when "something" invokes it(calls it).

//%%method--1
// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }

// sum();

// //%% Method --2
// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }

// sum(45,5);


//##Function Parameter vs Function Arguments
// Function parameters are the names listed in the function's definition.
//Function arguments are the real values passed to the function

//%% Method --2
//function sum(a,b){//function parameter
  //  var total = a+b;
  //  console.log(total);
//}

//sum(45,5);//function arguments


//##Interview Question
//Why Function??

//You can reuse code: Define the code once , and use it many times.
//you can use the same code many times with different arguments
//to produce different results.

//Or

//A function is a group of reuseable code which can be called anywhere in your program. This eliminations the need of writing the same code again and again.
//DRY= do not repeat yourself

//IV>> Functions Expressions
//"Function expressions simply means create a function and put it into the value"

// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }

// var funExp = sum(5,15);

//V>> Return keyword
//When JavaScript reaches a return statements;
//The function will stop executing.

//Functions often compute a return value.
// The return value is "returned"back to the "caller"..

// function sum(a,b){
//     return total = a+b;
// }

// var funExp = sum(5,15);
// console.log(funExp);

//VI>>> Anonymous Function

// A function expression is similar to and the same syntax
// as a function declaration One can define "named"
//function expressions (where the name of the expression might be used in the call stack for example)
//or "anonymous" function expressions.

// var funExp = function(a,b){
//     return total = a+b;
// }

// var sum = funExp(15,5);
// var sum1 = funExp(65,5);

// console.log(sum);
// console.log(sum1);



//*********************************************

//Now it's time for mordern javascript
//Features of ECMAScript 2015 also known as ES6 ++

// 1>> LET VS CONST VS var
// let
//let myName = "Sohana Shabnam";
//console.log(myName);

//myName = "Fahim Masuk";
//console.log(myName);

//const
//const myName = "Sohana";
//console.log(myName);

//myName = "Shabnam";
//console.log(myName);

// var ==> Function scope
// let and const ==> Block scope

//2>> ###****Template literals (Template strings)
//Javascript program to print table for any given number??

// for(let num = 1; num <= 10; num++)
// {
//   let tableOf = 12;
//   console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
// }


//3>> Default Parameters
//Default function parameters allow named parametrs to be initialized
//with default values if no value or undefined is passed

// function mult(a,b=4){
//   return a*b;
// }

//console.log(mult(2,3));
//console.log(mult(5));



//******6>>Fat Arrow Function

//Normal way to writing functiom

// console.log(sum())

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//   return `the sum of the two number is ${sum}`;
// }

//***important*** */ How to convert in into Fat Arrow Function
//const sum = () => `the sum of two number is ${(a=6)+(b=8)}`;
//console.log(sum());




////🥰🥰7>>Array in JAVASCRIPT
//var myFriends  = ['sohana', 20,female,'fahim',16,male,'Shelina', true, 38];

// {Array Subsection 1} ==>Traversal in array
//navigate through an array

//if we want to get the single data at a time and also 
//if we want to change the data

//var myFriends = ['Sohana','zamrul','fahim'];
//console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array

//console.log(myFriends.length); //it is a property

// we use for loop to navigate(for in loop & for of loop)
// var myFriends = ['sohana','munmun','riya', 'rima'];

// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

//After ES6 we have for..in and for..of loop too

//for..in loop====>
// var myFriends = ['sohana','munmun','riya', 'rima'];

//  for(let element in myFriends){
//    console.log(element);
//  }

//for..of loop====>
// var myFriends = ['sohana','munmun','riya', 'rima'];

//   for(let element of myFriends){
//     console.log(element);
//   }


//🏈Array.prototype.forEach()
// Calls a function for each element in the array.

// var myFriends = ['sohana','munmun','riya', 'rima'];

// myFriends.forEach(function(element, index, array) {
//   console.log(element + " index : "+ index + " " +array);
// })



//😀😀 ==> Array Subsection 2 // Searching and Filter in an Array

//🏈Array.prototype.indexOf()
// Returns the first (last) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number

// var myFriendNames = ["Fahim","Aloka","Sohana","Technology","Block-chain","Sohana"];

// console.log(myFriendNames.indexOf("Sohana", 3));


//🏈Array.prototype.lastindexOf()
// Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number

// var myFriendNames = ["Fahim","Aloka","Sohana","Technology","Block-chain","Sohana"];

// console.log(myFriendNames.lastIndexOf("Sohana", 4));


// 🏈Array.prototype.includes()
// Determines whether the array contains a value,
// returning true or false as appropriate
// var myFriendNames = ["Fahim","Aloka","Sohana","Technology","Block-chain","Sohana"];

// console.log(myFriendNames.includes("Fahim"));



// 🏈Array.prototype.find()

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, is some element in the array satisfies the testing function , or undefined if not found.only problem is that it return only on element

//const prices = [200,300,350,400,450,500,600];

// price < 400 , if we want this data

//console.log( prices.find((currVal) => currVal < 400) );



//🏈 Array.prototype.findIndex()

// Returns the found index in the array, if an element in the array satisfies the testing function


//console.log( prices.findIndex((currVal) => currVal < 400) );


//🏈Array.prototype.filter()

//Returns a new array containing all element of the calling array for which the provided filtering function returns true.

//const prices = [200,300,350,400,450,500,600];

//price < 400

// const  newPriceTag = prices.filter((elem, index) => {
//   return elem < 400;
// })
// console.log(newPriceTag);


// Array Subsection-3 >> How to sort an Array

//🏈Array.prototype.sort()

//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing therir sequences of UTF-16 code units values.

//const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];

//console.log(months.sort());


//😀😀Insert, Add, Replace and Delete Elements in Array

//Array.prototype.push()
//the push() method adds one or more elements to the end of an array and returns the new length of array.

//1>>>>
// const animals = ['pigs', 'goats', 'sheep'];

// animals.push('chicken');
// console.log(animals);


//2>>>
// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

//🏈UNSHIFT >>>>



// 🏈Array.prototype.pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array


// const plants = ['tree', 'cauliflower', 'potato', 'cabbage'];
// console.log(plants.pop());
// console.log(plants);

//shift method
//🏈Array.protoype.shift()
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array..
//console.log(plants.shift());
//console.log(plants);



/// 🤜Challenge time 
//Add or remove elements from an Array

//1: Add Dec at the end of an array?
//2: What is the return value of splice method?
//3: update march to March (update)?
//4: Delete June from an array?

//const months = ['Jan', 'march', 'April', 'June', 'July'];


// sol1:
//const newMonth = months.splice(3,0,"Dec");
//const newMonth = months.splice(months.length,0,"Dec");//--->here it means the last object

//console.log(months);

//sol2:
//console.log(newMonth);

//sol3:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'March');
//   console.log(months);
// }else{
//   console.log('No such data found');
// }


//sol4:
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }



//🖐️5>> Array Subsection - 4 👉 Map and Reduce Method

// Array.prototype.map()🔵

//let newArray = arr.map(callback(currentValue[, index[, array]])  {
  //return element for newArray , after excuting something
//} [, thisArg]);

// Returns a new array containing the results of calling a function on every element in the array.

//const array1 = [1, 4, 9, 16, 25];
//num > 9

// let newArr = array1.map((curElem, index, arr) => {
//   return curElem > 9;
// })

// console.log(array1);
// console.log(newArr);

//let newArr = array1.map((curelem, index, arr) => {
//  return `Index no = ${index} and the value is ${curelem} belong to ${arr}`
//})

//console.log(newArr);

// this map method does not do anything with old array just make a new array;;


//🙂9:::  CHALLENGE TIME

//1: Find the square root of each element in an array?
//2: Multiply each element by 2 and return only those element which are greater than 10?

// SOLUTION:1
//let arr = [25, 36, 49, 64, 81];

//let arrSqr = arr.map((curElem) => Math.sqrt(curElem))

//console.log(arrSqr);

//SOLUTION:2
// let arr = [2, 3, 4, 6, 8];

// let arrmult = arr.map((currelem) => currelem*2).filter((currelem)=> currelem>10 );
// console.log(arrmult);

//👉 Reduce method

// flatten an array means to convert the 3rd or 2nd array into a single dimentional array

/*The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

The reducer function takes four arguments:

ACCUMULATOR
Current Value
Current Index
Source Array

*/

//CHAINABLE

//let arr = [ 5,6,2];

//process1
//let sum = arr.reduce((accumulator, curElem, index, arr) => {
//      return accumulator += curElem;
//})

//process2
// let sum = arr.map((currelem) => currelem*2).filter((currelem)=> currelem>10 ).reduce((accumulator, currelem) => {
//     return accumulator += currelem;
// },7);

// console.log(sum);

//🌻 How to fatten an array
// converting 2d and 3d array into one dimensional array

// const arr = [
//   ['zone_1', 'zone_2'],
//   ['zone_3', 'zone_4'],
//   ['zone_5', 'zone_6'],
//   ['zone_7', 'zone_8'],
  
// ];

// let flatArr = arr.reduce((accum, currVal) => {
//         return accum.concat(currVal);
// })

// console.log(flatArr);



////******Section --> 7 🖐️Strings in Javascript */

// A JavaScript string is zero or more characters written insides quotes.

//JavaScript strings can be used for storing and manioukating text
//you can use single or double quoetes 
//Strings can be created as premitives
//from string literals, or as objects, using the string() constructor

// let myName = "Sohana Shabnam";
// let myChannelName = 'SOHANA SHABNAM';


// console.log(myName);
// console.log((ytName));


//👉How to find the length of a string
//String.prototype.length
// Reflects the length of the string

// let myName = "sohana shabnam";
// console.log(myName.length);


//👉Escape Character

// let anySentence = 'Life starts all over when it gets "crisp" in the fall.';

// console.log(anySentence);


//👉 Finding a string in a string

// String.prototype.indexOf(searchValue [, fromIndex])🙎‍♀️
//occurrence of a specified text in a string

// const myBioData = 'I am the web developer';
// console.log(myBioData.indexOf("e", 9));


// //String.prototype.lastIndexOf(searchValue [, fromIndex])💁‍♀️
// //Returns the index within the calling String object of the last occurance of searchValue , or -1 if not found.

// const myBioData = 'I am the web developer';
// console.log(myBioData.indexOf("e", 15));



//2>>> Searchinf for  String in a string

//The search() method searches a string for a specified
// value and returns the position of the match

// const myBioData = 'I am the web developer';
// let sData = myBioData.search("developer");
// console.log(sData);

// 👉Extracting String parts

// There are 3 methods for extracting a part of a string

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 💁‍♀️
// Slice extracts a part of a string and returns the extracted part in a new string

//The method takes two parameters: the start position, and the end position (end not included)

// var str = "Apple, Banana, kiwi";

// let res = str.slice(7, -2);
// console.log(res);

//⭐ The slice() method selects the elements starting  at the given argument, and ends at, but does not include , the given end argument.

//Note:: The original array will not be changed.

//Remember:: JavaScript counts position from ZERO. First position is 0


//😄11>>>> A Challange

// Display only 280 characters of a string like the one used in Twitter?

// let myTweets = " Mental health can affect daily living, relationships, and physical health.However, this link also works in the other direction. Factors in people’s lives, interpersonal connections, and physical factors can all contribute to mental health disruptions.Looking after mental health can preserve a person’s ability to enjoy life. Doing this involves reaching a balance between life activities, responsibilities, and efforts to achieve psychological resilience.Conditions such as stress, depression, and anxiety can all affect mental health and disrupt a person’s routine.Although the term mental health is in common use, many conditions that doctors recognize as psychological disorders have physical roots.In this article, we explain what people mean by mental health and mental illness. "

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);


// The substring() method 💁‍♀️
// substring() is similar to slice()

// The difference is that substring() cannot accept negative indexes.

//var str = "Apple, Banana, KiWI";
//let res = str.substring(8,-4);
// console.log(res);


//The substr() Method 💁‍♀️
//substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// var str = "Apple, Banana, KiWI";
// let res = str.substr(-10);
// console.log(res);


//👉 Replacing String content()

// String.prototype.replace(searchFor, replacewith)💁‍♀️

// The replace() method replaces a specified value with another value in a string.

// let myBioData = `I am Sohana Shabnam , an Web developer, Sohana`;

// let replceData = myBioData.replace('Sohana', 'SOHANA');
// console.log(replceData);

//⭐ points to remember
// 1:: The replace() method does not change the string. it is called on. It returns a new string..
// 2:: By Default, the replace() method replaces only the first match
// 3:: By Default, the replace() method is case sensitive, 



//👉 Extracting String Characters
// There are 3 methods for extracting string characters::

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// The charAt() Mthod 💁‍♀️
// The charAt() method returns the character at a specified index. (position) in a string...

// let str = "Hello World";

// console.log(str.charAt(9));


//The charCodeAt() Method💁‍♀️
//The charCodeAt() method returns the unicode of the character at a specified index in a string::
// The method returns a UTF-16 code
// (an integer between 0 and 65535).


//💮
//Return the Unicode of the last character in a string
// let str = "HELLO WORLD";
// let lastChar = str.length-1;

// console.log( str.charCodeAt(lastChar) );



//👉 Other useful Methods

// let myName = "sOaHana shABNam";
// console.log(myName.toLocaleLowerCase());
// console.log(myName.toLocaleUpperCase());


//👉concat()

// let fName = "Sohana";
// let lName = "Shabnam";

// console.log(fName+lName);
//console.log(`${fName} is ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));


//String.trim()
//The trim() method removes Whitespaces from both sides of a strings

// var str = "        Hello World!        ";
// console.log(str.trim());


//👉😀Converting a String to an Array
// A string can be converted to an array with the split() method

//var txt = "a,b,|,d,e";   // String
//console.log(txt.split(","));   //Split on comas
//console.log(txt.split(" "));    // Split on spaces
//console.log(txt.split("|"));      //Split on pipe



////******8>>>💮Date and Time in JavaScript */

// JavaScript Data objects represent a single moment in time in a platform-independent format. Data objects contain a Number that represent miliseconds since 1st January 1970 UTC.

//👉 Creating Date Objects
// There are 4 ways to create a new date object::

// new Date()
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
// // It takes 7 arguments
// new Date(miliseconds)
// // we cannot avoid month section
// new Date(date string)


// new Date ()💁‍♀️
// Date objects are created with the new Date() constructor

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// Date.now()
// Retruns the Numeric value corrresponding to the current time- the number of milliseconds elapsed since january 1, 1970 00:00:00 UTC

//console.log(Date.now());


//new Date(year, month, ....)💁‍♀️
//7 numbers specify year, month, day, hour, minute, second and millisecond (in that order)
// Note:: javascript counts months from 0 to 11.

// January is 0 and December is 11

// var d = new Date(2021, 4, 5, 10, 33, 30, 0);
// console.log(d.toLocaleString());

//new Date(dateString)💁‍♀️
// new Date(dateString) creates a new date object from a date string

// var d = new Date("January 15, 2022 11:15:00");
// console.log(d.toLocaleString());


//new Date(milliseconds)
//new Date(milliseconds) creates a new date object as zero time plus milliseconds

//var d = new Date(0);
//var d = new Date(999997664);
//console.log(d.toLocaleString());


//👉 Dates Method

//const curDate = new Date();


// // how to get the indivisual date
//console.log(curDate.toLocaleString());  /// it shows current time
//console.log(curDate.getFullYear());
//console.log(curDate.getMonth());
//console.log(curDate.getDate());
//console.log(curDate.getDay());


//👉 Time Method

//const curTime = new Date();

// 😀>>how to get the indivisual Time

//console.log(curTime.getTime());
// the getTime method returns the number of milliseconds since January 1, 1970
//console.log(curTime.getHours());
// // getHours() method returns the hours of a date as a number (0-23)

//console.log(curTime.getMinutes());
//console.log(curTime.getSeconds());
//console.log(curTime.getMilliseconds());


//😀>> how to SET the indivisual Time

//let curTime = new Date();
//console.log(curTime.setTime());
//console.log(curTime.setHours(5));
//console.log(curTime.setMinutes(5));
//console.log(curTime.setSeconds(5));
//console.log(curTime.setMilliseconds(5));


// // Practice Time
//new Date().toLocaleTimeString();   // only time
//new Date().toLocaleDateString();   //only dATE
//new Date().toLocaleString();  //both



//**Section->9👉 Mth Object in JavaScript*/

// The Javascript Math object allows you to perform mathematical tasks on numbers.

//console.log(math.PI); 💁‍♀️

//Math.round() 💁‍♀️
//returns the value of x rounded to its nearest integer

//let num = 10.2565;
//console.log(Math.round(num));

//Math.pow() 💁‍♀️
//Math.pow( x, y) returns the value of x to the power of y

//console.log(Math.pow(2,3));


//Math.sqrt()
//Math.sqrt(x) returns the square root of x

//console.log(Math.sqrt(25));


//Math.abs() 💁‍♀️
//Math.abs() returns the absolute (positive) value of x

//console.log(Math.abs(-55));
//console.log(Math.abs(-55.5));
//console.log(Math.abs(-955));


//Math.ceil() 💁‍♀️
//Math.ceil(x) returns the value of x rounded up to its nearest integer

//console.log(Math.ceil(4.4));
//console.log(Math.ceil(99.1));

//Math.floor() 💁‍♀️
//Math.floor(x) returns the value of x rounded down to its nearest integer

//console.log(Math.floor(4.4));
//console.log(Math.floor(99.1));


//Math.max()💁‍♀️
//console.log(Math.max(0, 150, 30, 20, -8, -200));

//Math.min()💁‍♀️
//console.log(Math.min(0, 150, 30, 20, -8, -200));


//**Math.random() */ 💁‍♀️

//console.log(Math.random()*10);
//console.log(Math.floor(Math.random()*10));


//Math.trunc()💁‍♀️
//The trunc() method returns the interger part of a number

//console.log(Math.trunc(4.6));
//console.log(Math.trunc(-99.1));


//***###### DOM vs BOM ###***** */

//>>in note-book


// History object


//💮 query selectors
// querySelector returns the first matching value 
// querySelectorAll() will return all the elements

//document.querySelector('#heading').innerHTML = "I changed again";


//⭐ Important Question

//Difference between getElementById and querySelector

//👉 What is getElementById()?

//syntax::
//element = document.getElementById(id);

//Returns a reference to the element by its ID.
//If the element with the specified ID is not in the document , it will returns null.

//👉 What is querySelector()?

//Syntax::
//element = document.querySelector(selectors);

//returns the first element within the document that matches the specified group of selectorsor null if no matches are found


//**** section - 11👉 Events in JavaScript */

// HTML events are "things" that happen to HTML elements.
//When JavaScript is used in HTML pages, JavaScript can react 

//🧑‍🏫 HTML Events
// AN HTML event can be something the browser does, or something a user does.

// Here are some example of HTML events::

// An HTML web page has finished loading.
// An HTML input feild was changed.
// An HTML button was clicked.
//often, when events happen, you may to do something.


// 🌟section-1>> 4 Ways of writing Events in JavaScript

// 1: using alert();
// 2: By Calling a function (We already seen and most common way of writing)
//3: using Inline events (HTML onclick="" property and element.onclick)
//4: using Event Listeners (addEventListerner and IE's attachEvent)


//check the Events HTML File


//🌟section-2>> What is Event Object??
// Event object is the parent object of event object.
//for example
//MouseEvent, focusEvent, KeyboardEvent etc


//🌟section-3>> MouseEvent in JavaScript
// The MouseEvent Object
//Events that occur when the mouse interacts  with the HTML
// document belongs to the MouseEvent Object.


//🌟section-4>> KeyboardEvent in JavaScript
//Events that occur when user presses a key on the keyboard,
//belongs to the keyboardEvent Object.
//https://www.w3schools.com/jsref/obj_keyboardevent.asp


//🌟section-5>> InputEvents in JavaScript
//The onChange event occur when the value of an element hhhas been chaaaanged.

//For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.


//The two key method in javascript are:

//setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

//setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously


//1>>  setTimeout()

//2>>  clearTimeout()

//3>>  setInterval()

//4>>  clearInterval()



////👉 object oriented JavaScript

/************************************************* */

//🔢 What is object literal?

//Object literal is simply a key:value pair data structure.
//Storing variable and functions together in one container
//we can refer this as an Objects..


//object = school bag(where you can add everything)

//How to create an Object????

// 1st wayyyyyyyy ==>

// let bioData = {
//   myName : "Sohana",
//   myAge : 20,
//   getData : function(){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }

// }


// console.log(bioData.myName);
// console.log(bioData.getData());




// @@ 2nd wayyyyy no need to write function as well after ES6

// let bioData = {
//   myName : "Sohana",
//   myAge : 20,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// 👉>> What if we want object as a value inside an object

// let bioData = {
//   myName : {
//     realName : "Sohana",
//     channelName : "Fahim Masuk"
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//   }
// }

// console.log(bioData.myName.channelName);


// 🔢 What is 'this' Object?

// The definition of "this" object is that it contain the current context.
//The this object can have different values depending on where it is placed.


// // For Example 1
//console.log(this.alert('Awsome'));
// // it refers to the current context and that is window global object


// // Example 2
// function myName() {
//    console.log(this);
//}
//myName();


// // Example 3
// let myNames = 'Sohana';
// function myName() {
//   console.log(this.myNames);
// } 
// myName();


// // Example 4
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }

// obj.myName();

// // ex 5
// What is output of ??

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();


// // Example 6

// let bioData = {
//     myName : {
//       realName : "Sohana Shabnam",
//       channelName : "SohaFahim"
//     },
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
// }

// bioData.getData();



//👉🔢 Destructuring in ES6

// The destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays , or properties from objects, into distinct variables.

  // => Array Destructuring 🏳️

  //const myBioData = ['sohana', 'shabnam', 20];
 
  //let [myFName, myLName, myAge] = myBioData;
  //console.log(myFName);

  //we can add values also in array destructuring

 // let [myFName,myLName,myAge, myDegree="BTECH"] = myBioData;
 // console.log(myDegree);


 // => Object Destructuring 🏳️
//  const myBioData = {
//   myFName : 'sohana',
//   myLName : 'shabnam',
//   myAge : 20
//  }


 // // method-->1
//  let age = myBioData.age;
//  let myFName = myBioData.myFName;
//  console.log(age);

// // method-->2 important way

// let {myFName,myLName,myAge, myDegree="BTECH"} = myBioData;
// console.log(myAge);



// 👉>>>>>>>>>>Objects in javascript

// let myName = "sohana shabnam";
// let myAge = 20;

// const myBio = {myName,myAge}

// console.log(myBio);



//👉>>> What is spread operator???

// const colors = ['red', 'green', 'blue'];

// const myFavcolors = [ ...colors, 'yellow', 'black'];

// console.log(myFavcolors);



//😀/////>>>> ES7 Features

// 1: array include
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('red');
// console.log(isPresent);

//2: **
//console.log(2**3);


//2017 OR ES8

//3 new methods

//string padding
//Object.values()
//Object.entries()

//String Padding

//const message = "My name is Sohana Shabnam";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

// const person = { name: 'Sohana', age: 20};

// console.log( Object.values(person) );
// console.log( Object.entries(person) );

// ES2018

// const person = { name: 'Sohana', age: 20};

// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


//*️⃣*️⃣ How to flat an array??

// const arr = [
//       ['zone_1', 'zone_2'],
//       ['zone_3', 'zone_4'],
//       ['zone_5', 'zone_6'],
//       ['zone_7',[ 'zone_8', 'zone_9']],
// ];

// console.log(arr.flat(2));//up to 2level 
// console.log(arr.flat(Infinity));// all the level is flatted



// // ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()


// // ES2020
// // #1: BigInt

//let oldNum = Number.MAX_SAFE_INTEGER;
//console.log(oldNum);
//console.log(9007199254740991n + 12n);
//const newNum = 9007199254740991n + 12n;

//console.log(newNum);
//console.log(typeof newNum);


// ES2014

//"use strict";

//let x = 3.14;
//console.log(x);


//// Higher order function
// In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.


// Callback function Application
// // // We need to create a calculator

// const add = (a,b) => {
//   return a+b;
// }

// const subs = (a,b) => {
//   return a-b;
// }

// const mult = (a,b) => {
//   return a*b;
// }

// const calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// }

// calculator(5,3, add);

// console.log(calculator(5,3,subs));

//⭐ Difference between Higher order function and call back function-->


////⭐⭐How JavaScript Works and ASYNCHRONUS JavaScript⭐⭐

//🏳️🏳️Asynchronus JavaScript

// //5️⃣ Hoisting In JavaScript

// //We have a creation phase and execution phase.

// //Hoisting in JavaScript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.

// // for Example 👇
// console.log(myName);
// var myName;
// myName = "Sohana";

// // how it will be in output during creation phase

// 1: var myName;
// 2: console.log(myName);
// 3: myName = "Sohana";

// 🤫 In ES2015  hoisting is avoided by using the let keyword instead of var (The other differnce is that variables declared with let are local to the surrounding block, not the entire function.)

// // 6️⃣: What is scope chain and lexical scoping in javascript????

//1..The scope chain is used to resolve the value of variable names in JS

//2.. Scope chain in JS is lexically defined, which means that we can see what the scope chain will be by looking at the code.

//3..At the top, we have Global scope , which is the window object in the browser.

// 4. lexical scoping means Now, the inner function can get access to their parent functions variables But the vise-versa is not true.


// // For Example 👇

// here first() is parent function
// second() is child function

// let a = "Hello Guys. ";  //global scope

// const first= () => {
//   let b = " How are you?"

//     const second = () => {
//       let c = "hi, I am fine";
//       console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c); // I can't use C
//            }

// first();


// // 7️⃣:: What is Clousers in Javascript

//===> it is like lexical scopinhg.....
//==> Clousers gives you access to outer function's scope from an inner function

// In JS , clousers are created every time a function is created, at function creation time.

// Example 1->👇<<

// const outerFunc = (a) => {
//   let b = 10;
//   const innerFunc = () => {
//     let sum = a+b;
//     console.log(`the sum is the two no is ${sum}`);
//   }
//   innerFunc();
// }
// outerFunc(5);

//Example 2->👇<<

// const outerFunc = (a) => {
//   let b = 10;
//   const innerFunc = () => {
//     let sum = a+b;
//     console.log(`the sum is the two no is ${sum}`);
//   }
//   return innerFunc;
// }
// let checkClousure = outerFunc(5);
// checkClousure();

// ⭐⭐Difference between Synchronus and asyncronus JS?????

// Example of Syncronus ==> one bye one works

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called `);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called again`);
// }

// fun1();

//Asynchronus Javascript Programme

// const fun2 = () => {
//   setTimeout(() => {
//     console.log(`Function 2️⃣ is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called `);
//   fun2();
//   console.log(`Function 1 is called again `);
// }

// fun1();


// //🌟 What is event loop in JS???


// ⭐What is function currying???

// function sum(num1){
//   return function(num2){
//     return function(num3)
//     {
//       console.log(num1,num2,num3);
//     }
//   }
// }

// sum(5)(3)(8)


//⭐👉 8️⃣ ::Callback Hell===>

// setTimeout(() => {
//     console.log(`1️⃣ work is done`);
//     setTimeout(()=>{
//         console.log(`2️⃣ work is done`);
//         setTimeout(() => {
//           console.log(`3️⃣ work is done`);
//           setTimeout(() => {
//             console.log(`4️⃣ work is done`);
//           }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//👉 // JSON

//👉 JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string ,eg::

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);
// //  //"{"key_1:"some text", "key_2":true, key_3: 5}"


// typeof(object_as_string);
// //  //"string"


// // 👈 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
// // {key_1: "some text", key_2: true, key_3: 5}

// typeof(object_as_string_as_object)
// // // "object"

