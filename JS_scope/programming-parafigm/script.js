let output = document.getElementById("output");
let output1 = document.getElementById("output1");

//PROGRAM PARADIGM
//1.Imperative programming  -- C, pascal , BASIC,
// sequence of expression

//2. Declarative  Programming--- presentational language thing -----  HTML, CSS, SQL
// --- what to do and does not care about how to do

// 3. Procedural Programming  ----- C , Pascal
// -function or block  for specific task

//4. Object-Oriented Programming(OOP)--- JAVA, C++,
// -- Every thing is object

//5. Functional Programming(FP)--- JS
// --- Every thing is function

// 6. Event-Driven Programming -  JS
// Graphical User Interface(GUI) event

// 7. Logical Programming -- --- Prolog
// logical rules and constraints

// 8. Parallel Programming -- JAVA

//9. Meta Programming  ---  Ruby, JS (higher-order function, eval)  -- used to build framework
// every thing is data and allows others gto modify itself

//OOP

class Student {
  // properties of objects
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //behaviour of object
  displayName() {
    return this.name;
  }
}
const student1 = new Student("shyam", 23);
const student2 = new Student("Shyam", 26);
const student3 = new Student("hari", 35);
console.log("object", student1, student2, student3);
console.log("METHOD", student3.displayName());

//encaplucation
//abstractution
// inheritance
// polymorphism

//FUNCTIONAL PROGRAMMING
//Separation of conception
// key features---- Pure function  , Side effect,  high order function, recursion function

//Recursive function

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};
output1.innerText = factorial(6);

// JS runtime environment
//Web optimization
//synchronous programming and asynchronous
//async/await -- used to data fetching

async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
}
fetchData();
