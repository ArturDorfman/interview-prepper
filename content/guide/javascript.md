---
title: 'JavaScript'
groupId: 'essentials'
---

# JavaScript

---

### General questions
#### What is the difference between == and ===?

#### What is the "!!" operator used for?
This operator is used for converting some value to a boolean.

#### What values in JS are false?
' ', 0, null, undefined, NaN, false.

#### What is ‘??’ and why can it be useful?
This is a ‘nullish coalescing operator’. It provides a way to provide a default value for a variable if its current value is null or undefined.

#### List data types in JS.

#### What is the difference between null and undefined?

#### What is the difference between an array and an object? In what cases do you use what?

#### What is the difference between var, let and const. In what cases what should be used?

#### What is variable scope?

#### Is it possible to override const?

#### What is destructuring? Can you give an example of destructuring an object or an array?
*  Array destructuring
```javascript
const [first, second, third, fourth] = numbers
```
*  Object destructuring
```javascript
const { firstName, lastName, age } = person
```

#### What is the difference between undefined and not defined?
* **"undefined"** means variable without value, or the result of trying to access a property that doesn't exist.
```javascript
let x;
console.log(x); // Output: undefined
let obj = {};
console.log(obj.property); // Output: undefined
```

* **"Not defined"** is used when trying to reference a variable or identifier that has not been declared.
```javascript
console.log(y); // ReferenceError: y is not defined
```

#### What are the benefits of including 'use strict' at the beginning of a JavaScript source file?
The "use strict" directive is used in JavaScript to enable strict mode. This is a set of rules and restrictions designed to make the code more robust, catch common coding errors, and prevent the use of certain error-prone features.
* **Error catching:** It turns previously silent errors into throw errors.
* **Safer code:** Assignments to read-only properties, assignments to undeclared variables are not allowed in strict mode.
* **Preventing global variables:** In strict mode, forgetting to declare variables with var, let, or const results in a ReferenceError.
* **Restrictions on ‘this’ binding:** In strict mode, the value of this is undefined in functions that are not methods or constructors.
* **Deprecated features are not allowed.**

#### How to access an HTML element from JS code and change its text?

#### What is Symbol? What is its practical application?

#### Do you know of any ways to detect if an element is in the user's viewport?

---

### Objects
#### How to transform an object into an array of object keys in JS?
By using Object.keys()

