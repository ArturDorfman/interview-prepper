---
title: 'Git and version control systems'
groupId: 'essentials'
---

# Git and version control systems

---

### What is a version control system and why is it used?
A version control system (VCS) is a software tool that helps manage changes to source code or any set of files over time. It tracks modifications to files, allowing multiple contributors to collaborate on a project simultaneously. The primary goals of a version control system include:
* History tracking: VCS maintains a history of changes made to files, including who made the changes, when they were made, and what changes were implemented. This historical record is valuable for understanding the evolution of the project.
* Collaboration: VCS enables multiple developers to work on the same project concurrently. It allows them to make changes independently and merge their modifications later, preventing conflicts and ensuring a streamlined collaboration process.
* Branching and merging: VCS facilitates the creation of branches, which are separate lines of development. Developers can work on features or fixes in isolated branches without affecting the main codebase. Merging allows changes from one branch to be incorporated into another, enabling the integration of new features or bug fixes.
* Backup and recovery: VCS serves as a backup mechanism, preserving different versions of files. If an error occurs or a mistake is made, it's possible to revert to a previous state. This helps in recovering from accidental changes or system failures.
* Code review and auditing: VCS provides a platform for code review, allowing team members to review each other's changes before merging them into the main codebase. This contributes to code quality and helps in identifying potential issues early in the development process. Additionally, VCS logs provide an audit trail for accountability and compliance purposes.
* Parallel development: With branching, developers can work on different features or fixes simultaneously without interfering with each other. This parallel development is essential for speeding up the overall development process.

### What basic Git commands do you know and what are they used for?
* git init - initializes a new Git repository, creating the necessary data structures and configuration files.
```git
git init
```

* git clone - copies a repository from a specified URL, creating a local copy on your machine.
```git
git clone <repository_URL>
```

* git add - adds changes in the working directory to the staging area, preparing them to be committed.
```git
git add <file(s)>
git add . // add all files
```

* git commit - records the changes in the staging area as a new commit in the Git history.
```git
git commit -m "Commit message"
```

* git status - displays the status of changes as untracked, modified, or staged.
```git
git status
```

* git pull - uploads local branch commits to a remote repository.
```git
git push origin <branch_name>
```

* git branch - lists existing branches and allows the creation of new branches.
```git
git branch
git branch <branch_name>
```

* git checkout - switches between branches or restores files from a specific commit.
```git
git checkout <branch_name>
git checkout -b <new_branch_name>
```

* git merge - combines changes from one branch into another.
```git
git merge <branch_name>
```

* git log - displays a log of commits, showing commit messages, authors, and timestamps.
```git
git log
```

* git remote - shows the remote repositories connected to your local repository.
```git
git remote -v
```

### What is the difference between git merge and git rebase?
'git merge' and 'git rebase' are two different strategies in Git for combining changes from one branch into another.
* **git merge** - combines changes from a source branch into a target branch. 

**Process**: It creates a new commit with a merge commit message, then preserves the commit history of both the source and target branches. Results in a branching commit history.
When to use 'git merge':
* For public branches that are shared and collaborated on by multiple developers.
* When a clear and explicit merge commit is desired in the history.
* When it's important to preserve the original context of changes.
```git
# Example of merging 'feature-branch' into 'main'
git checkout main
git merge feature-branch
```

* **git rebase** - integrates changes by moving or combining a sequence of commits to a new base commit.

**Process**: It temporarily stashes changes in the target branch.
Applies the changes from the source branch one by one on top of the target branch. Results in a linear commit history, without additional merge commits.
When to use 'git rebase':
* For local branches or feature branches not shared with others.
* When a cleaner, more linear commit history is desired.
* When integrating changes from the main branch into a feature branch before merging.
```git
# Example of rebasing 'feature-branch' onto 'main'
git checkout feature-branch
git rebase main
```

### What is a commit in Git and how to form it correctly?
In Git, a commit represents a snapshot of the changes made to a set of files in a Git repository at a specific point in time. 
Each commit has a unique identifier (hash) and includes information about the changes introduced, the author, the timestamp, and a reference to the previous commit, forming a linked sequence known as the commit history or commit tree.

To form a commit correctly, you generally follow these steps:
1. Make Changes
2. Stage Changes
    ```git
    git add <file(s)>
    ```
3. Review Changes (optionally)
    ```git
    git diff
    ```
4. Create a Commit
    ```git
    git commit -m "first commit"
    ```

