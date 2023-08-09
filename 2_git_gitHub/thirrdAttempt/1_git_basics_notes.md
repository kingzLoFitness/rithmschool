# Rithm School Git and Github

1. Git Basics

### Objectives 
- define what a VCS is
- initialize an empty git repository,  

### What is Git?

### Getting Started with Git
- make sure that git is installed
- in the terminal type:
> git --version
- no error means good to go
- or error (example: command not found: git), you may need t install Git on your computer
- Mac Install (Homebrew: https://brew.sh/)
- then from terminal run command:
> brew install git 
- Linux Install
> sudo apt-get install git
- Windows Install here: https://git-scm.com/download


- git installed
- "initialize" a repository with Git before you can start using it
-- create folder called Learn_git
cd into that folder

inside of folder run: 
> git init
output:
> Initialized empty Git repository in /Users/YOUR_USERNAME/Desktop/learn_git/.git/

> ls -a   (or is it ls -la)
- shows all folders including the hidden .git folder
- git init created that folder
- almost never have to go inside that folder
- used to go into the git commands in the next chapter
- REMINDER: the first step to any project with Git, is making sure you have a .git folder


NOTE: If you accidentally intialized a repository in the wrong directory 
- remove the .git folder using
- rm -rf .git




---
---
---

---
---
---





## Basic Git Commmands

Objectives
- explain what git add does
- explain what git commit does
- explain what git status does
- explain the different stages when adding and committing

### Adding and committing Files
- take a snapshot of your code (what is called a 'commit'), you first ned to add your code from your woring directory t what is called:
- the "staging" area - where your code goes before it is "committed" (i.e. before a snapshot is taken)
- to see the stage you code is at use the git status command:

> git status

- if you have not added, removed, or modidified any files, you will be notified that there is nothing to commit and your working directory is clean (nothing that needs to be staged or crm ommitted).




- create directory called working_with_git and cd into it
- initialize a git repository within it
>git init

> git status
- nothing to commit (no files yet)

- add a new file that has not been committed before
- create the file called example.txt

> touch example.txt
- run 
> git status

- that file will be "untracked" by git
- if you are modifying or deleting fies that git has seen before, you will see "modified" or "deleted" when you examine 
> git status

- again, this new file is not tracked yet.  
- so let's track it

- to track this file
> git add example.txt
- or 
> git add .
- tells git to adds everything that's changed in the current directory to the staging area. or 
> git add -A
- read more about differences here:
Stack Overflow Post - https://stackoverflow.com/questions/572549/difference-between-git-add-a-and-git-add?rq=1



- once you have added all the files you would like to the staging area, the next step is to commit with a message (you always need one).  Your first commit
> git commit -m "initial commit"





- to see your commit history
> git log 
- to close out thte commit log type:
> q



- cleaner view of each commits in one line 
> git log --oneline





- PRACTICE adding and commiting several times with new files
- add a second file and/or adding some text inside of example.txt file



### Your turn
- more practice
- add files to th staging area, and commit them, complete these steps:
1. Ceate a folder called learn_git 
2. cd into the learn_git folder 
3. create a file called first.txt
4. initialize and empty git repository
5. add first.txt to the staging area
6. Commit the message "adding first.txt"
7. Check out your commit with git log
8. Create another file called second.txt 
9. Add second.txt to the staging area
10. commit with the message "adding second.txt"
11. remove the first.txt file (Note: I used git rm <file name>)
12. add this change to the staging area
13. commit with the message "removing first.txt"
14. check out your commits using git log

- this is almost identical to the way you work with git ina professional environment


---
---
---



## Configuring Git
- Objective 
-- by the end you should be able to: 
- change global configuaration settings 
- make temporary and permanent aliases

### .gitconfig Settings
> git log 
- you may not see any information for the author and email 
- you will absolutley want this for GitHub 
- make sure the email you specify is the same one you used to sign up for GitHub:
> git cofig --global user.name "YOUR NAME"
> git config --global user.email "YOUR EMAIL"



- if you also find it annoying to press q everytime in git log, you can change this as well:
> git config --global --replace-all core.pager cat


- these global configuration settings live in a file called .gitconfig which typically lives in your home directory
- to see all of the setting run:
> cat ~/.gitconfig



### Git aliases
- typing git commmands over and over 
- shortcut, or alias (you can type so that you do not need to type the entire command)
- create a temporary alias (as long as your terminal is open)

> git config alias.KEYBOARD_SHORTCUT COMMAND

- so now you can type git st for git status by running this:
> git config alias.st status


- to make alias a part of your global configuration, add the --global command after git config.  Example for git i to git init globally, type:
> git config --global alias.i init




---
---
---



## Git Basics Exercises
- using the basics of Git workflow
- run through this a couple of times on your own:

1. Create a folder called learn_git_again
2. cd into the learn_git_again folder
3. Create a file called third.txt
4. Initialize an empty git repository
5. Add third.txt to the staging area
6. Commit with the message "adding third.txt"
7. Check out your commit with git log
8. Craete another file called fourth.txt
9. Add fourth.txt to the staging area
10. Commit with the mesage "adding fourth.txt"
11. Remove the third.txt file
12. Add this change to the staging area
13. Commit with the message "removing third.txt"
14. Check out yur commits using git log
15. Change your global setting to core.pager=cat - you can read more about tat here: https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration
16. Write the command to list all of the global configuationshttps://github.com/rithmschool/git_github_solutions/tree/master/git_basics for git on your machine.  You can type git config --global to find out how to do this.

You can find the solutions here:
https://github.com/rithmschool/git_github_solutions/tree/master/git_basics



---
---
---