#### How can we clone JS objects?
* Use the spread operator.
* Call the Object.assign() function
* JSON.parse(JSON.stringify(data)
* Use the structuredClone() function
* We can create a deep clone function on our own.

#### What is the difference between Object.freeze and Object.seal methods?
Object.freeze() and Object.seal() are methods that allow you to control the mutability of objects.

Object.freeze():
: It makes the object immutable, which means you cannot add, modify, or remove properties from the object. Prevents the object's prototype from being changed.

Object.seal():
: It makes the object non-extensible, which means you cannot add or remove properties from the object. However, the values of existing properties can still be modified. Prevents the object's prototype from being changed.

#### What is the "new" keyword used for?
The ‘new’ keyword is used to create an instance of an object that is defined by a constructor function.

#### What is a prototype in JavaScript?
#### What is a Proxy?

---

### Array Methods
#### What methods for iterating arrays do you know?

#### What are the most popular methods of array?

#### What are flat(), map(), flatMap(), reduce()?

#### What takes and what default value for flat()?
It takes a value of deep for recursion. Default - Infinity

---

### Collections
#### What is a Map, Set, WeekMap, and WeekSet? When do we need them?
[Map, Set](https://javascript.info/map-set)
[WeekMap, WeekSet](https://javascript.info/weakmap-weakset)

#### In what cases do we need to use obj as a key in Map/WeekMap?

---

### Functions
#### What is an anonymous function and what they used for?

#### What is an arrow function and how is it different from a regular function?
Arrow function is another way to declare function. It has some specifics, like:
* Shorter syntax
* No ‘this’ binding. Instead, they inherit this from the enclosing scope.
* No ‘arguments’ object.
* No ‘new’ keyword.
* Implicit return. We can omit the braces and the ‘return’ keyword.

---

### Events in JS
#### Talk about event propagation, bubbling, delegation, preventing, etc.
#### How to know if the event.preventDefault method was used in an element?
We can **use the event.defaultPrevented property in the event object.** It returns a boolean indicating if the event.preventDefault() was called in a particular element.

---

### Closure
#### What is closure in JavaScript and how does it work?

---

### Scope
#### What is the Scope?

---

### Context
#### What is a context? How can I change the execution context of a function?

#### What are three ways to bind a specific object to the “this” value of the called function and the difference between them?

* **‘Call’** is a function that helps you change the context of the invoking function.
```javascript
func.call(thisObj, args1, args2, ..., argN)
```

* **‘Apply’** is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
```javascript
func.apply(thisObj, argsArray)
```

* **‘Bind’** is a function that helps you create another function that you can execute later with the new context of this that is provided.
```javascript
let copyFn = func.bind(someObj, arg1, arg2, ..., argN)
copyFn()
```
Details in this [article](https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/).

---

### Event Loop
#### What is an event loop? How does it work?

---

### Asynchronous in JS
#### How is asynchronous code executed in JavaScript?

#### What does the async function return? How to catch an error in the `let res = await getApi()` expression.
In JavaScript, an async function returns a promise. We can catch an error with try/catch construction.

#### What is async / await?
‘async’ and ‘await’ are keywords used in asynchronous programming to simplify working with promises.

#### How do you work with asynchronous code in JavaScript without using async/await? What other approaches are you considering for working with asynchronous?

#### What is a Promise? In what cases do you use it?

#### How to implement a few concurrent async API calls and handle its response altogether?
Promise.all() and Promise.allSettled()

#### What is the difference between Promise.all() and Promise.allSettled()?
Promise.all() and Promise.allSettled() are designed to handle an array of promises and return a single promise.

Promise.all()
: The result promise of Promise.all() is fulfilled with an array of the resolved values. If any of the input promises is rejected, the entire Promise.all() is rejected immediately with the reason of the first rejected promise.

Promise.allSettled()
: The result promise of Promise.allSettled() is fulfilled with an array of objects representing the outcome of each promise. Each object has a status property that is either "fulfilled" or "rejected", and a value or reason property, depending on whether the promise was fulfilled or rejected. It waits for all promises to settle (either fulfill or reject) before fulfilling its own promise.

---

### Functional Programing
#### What is functional programming?
#### Name the principles of OOP.

---

### OOP
#### What is OOP?
#### What are the features of object-oriented programming in JavaScript?

---

### Spread and Rest Operators
#### What is a spread and rest operators?
#### Tell us about all the ways to use the '...' operator.

### What happens if you refer to an element that doesn't exist at index (const arr = ['a', ’b']; console.log(arr[20])?
### What is the difference between for...of and for...in?

---

### When do you use Map and Set?
### What are Service Workers and in what cases do you use them?
### What are Websockets? What are they needed for?
### How do you handle errors in your application?
### What are Access Modifiers?
### What is type guard?
### What is the purpose of creating an abstract class?
### What kinds of object models do you know?
### What are polyphiles and what are they for?
### What are ES6 modules?
### How do you use modularity in JavaScript to organize your code?
### What approaches do you use to avoid conflicts and ensure code readability and scalability?
### How do you optimize and work with animations in the browser? What approaches do you use to achieve high performance and smooth animations?
### How do you implement lazy loading of large resources such as images or scripts to optimize page loading? How does this interact with asynchronous code?
### How do you use code quality assurance tools like ESLint? How do you define and adhere to code style in a project?
### How do you work with architecture and design patterns in JavaScript? What specific patterns do you use to structure your code and make it easier to extend?
### How would you implement a percentage preloader on a site that needs to load images, 3D objects, and additional JSON files?
### Do you have experience with PWAs?
### What are generator functions and what are their practical uses?

---

### How to traverse the Promises array in parallel? And consecutively?
### Give examples of implementing the Observer pattern in a browser.
### Give examples of scenarios that could lead to a memory leak in client code.
### What is the difference between Websockets and Server Send Event?
### Tell us about Service Workers.
### How to work with WebSockets to implement two-way communication?
### If any animation on the site is slow (low FPS), how do I know why? What are the reasons?
### What code/pattern organization methods do you use and why?
### What are the options for storing data on the client?
### How would you implement caching on the client? When is it appropriate?
### How do you implement authentication and authorization (if any) in your application? How do you handle client-side and server-side security and access rights management?
### How do you use code splitting and lazy loading in your code to optimize page and resource loading? How does this affect application performance?
### How do you implement automated testing during development? What tools do you use for unit testing, integration testing, and interaction testing?
### There is a task to transfer data between two different websites. What are the ways to do this? And if only client side? If we have access to the code of both sites? If one is displayed on another via an iframe? What if we don't have access to one of them?

---