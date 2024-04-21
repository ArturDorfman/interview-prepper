---
title: 'JavaScript'
groupId: 'essentials'
---

# JavaScript

---

### Simple general questions
#### What is the difference between == and ===?
The main difference is that '===' checks for equality of both value and type.

#### What is the "!!" operator used for?
This operator is used for converting some value to a boolean.

#### What values in JS are falsy?
' ', 0, null, undefined, NaN, false.

#### What is ‘??’ and why can it be useful?
This is a ‘nullish coalescing operator.’
It provides a way to provide a default value for a variable if its current value is null or undefined.

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
     The indices are integers, and they start from 0.
   Arrays are a special type of object in JavaScript where keys
   are automatically assigned as incremental integers starting from 0.

   * An **object** is an unordered collection of key-value pairs.
   The keys in an object are strings or symbols, and each key is associated with a value.
   Objects can store data in a more structured way compared to arrays.

2. Use Cases
   * Array
     * Use arrays when you have a collection of similar or sequential data.
     * Arrays are suitable for ordered lists, stacks, queues, etc.
     * When the order of elements is important or when you need to access elements by their index.

   * Object
     * Use objects when you have a collection of data with named properties.
     * Objects are useful when dealing with key-value pairs and when the order of the data is not significant. 
     * Objects are often used to represent entities or concepts in the real world
     (e.g., representing a person with properties like name, age, and address).

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

#### What is the difference between var, let, and const? In what cases should be used?
A table summary showing the differences between these keywords.

| KEYWORD   | SCOPE                  | REDECLARATION & REASSIGNMENT   | HOISTING                     |
|-----------|------------------------|--------------------------------|------------------------------|
| var       | Global, Local          | yes & yes                      | yes, with default value      |
| let       | Global, Local, Block   | no & yes                       | yes, without default value   |
| const     | Global, Local, Block   | no & no                        | yes, without default value   |

