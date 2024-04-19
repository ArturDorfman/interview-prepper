---
title: 'Vue'
groupId: 'frameworks and libraries'
---

# Vue

---

### General
#### What is Vue.js?/ What do you understand by Vue.js?
Vue.js called a progressive framework because it is being changed and developed continually.

#### What are the advantages of using Vue.js?
Following is the list of advantages of using Vue.js:
1. Very Small In Size
   * One of Vue.js' biggest advantages is that it is tiny.
   This exciting JavaScript plug-in is only 18–21KB, so you can download and use it very easily in no time.

2. Easy to Understand and Use
   * The framework of Vue.js is very easy to understand, and it id one of the reasons for the popularity of this framework.
   Users can easily add Vue.js to their web project because of its simple structure and develop applications.

3. Simple Integration with Existing Applications
   * Vue.js framework can be integrated with the existing applications very easily.
   Vue.js has a lot of components for everything.
   You can integrate it with any application written in JavaScript.

4. Flexible in nature
   * The flexible nature of Vue.js also makes it easy to understand for the developers of React.js,
   Angular.js, and any other new JavaScript framework.
   It provides a lot of flexibility to use virtual nodes to write HTML files, JavaScript files, and pure JavaScript files.

5. Easy & comprehensive documentation
   * The documentation of Vue.js is straightforward and comprehensive so that developers can develop applications or web pages,
   only having little knowledge about HTML.

6. Virtual DOM
   * Vue.js uses virtual DOM similar to other existing frameworks such as ReactJS, Ember, etc.
   Virtual DOM is a light-weight in-memory tree representation of the original HTML DOM
   and updated without affecting the original DOM.

7. Two-Way Communication
   * Vue.js provides two-way communications with its MVVM architecture that makes it straightforward to handle HTML blocks.

#### What is a Composition API in Vue 3?
Composition API is a set of additive, function-based APIs that allow flexible composition of component logic.

#### What is an interpolation?
In Vue.js, interpolation is a technique to bind data to the DOM.
It's a way to insert, or interpolate, dynamic data into HTML.

#### What is a mixins in Vue 2?
In Vue.js, a mixin is a way to distribute reusable functionalities for Vue components.
A mixin object can contain any component options.
When a component uses the mixin, all options in the mixin will be "mixed in" into the component's own options.

#### What are composable in Vue 3?
Essentially, a composable is just a JavaScript function that contains reusable logic.
This function can use other Composition API functions like ref, reactive, computed, watch, etc., inside it.

#### How can force component's re-rendering?
* The best way to use the ‘key’ attribute on a component and change it
* Also, we can use $forceUpdate()

---

### Conditional Rendering
#### How can we render something if we have some condition?
If you want to render elements or components conditionally, you can use v-if, v-else-if, v-else, v-show.

#### What is the difference between v-if and v-show?
The v-if and v-show directives in Vue.js are both used for conditional rendering of elements.
Key differences:
* v-if remove an element from DOM. v-if is "real" conditional rendering as it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.
* v-show is much simpler - the element is always rendered regardless of the initial condition, and simple switches the CSS display property.

---

### List Rendering
#### How can we render a list of items?
To render a list of items in Vue.js, you can use the v-for directive.
The v-for directive is used to render a list of items or render an object.
The ":key" is a special attribute used to give Vue a hint so that it can track each node's identity,
and thus reuse and reorder existing elements.
You should always use it with v-for for improved performance.

#### What is “key” in vue.js?
The "key" attribute is used to give each rendered element a unique identifier.

#### Why do we need to set "key" attribute when we render a list?
The key attribute, when used with the v-for directive in Vue.js,
is a special attribute that helps Vue keep track of each node's identity in a list.
This means Vue can accurately determine which items have been added, removed,
or modified when there are changes to the list.

#### Why shouldn't we use indexes as a key in v-for?
Using indices as keys while rendering lists with v-for in Vue.js may seem straightforward and easy,
particularly when the items in the list you're rendering do not have a unique identifier.
However, there are important reasons why using indexes as keys can lead to issues:

* If you mutate the array with array methods like splice, push, pop, etc., the index of each item might change.
This can cause unnecessary component re-renders or cause components to be destroyed and recreated,
which can lead to unexpected results or inefficient execution.

