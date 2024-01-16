---
title: 'JavaScript'
groupId: 'essentials'
---

# JavaScript

---

### General questions
#### What is the difference between == and ===?
The main difference is that '===' checks for equality of both value and type.

#### What is the "!!" operator used for?
This operator is used for converting some value to a boolean.

#### What values in JS are false?
' ', 0, null, undefined, NaN, false.

#### What is ‘??’ and why can it be useful?
This is a ‘nullish coalescing operator’. It provides a way to provide a default value for a variable if its current value is null or undefined.

#### List data types in JS.
JavaScript has several primitive data types and one complex data type.
Here's a list of the data types in JavaScript:
* Number
* String
* Boolean
* Undefined
* Null
* Symbol
* Object

#### What is the difference between null and undefined?
They are two primitive types in JS. **Null** is explicitly assigned to a variable or property to represent the absence of a value or an empty value.
**Undefined** used when a variable is declared but not assigned a value, or a function has no return statement.

#### What is the difference between an array and an object? In what cases do you use what?
1. Structure
   * An **array** is an ordered collection of values, each identified by an index or a key.
     The indices are integers, and they start from 0. Arrays are a special type of object in JavaScript where keys are automatically assigned as incremental integers starting from 0.
   * An **object** is an unordered collection of key-value pairs. The keys in an object are strings or symbols, and each key is associated with a value.
   Objects can store data in a more structured way compared to arrays.

2. Use Cases
   * Array
     * Use arrays when you have a collection of similar or sequential data.
     * Arrays are suitable for ordered lists, stacks, queues, etc.
     * When the order of elements is important or when you need to access elements by their index.

   * Object
     * Use objects when you have a collection of data with named properties.
     * Objects are useful when dealing with key-value pairs and when the order of the data is not significant. 
     * Objects are often used to represent entities or concepts in the real world (e.g., representing a person with properties like name, age, and address).

Example combining both array and object:
```javascript
let person = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'coding', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
  }
}
```

#### What is the difference between var, let, and const. In what cases should be used?
A table summary showing the differences between these keywords.

| KEYWORD   | SCOPE                  | REDECLARATION & REASSIGNMENT   | HOISTING                     |
|-----------|------------------------|--------------------------------|------------------------------|
| var       | Global, Local          | yes & yes                      | yes, with default value      |
| let       | Global, Local, Block   | no & yes                       | yes, without default value   |
| const     | Global, Local, Block   | no & no                        | yes, without default value   |