Good explanation in [article](https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/)
on freeCodeCamp or on the [video](https://www.youtube.com/watch?v=Gd_JG3e1g4A&ab_channel=DeeecodeTheWeb) as well.

#### What is variable scope (another name is a lexical environment)?
An [article](https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/)
on freeCodeCamp gives a good understanding of scopes.

#### Is it possible to override const?
We can't override const if it is primitive.
```javascript
const myNumber = 10;
myNumber = 20; // This will result in an error
```

The only exception is a case when we store some object or array. In this case, we can override property from it.
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

#### What happens if you refer to an element that doesn't exist at index (const arr = ['a', ’b']; console.log(arr[20])?
In JavaScript, when you try to access an element at an index which does not exist in the array, it will return **undefined**.

#### What are the benefits of including 'use strict' at the beginning of a JavaScript source file?
The "use strict" directive is used in JavaScript to enable strict mode.
This is a set of rules and restrictions designed to make the code more robust,
catch common coding errors, and prevent the use of certain error-prone features.

* Error catching
   * It turns previously silent errors into throw errors.

* Safer code
  * Assignments to read-only properties, assignments to undeclared variables are not allowed in strict mode.

* Preventing global variables
  * In strict mode, forgetting to declare variables with var, let, or const results in a ReferenceError.

* Restrictions on ‘this’ binding
  * In strict mode, the value of this is undefined in functions that are not methods or constructors.

* Deprecated features are not allowed.

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

#### What is the Symbol? What is its practical application?
Symbols are a powerful addition to JavaScript, providing a way to create unique identifiers and hidden properties,
contributing to better code organization and reducing the risk of naming conflicts.

Symbols have two main use cases:
1. Creating Unique Keys
   * Symbols are often used to create unique keys for object properties.
   Since symbols are guaranteed to be unique, they are useful for avoiding naming collisions in objects.
    ```javascript
    const mySymbol = Symbol('uniqueKey');
    const myObject = {};
    
    // Using the symbol as a unique key
    myObject[mySymbol] = 'Some value';
    console.log(myObject[mySymbol]); // Outputs: Some value
    ```

2. “Hidden” object properties.
   * Symbols are useful for defining "private" or "hidden" properties in objects.
   Because symbols are not exposed through Object.keys() or for...in loops,
   they provide a way to attach metadata to objects without the risk of accidental interference.
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

#### What is the difference between for...of and for...in?
* The for...of loop: It is used to iterate over the values or elements of an array or iterable objects (like a string).

```javascript
let array = [1, 2, 3, 4];
for (let value of array) {
  console.log(value);  // Outputs: 1, then 2, then 3, then 4
}
```

* The for...in loop: It is used to iterate over the properties of an object or the indices of an array.

```javascript
// For an array
let array = ['a', 'b', 'c'];
for (let index in array) {
  console.log(index);  // Outputs: 0, then 1, then 2
}

// For an object
let obj = { a: 1, b: 2 };
for (let prop in obj) {
    console.log(prop);  // Outputs: a, then b
}
```

### Hard general questions
#### How Heap and Stack in Javascript Work?
Heap and Stack are two areas of computer memory involved in managing data storage during the execution of a program.

**Stack**

A stack, or more specifically the execution stack in Javascript,
is where function calls are allocated in memory as they are being executed.
It is an implementation of the stack data structure but using memory!
When your Javascript program first starts running, the global execution stack is plopped into the execution stack first.
This stack frame creates the global object, which is the window for browsers.
Afterward, the value of this is set to the global object, 
and the program can continue adding more stack frames/execution contexts when it sees more function calls.
Once the code has finished executing, the Javascript engine will then remove the global frame from the stack.

**Heap**

A heap in memory is an extra storage that randomly places Javascript objects when we define them in the stack.
Complex object types in Javascript, such as Objects and Arrays,
are called reference types because they are stored in the heap while the variable in the stack contains a reference,
or memory address, to this object.
This is in contrast to primitive values, such as numbers and strings, which are stored on the stack itself.
When the reference to an object in the heap is lost,
the Javascript engine’s automatic garbage collector will clean up the bytes from memory.
If this were a language like C, which does not have an automatic garbage collector,
you would have to free up the space yourself.

Nice [article](https://medium.com/@dondeveloper/quickie-javascript-heap-and-stack-745b6d0c8e54) about this theme.

#### How do you handle errors in your application?
In JavaScript and TypeScript, we often handle errors using a technique known as "Try...Catch...Finally."
Sometimes we can use Promises and the .catch() method.

#### What are Access Modifiers?
Access modifiers are keywords used in object-oriented programming to set the accessibility of objects,
classes, variables, methods, or other members.
Access modifiers define the scope and visibility of a class member.

JavaScript doesn't have built-in support for access modifiers.
However, it uses closures and immediately invoked function expressions (IIFEs) to restrict access and create private members.
JavaScript introduced private fields in classes with the ECMAScript 2020 (ES2020) specification by using a # prefix.

```javascript
class MyClass {
  #privateField;

  constructor() {
    this.#privateField = "I'm private field";
  }

  getPrivateField() {
    return this.#privateField;
  }
}

const instance = new MyClass();
console.log(instance.getPrivateField()); // Outputs: I'm private field
console.log(instance.#privateField) // Error. Can't be accessed this way, only like a getter above.
```

On the other hand, TypeScript, being a statically typed superset of JavaScript, 
introduces typing along with other features such as access modifiers.
There are three types of access modifiers in TypeScript:

* public
  * The public keyword is used to specify that a class member is publicly accessible throughout any part of the code.
  By default, all members are public in TypeScript.

* private
  * The private keyword is used to specify that a class member can only be accessed from within the class that declares it.

* protected
  * The protected keyword is used to specify that a class member can be accessed from within the class that declares it,
  or from a subclass.

```typescript
class Person {
  public name: string;
  private age: number;
  protected gender: string;
}
```

#### What is type guard?
A type guard is a concept that provides a way to check the type of variable.

#### What kinds of object models do you know?
1. Document Object Model (DOM)
   * This is a programming interface for HTML and XML documents.
   It represents the structure of a document and allows a programming language to manipulate its content, structure, and style.

2. Browser Object Model (BOM)
   * It allows JavaScript to "talk to" a web browser.

#### What is the polyfill and what is this for?
A Polyfill is a piece of code (usually JavaScript) used to provide modern functionality on older browsers that do not natively support it.

#### What are ES6 modules? How do you use modularity in JavaScript to organize your code?
ES6, or ECMAScript 2015, introduces a standardized module format to JavaScript.
Before ES6, JavaScript didn't have a built-in module system, so developers had to use libraries or other methods to include separate files.

In ES6 Modules:
1. Code can be organized into separate files, each one exporting a single part or multiple parts, such as a class, function, or object.
2. Each module is a piece of code that is executed once it is loaded.
3. A module can import functionality from other modules and use them.
It allows importing of functions, objects or primitive values and can also export them to be used by other modules.

Here is an example of code organization.
```javascript
// myModule.js
export function myFunction() { 
  // function body
}
export const myVariable = 'variable value';

// anotherModule.js
import { myFunction, myVariable } from './myModule';
```

#### What approaches do you use to avoid conflicts and ensure code readability and scalability?
Here are some approaches to avoid conflicts, improve code readability, and ensure scalability:
1. Code conventions/standards
2. Code Review
3. Automated Testing
4. Commenting and Documentation

#### How do you optimize and work with animations in the browser? What approaches do you use to achieve high performance and smooth animations?
Optimizing animations in the browser involves several considerations, which I will highlight:
1. Use CSS3 animations instead of JavaScript animations where possible
   * CSS-based animations typically run on the composite layer,
   which means they can be hardware accelerated and end up being smoother.
   They also give better performance than JavaScript-based animations.
   For example, using transitions and transforms in CSS.

2. Use the requestAnimationFrame() method for JavaScript animations
   * This function tells the browser that you wish to perform an animation and requests
   that the browser call a specified function to update an animation before the next repaint.
   It's more efficient because it allows the browser to optimize the animations, resulting in smoother animations.

3. Use window.performance for measuring time in animations
   * The high-resolution Time API of window.performance now enables you to measure time in milliseconds,
   allowing you to get more precise animation timing which results in a smoother experience.

4. Use debounce/throttle for functions that you run during the animations
   * If you have to use scroll or resize events to control the animation,
   make sure to throttle or debounce them to increase performance.

5. Be mindful of mobile
   * If you're developing for mobile devices, remember that they have less power than desktop machines.
   Make sure to test your animations on a variety of devices to ensure they perform well.

6. Use web workers for complex calculations
   * If there are complex calculations in your animations, move them to web workers if possible.
   Web workers run on a separate thread, which means your calculations won't interrupt the user interface.

7. Use tools to measure
   * Lastly, use tools such as Chrome's DevTools Performance panel to measure the performance
   of your animations and find bottlenecks or performance issues.

#### How do you implement lazy loading of large resources such as images or scripts to optimize page loading? How does this interact with asynchronous code?
To implement lazy loading of large resources like images or scripts, there are generally two methods:
one that uses Intersection Observer API, and another that uses the loading attribute.
Both methods help in significantly reducing initial load time on your webpage.

1. Using Intersection Observer API
   * The Intersection Observer API allows us to detect when an element enters or leaves the viewport.
   By combining this tool with JavaScript, we can dynamically load resources when they come into view.

2. Using Loading Attribute
   * In modern browsers, you can use the loading attribute to lazy load images without the need of JavaScript.
   It’s cleaner and simpler, but keep in mind, at the time of writing, it doesn't work in all browsers.
   
   ```javascript
   <img src="large-image.jpg" loading="lazy">
   <script src="large-script-file.js" async></script>
   // or
   <script src="large-script-file.js" defer></script>
   ```

   * These attributes change the way the script is loaded and run:
     * async: The script is run as soon as it's finished downloading, without blocking the parsing of the HTML document.
     * defer: The script is run only after the entire HTML document has been parsed.

[//]: # (#### How do you work with architecture and design patterns in JavaScript? What specific patterns do you use to structure your code and make it easier to extend?)

#### How would you implement a percentage preloader on a site that needs to load images, 3D objects, and additional JSON files?
A general idea of how we could implement a preloader on a site.
1. Setup a preloader view
   * This could be a simple div element in your index.html file with a progress bar (or other graphical representation)
   and some CSS to make it visually appealing.
   ```javascript
   <div id="preloader">
     <div id="loader"></div>
   </div>
   ```

2. Implement a load manager
   * We need a resource manager to manage all loading tasks and calculate the percentage of loaded resources.
   Here you can use a library like three.js LoadingManager.
   ```javascript
   const manager = new THREE.LoadingManager()
   ```
   
3. Handling the progress
   * LoadingManager has an onProgress event which you can listen to and update your preloader view accordingly.
   ```javascript
   manager.onProgress = function ( item, loaded, total ) {
    const progress = loaded / total
    updateProgressBar(progress)
   }
   ```
   
4. Update the progress sight
   * Here's a simple function that updates the loader div's width according to the progress.
   ```javascript
   function updateProgressBar(progress) {
     const loaderElement = document.querySelector('#loader')
     loaderElement.style.width = (progress * 100) + '%'
   
     if ( progress === 1 ) {
       // remove preloader, make sure you're doing this after the loading
       // is complete and not the moment progress hits 1 to prevent FOUC
       loaderElement.parentElement.style.display = 'none'
     }
   }
   ```
   
5. Load assets with manager
   * Load your assets (images, 3D objects, and JSON files) using loaders that are capable of handling those files.
   For images, use ImageLoader, for 3D objects, use related loaders like ObjectLoader, FBXLoader etc.
   and JSONLoader for JSON Files.
   ```javascript
   // For Images.
   const imageLoader = new THREE.ImageLoader(manager)
   imageLoader.load('path/to/image.png', function ( image ) {
     // use the loaded image
   })
   
   // For 3D Objects.
   const objectLoader = new THREE.FBXLoader(manager)
   objectLoader.load('path/to/object.fbx', function ( object ) {
     // use the loaded object
   })
   
   // For JSON files.
   const jsonLoader = new THREE.FileLoader(manager)
   jsonLoader.load('path/to/file.json', function ( json ) {
     const actual_JSON = JSON.parse(json)
     // use the loaded json data
   })
   ```

#### What are generator functions and what are their practical uses?
**Basic Concept**
Generator functions are a special kind of function in JavaScript
that allow you to pause and resume execution at any point.
This feature is made possible by the yield keyword.

Generator functions are defined with the function* syntax.
```javascript
function* generatorFunction() {
  console.log('This will be executed first.');
  yield 'Hello, '
  
  console.log('I will not print this until the second next() is called.');
  yield 'World!'
}
```

To start executing a generator function, you need to call it, this returns a generator object.
Its execution is paused at the start of the function.
To resume execution, call next() on the generator object.

```javascript
const generatorObject = generatorFunction()
console.log(generatorObject.next().value) // 'Hello, '
console.log(generatorObject.next().value) // 'World!'
console.log(generatorObject.next().value) // undefined
```

**Practical Uses**
Generator functions can be used in a variety of scenarios, such as:
1. Asynchronous Programming
   * Generators can make asynchronous code look and behave a little more like synchronous code.
   This can be incredibly useful when dealing with callback-based APIs or Promises.

2. Iteration
   * Generators are iterable, and can thus be used wherever iterable is expected.
   They can be used to define custom, possibly infinite data structures that can be used in "for...of"
   loops or with the spread operator "...".

3. Infinite sequences
   * With generators, you can create code that provides values for an iteration one at a time, on-demand,
   for an infinitely large sequence of results.

4. Coroutines and concurrency
   * Generators can also be used to manage concurrency in ways that callbacks and promises cannot.
   For example, they can be used to manage interleaved execution of multiple tasks.

5. Complex data transformation pipelines
   * Generators can also be used to create complex data transformation pipelines
   where data is processed in a series of steps, with each step potentially requiring asynchronous operations.

More details [here](https://javascript.info/generators).

#### How to traverse the Promises array in parallel? And consecutively?
**Executing Promises In Parallel**
1. Promise.all()
2. Promise.allSettled()

**Executing Promises In Sequence**
If you want to execute promises consecutively, you can use Array.prototype.reduce().
This method applies a function against an accumulator and each value of the array
(l-r) to reduce it to a single value.

```javascript
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promises.reduce((chain, promise) => {
   return chain.then(chainResults => promise.then(currentResult => [...chainResults, currentResult]))
}, Promise.resolve([])).then(arrayOfResults => {
   console.log(arrayOfResults)
})
```

#### Give examples of scenarios that could lead to a memory leak in client code.
1. Global Variables
   * If you keep adding properties to the global objects, then you can cause a memory leak.

2. Timer or Interval callbacks
   * Anytime you set up a repeat-action like a setInterval, you can cause a memory leak if you forget to clear it.

3. Closures
   * Closures can cause memory leaks if they reference a scope that contains variables that use a large amount of memory.
   As long as the closure exists, those variables remain in memory.

4. Not removing Event Listeners
   * DOM event listeners can cause a memory leak if they are not removed before a DOM element is removed from the application.

#### If any animation on the site is slow (low FPS), how do I know why? What are the reasons?
There are a number of reasons why animations on a site might be slow or have low FPS (Frames Per Second).
Here are some common causes:
1. Complex CSS Animations or Transitions
   * If the CSS animation or transition is complex and involves many properties, it could make the page render slowly.

2. Large Images or Videos
   * Media files that are not optimized put a heavy load on the network and can cause animations to stutter.

3. Unoptimized Code
   * Inefficient algorithms or long-running computations can slow down the browser's main thread,
   where both JavaScript and layout calculations are performed.

4. Memory Leaks
   * These occur when unnecessary memory is consumed by an application due to improper garbage collection,
   causing the system to slow down over time.

5. Hardware Limitations
   * End user's device capabilities may also affect the performance of animations.

#### What code/pattern organization methods do you use and why?
Usually I use such approaches:
1. Modularization
   * This involves structuring code into independent modules, where each module handles a distinct functionality.
   This helps maintain the codebase easily, enables code reusability, and simplifies testing.

2. Object-Oriented Programming (OOP)
   * In this approach, code is organized around objects and data rather than actions and logic.
   This promotes better organization of code, modularity, and promotes encapsulation, inheritance, and polymorphism.

3. Functional Programming
   * It involves writing programs that avoid shared state, mutable data, and side effects.
   This results in fewer bugs and easier maintenance.

#### What are the options for storing data on the client?
Storing data on the client-side can be done using several methods:
1. Cookies
2. LocalStorage
3. SessionStorage
4. IndexedDB

#### How would you implement caching on the client? When is it appropriate?
Caching can be implemented on the client side in multiple ways.
The exact method used often depends on the specific requirements of your application, 
but here are a few general techniques:
1. HTTP / Web Caching
   * Browsers automatically cache files requested via HTTP protocol using cache headers like Etag,
   Cache-Control and Last-Modified.
   You can specify cache expiration behavior for your resources (static files, images, etc.)
   on the server side and client (browser) will follow these rules.

2. LocalStorage / SessionStorage
   * These storage options can be used for caching application data on client side.
   You can store more permanent data in LocalStorage (for data you want persisted across multiple sessions)
   while SessionStorage (only persists data for current session) can be used for temporary data.

3. IndexedDB
   * For more structured and data-intensive applications, IndexedDB can be used for client-side caching.
   It allows storage of larger amounts of data than LocalStorage.

4. Service Workers
   * Service workers can handle caching more effectively for offline web applications.
   They can cache network requests, serve app-shell and static resources from cache, etc.
   You can set up a caching strategy like NetworkFirst, CacheFirst, StaleWhileRevalidate etc.

When is it appropriate
1. Offline Compatibility
   * Where web application needs to work offline, caching resources and data using Service Workers or LocalStorage is beneficial.

2. Performance
   * To reduce network requests and provide faster access to resources, client side caching can be implemented.

3. Persist User Data
   * If you want to save user settings/preferences to make them available across different sessions.

4. Rate Limiting / API Costs
   * If your API or a Third party API has rate limits or costs associated with the number of calls.

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
In JavaScript, a prototype is an internal, hidden property of objects that are used for inheritance.
Every object in JavaScript is associated with a prototype object, which acts as a blueprint for the object.
This prototype object itself may have another prototype, forming a prototype chain.

#### What is a Proxy?
A Proxy object wraps another object and intercepts operations, like reading/writing properties and others,
optionally handling them on its own, or transparently allowing the object to handle them.

Details in this [article](https://javascript.info/proxy).

#### What is OOP? What are the features of object-oriented programming in JavaScript?
Object-oriented programming (OOP) is a design paradigm in software development that uses the concept of "objects,"
which can contain data and code.
Objects are instances of classes, which are essentially user-defined data types.
In object-oriented programs, code is organized around the data it operates on,
which is a model that allows for more flexibility and makes code easier to maintain, test, and reuse.

JavaScript supports object-oriented programming, and although it's not a class-based language (it is prototype-based),
it can be used to write in an object-oriented style.
In modern JavaScript or ES6+, we have classes as syntactic sugar over JavaScript's existing prototype-based inheritance.

Here are some features of OOP in JavaScript:
1. Objects and Prototypes
   * In JavaScript, objects are key-value pairs. Objects in JavaScript have a hidden link to the prototype object,
   from which they were created.

2. Classes (ES6+)
   * JavaScript introduced classes in ES6 as a syntactic sugar for creating constructor functions.
   It still uses prototypical inheritance under-the-hood.

    ```javascript
    class Car {
        constructor(brand) {
            this.brand = brand;
        }
        getBrand() {
            return this.brand;
        }
    }
    
    let myCar = new Car("Toyota");
    console.log(myCar.getBrand()); // Outputs "Toyota" 
    ```

3. Inheritance (prototypal inheritance)
   * JavaScript supports single inheritance/prototypal inheritance. Objects can inherit features from other objects.

4. Encapsulation
   * JavaScript supports encapsulation with the use of var/let/const keywords.
   ES6 introduced classes and modules, which further support encapsulation.

5. Abstraction
   * JavaScript uses interfaces (objects) to achieve data abstraction and hide complex implementations from the users.

6. Polymorphism
   * JavaScript allows methods in an object to take on many forms.
   In other words, a single method can perform different tasks based on its inputs.

---

### Array Methods
#### What are the most popular methods of array?
There are many methods of array. Here are the most commonly used forEach, map, reduce, filter, some, every, flat, flatMap, find etc.

#### What takes and what default value for flat()?
It takes a value of deep for recursion. Default—Infinity

---

### Collections
#### What is a Map, Set, WeekMap, and WeekSet? When do you use them?
In JavaScript, Map, Set, WeakMap, and WeakSet are built-in objects that provide collections for storing and managing data.

* **WeakMap** is a type of Map where the keys are weakly referenced. If there are no other references to the key object, they can be garbage collected. This avoids memory leaks.
* **WeakSet** it's a collection of objects where if the object is deleted elsewhere, it can be garbage collected.
Here are articles with detailed information about [Map, Set](https://javascript.info/map-set) and [WeekMap, WeekSet](https://javascript.info/weakmap-weakset).

Common use cases:
**Map**
* Map is used when you want to store key-value pairs where keys could be of any type including objects and functions,
not just strings or numbers. This is useful over JavaScript objects where keys can only be strings or symbols.

* When you need to maintain the insertion order of elements.
Unlike standard JavaScript objects, iteration over the elements in a Map is in the order of element insertion.

* When you need to quickly look up keys dynamically inside your code.
With Map, key lookup time is a fast O(1) operation.
In plain objects, you would have to loop through the property names using Object.keys(), which is less efficient.

* When you want to easily know the size of your collection.
Map has a size property which gives you the number of entries in it,
whereas for objects, you'll need to use Object.keys(obj).length.

**Set**
* Set is used when you want to store unique values of any type. It assures that an element only occurs once in your set.

* Similar to the Map, the Set also maintains the order of element insertion.
The Set object lets you store unique values of any type, whether primitive values or object references.

* When you need to frequently check for element existence in your collection.
Set provides a fast O(1) has method for this.

**WeakMap**
* Caching computed results for objects
  * You may want to associate computation results with objects,
  but don't want the objects to stay in memory if they're not used elsewhere.

* Associating private data with objects
  * WeakMap is used where one wants to extend objects from outside without affecting garbage collection.

**WeakSet**
* Storing a set of objects, but allowing them to be garbage collected if they are no longer in use.
* Tracking objects: WeakSet can be used to tag objects without preventing their garbage collection when they're not referenced any other way.

---

### Functions
#### What is an anonymous function and what are they used for?
In JavaScript, an anonymous function is a function defined without a name.
This function type in case where we have not to name a specific function.
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
It also allows you to abstract away a lot (you don't have to understand in depth how something gets done), 
you call a function that does it for you.

Functional programming can be simply explained by following these two laws in your code:
1. Architect your software out of pure, isolated functions
   * Pure functions
     * The same input always gives the same output (idempotence), and has no side effects.
     An idempotent function is one that, when you reapply the results to that function again,
     doesn't produce a different result.

   * Isolated functions
     * There is no dependence on the state of the program, which includes global variables that are subject to change.
     Anything that you need should be passed into the function as an argument.

   * Reusability through Higher order functions
     * A higher order function is a function that either takes a function as an argument, returns a function, or both!
     The in-built JavaScript Array functions .map, .reduce, and .filter all accept a function.
     They are excellent examples of higher order functions,
     as they iterate over an array and call the function they received for each item in the array.

2. Avoid mutability and side effects
   * Make your code referentially [transparent](https://medium.com/@olxc/referential-transparency-93352c2dd713)
     * That is, your function calls can be replaced with the values that they represent without affecting the result.

   ```javascript
    const greetAuthor = function(){
        return 'Hi Kealan'
    }
    ```

   * Don't iterate
     * Use the map higher order function instead of for loop.

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
     * The big benefit of currying is when you need to re-use the same function multiple times but only change one
     (or fewer) of the parameters.
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
     * Here are some articles that explain this aspect. [Medium](https://medium.com/@akhilanand.ak01/function-composition-in-javascript-exploring-the-power-of-compose-4114da8b9875), [Dev](https://dev.to/biomathcode/composition-of-functions-178g).

---

### Events in JS
#### Talk about event propagation, bubbling, delegation, preventing, etc.
Event propagation, bubbling, delegation, and preventing are all concepts related to the handling of events in JavaScript.
1. Event Propagation
   * Event propagation refers to the process by which events are transmitted or passed through the DOM hierarchy.
   * There are two phases of event propagation: capturing phase and bubbling phase.
An article that explains [capturing phase and bubbling phase](https://javascript.info/bubbling-and-capturing).

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
   * Instead of attaching an event listener to each element, you can attach a single event listener to a common ancestor.
   * When an event occurs, it will bubble up to the common ancestor,
   and you can check the target of the event to determine which specific element triggered the event.

    Detailed explanation of [event delegation](https://javascript.info/event-delegation) on javascript.info or an article on [freeCodeCamp](https://www.freecodecamp.org/news/event-delegation-javascript/).

6. Event Prevent Default
   * The preventDefault() method is used to stop the default behavior of an element.
   * For example, preventing the default behavior of a form submission or a link click.
   * This method is often used in conjunction with event handling to control the default actions triggered by certain events.

7. Stopping Propagation
   * The stopPropagation() method can be used to stop the propagation of an event, either during the capturing or bubbling phase.
   * This can be useful in scenarios where you want to prevent an event from reaching ancestor or descendant elements.

#### How to know if the event.preventDefault method was used in an element?
We can **use the event.defaultPrevented property in the event object.**
It returns a boolean indicating if the event.preventDefault() was called in a particular element.

---

### Closure
#### What is closure in JavaScript and how does it work?
A closure is a function that remembers its outer variables and can access them.
All functions in JavaScript are closures.

Let's talk about Closure a bit in-depth.

In JavaScript, every running function, code block {...},
and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

The Lexical Environment (Scope) object consists of two parts:
* Environment Record – an object that stores all local variables as its properties
(and some other information like the value of this).

* A reference to the outer lexical environment, the one associated with the outer code.

**A “variable” is just a property of the special internal object, Environment Record.
“To get or change a variable” means “to get or change a property of that object”.**

The inner Lexical Environment has a reference to the outer one.
When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.

An article about Closure on [javascript.info](https://javascript.info/closure).

---

### Context
#### What is the context? How can I change the execution context of a function?
Execution Context is the management of what is currently running.
We can change the execution context of a function with the help of call, apply, and bind methods.

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
The event loop enables JavaScript to be non-blocking and asynchronous,
allowing it to handle multiple operations simultaneously without waiting for one to finish before moving on to the next.
The event loop concept is basic. There’s an endless loop,
where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

The general algorithm of the engine:

1. While there are tasks:
   * execute them, starting with the oldest task.

2. Sleep until a task appears, then go to 1.

Here's a simplified explanation of how the event loop works:
1. Call Stack
   * The JavaScript runtime has a call stack, which is a data structure that keeps track of function calls in the code.
   * When a function is called, it is added to the top of the stack,
   and when a function is completed, it is removed from the stack.

2. Callback Queue
   * JavaScript is a single-threaded language, meaning it can only execute one operation at a time.
   * Asynchronous operations, like setTimeout, AJAX requests, or event listeners, are not processed immediately.
   Instead, their callbacks are placed in the callback queue.

3. Event Loop
   * The event loop continuously checks the call stack and the callback queue.
   * If the call stack is empty, it takes the first callback from the queue and pushes it onto the stack, allowing it to be executed.

Here's a step-by-step breakdown:
* When an asynchronous operation is encountered, its callback is scheduled to be executed later.
* The call stack continues to execute synchronous code.
* Once the call stack is empty, the event loop takes the first callback from the queue and pushes it onto the stack.
* The callback is executed, and the process repeats.

Here is a very extensive explanation about Event Loop on [UlbiTV](https://www.youtube.com/watch?v=zDlg64fsQow&ab_channel=UlbiTV).

---

### Asynchronous in JS
#### How is asynchronous code executed in JavaScript?
When an asynchronous operation is encountered, it goes to callback queue, and its callback is scheduled to be executed later.

#### What does the async function return? How to catch an error in the `let res = await getApi()` expression.
In JavaScript, an async function returns a promise. We can catch an error with try/catch construction.

#### What is async / await?
‘async’ and ‘await’ are keywords used in asynchronous programming to simplify working with promises.

#### How do you work with asynchronous code in JavaScript without using async/await? What other approaches are you considering for working with asynchronous?
We can handle async code in several ways without async/await. Here are examples:
1. Callbacks, also known as 'callback hell'
2. Promises—modern way to handle async code. 

#### What is a Callback Hell? Give an example.
[Callback Hell](https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/) is essentially nested callbacks stacked below one another forming a pyramid structure.
Every callback depends on/waits for the previous callback,
thereby making a pyramid structure that affects the readability and maintainability of the code.

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
  Each object has a status property that is either "fulfilled" or "rejected," and a value or reason property,
  depending on whether the promise was fulfilled or rejected.
  It waits for all promises to settle (either fulfill or reject) before fulfilling its own promise.

---

### Spread and Rest Operators
#### What is a spread and rest operators?
* Spread Operator (...)

The spread operator allows an iterable (like an array or an object) to be expanded in places where zero or
more arguments (for function calls) or elements (for array literals) are expected,
or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```javascript
// example for an array
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // logs [1, 2, 3, 4, 5, 6]

// example for an object
let obj1 = {a: 'a', b: 'b'};
let obj2 = {...obj1, c: 'c' };
console.log(obj2); // logs {a: 'a', b: 'b', c: 'c'}
```

* Rest Operator (...)

The rest operator, which uses the same ..., does almost the reverse of the spread operator.
It allows you to package up elements back into an array.
Here is how you can use the rest operator in a function's argument:

```javascript
function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3)); // logs 6
```

Although both operators use the same ... syntax, their usage and functionality are different depending on the context.
They are called "spread" when used to expand an iterable like an array or object,
and "rest" when capturing the "rest" of the elements into an array.

An article on [javascript.info](https://javascript.info/rest-parameters-spread).

#### Tell us about all the ways to use the '...' Operator.
**Spread Operator in Arrays**
1. Merge Arrays
   * Used to merge arrays. The spread operator is used to spread out the elements of an array.
    ```javascript
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5]; // arr2: [1, 2, 3, 4, 5]
    ```

2. Copy Array
   * Used to create a copy of an existing array.
    ```javascript
    let arr = [1, 2, 3];
    let arrCopy = [...arr];  // arrCopy: [1, 2, 3]
    ```

**Spread Operator in Objects**
* Merge Objects: Used to merge objects, in this case, treat the object as a collection of key-value pairs.
```javascript
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3};
let mergedObj = {...obj1, ...obj2}; // mergedObj: {a: 1, b: 2, c: 3}
```

* Copy Objects: Used to create a copy of an existing object.
```javascript
let obj = {a: 1, b: 2};
let objCopy = {...obj}; // objCopy: {a: 1, b: 2}
```

* Overriding Elements: When spreading two objects that have a common property, the object spread later will override the property of the earlier object.
```javascript
let obj1 = {a: 1, b: 2};
let obj2 = {b: 100, c: 3};
let obj3 = {...obj1, ...obj2}; // obj3: {a: 1, b: 100, c: 3}
```

**Rest Operator**
* Rest Operator in Function Arguments
```javascript
const foo = (...args) => (console.log(args))
foo(1, 2, 3, 4, 5);  // [1, 2, 3, 4, 5]
```

* Destructuring with Rest Operator: The rest operator, when used during destructuring,
allows you to assign the rest of the elements of an object or an array to a particular variable.
```javascript
let arr = [1, 2, 3, 4, 5];
let [first, ...rest] = arr;
console.log(first, rest);  // 1, [2, 3, 4, 5]
```
