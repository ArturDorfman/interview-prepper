---
title: 'Interview questions'
groupId: 'general'
---

# Interview questions

### Junior
#### Do you follow the news in the world of frontend? How exactly?
I read people on LinkedIn, following few authors on the X (Twitter), time-to-time read articles on Medium. Also, I have email subscriptions.

#### What separates good code from bad code?
I'm gonna describe good code points and bad code is an opposite.

**Good Code:**
1. Readability and Maintainability:
   * Code should be easy to read and understand.
   * Follow a consistent coding style.
   * Use meaningful variable and function names.
   * Provide comments when necessary.

2. Modularity:
   * Break code into modular components or functions.
   * Encapsulate functionality to promote code reuse.
   
3. Efficiency:
   * Code should be optimized for performance where necessary.
   * Avoid unnecessary computations or resource usage.

4. Scalability:
   * Design code that can scale as requirements evolve.
   * Consider potential future changes.

5. Correctness:
   * Code should produce the expected output.
   * Handle edge cases and errors gracefully.

6. Documentation:
   * Provide clear and comprehensive documentation.
   * Include information on how to use and extend the code.

7. Testing:
   * Implement unit tests to ensure code correctness.
   * Conduct thorough testing, including edge cases.

8. Consistency:
   * Follow established conventions and patterns.
   * Be consistent in coding style and approach.

9. Avoidance of Code Smells:
   * Eliminate redundant code.
   * Minimize code complexity.
   * Avoid long methods or functions.

10. Version Control:
    * Use version control systems effectively (e.g., Git).
    * Provide meaningful commit messages.

#### What HTTP methods and statuses do you know?
**HTTP Methods:**
1. GET
   * Retrieve information from the server.
   * The request parameters (if any) are included in the URL.

2. POST
   * Submit data to be processed to a specified resource.
   * Often used for form submissions.

3. PUT
   * Update a resource on the server.
   * The request typically includes the updated data.

4. DELETE
   * Request the removal of a resource on the server.

5. PATCH
   * Apply partial modifications to a resource.

6. HEAD
   * Retrieve headers, similar to GET, but without the response body.

7. OPTIONS
   * Retrieve information about the communication options available for a resource.

8. TRACE
   * Echoes the received request to the client, primarily used for diagnostic purposes.

9. CONNECT
   * Establish a network connection to a resource, typically for secure connections (HTTPS).

**HTTP Status Codes:**
1. 1xx (Informational):
   * 100 Continue
   * 101 Switching Protocols
   * 102 Processing

2. 2xx (Successful):
   * 200 OK
   * 201 Created
   * 204 No Content
   * 206 Partial Content

3. 3xx (Redirection):
   * 301 Moved Permanently
   * 302 Found (or temporarily moved)
   * 304 Not Modified
   * 307 Temporary Redirect

4. 4xx (Client Error):
   * 400 Bad Request
   * 401 Unauthorized
   * 403 Forbidden
   * 404 Not Found
   * 405 Method Not Allowed
   * 422 Unprocessable Entity (often used in REST APIs)
   * 429 Too Many Requests

5. 5xx (Server Error):
   * 500 Internal Server Error
   * 501 Not Implemented
   * 503 Service Unavailable
   * 504 Gateway Timeout

#### What is the difference between PUT and PATCH methods?
Both methods are used for updating resources, PUT is generally associated with full updates or creation, while PATCH is specifically designed for partial updates.

#### What is the difference between HTTP and HTTPS?
The primary difference between HTTP and HTTPS lies in the level of security they provide.
HTTPS is the preferred choice for websites and applications that require secure data transmission, especially when dealing with sensitive information.

#### What is the risk of executing user-generated code?
User-generated code may contain security vulnerabilities, such as code injection, SQL injection, or other exploits that could be used to compromise the system.

#### What is the difference between a class and an abstract class in TS?
Abstract class can't be instantiated. Abstract class is used to be inherited by other classes. 

---

### Middle
#### Are the principles of SoC, DRY, KISS, YAGNI, BDUF, APO known?
Yes, I know them all.
1. SoC (Separation of Concerns)
   * This principle advocates dividing a computer program into distinct sections, where each section addresses a specific concern.
   By doing so, it becomes easier to understand, maintain, and modify the code.

