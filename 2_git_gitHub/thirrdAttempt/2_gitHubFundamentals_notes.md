# 2. GitHub Fundamentals

## Github Introduction
- compare and contraast Git and GitHub
- List use cases for Github

### What is GitHub?
- web-based Git repository hosting service
- a tool that enables collaboration by hosting shared Git repositories that teams of developers can all contribute to.
- Git is a Version Control System
- GitHub is an online platform for hosting and sharing code, text files and ven more complex file formats

### Why use GitHub?
- store code in remote location
- many large open source projects are hosted on GitHub
- move code from our local repository to a remote repository on GitHub using the **push** command
- as well as retrieve code from a remote repository on GitHub using the **pull** command
- GitHub specific concepts like **forking** and **pull requests**

- here are some Projects hosted there:

    - Angular
    - React 
    - Ruby on Rails
    - Twitter Bootstrap
    - Node.js
    - JQuery
    - Homebrew


### Getting started with GitHub
- github.com
> gitconfig
- should have same email address when you signed up with GitHub


---
---
---
---
---
---

## Working with Remotes

### Objectives
- careate a remote repository on GitHub
- Create a remote in the terminal
- Push code from a local repository to a remote repository



### Ceating a remote repository
- within your GitHub account
> https://github.com/new
- create a repository called 

> first_repo
- do not worry about description or checking the box to initialize the repository with a README file

- after creation of repo, GitHub will give some instructions to get started.  Something like this

> echo "# first_repo" >> README.md

> git init

> git add README.md

>git commit -m "first commit"

> git remote add origin https://github.com/elie/first_repo.git

> git push -u origin master


The commands one by one:

1. > echo "# first_repo" >> README.s
- passing some markdown into a file called README.md

2. > git init
- make sure we have a repository

3. > git add README.md
- let's add the README.md file (we can also do **git add .** or **git add -A**)

4. >git commit -m "first commit"
- add a comment with the message "first commit"
=
5. > git remote add origin https://github.com/elie/first_repo.git
- tells our local repository about a remote repository located somewhere
- the location of remote repositoryg
- now we can send our code to GitHub by typing:
> git push https://github.com/elie/first_repo.git master
or for short
> git push origin master
- send the code from our **master** branch to this remote repository

- going back **git remote add**
- how we tell our local repository about a remote repository (that we can send/retrieve code from)
- **origin** is a nickname for whree the repository is actually located (at https://github.com/elie/first_repo.git)
- to see your remotes locally:
> git remote -v
- if you need to remove a remote, use:
> git remote rm NAME_OF_REMOTE


6. > git push -u origin master
- now we can send out code from a local repository to our remote repository (which we aliased to **origin** in the previous command)
- the -u flag allows us in the future to only have to type
> git push 
instead of 
> git push origin master

REVIEW:

**git push**
- how we send code from a local repository to a remote repository

**origin**
- where we are sending it (specifically to **origin/master** which is the master branch on our remote repository)

**master**
- local branch where we are sending our code from


### Pushing code up to GitHub
> git push 
- will prompt to enter your username adn password for Github
- frequently (not just once or twice)

> SSH Keys
- create an SSH Key in order to 
- establish some trust between our computer and GitHub so that when we run **git push** or **git**, GitHub does not need to authenticate us (asking for Username and Password)

---
---
---
---
---
---



## SSH Keys 
### Objectives
- understand the value of using SSH with GitHub
- Create an SSH key
- Authenicate successfully with GitHub

---
---
---
---
---
---





## GitHub Workflow



---
---
---
---
---
---





## GitHub Exercises




---
---
---
---
---
---




