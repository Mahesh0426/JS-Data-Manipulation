let output = document.getElementById("output");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");

// SYNTAX: data.function-to-manipulate-data()
// number Data manipulation
// isNaN
let isNumber = isNaN("aanjan");
output.innerText = isNumber;

//parseInt
let number = "2";
output1.innerText = parseInt(number);
// output1.innerText = typeof parseInt(number);

//parseFloat
let number1 = "2.34";
output1.innerText = parseFloat(number1);
output1.innerText = typeof number1; // donot chnage original value

// toFixed
number = 2.4547;
output1.innerText = number.toFixed(1); // toFixed(1), toFixed(2), toFixed(3)

//isFinite
output1.innerText = isFinite(1 / 0);

//Math Object
//MAth.inbuiltFunction(number)
output.innerText = Math.round(2.5);
output.innerText = Math.floor(2.5); // down wards
output.innerText = Math.ceil(2.5); // upwards wards
output.innerText = Math.min(11, 24, 8);
output.innerText = Math.max(11, 24, 8);
output.innerText = Math.abs(-5); // neg to pos
output.innerText = Math.pow(2, 5); // power
output.innerText = Math.sqrt(27); // square
output.innerText = Math.random(6) * 100; // it generates random num 0 to 1.
output.innerText = Math.LOG10E;

// optional math
output.innerText = Math.sin(20);

//escape character
output.innerText = 'hello, this is dented code\\"';
output.innerText = "dentedCode";
output.innerText = 'Prem sir said,"I am not good at spelling!"';
output.innerText =
  "Hello,\n\v\v\vWelcome\nto\n\v\v\vJavascript\n\v\v\v\v\vCourse!";

// string Method
const string = "Dented code      ";
output.innerText = string.length;

// Extracting string character | position -(2)
output.innerText = string.at(2);
//output.innerText = string.at(-2); //charAT do not allow -2
output.innerText = string.charCodeAt(1);
output.innerText = string[3]; // anotther way for particilar character

//Extracting  String parts
output.innerText = string.slice(0, 5);
output.innerText = string.substring(0, 5); // same
output.innerText = string.substr(0, 5);

//converting to nuppercase and lowwer case
output.innerText = string.toUpperCase();
output.innerText = string.toLowerCase();

// concatenation and triming
output.innerText = string.concat("Academy", "Academy");
output.innerText = string.trim();
output.innerText = string.trimStart();
output.innerText = string.trimEnd();

//repead and replace
output.innerText = string.repeat(3);
output.innerText = string.replace("Dented", "dent");
// output.innerText = "Dented Dented".replace("Dented", "bented");
// output.innerText = "Dented Dented".replaceAll("Dented", "bented");

//converting string to array
output.innerText = string.split("", 4);

// String search
let string2 = "dented dented";
output.innerText = string.indexOf("ted", 0);
output.innerText = string2.indexOf("ted", 0);
output.innerText = string2.lastIndexOf("ted");
output.innerText = string.search("ed");
output.innerText = string.match(/e/g);
output.innerText = string.includes("ode");
output.innerText = string.startsWith("Den");
output.innerText = string.endsWith("od");

//Array  Data maniupulation
const grocceryList = ["milk", "chicken", "potato", "sugar"];
//lenght
output1.innerText = grocceryList.length;

//Accessing the array elements
output1.innerText = grocceryList[3];
output1.innerText = grocceryList.indexOf("milk");
// output1.innerText = grocceryList.lastindexOf("milk"); // if there is 2 milk

//adding and removing element
const newGrocceryList = grocceryList.push("salt");
output1.innerText = grocceryList;
grocceryList.pop(); // took out last element
output1.innerText = grocceryList;

// shift unshift
grocceryList.unshift("apple");
output1.innerText = grocceryList;
grocceryList.shift();
output1.innerText = grocceryList;

//splice --remove the element ---- replace that removed element
grocceryList.splice(2, 3); // remove ,replace , insert
output1.innerText = grocceryList;

//combine and spiting arrays
const num1 = [9, 3, 8, 10];
const num2 = [2, 4, 6];
output1.innerText = num1.concat(num2);
output1.innerText = num1.join("|");

output1.innerText = num1.slice(0, 2);

// Sorting and reversing
// string sorting
output1.innerText = num1.sort();
output1.innerText = num1.reverse();
output.innerText = grocceryList.reverse();

//iterating over arrays
const grocceryList1 = ["milk", "chicken", "potato", "sugar"];
grocceryList1.forEach((item) => (output.innerText += item));

//mapping
// array.map(() => {})
grocceryList1.map((item) => (output1.innerText += item));
const newArray = num2.map((item, index) => {
  return item * 2;
});
output.innerText = newArray;

//anonymous function -- which doesnot have function name
// ()=>{}

//arrow function
// const add = () =>{}

// filter method
const newArray1 = num2.filter((item) => {
  return item + 2;
});
output.innerText = newArray1;

// Reduced----it remember one step back
// array.reduce(() => {},initializerForAccumulator)
const calc = [1, 2, 3, 4, 5, 6].reduce((accumulator, currentitem) => {
  return accumulator + 1;
});
// output2.innerText = calc;