2. DRY (Don't Repeat Yourself)
   * This principle advocates for reducing redundancy in code by avoiding duplications.
   The idea is that each piece of knowledge or logic should only exist in a single place in the codebase.
   This not only makes the code more maintainable but also reduces the chances of errors caused by inconsistencies in duplicated code.

3. KISS (Keep It Simple, Stupid)
   * The KISS principle suggests that simplicity should be a key goal in design and implementation.
   It encourages developers to avoid unnecessary complexity and choose the simplest solution that meets the requirements.
   A simple and straightforward design is generally easier to understand, maintain, and troubleshoot.

4. YAGNI (You Ain't Gonna Need It)
   * YAGNI advises against adding features to a software project until they are actually needed.
   Developers should avoid implementing functionality based on assumptions about future requirements that may or may not materialize.
   This principle helps prevent over-engineering and ensures that the software remains focused on current needs.

5. BDUF (Big Design Up Front)
   * BDUF suggests that extensive planning and design should be done before starting the implementation of a project.
   However, many modern development methodologies, such as Agile, emphasize iterative and adaptive planning, allowing for adjustments as the project progresses.

6. APO (Avoid Premature Optimization)
   * APO advises against optimizing code for performance before it is necessary.
   Premature optimization can lead to complex and hard-to-maintain code.
   It's often better to focus on writing clean and understandable code first and optimize later if performance issues arise.

#### Explain each component of SOLID.
[SOLID](https://www.youtube.com/watch?v=TxZwqVTaCmA&t=2s&ab_channel=UlbiTV) is an acronym that represents a set of five design principles for writing maintainable and scalable software.
1. **Single Responsibility Principle (SRP)**
   * **Definition:** A class should have only one reason to change, meaning that it should have only one responsibility or job.
   * **Explanation:** This principle emphasizes that a class should focus on doing one thing and doing it well. 
   If a class has multiple responsibilities, it becomes more difficult to maintain, understand, and modify. 
   Separating concerns makes the code more modular and adaptable to change.

2. **Open/Closed Principle (OCP)**
   * **Definition:** Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
   * **Explanation:** This principle encourages developers to design their systems in a way that allows for new functionality to be added through extension rather than altering existing code. 
   This reduces the risk of introducing bugs into well-established code and promotes the use of interfaces and abstract classes to facilitate future extensions.

3. **Liskov Substitution Principle (LSP)**
   * **Definition:** Objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.
   * **Explanation:** This principle ensures that subtypes must be substitutable for their base types without altering the correctness of the program. 
   In other words, if a class is a subclass of another class, it should be usable in any place where its parent class is used without causing issues.

4. **Interface Segregation Principle (ISP)**
   * **Definition:** A class should not be forced to implement interfaces it does not use. 
   In other words, a class should not be required to implement methods it does not need.
   * **Explanation:** This principle advises against creating large, monolithic interfaces. 
   Instead, it suggests breaking interfaces into smaller, more specific ones, tailored to the needs of the classes that implement them. 
   This helps to avoid the problem of forcing classes to implement methods they don't actually need.

5. **Dependency Inversion Principle (DIP)**
   * **Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions. 
   Abstractions should not depend on details; details should depend on abstractions.
   * **Explanation:** This principle encourages the use of abstractions (interfaces or abstract classes) to decouple high-level modules from low-level modules. 
   This inversion of dependencies makes the system more flexible and easier to maintain, as changes in low-level modules do not directly affect high-level modules.

#### Why should you pay attention to the complexity of the algorithm?
Paying attention to algorithmic complexity is essential for making informed decisions about algorithm selection, resource allocation, and overall system performance, which are critical factors in developing robust and efficient software applications.

#### What entities do you divide the file structure into at the beginning of the design?
It's depends on size of a current project. Usually, I've been using few architecture approaches. There are typical companies boiler plate and modular. Typical parts of these approaches are components, utils, views/pages, configs, assets etc.

#### How do you know when it's time to separate a certain entity in a project?
It's important to weigh the pros and cons, considering factors like maintainability, scalability, and collaboration within your development team. 
If code base becomes hard to maintain or even understand fast, we should start refactoring.  

#### What do you do to make your code easier to maintain?
For easier maintain my code base, I'm following few crucial principles.
* Following design patterns
* Regularly review and refactor your code to improve its structure and readability
* Using Automated Testing
* Using Version Control
* Following Consistent Coding Style
* Using Modularization

#### What is refactoring and how do you do it?
Refactoring is the process of restructuring existing code base without changing its external behavior.
The main purpose of refactoring is to improve the code's readability, maintainability, and overall design without altering its functionality.

Here are some common techniques and best practices for refactoring:
1. Analyze the codebase to identify areas that could be improved in terms of readability, maintainability, or performance.
2. Ensure that the existing code has a comprehensive suite of tests. This helps ensure that your changes do not introduce new bugs.
3. Each step should be focused on a specific improvement and should not change the external behavior of the code.
4. Use of Git to track changes. This allows you to revert to a previous state if something goes wrong.
5. Use established design patterns to improve the overall structure of your code.
6. Understand the existing code thoroughly before making changes. Refactoring should be done with confidence, backed by a good understanding of the codebase.
7. Ensure that your code works and you don't produce new issues. Then update or add tests.
8. Update Documentation

---

### Senior
#### What are the necessary knowledge and skills a Senior Developer needs to have?
#### What should be the work and communication in the development team?
#### What methods of project evaluation and planning do you use?
#### What do you pay attention to when choosing technologies for a project?
#### How do you approach mentoring and developing less experienced developers?
#### How do you introduce new technologies or practices into the team?
#### How do you solve conflicts and problems in a team?
#### What will front-end development look like in two to three years?
#### Which of the new frameworks have you tried?
#### What are your pet projects, maybe you are doing open source?
#### Do you speak at conferences/meetups?
#### Do you regularly share professional opinions somewhere, in which communities do you participate?
#### What podcasts/channels/authors would you recommend?
#### What new tools have you started using and can you recommend?

---

### Soft Skills
#### What do you know about Conversation-starting Techniques?
1. Ask Open-Ended Questions
   * Instead of asking questions that can be answered with a simple "yes" or "no," ask open-ended questions that encourage people to share more about themselves.

2. Compliment
   * Give a genuine (true) compliment to start the conversation on a positive note. It could be about someone's appearance, an accomplishment, or something you genuinely appreciate.

3. Share Something Personal
   * Opening up a bit about yourself can make others feel more comfortable doing the same. Share a relevant personal story or experience.

4. Use Humor
   * Humor can break the ice and make people feel more at ease. Just be mindful of the context and the other person's sense of humor. (Use with caution!) 

5. Find Common Ground
   * Look for shared interests, experiences, or mutual connections. Finding common ground helps establish a connection from the beginning.

6. Ask for Advice
   * Seeking advice is a great way to involve others in the conversation. It shows that you value their opinion and can lead to interesting discussions.

7. Bring up Current Events or Shared Interests
   * Discussing current events or topics of mutual interest can provide a natural starting point for a conversation.

8. Use F.O.R.D. Technique
   * F.O.R.D. stands for Family, Occupation, Recreation, and Dreams. These are safe and common topics that can lead to meaningful conversations.

9. Start with a Question
   * Begin the conversation by directly asking the other person a question. This immediately involves them and gives them a reason to respond.

10. Be a Good Listener
    * Sometimes, starting a conversation involves listening. Respond thoughtfully to what others are saying, and it can naturally lead to a more extended discussion.

Remember, the key to successful conversations is to be genuine, respectful, and attentive to the other person's responses. Adjust your approach based on the context and the individual you're engaging with.

#### What do you know about Time management? What tools and techniques do you use in your life?
Time management techniques are strategies and approaches used to utilize and allocate time to tasks and activities effectively.

1. Prioritization
   * Eisenhower Matrix: Divide tasks into four categories based on urgency and importance - urgent and important, important but not urgent, urgent but not important, neither urgent nor important.

2. To-Do Lists
   * Daily/Weekly To-Do Lists: Create lists of tasks for the day or week, prioritizing them based on importance. Cross off tasks as you complete them.

3. Time Blocking
   * Allocate specific blocks of time to different tasks or activities. This helps in focusing on one task at a time and avoids multitasking.

4. Pomodoro Technique
   * Work in focused intervals, typically 25 minutes, followed by a 5-minute break. After completing four cycles, take a longer break.

5. Batching
   * Group similar tasks together and tackle them during specific time periods. This minimizes context switching and improves efficiency.

6. Set SMART Goals
   * Specific, Measurable, Achievable, Relevant, and Time-bound goals help provide clarity and focus.

7. Time Audit
   * Track how you spend your time to identify patterns and areas for improvement.

8. Eliminate Time Wasters
   * Identify and eliminate activities that do not contribute significantly to your goals.

9. Delegate
   * Delegate tasks that can be done by others, freeing up your time for more strategic or high-priority activities.

10. Use Technology
    * Utilize productivity tools, apps, and calendars to schedule tasks and reminders.

11. Learn to Say No
    * Avoid overcommitment by learning to say no to tasks that do not align with your priorities.

12. Mindfulness and Breaks
    * Take short breaks to refresh your mind. Mindfulness practices can improve focus and concentration.

13. Eat That Frog
    * Tackle the most challenging or important task first thing in the morning when your energy levels are high.

14. The Two-Minute Rule
    * If a task takes less than two minutes, do it immediately rather than postponing it.

15. Review and Reflect
    * Regularly review your goals and adjust your time management strategies accordingly.

#### Do you delegate tasks to your teammates? How do you do that?
Delegating tasks effectively is an essential skill for leaders and team managers.

1. Understand Your Team
   * Know the strengths, weaknesses, and skills of your team members.
   * Consider individual workloads and current commitments.

2. Define the Task
   * Clearly articulate the task or project, including its goals, objectives, and expected outcomes.
   * Specify any constraints, deadlines, or important details.

3. Choose the Right Person
   * Match tasks to team members based on their skills, expertise, and availability.
   * Consider giving challenging tasks to individuals who are ready for growth opportunities.

4. Communicate Clearly
   * Clearly explain the task, its importance, and the desired outcomes.
   * Encourage team members to ask questions for clarification.
   
5. Set Expectations
   * Define expectations regarding quality, deadlines, and any specific requirements.
   * Discuss the level of autonomy the team member will have and the resources available.
   
6. Provide Resources
   * Ensure that team members have the tools, information, and resources to complete the task successfully.
   
7. Encourage Questions and Feedback
   * Create an open communication environment where team members feel comfortable asking questions and providing feedback.
   
8. Monitor Progress
   * Regularly check in on the progress of the task without micromanaging.
   * Offer support and guidance if needed.

9. Recognize Achievements
   * Acknowledge and appreciate the efforts and achievements of team members.
   * Provide constructive feedback to facilitate continuous improvement.
   
10. Handle Setbacks Gracefully
    * If issues or setbacks arise, address them calmly and constructively.
    * Use setbacks as learning opportunities for both yourself and your team.

11. Empower Autonomy
    * Trust your team members to take ownership of their delegated tasks.
    * Avoid unnecessary interference unless needed for guidance or support.

12. Evaluate and Learn
    * After completing the task, conduct a debrief to evaluate the process and outcomes.
    * Identify what worked well and areas for improvement in the delegation process.

Remember, effective delegation is not just about assigning tasks but also about fostering a culture of trust, communication, and collaboration within your team. 
It helps individuals develop new skills, promotes a sense of ownership, and contributes to overall team success.

#### What rules and norms of business communication do you know?
Key rules and norms of business communication:
1. Clarity and Conciseness
   * Clearly express your message without ambiguity.
   * Use straightforward language and avoid unnecessary details.

2. Professional Tone
   * Maintain a professional and respectful tone.
   * Avoid using overly casual language or inappropriate humor.
   * Use follow-up questions

3. Audience Awareness
   * Tailor your message to the needs and understanding of your audience.
   * Consider the background, knowledge, and preferences of the recipients.
   
4. Timeliness
   * Respond promptly to messages and meet deadlines.
   * Respect others' time by being punctual in your communication.
   
5. Proofreading
   * Check your messages for errors before sending them.
   * Take the time to proofread emails and documents to ensure professionalism.
   
6. Respect for Privacy
   * Respect confidentiality and privacy.
   * Avoid discussing sensitive information inappropriately.
   
7. Constructive Feedback
   * Provide feedback in a constructive manner.
   * Focus on specific behaviors and suggest improvements rather than criticizing.
   
8. Active Listening
   * Listen attentively to others.
   * Show that you are engaged by nodding, making eye contact, and asking relevant questions.
   
9. Use of Technology
   * Choose the appropriate communication channel for the message.
   * Use email for formal communication, instant messaging for quick queries, and face-to-face meetings for complex discussions.
   
10. Consistency
    * Maintain consistency in your communication style.
    * Ensure that your messages align with your previous communication to build trust.
    
11. Conflict Resolution
    * Address conflicts professionally and promptly.
    * Seek resolution through open communication and compromise when necessary.
    
12. Cultural Sensitivity
    * Be aware of cultural differences in communication.
    * Adapt your communication style to respect diverse cultural norms.
    
13. Use of Formal Channels
    * Follow established communication channels within the organization.
    * Respect hierarchies and report information through appropriate channels.

#### What can you say about Product Orientation?
1. Research the Industry
   * Gain a deep understanding of the industry in which your client operates.
   * Stay updated on industry trends, challenges, and emerging technologies.

2. Study the Client's Business
   * Research your client's company thoroughly, including its history, mission, values, and overall business strategy.
   * Understand the client's target audience, competitors, and market positioning

3. Understand the Client's Product/Service
   * Familiarize yourself with the features, functionalities, and unique selling points of the client's product or service.
   * Use the product or service yourself, if possible, to get a firsthand experience.

4. Identify Pain Points
   * Engage with the client to identify specific pain points or challenges they face in their industry.
   * Conduct interviews, surveys, or focus groups to gather insights from end-users.

5. Ask the Right Questions
   * When communicating with the client, ask open-ended questions to encourage them to share their thoughts and concerns.
   * Ask about their goals, priorities, and expectations from the product.

6. Build Relationships
   * Develop strong relationships with key stakeholders within the client's organization.
   * Regularly communicate with them to stay informed about any changes or updates related to their product.

7. Stay Customer-Centric
   * Keep the end-users in mind throughout the entire process. Understand their needs and preferences.
   * Regularly gather feedback from customers and use it to improve the product.

8. Continuous Learning
   * Stay committed to continuous learning. This includes staying informed about industry news, advancements, and changes.
   * Take advantage of online courses, webinars, events, and workshops related to the industry and product management.

9. Collaborate Internally
   * Work closely with internal teams such as product development, marketing, and sales to ensure a unified understanding and approach.
   * Foster a collaborative environment where information flows seamlessly between departments.

10. Feedback Loop
    * Establish a feedback loop with the client, continuously seeking their input on the product and its performance.
    * Use feedback to make data-driven decisions and guide future product development.

#### Do you motivate your team members? How do you do that?
Motivating teammates to develop and grow is crucial for fostering a positive and productive work environment. Here are some strategies you can employ:

1. Set Clear Goals
   * Clearly define individual and team goals.
   * Make sure everyone understands the overall objectives of the project and the role they play in achieving them.

2. Encourage Learning and Skill Development
   * Create a culture that values continuous learning.
   * Encourage team members to attend workshops, conferences, and training sessions.
   * Consider offering opportunities for further education or certifications.

3. Provide Constructive Feedback
   * Offer regular, constructive feedback on their work.
   * Highlight their strengths and provide guidance on areas where they can improve.
   * Recognition for achievements can be a powerful motivator.

4. Acknowledge and Reward Achievements
   * Recognize and reward individual and team accomplishments.
   * This can be done through formal channels such as awards or publicly acknowledging their contributions during team meetings.

5. Promote Collaboration
   * Foster a collaborative environment where team members can learn from each other.
   * Encourage the sharing of knowledge and skills within the team, creating a culture of mentorship.

6. Empower Autonomy
   * Allow team members to take ownership of their projects.
   * Empower them to make decisions and solve problems independently.
   * This can boost confidence and motivation.

7. Create a Positive Work Environment
   * Foster a positive and inclusive workplace culture.
   * Ensure that the work environment is conducive to collaboration, creativity, and personal development.

8. Offer Professional Development Opportunities
   * Provide opportunities for professional growth, such as attending workshops, online courses, or industry conferences.
   * Support them in pursuing certifications relevant to their roles.

9. Connect Personal Goals to Professional Development
   * Understand the personal and professional goals of your team members.
   * Try to align these with their roles and responsibilities, demonstrating how their development contributes to their broader aspirations.

10. Lead by Example
    * Demonstrate a commitment to your own professional development.
    * When team members see leaders investing in their growth, it sets a positive example for the entire team.

11. Regular Check-Ins
    * Conduct regular one-on-one meetings to discuss individual development goals, challenges, and progress.
    * This shows that you are invested in their growth and well-being.

12. Flexibility and Work-Life Balance:
    * Support a healthy work-life balance.
    * When employees feel that their personal lives are respected, they are more likely to be engaged and motivated to contribute positively.

Remember that motivation is a dynamic and ongoing process.
Regularly revisit these strategies and adapt them to the evolving needs of your team.

---
