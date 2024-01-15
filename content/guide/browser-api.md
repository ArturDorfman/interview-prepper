---
title: 'Browser API'
groupId: 'web'
---

# Browser API

---

### DOM
#### What is DOM?
#### How does JavaScript interact with the DOM?

### What is AJAX?
### How to make an HTTP request using JavaScript?

### What is event handling in JavaScript?
### What are event bubbling and event capturing in the context of event processing in the DOM? How do you use these concepts to effectively handle events?
### What is event delegation in the DOM, how do you use this approach to optimize event handling, especially on large pages?

### Storing data in the browser
#### What are the ways to store data in the browser?
#### What is the difference between LocalStorage, SessionStorage and cookies?
#### How do you use LocalStorage and SessionStorage in JavaScript? In what cases do you consider their use appropriate?

### JSON
#### What is JSON and how to work with it in JavaScript?
#### What is JSONP and how is it used?

### Browser Architecture
#### What is the Web Browser?
A web browser is an application that serves as a gateway interface between the user and the server.
It loads and compiles the results from the server in the form of an HTML web page and paints it on the screen of the user.

#### What does a browser consist of?
The [browser architecture](https://www.geeksforgeeks.org/browser-architecture/) is broadly divided into seven parts.
1. The User Interface
   * The user interface of a browser is designed such that it allows personalization, as every individual has different interests.
   This personalization is achieved by providing basic features like groups, collections, bookmarks, and themes.
   Each browser can have a different user interface and features.

2. Browser Engine
   * The browser engine, also known as a rendering engine is responsible for coordinating web content that is fetched from the server and user interactions.
   It keeps a note of which button is clicked, which URL is asked to parse, and how the web content will be processed and displayed on the browser.
   * Popular browser engines include Blink (used by Google Chrome), WebKit (used by Safari), and Gecko (used by Firefox).

3. [Rendering Engine](https://developer.mozilla.org/en-US/docs/Glossary/Rendering_engine)
   * The rendering engine, on the other hand, interprets and renders web content.
   In most browsers, both the browser engine and the rendering engine work together in order to provide better results to the user.

4. Networking Layer
   * This layer handles the communication part.
   When the user enters or clicks on a URL, the network layer initiates an HTTP request to the web server to load the requested web page.
   It also manages fetching resources from HTML files, images, stylesheets, and more.
   Have you seen those cookie notifications while searching for information on the internet?
   Mostly, the network layer works behind the scenes for those cookies and cache.

5. JavaScript Engine
   * The JavaScript Engine is the core component of browser architecture, with the ability to manipulate web content and introduce dynamic behavior in web pages.

6. Data Storage
   * A large part of the browser goes into storing various types of data, which include not only user preferences, browsing history, passwords, and other regular data updates as well (address, name, and contact).

7. UI backend
   * The UI backend provides dynamic and interactive behavior on the web page and enhances the overall functionality and performance of the browser.

![Web Architecture](/images/web-architecture.png)
