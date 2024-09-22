let output = document.getElementById("output");
let output1 = document.getElementById("output1");

// SCOPING
// 1. Global scope -
const globalvar = "Global variable";

const globalFunction = () => (output1.innerText = "Global function");

// const testScope = () => (output1.innerText = globalLet);

// testScope();

var globalVAr2 = "global var 2";
let globalLet = "global  let";

// 2. FUNCTIONAL SCOPE
//using const
const function1 = () => {
  const fun1VAr = " function var";
  //   output1.innerHTML = fun1VAr;
};

function1();

//using var
const function2 = () => {
  var fun2VAr = " function var";
  //   output1.innerHTML = fun2VAr;
};
function2();

//using let
const function3 = () => {
  let fun2VAr = " function var";
  //output1.innerHTML = fun2VAr;
};

function3();

//inner function
const function4 = () => {
  const innerFun1 = () => {
    // output1.innerHTML = globalvar;
  };
  innerFun1();
};

//  3.BLOCK SCOPE  it is for let and const
if (true) {
  let blockVAr = " block variable";
  //output1.innerHTML = blockVAr;
}

//4. LEXICAL SCOPE
// function inside function
const outerFunction = () => {
  const outerFunction = "outer function";
  innerFunction = () => {
    innerFun = "inner function";
    // output1.innerHTML = outerFunction;
  };
  innerFunction2 = () => {
    innerFun2 = "inner function2";
    output1.innerHTML = innerFun2;
    // innerFununction();
  };
  innerFunction();
  innerFunction2();
};
outerFunction();

//SCOPE CHAIN
//"use strict:"
