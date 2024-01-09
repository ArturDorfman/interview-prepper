---
title: 'Working with backend'
groupId: 'essentials'
---

# Work with backend

---

### What is an API and how does the frontend interact with it?
An API, or Application Programming Interface, is a set of rules and protocols that allows one software application to interact with another. 
It defines the methods and data formats that applications can use to communicate with each other. 

In the context of web development, APIs are commonly used to enable communication between the frontend and the backend.
The frontend interacts with an API by sending HTTP requests to specific endpoints, using standard methods to perform operations on the server.
The API processes these requests and returns a response, which the frontend can then use to update the user interface or perform other actions.

### What are the data exchange formats between frontend and backend?
There are several data exchange formats commonly used between frontend and backend systems in web development.
* **JSON** (JavaScript Object Notation) is often the default choice for modern web applications due to its simplicity and ease of use.
    ```json
    {
      "name": "John Doe",
      "age": 25,
      "city": "New York"
    }
    ```
* **XML** (Extensible Markup Language) may be preferred for specific use cases where its structure and extensibility are beneficial.
    ```xml
    <person>
      <name>John Doe</name>
      <age>25</age>
      <city>New York</city>
    </person>
    ```

### What are CRUD operations and how are they implemented in practice?
CRUD stands for Create, Read, Update, and Delete – four basic operations that are commonly used in an application development.

Create (C) - often involves inserting a new row or document into a database table or collection.
Read (R) - involves querying the database to fetch specific records or all records that meet certain criteria.
Update (U) - use SQL UPDATE statements in relational databases to modify specific records.
Delete (D) - use SQL DELETE statements to remove records from relational databases.

### How to use websockets to implement real-time communications?
To establish a WebSocket connection the client can send an HTTP “hand shake” request with an upgraded header, specifying that the client wants to establish a WebSocket connection. This request is sent to a ws: or wss: URI and if the server is able to establish the connection, it will send a successful response back and the handshake is complete. The TCP/IP connection is left open, allowing bidirectional messages to pass through between each party. This is often referred to as a full-duplex connection.

![WebSockets scheme](/images/WS.webp)