const calc1 = [5, 10].reduce((accumulator, currentitem) => {
  return accumulator + currentitem;
});
// output2.innerText = calc1;

const calc2 = [12, 23, 8, 7, 11, 120, 2].reduce((accumulator, currentitem) =>
  Math.max(accumulator, currentitem)
);
// output2.innerText = calc2;

//Searchin element inn array
const evenNum = [2, 4, 6, 8];
output2.innerText = evenNum.find((item) => item > 4); // it retuens 1st item it finds

output2.innerText = evenNum.findIndex((item) => item === 4);
output2.innerText = evenNum.includes(3);

//flat and flatmap
const nestedArray = [1, 2, [5, 6], [10, 20]];
output2.innerText = nestedArray.flat();
console.log(nestedArray.flat());

const nestedArray2 = [1, 2, [5, 6], [10, [20, 100]]];
output2.innerText = nestedArray2.flat();
console.log(nestedArray2.flat(2));

// flatmap explore about it

// object data manipulation
const studentDetails = {
  name: "mahesh",
  address: "newtown",
  age: 22,
  phone: "12345678",
};
///accessing object properties
// output2.innerText = studentDetails.name; ----dot notation
//output2.innerText = studentDetails["name"]; //bracket notation

//assign value | add certain property

Object.assign(studentDetails, { gender: "male" });
output2.innerText = studentDetails.gender;
console.log("studentDetails", studentDetails);

///spread  operator
const updatedstudentDetails = { ...studentDetails, country: "nepal" };
console.log("updatedstudentDetails", updatedstudentDetails);

const updatedstudentDetails2 = { ...studentDetails, name: "ramesh" };
console.log("updatedstudentDetails2", updatedstudentDetails2);

//delete a properties
delete updatedstudentDetails2.address;
console.log("updatedstudentDetails2", updatedstudentDetails2);

// converting  object into array
const arrayObj = Object.entries(studentDetails);
console.log("arrayObj", arrayObj);

const arrayObj2 = Object.keys(studentDetails);
console.log("arrayObj", arrayObj2);

const arrayObj3 = Object.values(studentDetails);
console.log("arrayObj", arrayObj3);

//looping in object
const arrayObj4 = Object.values(studentDetails).map((key) => key);
console.log("array4", arrayObj4);

//destructure Objects
const { name = "ramesh", address: fullAddress, roomnum = 12 } = studentDetails;
output2.innerText = fullAddress + name + roomnum;

//default paramaters,rest paramaters and spread
const addNum = (a = 3, b = 2) => a + b;
output2.innerText = addNum(4, 7);

const nameDetails2 = {
  address: "newtown",
  age: 22,
  phone: "12345678",
};

const printName = (details = { name: "default name" }) => details.name;
output2.innerText = printName();

// const printName = (details) =>{
//   const{name = "default value",address}=details
//   return name + address
// }

const printName1 = ({ name = "DJ", address = "test", age = 4 }) =>
  name + address;
output2.innerText = printName1(nameDetails2);

//rest paramater
// const printName3 = (...nameDetails2) => {
//   return nameDetails2.adddress;
// };
// output2.innerText = printName3(nameDetails2);

//Date Manipilation
const currentDate = new Date();
output2.innerText = currentDate;

//extract date info  | et method

output2.innerText = currentDate.getTime();
output2.innerText = currentDate.getFullYear();
output2.innerText = currentDate.getDay();
output2.innerText = currentDate.getMonth();

output1.innerText = currentDate;

// Set Methods
currentDate.setTime(23475749580);
currentDate.setMonth(2);
currentDate.setDate(15);
output2.innerText = currentDate;

console.log(currentDate);

///Date formattng
output2.innerText = currentDate.toLocaleDateString();
output2.innerText = currentDate.toLocaleString();
output2.innerText = currentDate.toLocaleTimeString();

const bday = new Date("2002/01/01");
output2.innerText = bday;

//JS Schedulling function
// time out | interval

const printLog = () => console.log("hello!!!");

// setTimeout(printLog, 3000);

const greetUsers = () => alert("welcome to my website!!");
// setTimeout(greetUsers, 3000);

// interval
const time = setInterval(printLog, 3000);
setTimeout(() => clearInterval(time), 9001);

// counter clock
// let counter = 0;
// const timer = () => (output2.innerText = counter = counter + 1);
// setInterval(timer, 1000);

//REGEX --regular expression
// SYNTAX  --- /pattern/modifier(s)
const sentence = "the quick brown fox jumps over the lazy dog";
const regex = /\b/;
output2.innerText = sentence.match(regex);

//rests
const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr);
};
output2.innerText = sum(1, 2, 3, 4, 5);

// destructuring
const num4 = [1, 2, 3, 4, 5];

const [a, b, ...rest] = num4;
console.log(a, b, ...rest);

const details = {
  address: "newtown",
  age: 22,
  phone: "12345678",
};

const { address, ...rest1 } = details;
console.log(address, ...rest1);