* If the order of items in the array can change (for example, with sorting or filtering),
using an index as a key will result in incorrect rendering,
as Vue will still try to maintain the minimal number of component re-renders by reordering elements rather than moving the actual DOM elements around.

#### Can we use v-if and v-for on the same element?
While it's technically possible to use v-if and v-for on the same element in Vue.js,
it is not recommended in Vue.js style guide due to potential confusion and complications.

If you want to loop through items and conditionally render them,
you should use a computed property to filter out the items before the loop,
or you can use <template> tag, or <div> to use v-if before v-for.

---

### Directives
#### What are ‘directives’ in Vue.js?
Directives are special tokens in the markup that tell the Vue.js to do something to a DOM element.

#### What directives do you know? What directives do you use in your day-to-day work?
v-model, v-if, v-else, v-show, v-html, v-for, v-on, v-bind, v-slot (old fashioned)

#### What is the difference between one-way data flow/ or one-way data binding and two-way data binding?
In one-way data binding or one-way data flow, the view (UI) part of the application does not update automatically.
In this model, when the data Model is changed,
you need to write some custom code to make it updated every time after the change.
The v-bind directive is used for one-way data flow or binding in Vue.js.

On the other hand, in two-way data binding,
the view (UI) part of the application is automatically updated when the data Model is changed.
The v-model directive is used for two-way data binding in Vue.js.

#### How can we make two-way binding without v-model?
We can rewrite the v-model by attribute ‘:value’ and ‘@input’ event.

#### What is the difference using v-model in Vue 2 and Vue 3?
Vue 3 allows multiple v-models at the same time,
which means you can have two-way bindings on more than one prop at once.

#### What are directive modifiers?
In Vue.js, a directive modifier is a special postfix denoted by a dot ".",
and indicates that a directive should be bound in some special way.

#### What modifiers v-model has?
.lazy, .number, .trim etc.

---

### Vue component
#### What are components in Vue.js?
Component is a main and reusable building blocks in Vue app. 

#### Name parts of a Vue component?
There are three main parts of a Vue component:
* "<template />"
* "<script />"
* "<style />"

#### What are props in a Vue component?
Props, short for properties,
in a Vue.js component are custom attributes you can use to pass data from a parent component down to a child component.

#### Why do we need $emit?
In Vue.js, $emit is a powerful built-in method that is used to dispatch custom events.
These custom events are needed for the communication between child components and parent components,
mainly to send data or notify the parent component about something that happened in the child component.

#### What is a component lifecycle? What lifecycle hooks do you use the most?
A component's lifecycle in Vue.js refers to the series of events that happen from the moment it is created
(instantiated) to the moment it is destroyed.

Here are the most common lifecycle hooks:
* onBeforeMount
* onMounted
* onBeforeUnmount
* onUnmounted

#### What lifecycle hook is the best for making request to a backend?
Typically used onMounted lifecycle hook.

#### What lifecycle hook do you use for cleanup?
Typically used onBeforeUnmount lifecycle hook.

#### How can we make style block local for a current component?
We can add scoped attribute.

#### How globally register a component in Vue 3?
First of all, we should understand why we need specific component globally.
If we don't want to import this component everywhere, we can install the auto import plugin, and we solve this problem,
and achieve even more.

But in general, we can register component in "main.ts" file.
```typescript
import { createApp } from 'vue';
import YourComponent from './YourComponent.vue';

const app = createApp({});

app.component('your-component', YourComponent)
   .mount('#app');
```

#### Why do we need async components in Vue?
In Vue.js, components can be loaded synchronously or asynchronously.
Asynchronous components can be extremely useful
for improving performance through lazy loading and code-splitting strategies,
especially for large applications or parts of an application that isn't necessary on initial render.

---

### Slots
#### What are slots in Vue.js?
Slot is a feature that allows us to pass HTML content from a parent component to a child component.
There are simple slots, named slots, scoped slots, and named scoped slots.

#### What is the difference between slots and scoped slots?
Scoped slots allow passing data back to a parent component.

---

### Reactivity
#### What is reactivity in Vue?
In Vue.js, reactivity is a feature that allows the framework to react
and automatically update the DOM whenever the state (data properties) of a component or instance changes.

#### How does reactivity work in Vue 2 and Vue 3?
In Vue 2, reactivity is achieved using JavaScript's Object.defineProperty() method.
Vue walks through all the properties in its data object and converts them to getter/setters.

