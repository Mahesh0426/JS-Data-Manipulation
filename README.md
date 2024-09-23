write a complete blog on reduce in JS Array data manupulation?
make a small counter clock using the concept of set interval clock

assignment ---build a simple form to let user enter address and then display formatted address.
covert your student records project to use map and object de-structuring

every method in data manipulation is a petential interview question

### 1. explain the didference between map and filter in JS?

Both map() and filter() are powerful array methods, but they serve different purposes:

##### map():

- It creates a new array by applying a function to each element of the original array.
- It transforms the elements of the array, returning a new array with the same length as the original.
- Example: If you have an array of numbers and want to double each number, you would use map().

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]
```

##### filter():

- It creates a new array by keeping only the elements that pass a certain condition (true/false check).
- It filters the array and returns a new one with fewer elements, depending on the condition.
- Example: If you want to get only the even numbers from an array, you would use filter().

```javascript
const numbers = [1, 2, 3];
const even = numbers.filter((num) => num % 2 === 0); // [2]
```

### 2.explain reduce?

reduce() is a powerful array method that allows you to combine all the elements of an array into a single value. It "reduces" the array by applying a function to each element, along with an accumulator (a running total or result). The final result can be a number, object, string, or even another array.

for eg : Here's a simple example to find the sum of all elements in an array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
```

#### 3. what is schedulling in JS?

ans:In JavaScript, scheduling refers to the process of managing when certain tasks or functions should be executed. This is especially important in environments like web browsers, where JavaScript is used to create interactive and dynamic web pages.
setTimeout, setInterval, and clearTimeout and clearInterval.

**_1. SetTimeout :_** The `setTimeout()` method is used to execute a function after a specified delay (in milliseconds). It runs asynchronously, meaning it doesn’t block the code execution but schedules the function to run after the set time
SYNTAX:

```javascript
setTimeout(callbackFunction, delayInMilliseconds);
```

###### EXAMPLE

```javascript
console.log("Start");
setTimeout(() => {
  console.log("Delayed function executed after 2000ms");
}, 2000);
console.log("End");
```

Explanation:

- Step 1: When the script starts, it immediately logs "Start".
- Step 2: The setTimeout() schedules the function to log "Delayed function executed after 2000ms" after a 2-second delay. However, this function does not run immediately—it is put in the queue to run after 2000 milliseconds.
- Step 3: Without waiting for the setTimeout() to finish, the script moves forward and logs "End".
- Step 4: After 2 seconds, the delayed function is executed, logging "Delayed function executed after 2000ms"

**_2. ClearTimeOut :_** In JavaScript, the clearTimeout() method is used to stop a timer set by setTimeout(). The setTimeout() function allows you to delay the execution of a function, but sometimes you might want to cancel that delayed execution before it occurs, and that’s where clearTimeout() comes in.
SYNTAX :

```javascript
const timeoutId = setTimeout(callbackFunction, delayInMilliseconds);
clearTimeout(timeoutId);
```

##### EXAMPLE

```javascript
// Function to be executed after a delay
function showMessage() {
  console.log("This message was supposed to appear after 5 seconds.");
}

// Schedule the showMessage function to execute after 5 seconds
const timeoutId = setTimeout(showMessage, 5000);

// Cancel the timeout after 2 seconds
setTimeout(() => {
  clearTimeout(timeoutId); // Cancels the 5-second timeout
  console.log("Timeout was cleared, the message will not be shown.");
}, 2000);
```

Explanation:

- Step 1: setTimeout(showMessage, 5000) schedules the showMessage() function to run after 5 seconds.
- Step 2: The setTimeout() for clearTimeout() schedules another function to run after 2 seconds, which will cancel the first timeout using clearTimeout(timeoutId).
- Step 3: The first timeout is canceled, so the showMessage() function never runs.
- Step 4: The message "Timeout was cleared, the message will not be shown." is logged after 2 seconds.

**_3.setInterval:_** It is same as setTimeout(), but In JavaScript, setInterval() is a method used to repeatedly execute a function or a block of code after a specified time interval (in milliseconds). The function keeps running at that interval until it is explicitly stopped using clearInterval().

SYNTAX:

```js
setInterval(callbackFunction, intervalInMilliseconds);
```

##### EXAMPLE:

```js
const intervalId = setInterval(() => {
  console.log("Repeated function executed every 1000ms");
}, 1000);
```

In this example,
i.setInterval schedules a function to execute every 1000ms (1 seconds).
i. The provided function will be executed once every 1 seconds, and this repetition continues until the interval is explicitly cleared using clearInterval.

**_4.clearInterval :_** It is a built-in function in JavaScript used to cancel a timer that was previously set using setInterval.
SYNTAX:

```js
const intervalId = setInterval(callbackFunction, intervalInMilliseconds);
clearInterval(intervalId);
```

EXAMPLE:

```js
const intervalId = setInterval(() => {
console.log('This function will be stopped after 5 seconds');
}, 1000);

clearInterval(intervalId);
console.log('Interval stopped');
, 5000);
```

In this example,
i. setInterval schedules a function to execute every 1000ms (1 second).
ii. After 5 seconds (5000ms), clearInterval is called with the intervalId returned by setInterval.
iii. As a result, the function inside setInterval will no longer be executed repeatedly.

#### 5. have you heard of regex if yes what is this?

Ans: A regular expression is a pattern of characters.The pattern is used for searching and replacing characters in strings.
The RegExp Object is a regular expression with added Properties and Methods.
