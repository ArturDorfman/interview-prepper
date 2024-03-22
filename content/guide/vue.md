---
title: 'Vue'
groupId: 'frameworks and libraries'
---

# Vue

---

### General
#### What is a Composition API in Vue 3?
#### What is an interpolation?
#### What is a mixins in Vue 2?
#### What are composable in Vue 3?
#### How can force component's re-rendering?
* The best way to use the ‘key’ attribute on a component and change it
* Also, we can use $forceUpdate()

---

### Conditional Rendering
#### How can we render something if we have some condition?
#### What is the difference between v-if and v-show?

---

### List Rendering
#### How can we render a list of items?
#### What is “key” in vue.js?
The "key" attribute is used to give each rendered element a unique identifier.
#### Why do we need to set "key" attribute when we render a list?
#### Why shouldn't we use indexes as a key in v-for?
#### Can we use v-if and v-for on the same element?

---

### Directives
#### What are ‘directives’ in Vue.js?
Directives are special tokens in the markup that tell the Vue.js to do something to a DOM element.

#### What directives do you know? What directives do you use in your day-to-day work?
v-model, v-if, v-else, v-show, v-html, v-for, v-on, v-bind, v-slot (old fashioned)

#### How can we create a custom directive?
#### What is a two-way binding?
#### How can we make two-way binding without v-model?
We can rewrite the v-model by attribute ‘:value’ and ‘@input’ event.

#### What is the difference using v-model in Vue 2 and Vue 3?
#### What are directive modifiers?
#### What modifiers v-model has?
.lazy, .number, .trim etc.

---

### Vue component
#### What are components in Vue.js?
#### Name parts of a Vue component?
#### What are props in a Vue component?
#### Why do we need $emit?
#### What is a component lifecycle? What lifecycle hooks do you use the most?
#### What lifecycle hook is the best for making request to a backend?
#### What lifecycle hook do you use for cleanup?
#### How can we make style block local for a current component?
#### How globally register a component in Vue 3? 
#### Why do we need async components in Vue?

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
#### How does reactivity work in Vue 2 and Vue 3?

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
##### Can we change computed properties?
##### What is the difference between computed properties and methods?
The difference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed.

#### Watch
##### What is a watch and how can we watch changes in a model?
##### How can we watch a nested object?

#### $nextTick
##### What is the $nextTick method?
This is a utility for waiting for the next DOM update flush.

---

### Virtual DOM
#### What is Virtual DOM?
The Virtual DOM is a lightweight copy of the actual DOM. Vue.js uses this Virtual DOM to perform efficient updates and minimize the number of actual DOM manipulations, which can be resource-intensive.

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
#### Transition
##### How can we add animations on adding/removing an item from a list?
#### Keep-Alive
##### What is the Keep-Alive? What is the purpose of Keep-Alive?
##### What is the analog of onMounted hook in a Keep-Alive component? Why can it be useful?
#### Teleport
##### Why do we need Teleports?
#### Suspense

---

### State Management
#### Tell about state management in Vue.js. What is the purpose of state manager? What problems it solve?
#### What does Pinia stand for?
Pinia is a state management library for Vue.js. It helps manage the state of an application and facilitates the flow of data between components.

---

### Routing
#### How can we create navigation between pages in Vue?