Vue 3 introduced a new reactivity system, which uses JavaScript's Proxy object and Reflect API.
These allow Vue to intercept any operation on an object, rather than just property access.
Vue 3 can now detect addition or removal of properties, changes in array indices and length, and many other changes.

---

### Composition API
#### What is the role of “ref” in vue.js?
The ‘ref’ allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted.

#### What is the difference between ‘ref’ and ‘reactive’?
* The ‘ref’ has ‘value’ property, the ‘reactive’ not.
* The ‘ref’ we can totally overwrite, the ‘reactive’ we can’t.
* The ‘ref’ can hold primitives and objects/arrays, the ‘reactive’ can hold only objects/arrays.

#### What is the difference between shallowRef and shallowReactive?
* In the ‘shallowRef’ only the .value access is reactive.
* In the ‘shallowReactive’ only root-level properties are reactive.

#### Computed
##### What are computed properties and how they work?
Computed properties are a feature in Vue.js that allow you to create functions as properties,
with the result cached and only re-computed when its dependencies change.

##### Can we change computed properties?
In Vue.js, computed properties are typically read-only,
meaning that they are used to compute values based on your component's state.
However, it's possible to make computed properties "settable" by providing a setter.

```vue
new Vue({
  data: {
    firstName: 'John',
    lastName: 'Doe'
  },
  computed: {
    fullName: {
      // getter
      get: function() {
        return `${this.firstName} ${this.lastName}`;
      },
      // setter
      set: function(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});
```

##### What is the difference between computed properties and methods?
The difference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed.

#### Watch
##### What is a watch and how can we watch changes in a model?
In Vue.js, a watcher is a feature that allows you to observe and react to data changes on a Vue instance.
You can "watch" data properties and run a function whenever their values change.

##### How can we watch a nested object?
To provide a deep watch to monitor changes in nested properties,
you can set the deep option to true in the watch configuration.

```vue
<template>
  <div>
    <p>User's name is {{ user.name }}</p>
  </div>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue';

  // data property as a reactive object
  const user = ref({
    name: 'John',
    lastName: 'Doe'
  });

  // Deep watcher on the user object
  watch(user, (newVal, oldVal) => {
    console.log('User object changed:', newVal);
  }, { deep: true });

  // As an example, change the user data after component mount
  onMounted(() => {
    user.value.name = 'Jane';
  });
</script>
```

#### What is the $nextTick utility?
This is a utility for waiting for the next DOM update flush.

---

### Virtual DOM
#### What is Virtual DOM?
The Virtual DOM is a lightweight copy of the actual DOM.
Vue.js uses this Virtual DOM to perform efficient updates and minimize the number of actual DOM manipulations,
which can be resource-intensive.

#### How does Virtual DOM work in Vue, some specifics, and the re-rendering process?
* Initial Render
  * When your Vue component is created, it goes through an initial rendering phase.
  * During this phase, Vue creates a Virtual DOM based on the component's template and data.
  * The Virtual DOM is a JavaScript object that mirrors the structure of the actual DOM.
* Updating Data
  * When the data in your component changes (due to user interaction, API calls, etc.), Vue updates the virtual DOM rather than directly manipulating the actual DOM.
  * This update triggers a process called "Reactivity" in Vue, where it identifies the components that need to be re-rendered.
* Virtual DOM Diffing
  * After the Virtual DOM is updated, Vue performs a process called "diffing" to determine the minimum number of changes required to update the actual DOM.
  * Diffing involves comparing the new virtual DOM with the previous one to identify the differences (changes in data).
  * Vue uses a heuristic algorithm to minimize the number of manipulations needed.
* Patch and Re-render
  * Once the differences are identified, Vue generates a minimal set of DOM manipulation instructions.
  * These instructions are then used to update the actual DOM, resulting in a re-render of only the parts of the DOM that have changed.
  * This process is more efficient than updating the entire DOM, as it reduces the amount of work the browser has to do.

---

### The life cycle of Vue instance
#### What is vue instance?
Every Vue application works by creating a new Vue instance with the Vue function.
Generally, the variable vm (short for ViewModel) is used to refer Vue instance.

