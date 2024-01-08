---
title: 'TypeScript'
groupId: 'essentials'
---

# TypeScript

---

### What are the main differences between TypeScript and JavaScript?
TypeScript and JavaScript are both programming languages, but TypeScript is a superset of JavaScript, meaning that it includes all of JavaScript's features and adds its own on top of them.
* TS is a static typed language, JS - dynamic.
* TS compiled into JS. TypeScript code needs to be transpiled to JavaScript before it can be executed.
* It adds support for classes, interfaces, and other OOP features.

### What are the pros and cons of using TypeScript?
Using TypeScript comes with various advantages and some potential drawbacks.
**Pros:**
1. Static Typing
   * Helps catch potential runtime errors during development by providing static type checking. This can lead to more robust and maintainable code.

2. Enhanced Tooling
   * TypeScript offers better IDE support and tooling, including features like code completion, refactoring tools, and improved IntelliSense. This can enhance developer productivity.

3. Improved Code Quality
   * The use of static typing and additional language features (interfaces, enums, etc.) can result in cleaner, more self-documenting code, improving overall code quality.

4. Compatibility with JS
   * TypeScript is a superset of JavaScript, meaning that existing JavaScript code can be gradually migrated to TypeScript. This makes it easy to adopt TypeScript in existing projects.
   * TypeScript supports ECMAScript features, including the latest JavaScript syntax, allowing developers to leverage modern language features.

5. Object-Oriented Programming Features
   * TypeScript supports features like classes, interfaces, and modules, making it more suitable for developers familiar with object-oriented programming (OOP) concepts.

6. Better Collaboration
   * The use of static types can make it easier for teams to collaborate on large codebases, reducing the chances of introducing certain types of bugs.

7. Active Development and Community
   * Many popular libraries and frameworks are adopting TypeScript, increasing its popularity and support.

**Cons:**
1. Learning Curve
   * Developers accustomed to dynamic typing in JavaScript might experience a learning curve when adopting TypeScript, especially when dealing with more advanced type system features.

2. Build Step Required
   * TypeScript code needs to be transpiled to JavaScript before it can be executed, introducing an additional build step. This may be seen as an overhead, especially for small projects.

3. Development Speed
   * The static type checking can slow down the development process, as developers need to ensure that their code adheres to the type system. This can be seen as a trade-off between development speed and type safety.

4. Potential Overhead for Small Projects
   * For smaller projects or prototypes, the additional features provided by TypeScript might be unnecessary and could add complexity.

5. Tooling Dependencies
   * The enhanced tooling and IDE support are beneficial, but they also introduce dependencies on specific tools and editors, which might not be ideal for all developers or teams.

6. Compatibility with Certain Libraries
   * While TypeScript has good compatibility with many JavaScript libraries, there might be cases where type definitions are incomplete or missing, requiring additional work for integration.

7. Community Adoption
   * While the TypeScript community is growing, not all libraries and projects have migrated to TypeScript. Developers might encounter situations where they need to write or maintain type definitions for existing JavaScript code.

In summary, the decision to use TypeScript should be based on the specific requirements of the project and the preferences and experience of the development team. 
While TypeScript offers many benefits, it might not be the best fit for every situation.

### What are data types in TypeScript and how are they used?
1. Boolean
   
   Represents true or false values
   ```typescript
   let isDone: boolean = false;
   ```
   
2. Number

   Represents numeric values, including integers and floating-point numbers.
   ```typescript
   let decimal: number = 6;
   let float: number = 3.14;
   ```
   
3. String

   Represents textual data.
   ```typescript
   let fullName: string = "John Doe";
   ```

4. Array

   Represents an ordered list of values of a specific type.
   ```typescript
   let numbers: number[] = [1, 2, 3, 4];
   let fruits: Array<string> = ["apple", "banana", "orange"];
   ```

5. Tuple

   Represents an array with a fixed number of elements, each of which may have a different type.
   ```typescript
   let tupleExample: [string, number] = ["hello", 42];
   ```

6. Enum

   Represents a set of named constants, typically for representing a set of related values.
   ```typescript
   enum Color {
    Red,
    Green,
    Blue,
   }
   
   let color: Color = Color.Green;
   ```
   
7. Any

   Represents a dynamic or unknown type. Allows values of any type to be assigned.
   ```typescript
   let dynamicValue: any = "I can be any type";
   ```
   
8. Void

   Represents the absence of a value. Used as the return type for functions that don't return a value.
   ```typescript
   function logMessage(): void {
    console.log("This function doesn't return a value");
   }
   ```
   
9. Null and Undefined

   Represent null and undefined values, respectively.
   ```typescript
   let nullValue: null = null;
   let undefinedValue: undefined = undefined;
   ```
   
