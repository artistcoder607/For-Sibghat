// Alert
// alert ("hello my Friend")

// variables for string name and etc
// var name = 'shahzaib';
// console.log (name);

// var num = 1371 ;
// console.log (num)

// var _rule$ = 'variable names must start with letter,an underscore (_) or a dollar sign ($) and does not start with number function and any keyword';
// console.log (_rule$)

// Math Expressions  
// var num1 = 3;
// console.log (num1)
// newnum = num1++;
// console.log (num1)
// ++num1;
// console.log (num1)

// newnum = num1++ - ++num1 - --num1 - num1++ - --num1 - num1  ;
// console.log (newnum)

// var totalCoast = (34+2) -7*17 ;
// console.log (totalCoast)

// Cncadination of variables
// var studentName = 'Rizwan';
// var studentName_2 = 'Ghous';
// var fatherName = 'Kamal';
// var fatherName_2 = 'Meskeen';
// console.log (studentName + ' ' + fatherName)
// console.log (studentName_2 + ' ' + fatherName_2)


// alert ('Welcome to Javascript!');

// var username = prompt ("What's your name?");
// alert (`Hello! Welcome Mr/Mr's ${username}`);

// var userDetails = {
//     name : `shahzaib`,
//     age : 17,
//     adress : `Makki Apartment`
// };
// console.log (userDetails);

// var arr = [`e.g`,`Apple`,`Mango`,`Banana`]
// console.log (arr);

// for (var i = 0; i < arr.length; i++) {
// console.log (arr[i])
// }

// document.write (`this is my first javascript page!`)

// var nest = [[1,2,3],[4,5,6]];
// for (let i= 0; i < nest.lenght; i++) {
//     console.log (nest[i])
// }


// function num (num1,num2) {
// return num1*num2;
// }
// console.log (num(17,82));


// function addnum(num1,num2,num3,num4) {
//     return num1+num2*num3-num4;
// }

// console.log (addnum(13,26,85,2));

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 1000) + 1;
// }
// alert(generateRandomNumber());


// function randomNumber() {
// return Math.floor(Math.random() * 1000) +1
// }
// alert (randomNumber());


// 1. Function Declaration
// Functions ko declare karne ka ek tarika hai jise "function declaration" kehte hain.

// javascript
// Copy code
// function greet() {
//     console.log("Hello, World!");
// }
// greet(); // Output: Hello, World!

// 2. Function Expression
// Functions ko variable mein store karna, jise "function expression" kehte hain.

// javascript
// Copy code
// const greet = function() {
//     console.log("Hello, World!");
// };
// greet(); // Output: Hello, World!

// 3. Arrow Function
// Arrow functions, ES6 mein introduce hua, jo syntax ko concise banate hain.

// javascript
// Copy code
// const greet = () => {
//     console.log("Hello, World!");
// };
// greet(); // Output: Hello, World!

// 4. Parameters and Arguments
// Functions parameters ko accept karte hain. Jab function ko call kiya jata hai, unhe arguments diye jate hain.

// javascript
// Copy code
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3)); // Output: 8

// 5. Return Statement
// Function se value return karne ke liye return statement ka istemal hota hai.

// javascript
// Copy code
// function square(x) {
//     return x * x;
// }
// console.log(square(4)); // Output: 16

// 6. Function Scope
// Functions apne local scope mein variables ko define karte hain, jo bahar nahi dikhte.

// javascript
// Copy code
// function example() {
//     let x = 10; // Local variable
//     console.log(x);
// }
// example(); // Output: 10
// // console.log(x); // Error: x is not defined

// 7. Higher-Order Functions
// Functions ko arguments ke roop mein accept karna ya return karna.

// javascript
// Copy code
// function higherOrder(fn) {
//     return fn();
// }

// function sayHello() {
//     return "Hello!";
// }

// console.log(higherOrder(sayHello)); // Output: Hello!

// 8. Anonymous Functions
// Functions jo bina naam ke hote hain.

// javascript
// Copy code
// const myFunction = function() {
//     console.log("This is an anonymous function");
// };
// myFunction(); // Output: This is an anonymous function
// 9. Self-Invoking Functions
// Functions jo apne aap call hote hain.

// javascript
// Copy code
// (function() {
//     console.log("I am self-invoking!");
// })(); // Output: I am self-invoking!
// 10. Closures
// Functions jo apne lexical scope ko yaad rakhte hain, even after the outer function has executed.

// javascript
// Copy code
// function outerFunction() {
//     let count = 0;
//     return function innerFunction() {
//         count++;
//         return count;
//     };
// }

// const counter = outerFunction();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2


// function details() {
//     console.log("my name is shahzaib")
//     console.log("I'm 17 years old")
//     console.log("I'm a professional web developer")
// }

// details()

// var username = prompt ("bhai aap ka naam kya hai");
// var userage = prompt ("bhai aapki umer kya hai");
// var userwork = prompt ("bhai aap kya kaam karte ho");
// var usersalary = prompt ("bhai aap ki salary kitini hai");
// var useradress = prompt ("bhai aap kaha rehte hoo");

// function person () {
// console.log ("Name : " , username);
// console.log ("Age : " , userage);
// console.log ("Work : " , userwork);
// console.log ("Salary : " , usersalary);
// console.log ("Adress : " , useradress);
// }

// person () ;


// var vehicleNames = ["cycle", "motorbike", "car", "train", "bus", "ship", "aeroplane", "etc"];

// console.log (vehicleNames);

// var first = +prompt ("koi ak number bataye jise aap plus karana chahte hai")
// var second = +prompt ("dosra number bataye jise aap pehle number ke saath plus karana chahte hai")

// function sum (num1 , num2) {
//     return num1 + num2;
// }


// var result = sum(first, second)
// console.log ("sum : " + result)

// var first = +prompt ("koi ak number bataye jise aap plus karana chahte hai")
// var second = +prompt ("dosra number bataye jise aap pehle number ke saath plus karana chahte hai")

// console.log (first + second);

// var even_odd = +prompt ("koi aik number batao mai aapko batao ga ke aap ka number even tha ya odd"); 
// function checker() {

// if (even_odd%2 === 0) {
// console.log ("your given number is even");
// } else {
//     console.log ("your given number is odd");
// }
// }

// checker ()


function max_arr(big) {

}

var arr = [1,3,7,22,43,109];

function findMax(arr) {  //function declare
    if (arr.length === 0) {  // agr array ki lenght barabar hai zero ke tu array empty hai
        return "Array is empty."; // Check for empty array
    }
}
    let max = arr[0]; // var delare "max" 
    for (let i = 1; i < arr.length; i++) { // loop chalaya
        if (arr[i] > max) { //
            max = arr[i]
        }
    }
    console.log (arr[i]);