Nice article with simple [WebSockets](https://emily-elim04.medium.com/building-real-time-apps-using-websockets-dc137ccdd34b) explanation.
More detailed article on [Stackoverflow](https://stackoverflow.blog/2019/12/18/websockets-for-fun-and-profit/).
[WebSockets in 100 Seconds & Beyond with Socket.io](https://www.youtube.com/watch?v=1BfCnjr_Vjg&ab_channel=Fireship).

### What authentication and authorization tools are used in modern web applications?
The world of authentication and authorization tools for modern web applications is vast and diverse, offering a range of options depending on your specific needs and priorities. 
Here's a breakdown of some popular categories and tools:
**Authentication**
* Local Authentication
  * Username/Password: Still the most common, but requires strong password policies and hashing/salting for security.
  * Email/SMS verification: Adds an extra layer of security through one-time codes.
  * Social Logins (OAuth): Convenient for users, but raises privacy concerns and data sharing considerations.

* Token-based Authentication
  * JSON Web Tokens (JWT): Lightweight and self-contained tokens for stateless authentication across services.
  * OAuth 2.0: Widely used protocol for authorization between multiple applications.

* Biometric Authentication
  * Fingerprints, facial recognition: Secure but requires specific hardware and user acceptance.

**Authorization**
* Role-based Access Control (RBAC): Assigns different access levels to user roles (e.g., admin, editor, user).
* Permission-based Access Control (PBAC): Granular control over specific actions and resources.
* Attribute-based Access Control (ABAC): Dynamic authorization based on user attributes and resource properties.

### What are the basic principles of secure storage and transfer of user data?
Secure storage and transfer of user data rests on four fundamental principles:
1. Confidentiality
   * This principle ensures that only authorized users can access the data.

2. Integrity
   * This principle guarantees that the data remains unaltered and complete throughout its lifecycle.

3. Availability
   * This principle ensures that authorized users can access the data whenever needed.

4. Accountability
   * This principle emphasizes the responsibility of all stakeholders in protecting user data.

### What is GraphQL and what are its advantages and disadvantages compared to REST?
What is GraphQL?

Imagine a data buffet where you specify exactly what you want on your plate, instead of receiving pre-assembled trays.
That's GraphQL in a nutshell. It's a query language for APIs that lets you request specific data fields through a single request, regardless of their location or relationship in the database.
You define what you need, and the server delivers it efficiently, eliminating overfetching of unnecessary data.

**Advantages of GraphQL**
* Data efficiency: Get only the data you need, reducing bandwidth usage and server load.
* Flexibility: Build complex queries across interconnected data with ease.
* Single endpoint: Send one request for all your data needs, simplifying client-side code.
* Strongly typed schema: Ensures data consistency and makes development faster.
* Real-time capabilities: Enables live updates and subscriptions for interactive experiences.

**Disadvantages of GraphQL**
* Complexity: Learning GraphQL and building well-designed schemas can be steeper than REST.
* Server load: Complex queries can be computationally expensive for the server.
* Limited tooling: Compared to REST, the ecosystem of tools and libraries is still evolving.
* Security considerations: Access control and authorization require careful implementation.

### What data caching strategies can be used in the frontend?
There are several powerful data caching strategies you can utilize in the frontend to improve performance and user experience.
Browser Caching
1. HTTP Caching
   * This utilizes HTTP headers like Cache-Control and Expires to instruct browsers and intermediate caches on how long to store your resources. It's ideal for static assets like images, scripts, and stylesheets that change rarely.
2. Service Worker Caching
   * This allows you to define custom caching logic using service workers. You can cache API responses, dynamic data, and even entire pages for offline access.

Client-Side Caching
1. Web Storage
   * Use APIs like localStorage and sessionStorage to store data permanently or for the current session, respectively. This is handy for caching user preferences, form data, and small bits of frequently accessed data.
2. IndexedDB
   * For larger datasets or complex structures, IndexedDB provides a database-like API for storing and retrieving data locally.

### How can large amounts of data be processed without negatively impacting front-end performance?
Balancing large data processing with smooth front-end performance requires a multi-pronged approach. Here are some key strategies:

Back-end Optimization
1. Pre-processing
   * Analyze and filter data on the server-side before sending it to the front-end. This reduces the amount of data the browser needs to handle, improving responsiveness.

2. Data aggregation
   * Aggregate and summarize large datasets on the server. Present users with a more concise and digestible version of the data for quicker rendering.

3. Data caching
   * Cache frequently accessed data on the client-side for faster retrieval and reduced server load.

Front-End Optimization
1. Pagination and Infinite Scrolling
   * Instead of loading all data at once, implement pagination or infinite scrolling to load a limited amount of data initially.
   * Load more data as the user reaches the end of the current set.

2. Lazy loading
   * Load data only when it is needed. For example, if your page has tabs or sections, load the data for each tab or section only when it becomes active.
   * Use lazy loading for images, videos, and other media to load them only when they come into the user's viewport.

3. Virtual DOM
   * Use libraries like React or Vue.js that employ a virtual DOM, minimizing DOM manipulations and boosting performance.

4. Client-Side Caching
   * Cache data on the client side to reduce the need for repeated requests to the server.
   * Leverage browser caching mechanisms or use technologies like Service Workers to store data locally.

### What tools and approaches are used to monitor and debug requests to the server?
Monitoring and debugging requests to a server is crucial for ensuring the performance, reliability, and security of a web application.

Monitoring Tools
1. Server Logs
   * Provide detailed information about requests, responses, errors, and server events.

2. Network Monitoring Tools
   * Capture and analyze network traffic to identify performance bottlenecks, errors, and security threats.

3. Application Performance Monitoring (APM) Tools
   * Offer a comprehensive view of application performance, including request metrics, response times, error rates, and resource utilization.

4. Infrastructure Monitoring Tools
   * Track server health and resource usage, such as CPU, memory, disk I/O, and network bandwidth.

Debugging Tools
1. Browser Developer Tools
   * Feature network inspection tools to examine request and response headers, payloads, timings, and console logs for client-side debugging.

2. Server-Side Debuggers
   * Allow step-by-step execution of code, inspection of variables, and setting breakpoints to identify issues within server-side applications.

### What are Web Workers and Service Workers?
Web Workers and Service Workers are two important concepts in web development that allow you to create more powerful and responsive web applications. While they share some similarities, they have distinct purposes and functionalities.

**Web Workers**
* Purpose
  * Offload CPU-intensive tasks from the main thread of your application to prevent it from becoming blocked and unresponsive.
  This improves the user experience by keeping the UI smooth and interactive even while complex calculations or data processing are happening in the background.

* Functionality
  * Run JavaScript code in a separate background thread, isolated from the main thread.
  They can communicate with the main thread through messages and shared data structures.

* Use cases
  * Image processing, video encoding/decoding, audio manipulation, data analysis, complex calculations, and any other task that takes up a lot of CPU time.

**Service Workers**
* Purpose
  * Act as a proxy between your web app, the browser, and the network.
  They enable features like offline functionality, push notifications, and background syncing.

* Functionality
  * Intercept network requests, cache resources, and serve them from the cache when the network is unavailable.
  They can also subscribe to push notifications from servers and display them even when the app is not open.

* Use cases
  * Providing offline access to web apps or specific parts of them, sending push notifications to users, background synchronization of data (e.g., for fitness trackers), and handling network failures gracefully.

Here's a table summarizing the key differences between Web Workers and Service Workers

| Feature           | Web Workers                                                 | Service Workers                                          |
|-------------------|:------------------------------------------------------------|----------------------------------------------------------|
| Main purpose      | Offload CPU-intensive tasks                                 | Manage network requests and enable offline functionality |
| Thread model      | Runs in a separate background thread                        | Runs in a separate service worker context                |
| DOM access        | Has access to the DOM                                       | No access to the DOM                                     |
| Network access    | Can make network requests using Fetch API or XMLHttpRequest | Can intercept and handle network requests                |
| Typical use cases | Image processing, video encoding, data analysis             | Offline access, push notifications, background syncing   |