#### What life cycle of the Vue Instance?
* Creation Phase
  * beforeCreate: This hook is called before the instance is created. At this point, data observation, events, and watchers are not yet set up.
  * created: This hook is called after the instance is created. At this point, the instance has finished processing options like data, computed properties, methods, etc. However, the template has not been mounted or rendered yet.
* Mounting Phase
  * beforeMount: This hook is called before the template is mounted to the DOM.
  * mounted: This hook is called after the template is mounted to the DOM. This is often used for initial data fetching and manipulation.
* Updating Phase
  * beforeUpdate: This hook is called before a component is updated. It is triggered whenever data changes and the update process is about to start.
  * updated: This hook is called after a component is updated. At this point, the DOM has been re-rendered to reflect the latest changes.
* Destroying Phase
  * beforeDestroy: This hook is called just before a Vue instance is destroyed. This is a good place to clean up any resources, such as event listeners or timers.
  * destroyed: This hook is called after a Vue instance has been destroyed. All directives, filters, and child components have been unbound.
* Error Handling
  * errorCaptured: This hook is called when an error is captured anywhere in the child component tree. It receives the error, the Vue instance that captured the error, and a string containing information about the error.

---

### Built-in Components
#### How can we add animations on adding/removing an item from a list?
We can use "<transition-group>" built-in component.

#### What is the Keep-Alive? What is the purpose of Keep-Alive?
In Vue.js, "<keep-alive>" is a built-in component that can be wrapped around dynamic components to preserve their state
or avoid re-rendering.

This is useful in cases where you might want to save the state of a complex interactive component,
avoid costly mounting and unmounting, or retain the scroll position on a long page.

#### What is the analog of onMounted hook in a Keep-Alive component? Why can it be useful?
In a Vue component wrapped with <keep-alive>, the equivalent of the onMounted lifecycle hook is the onActivated hook.

#### Why do we need Teleports?
They allow us to control where we render specific parts of our components.

#### Why do we need Suspense?
Suspense is a special component that allows you to "suspend"
your component rendering while they wait for async activity to finish.
Here are a few reasons why we need Suspense:
* Simplified async handlers
  * We don't need multiple async tasks handlers, we can operate with just one.
  This is useful when we don't need to visualize every component when it finishes loading. 
* Improved User Experience
  * It allows developers to provide a fallback content which can be displayed during the waiting period.
  This improves the user experience, especially during long async operations,
  by providing the user with a loading indicator or a skeleton screen.
* Better Error Handling Capabilities
  * With Suspense, you can wrap multiple components that might throw errors and handle these errors in just one place.
* Avoid Flash Of Unwanted Content (FOUC)
  * It can pause other parts of the app from rendering,
  thus eliminating instances of UI flashing when data or components are loading.

---

### State Management
#### Tell about state management in Vue.js. What is the purpose of state manager? What problems it solve?
For larger-scale applications, components will often need to share and manipulate state information.
This can lead to problems such as passing data through nested structures,
thus making components too closely tied together, which makes them difficult to test, reuse, or understand individually.

The purpose of state manager
* Centralized State Management
  * This centralized state ensures that every component gets its state from one common place
  and always remains in sync with the shared state.

* Predictable State Mutations
  * Any state mutation occurs in a handler that is trackable, making your state changes predictable.

* Decoupling of Components
  * The need for prop drilling (passing down of state via props through components)
  is reduced as Vuex/Pinia allows each component to get access to the state separately.

Problems Solved by State Manager
* Propagation of Data
  * Without a state manager, data might have to be passed as props through several layers of components in an application.
  This could quickly become complicated and hard to maintain.

* Parent-Child Component Decoupling
  * Without a state manager, parent components and their children might become tightly coupled
  if the child components are reliant on the props passed down from their parent for state data.

* Component Communication
  * Without a centralized state manager, data sharing across sibling and cousin components can be complex.

* Performance Optimization
  * Vuex/Pinia can improve performance
  by preventing unnecessary data fetching or state calculation operations due to its caching mechanism.

#### What does Pinia stand for?
Pinia is a state management library for Vue.js.
It helps manage the state of an application and facilitates the flow of data between components.

---

### Routing
#### How can we create navigation between pages in Vue?
Navigation between pages is usually handled using a package called vue-router.
Vue Router is the official router in Vue.js.
It allows you to define and manage the different routes of your application in a straightforward, organized way. 