The commit message should follow some best practices:
* Be clear, descriptive and keep it concise
* Use Present Tense
* Reference Issues
```git
git commit -m "Add new feature XYZ, addressing issue #123"
```

### How to fix errors in previous commits?
Here is the cool [GitLab Article](https://about.gitlab.com/blog/2018/08/08/git-happens/) which describes the most common mistaces and how can we fix them.

### What are branches in Git and how to use them effectively?
In Git branches are diverges from main line of development without effecting main branch. 
We can use branches for develop features, bug fixes and so on. 
After we finish our task, feature etc we can merge our secondary branch with main.

### How to create a new branch in Git?
To create a new branch, you can use the following command:
```git
git branch branch_name
git checkout branch_name
// or
git checkout -b branch_name
```
### What branch selection strategies are used in different development processes (eg Git Flow)?
I've used GitFlow or it's variations.

### What are tags in Git? How to use them?
In Git, tags are references that point to specific points in Git history, such as a commit.
Tags are immutable and do not change once they are created, making them useful for keeping track of important points in your project's development.
There are two main types of tags in Git: lightweight tags and annotated tags.

* **Lightweight Tags**
  * Lightweight tags are essentially pointers to a specific commit. 
  They are easy to create and do not store any additional information such as a tagger name or date.
   ```git
   git tag <tag_name> [<commit_hash>]
   ```
  
* **Annotated Tags**
  * Annotated tags are stored as full objects in the Git database and include additional information such as the tagger's name, email, date, and a tagging message.
  * Annotated tags are generally recommended for creating tags associated with releases.
  * To create an annotated tag, you can use the following command:
   ```git
   git tag -a <tag_name> -m "Tag message" [<commit_hash>]
   // example: git tag -a v1.0.0 -m "Release version 1.0.0"
   ```

Tags are not automatically pushed to a remote repository when you push changes. You need to explicitly push tags using the following command:
```git
git push origin <tag_name>
// or push all tags at once
git push origin --tags
```

To delete a tag, we can use following command:
```git
git tag -d <tag_name>
```
To delete a remote tag, you need to push the deletion:
```git
git push origin --delete <tag_name>
```

### What is a merge conflict and how to resolve it?
In Git, a merge conflict occurs when two branches that are being merged have changes in the same part of a file, 
and Git is unable to automatically reconcile those changes. 
This typically happens when two developers have made changes to the same lines of code in parallel, 
and Git cannot determine which version to keep.

Here's a step-by-step guide on how to resolve a merge conflict in Git:
1. Start the Merge
2. View the Conflicts
3. Manually Resolve the Conflict
4. Remove Conflict Markers ('<<<<<<<', '=======', and '>>>>>>>')
5. Add the Resolved Changes using 'git add <filename>'
6. Complete the Merge using 'git merge --continue' or 'git commit' 

After resolving conflicts and completing the merge, it's a good practice to run your application, execute tests, 
and ensure everything works as expected.

### What are the best practices for working with remote repositories?
Here are some best practices for working with remote repositories:
1. Clone the Repository
   * Always start by cloning the remote repository to your local machine. 
   This creates a local copy of the entire repository on your system.
2. Frequent Pulls
   * Regularly pull changes from the remote repository to keep your local copy up to date.
3. Branch Frequent
   * Avoid making changes directly to the main branch. Instead, create a feature branch for each new feature or bug fix.
4. Commit Frequently
   * Make small, frequent commits with descriptive commit messages.
   This makes it easier to understand the history of changes.
5. Push to Remote
   * Push your feature branches to the remote repository regularly to share your changes with the team.
6. Pull Requests/Merge Requests
   * Use pull requests (GitHub) or merge requests (GitLab) to propose and discuss changes before merging them into the main branch. 
   This allows for code review and collaboration.
7. Fetch Before Push
   * Always fetch changes from the remote repository before pushing your changes. This ensures that you have the latest changes and reduces the chance of conflicts.
8. Handle Conflicts Gracefully
   * If conflicts occur during a merge or rebase, resolve them promptly. Communication with team members is crucial to avoid conflicting changes.
9. Use Tags for Releases
   * Tag important commits to mark releases or milestones. This helps in easily identifying and reverting to specific points in the project's history.
10. Protect Branches
    * On platforms like GitHub or GitLab, protect branches like main to prevent force-pushes and enforce code review before merging.

### How to use .gitignore file?
Gitignore file is useful when we want avoid some files or folders in our repository.
To use .gitignore we should:
1. Create a .gitignore File
2. Edit the .gitignore File
3. Add .gitignore File to repository

---