10. Object

   Represents a non-primitive type.
   ```typescript
   let obj: object = { key: "value" };
   ```

### Tell about interfaces in TypeScript and give examples of their use.
In TypeScript, interfaces are a way to describe an object.

* **Basic Example**
   ```typescript
   // Define an interface
   interface Person {
    firstName: string;
    lastName: string;
    age: number;
   }
   
   // Use the interface to create an object
   let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
   };
   ```

* **Optional Properties**
   ```typescript
   // Define an interface
   interface Car {
    make: string;
    model: string;
    year?: number; // Optional property
   }
   
   let myCar: Car = {
    make: "Toyota",
    model: "Camry",
   };
   ```
  
* **Readonly Properties**
   ```typescript
   interface Point {
    readonly x: number;
    readonly y: number;
   }

   let point: Point = { x: 10, y: 20 };

   // Error: Cannot assign to 'x' because it is a constant or a read-only property.
   // point.x = 5;
   ```

* **Function Signatures in Interfaces**
   ```typescript
   interface Calculator {
    add(x: number, y: number): number;
    subtract(x: number, y: number): number;
   }

   let simpleCalculator: Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
   };
   ```
  
* **Extending Interfaces**
   ```typescript
   interface Shape {
    color: string;
   }

   interface Square extends Shape {
    sideLength: number;
   }
   
   let square: Square = {
    color: "red",
    sideLength: 10,
   };
   ```

### What is the difference between types and interfaces?
In TypeScript, both types and interfaces are used to define shapes for objects, but there are some differences between them.
1. Declaration Syntax
   ```typescript
   type Person = {
    name: string;
    age: number;
   };
   //  vs
   interface Person {
    name: string;
    age: number;
   }
   ```

2. Extendability
   * Types are more capable of representing union types, intersection types, and other more complex types.
   * Interfaces are extendable using the extends keyword. This makes them more suitable for object-oriented patterns like inheritance.

3. Declaration Merging
   * Types do not support declaration merging. If you declare multiple types with the same name, it will result in an error.
   * Interfaces support declaration merging. If you declare multiple interfaces with the same name, they are automatically merged into a single interface with the combined properties.
   ```typescript
   interface Car {
    brand: string;
   }
   
   interface Car {
    model: string;
   }
   
   // Merged interface
   // interface Car {
   //   brand: string;
   //   model: string;
   // }
   ```

Here is a nice article on [Medium](https://blog.bitsrc.io/type-vs-interface-in-typescript-cf3c00bc04ae). It's give more extensive explanation.

### How do Generics work in TypeScript and why are they useful?
Generics in TypeScript allow you to create reusable components that can work with different data types while maintaining type safety.

**How Generics Work**

Generics are represented by a type parameter enclosed in angle brackets (<>). 
This type parameter acts as a placeholder for a specific type that is provided when the function, class, or interface is used.
```typescript
// Generic function to swap values in an array
function swap<T>(arr: T[], index1: number, index2: number): void {
   const temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}

// Usage with a number array
let numberArray: number[] = [1, 2, 3, 4];
swap(numberArray, 0, 2);

// Usage with a string array
let stringArray: string[] = ["apple", "banana", "orange"];
swap(stringArray, 1, 2);
```

**Why Generics are Useful**
1. Reusability
   * Generics allow you to write code that works with a variety of data types, promoting code reuse. 
   * This is especially beneficial for utility functions and data structures.

2. Abstraction over Data Types
   * Generics provide a level of abstraction over data types. 
   * Functions and classes can be designed to be more flexible without sacrificing type information.

### How can Enums be used in TypeScript and what are their advantages?
Enums, short for enumerations, are a feature in TypeScript that allow you to define a set of named constants. Enums make it easier to work with a set of related values and improve code readability.
Enums advantages are readability, autocompletion and intellisense, preventing invalid values, code maintenance. 

### What are Decorators in TypeScript and in what cases are they used?
Decorators are a feature in TypeScript that allow you to attach metadata or behavior to classes, methods, properties, or parameters in a declarative manner. 
They provide a way to extend or modify the behavior of classes or their members during design time. 
Decorators use the @expression syntax and are typically applied just before the declaration of the target.

Good explanation of decorators on [Medium](https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f).

### How do TypeScript use namespaces and modules?
Article about [Namespace](https://medium.com/@bobjunior542/namespaces-vs-modules-in-typescript-which-one-to-choose-a9ab939f047d).

### What JavaScript to TypeScript migration strategies do you know?
Article about [migration strategies](https://2ality.com/2020/04/migrating-to-typescript.html)

### What is the difference between interface and abstract class in Typescript?
LinkedIn [article](https://www.linkedin.com/pulse/what-difference-between-interface-abstract-class-david-ramazani/) on this theme.