Good explanation in [article](https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/) on freeCodeCamp or on the [video](https://www.youtube.com/watch?v=Gd_JG3e1g4A&ab_channel=DeeecodeTheWeb) as well.

#### What is variable scope (other name is a lexical environment)?
An [article](https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/) on freeCodeCamp gives a good understanding of scopes.

#### Is it possible to override const?
We can't override const if it is a primitive.
```javascript
const myNumber = 10;
myNumber = 20; // This will result in an error
```
The only exception is a case when we store some object or array. In this case we can override property from it.
```javascript
const myArray = [1, 2, 3];
myArray[0] = 4; // This is allowed
console.log(myArray); // Output: [4, 2, 3]

const myObject = { key: 'value' };
myObject.key = 'new value'; // This is allowed
console.log(myObject); // Output: { key: 'new value' }
```

#### What is destructuring? Can you give an example of destructuring an object or an array?
Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects into distinct variables.
It provides a concise syntax for extracting multiple values and assigning them to variables in a single statement.

*  Array destructuring
    ```javascript
    // Example 1: Basic Array Destructuring
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, , fourth] = numbers;
    
    console.log(first);  // Output: 1
    console.log(second); // Output: 2
    console.log(fourth); // Output: 4
    
    // Example 2: Swapping values using Array Destructuring
    let a = 1;
    let b = 2;
    
    [a, b] = [b, a];
    console.log(a); // Output: 2
    console.log(b); // Output: 1
    ```

*  Object destructuring
    ```javascript
    // Example 1: Basic Object Destructuring
    const person = {
        name: 'John',
        age: 30,
        city: 'New York',
    };
    
    const { name, age, city } = person;
    
    console.log(name); // Output: John
    console.log(age);  // Output: 30
    console.log(city); // Output: New York
    
    // Example 2: Assigning to different variable names
    const user = {
        username: 'jsDev',
        email: 'jsdev@example.com',
    };
    
    const { username: alias, email: userEmail } = user;
    
    console.log(alias);     // Output: jsDev
    console.log(userEmail); // Output: jsdev@example.com
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
Here is an example of the way how we can do this.
```javascript
function changeText() {
    // Access the HTML element with the id "myParagraph"
    const myElement = document.getElementById("myParagraph");

    // Change the text content of the element
    myElement.textContent = "New Text!";
}
```

#### What is Symbol? What is its practical application?
Symbols are a powerful addition to JavaScript, providing a way to create unique identifiers and hidden properties, contributing to better code organization and reducing the risk of naming conflicts.

Symbols have two main use cases:
1. Creating Unique Keys
   * Symbols are often used to create unique keys for object properties. Since symbols are guaranteed to be unique, they are useful for avoiding naming collisions in objects.
    ```javascript
    const mySymbol = Symbol('uniqueKey');
    const myObject = {};
    
    // Using the symbol as a unique key
    myObject[mySymbol] = 'Some value';
    console.log(myObject[mySymbol]); // Outputs: Some value
    ```

2. “Hidden” object properties.
   * Symbols are useful for defining "private" or "hidden" properties in objects.
   Because symbols are not exposed through Object.keys() or for...in loops, they provide a way to attach metadata to objects without the risk of accidental interference.
    ```javascript
    const privateProperty = Symbol('private');
    
    const myObject = {
        [privateProperty]: 'This is a private property',
        publicProperty: 'This is a public property'
    };
    
    console.log(myObject[privateProperty]); // Outputs: This is a private property
    console.log(myObject.publicProperty);   // Outputs: This is a public property
    
    // However, the private property won't show up in Object.keys() or for...in loops
    console.log(Object.keys(myObject)); // Outputs: ["publicProperty"]
    ```

[Detail information about basic usage of Symbol](https://javascript.info/symbol).

#### Do you know of any ways to detect if an element is in the user's viewport?
The Intersection Observer API is generally recommended for modern applications.

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

* Object.freeze():
  * It makes the object immutable, which means you cannot add, modify, or remove properties from the object.
  Prevents the object's prototype from being changed.

* Object.seal():
  * It makes the object non-extensible, which means you cannot add or remove properties from the object.
  However, the values of existing properties can still be modified. Prevents the object's prototype from being changed.

#### What is the "new" keyword used for?
The ‘new’ keyword is used to create an instance of an object that is defined by a constructor function.

#### What is a prototype in JavaScript?
In JavaScript, a prototype is an internal, hidden property of objects that is used for inheritance.
Every object in JavaScript is associated with a prototype object, which acts as a blueprint for the object.
This prototype object itself may have another prototype, forming a prototype chain.

#### What is a Proxy?
A Proxy object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them.

Details in this [article](https://javascript.info/proxy).

#### What is OOP?
#### What are the features of object-oriented programming in JavaScript?

---

### Array Methods
#### What are the most popular methods of array?
There are many methods of array. Here are the most commonly used forEach, map, reduce, filter, some, every, flat, flatMap, find etc.

#### What takes and what default value for flat()?
It takes a value of deep for recursion. Default - Infinity

---

### Collections
#### What is a Map, Set, WeekMap, and WeekSet? When do we need them?
In JavaScript, Map, Set, WeakMap, and WeakSet are built-in objects that provide collections for storing and managing data.

When to use them
* Use Map when you need to associate keys with values, especially when the keys can be of any data type.
* Use Set when you need to store a collection of unique values.
* Use WeakMap and WeakSet when you want to associate data with objects without preventing those objects from being garbage collected.
They are often used in scenarios where the additional data should be automatically cleaned up when the associated object is no longer needed.

Here are articles with detailed information about [Map, Set](https://javascript.info/map-set) and [WeekMap, WeekSet](https://javascript.info/weakmap-weakset).

---

### Functions
#### What is an anonymous function and what are they used for?
In JavaScript, an anonymous function is a function that is defined without a name.
This function type in case where we have not to name specific function.
We can use function expression syntax and save anonymous function in variable.
Also, we can use anonymous function as a callback.

#### What is an arrow function and how is it different from a regular function?
Arrow function is another way to declare function. It has some specifics, like:
* Shorter syntax
* No ‘this’ binding. Instead, they inherit this from the enclosing scope.
* No ‘arguments’ object.
* No ‘new’ keyword.
* Implicit return. We can omit the braces and the ‘return’ keyword.

#### What is functional programming?
[Functional programming](https://www.freecodecamp.org/news/functional-programming-in-javascript/) is a sub-paradigm from the Declarative paradigm, this affects the way you write functional code.
It generally leads to less code, because JavaScript already has a lot of the in-built functions you commonly need.
It also allows you to abstract away a lot (you don't have to understand in depth how something gets done), you just call a function that does it for you.

Functional programming can be simply explained by following these 2 laws in your code:
1. Architect your software out of pure, isolated functions
   * **Pure functions**. The same input always gives the same output (idempotence), and has no side effects.
   An idempotent function, is one that, when you reapply the results to that function again, doesn't produce a different result.
   * **Isolated functions**. There is no dependence on the state of the program, which includes global variables that are subject to change.
   Anything that you need should be passed into the function as an argument.
   * **Reusability through Higher order functions**. A higher order function is a function that either take a function as an argument, returns a function, or both!
     The in-built JavaScript Array functions .map, .reduce, and .filter all accept a function. They are excellent examples of higher order functions, as they iterate over an array and call the function they received for each item in the array.

2. Avoid mutability and side-effects
   * **Make your code referentially [transparent](https://medium.com/@olxc/referential-transparency-93352c2dd713)**.
   That is, your function calls can be replaced with the values that they represent without affecting the result.
    ```javascript
    const greetAuthor = function(){
        return 'Hi Kealan'
    }
    ```
   * **Don't iterate**. Use the map higher order function instead of for loop.

3. More Features of Functional Programming
   * [Recursion](https://javascript.info/recursion) in Functional Programming
    ```javascript
    function recurse(start, end){
        if (start == end) {
            console.log(end)
            return;
        } else {
            console.log(start)
            return recurse(start+1, end)
        }
    }
    
    recurse(1, 10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ```
   * [Currying](https://javascript.info/currying-partials) in Functional Programming
     * The big benefit of currying is when you need to re-use the same function multiple times but only change one (or fewer) of the parameters.
    ```javascript
    function curryAdd(firstNum){
        return function(secondNum){
                return firstNum + secondNum;
        }
    }
    
    let add10 = curryAdd(10);
    add10(2); // Returns 12
    
    let add20 = curryAdd(20);
    add20(2); // Returns 22
    ```     

   * [Partial application](https://www.linkedin.com/advice/0/how-can-you-use-partial-application-functional-qcphc) in Functional Programming
   * Function composition in Functional Programming
     * Here some articles that explain this aspect. [Medium](https://medium.com/@akhilanand.ak01/function-composition-in-javascript-exploring-the-power-of-compose-4114da8b9875), [Dev](https://dev.to/biomathcode/composition-of-functions-178g).

---

### Events in JS
#### Talk about event propagation, bubbling, delegation, preventing, etc.
Event propagation, bubbling, delegation, and preventing are all concepts related to the handling of events in JavaScript.
1. Event Propagation
   * Event propagation refers to the process by which events are transmitted or passed through the DOM hierarchy.
   * There are two phases of event propagation: capturing phase and bubbling phase.
An article that explain [capturing phase and bubbling phase](https://javascript.info/bubbling-and-capturing).

2. Capturing Phase
   * During the capturing phase, the browser traverses down from the root of the DOM tree to the target element.
   * Event listeners attached to ancestors of the target element have the opportunity to intercept the event during this phase.

3. Bubbling Phase
   * After the capturing phase, the browser starts from the target element and propagates the event upward through its ancestors.
   * Event listeners attached to these ancestors can handle the event during the bubbling phase.

4. Event Bubbling
   * Event bubbling is the most common form of event propagation.
   * It allows an event to "bubble up" from the target element to its ancestors in the DOM hierarchy.

5. Event Delegation
   * Event delegation is a design pattern that takes advantage of event propagation to handle events efficiently.
   * Instead of attaching an event listener to each individual element, you can attach a single event listener to a common ancestor.
   * When an event occurs, it will bubble up to the common ancestor, and you can check the target of the event to determine which specific element triggered the event.
Detailed explanation of [event delegation](https://javascript.info/event-delegation) on javascript.info or an article on [freeCodeCamp](https://www.freecodecamp.org/news/event-delegation-javascript/).

6. Event Prevent Default
   * The preventDefault() method is used to stop the default behavior of an element.
   * For example, preventing the default behavior of a form submission or a link click.
   * This method is often used in conjunction with event handling to control the default actions triggered by certain events.

7. Stopping Propagation
   * The stopPropagation() method can be used to stop the propagation of an event, either during the capturing or bubbling phase.
   * This can be useful in scenarios where you want to prevent an event from reaching ancestor or descendant elements.

#### How to know if the event.preventDefault method was used in an element?
We can **use the event.defaultPrevented property in the event object.** It returns a boolean indicating if the event.preventDefault() was called in a particular element.

---

### Closure
#### What is closure in JavaScript and how does it work?
A closure is a function that remembers its outer variables and can access them.
All functions in JavaScript are closures.

Let's talk about Closure a bit in-depth.

In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

The Lexical Environment (Scope) object consists of two parts:
* Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
* A reference to the outer lexical environment, the one associated with the outer code.

**A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.**
The inner Lexical Environment has a reference to the outer one.
When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.

An article about Closure on [javascript.info](https://javascript.info/closure).

---

### Context
#### What is a context? How can I change the execution context of a function?
Execution Context is the management of what is currently running. We can change the execution context of a function with help of call, apply, and bind methods.

#### What are three ways to bind a specific object to the “this” value of the called function and the difference between them?
* **‘[Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)’** is a function that helps you change the context of the invoking function.
```javascript
const sayName = function () {
    console.log(`My name is ${this.name}`);
};
const person = {
    name: 'Dude',
    age: 34
};

sayName.call(person) // My name is Dude
// func.call(context, arg1, arg2, ...) or func.call(context, ...args)
```

* **‘[Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)’** works in a similar fashion to ‘call’, but we can pass in collection or array of arguments.
```javascript
const sayName = function(lang1, lang2, lang3) {
    console.log(`I know ${lang1}, ${lang2} and ${lang3}.`);
};
const languages = ['JavaScript', 'Ruby', 'Python'];

sayName.apply(null, languages)
// func.apply(context, args)
```

* **‘[Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)’** is a function that helps you create another function that you can execute later with the new context of this that is provided.
```javascript
const module = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

// let copyFn = func.bind(someObj, arg1, arg2, ..., argN)
// copyFn()
```

Details in this [article](https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/).

---

### Event Loop
#### What is an event loop? How does it work?
[Event Loop](https://javascript.info/event-loop) is a crucial part of the runtime environment, responsible for managing and processing events.
The event loop enables JavaScript to be non-blocking and asynchronous, allowing it to handle multiple operations simultaneously without waiting for one to finish before moving on to the next.
The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

The general algorithm of the engine:

1. While there are tasks:
   * execute them, starting with the oldest task.
2. Sleep until a task appears, then go to 1.

Here's a simplified explanation of how the event loop works:
1. Call Stack
   * The JavaScript runtime has a call stack, which is a data structure that keeps track of function calls in the code.
   * When a function is called, it is added to the top of the stack, and when a function is completed, it is removed from the stack.

2. Callback Queue
   * JavaScript is a single-threaded language, meaning it can only execute one operation at a time.
   * Asynchronous operations, like setTimeout, AJAX requests, or event listeners, are not processed immediately. Instead, their callbacks are placed in the callback queue.

3. Event Loop
   * The event loop continuously checks the call stack and the callback queue.
   * If the call stack is empty, it takes the first callback from the queue and pushes it onto the stack, allowing it to be executed.

Here's a step-by-step breakdown:
* When an asynchronous operation is encountered, its callback is scheduled to be executed later.
* The call stack continues to execute synchronous code.
* Once the call stack is empty, the event loop takes the first callback from the queue and pushes it onto the stack.
* The callback is executed, and the process repeats.

Here a very extensive explanation about Event Loop on [UlbiTV](https://www.youtube.com/watch?v=zDlg64fsQow&ab_channel=UlbiTV).

---

### Asynchronous in JS
#### How is asynchronous code executed in JavaScript?
When an asynchronous operation is encountered, it goes to callback queue, and its callback is scheduled to be executed later.

#### What does the async function return? How to catch an error in the `let res = await getApi()` expression.
In JavaScript, an async function returns a promise. We can catch an error with try/catch construction.

#### What is async / await?
‘async’ and ‘await’ are keywords used in asynchronous programming to simplify working with promises.

#### How do you work with asynchronous code in JavaScript without using async/await? What other approaches are you considering for working with asynchronous?
We can handle async code with several ways without async/await. Here are examples:
1. Callbacks, also known as 'callback hell'
2. Promises - modern way to handle async code. 

#### What is a Callback Hell? Give an example.
[Callback Hell](https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/) is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

```javascript
let words = document.querySelectorAll(".word");
 
const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
}

const animate = (word) => {
    word.classList.add("animate");
}

animateAll(animate);
```

#### What is a Promise? In what cases do you use it?
Promises are a way to implement asynchronous programming in JavaScript (added in ES6).

```javascript
const myPromise = new Promise((resolve, reject) => { 
    if (Math.random() > 0) { 
        resolve('Hello, I am positive number!'); 
    } 
    reject(new Error('I failed some times')); 
})

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('do something')
})
```

#### How to implement a few concurrent async API calls and handle its response altogether?
Promise.all() and Promise.allSettled()

#### What is the difference between Promise.all() and Promise.allSettled()?
Promise.all() and Promise.allSettled() are designed to handle an array of promises and return a single promise.

* Promise.all()
  * The result promise of Promise.all() is fulfilled with an array of the resolved values.
  If any of the input promises is rejected, the entire Promise.all() is rejected immediately with the reason of the first rejected promise.

* Promise.allSettled()
  * The result promise of Promise.allSettled() is fulfilled with an array of objects representing the outcome of each promise.
  Each object has a status property that is either "fulfilled" or "rejected", and a value or reason property, depending on whether the promise was fulfilled or rejected.
  It waits for all promises to settle (either fulfill or reject) before fulfilling its own promise.

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