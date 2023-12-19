---
title: 'Frameworks and Libraries'
groupId: 'frameworks-and-libraries'
---

# Frameworks and Libraries

## Junior

### Why are frameworks used, what are their advantages and disadvantages?
### What should be guided in choosing a framework?
### What is a component-oriented approach?
### What is the state management problem and what are the approaches to solving it?
### What is Virtual DOM?
### What component lifecycle methods do you know?
### How to optimize the performance of solutions using frameworks?
### What is server-side rendering? Why is it needed, what are the implementation options?
### How to interact with APIs within libraries/frameworks?
### What are the features of data management and routing?
### What are the main differences between Angular and React?
### How do you distinguish between class and functional components in React? In what cases do you think it is appropriate to use one or another type of component?
### How can performance be optimized in React applications? What approaches do you use to avoid over-rendering and to optimize component load times?
### How do you implement state management in React applications? What approaches do you use to maintain readability and efficiently manage more complex/global state?
### How do you handle form management in React? What approaches do you use for form validation and processing?
### How to execute the function code only on the first rendering of the component?
### How do you handle events in React?
### What are React hooks, what built-in hooks are you using?
### What conditions must a function meet to be a hook?
### How do you do server-side rendering in Next.js? What advantages do you see in this approach, in which cases do you think it is most appropriate?
### What are components in Vue.js?
### How does the ngIf directive work in Angular?
### There is a task to calculate the coefficient that will be needed in the component and which depends only on a few constants in the project. Where is it best to count?

---

## Middle

### Tell us about state management in Vue.js.
### How to implement routing in React?
### How to optimize the rendering of components in React?
### How to optimize performance in large React applications?
### What problems do you often encounter in React components?
### How do you manage states in a React APP? How to pass states between multiple components?
### What approaches do you use for lazy loading components, state management, and data caching?
### What are side effects? What tools do you have experience with?
### How do you solve routing problems in complex React applications? What approaches do you use to organize routes and manage the application structure?
### How do you handle animations in React? How do you use CSS animations and libraries to create smooth and high-performance animations?
### How do you use architectural patterns (such as Flux or Redux) to effectively manage state in your React application? What advantages and limitations do you see in using these patterns?
### How do you optimize and scale Next.js applications for high traffic? How do you handle caching, CDN, other performance issues?
### What is component re-rendering, when does it happen or can this process be affected?
### What is React Context when you use it?
### What is memoization in React and when is it needed?
### How to execute the code before removing the component from the tree?
### When do you use useReducer?
### What UI libraries do you know, what are their advantages and disadvantages?

---

## Senior

### What's new in 18th version of React?
### How to keep a reference to a function with the current parameters, but not call useEffect one more time?
### What is the difference between useLayoutEffect and useEffect, in which cases do you use which?
### Tell us about the useTransition hook.
### What React patterns do you know?
### Give an example of React-pattern Compound components.
### Are libraries needed for state management if there are libraries for caching (React Query/SWR) and React Context?
### How do you handle errors in React components?
### Explain what is happening in this code and in what scenarios it might be useful:
```javascript
const useHandler = (f) => {
    const ref = React. useRef(f);
    ref.current = f;
    return React.useCallback( (...args) => ref.(...args), []);current
};
```
### How to manage global state in Angular applications via ngrx/store?
### How do you maintain design and styling consistency across large React codebases? What approaches or tools do you use to maintain UI unity?
### How do you structure and organize the components of large React applications? What approaches do you use for logical separation of components, code reuse and maintainability?
### How do you manage forms in React, specifically using form libraries like Formik or React Hook Form? How do you handle validation, masking, and other aspects of forms?
### You have a task to render a large list (100k + items). How would you accomplish this task?
### Optimizing React Components: Dos and Don'ts? Should and when should you use useMemo and useCallback?
### How do you build a React app?
### What tools were used for state management and why were they chosen?
### Do you use incremental static regeneration in Next.js to refresh static pages based on time intervals or data changes? How does this affect performance and caching?

---