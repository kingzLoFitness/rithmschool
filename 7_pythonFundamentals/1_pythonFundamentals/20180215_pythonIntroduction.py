Interested in 25 hours of screencasts and over 200+ exercises? Check out our new Udemy Course
rithm school company logo
Learn Full Time 
Coding Workshops
Free Online Courses
Partnerships
About 
Apply Now
Table of Contents | Next
{ Python History and Installation. }

Objectives:
By the end of this chapter, you should be able to:

Explain what Python is and where it is used
Compare and contrast Python2 and Python3
List common data types in Python
What is Python?
Python is a popular programming language that you can use to write server-side code for your web applications. You're only a Google search away from a number of different descriptions of Python, but if you're looking for an overview, a good place to start is the Python website itself. According to the about page, Python is "powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open."

In 2008, a new version of Python (3.0) was released. Python 3 is the future of the language and is what we will be learning in this class. Not all libraries are compatible with Python 3, but that will change shortly and should not be an issue for your learning. You can read more about the differences here.

Python is an extremely versatile language and is used by some of the largest companies in the world in multiple fields. It's beginner-friendly and has a welcoming community and set of standards around writing code in a "Pythonic" way.

We will be using Python 3, so make sure to download it here. Once you have downloaded Python 3, your next step is to be sure that you have the package manager for Python 3 installed too. The package manager for Python 3 is called pip3, and it's what you'll be using to install any external Python 3 libraries.

To determine whether or not you've got pip3 installed, type pip3 into the terminal. 
If you see that the command is not found, follow instructions here to install it.

Some guiding principles in Python
If you type python3 into the terminal and type in import this you can see the guiding principles behind the language. Adhering to these principles will help you write more "Pythonic" code (we will see lots of examples of what that looks like). To exit the Python REPL you can type quit().

In Python there is something called PEP or Python Enhancement Proposals. Each proposal is simply a document, which can cover new features for the language, style guides, and more. Each proposal has a number that is assigned by the PEP editors, and once a proposal is accepted by the community, it is never changed. You can read more about them here.

One of the most important PEPs is PEP8, which is a style guide for Python. This guide was written by the creators of the language and is widely accepted as the standard for writing Python code. You can read more about it here.

If you'd like to read through the entire style guide, you can find it here.

Installing a linter for Python
One of the most common linters for python is Pyflakes, which you can install as follows: in Sublime, press Command + Shift + P, type in "Install Package" and press enter and when the list of packages appears, type in SublimeLiner-pyflakes, and press enter. This linter is quite helpful when you first start working in Python and will help you identify issues with indentation, scoping, and other general syntax issues. For this to work, you need to also have pyflakes installed on your machine. So make sure that anywhere in the terminal you run pip3 install pyflakes then restart sublime and your linter should be working!

Data Types in Python
Python has quite a few native datatypes. We'll provide an overview of a few of the more common ones. For a complete list of the built-in types, check out the docs. You can also find a list of even more data types available in Python here.

Booleans - As with many other programming languages, there are two booleans in Python: True and False (be mindful of the capitalization).
Numbers - There are a number (pun intended) of different number types in Python. These include integers (4, 1, -10, etc.), floats (1.3, -2.9, etc), and more.
Strings - Strings are sequences of Unicode characters, like "hi", "bye", and "I love strings!"
Lists - Lists are ordered sequences of values. The values are comma-separated and in between square brackets. Compared to a language like JavaScript, a list is very similar to an array. Here's an example of what a list might look like: [1, 2, 3, "the end"].
Tuples - Tuples are very similar to lists, but they have one crucial difference. With a list, you can always reassign a value somewhere in the list. However, once you set values in a tuple, you can't change them. We say that tuples are immutable, as opposed to lists, which are mutable. A tuple uses parentheses rather than brackets: (4, 2, 1) is an example of a tuple.
Sets - Sets are also similar to lists, but have a couple of big differences. One is that sets don't keep track of duplicate values: they only store unique values. The second difference is that unlike lists, whose elements are ordered by index, sets don't impose any order on the elements inside of them. You can think of a set as simply an unordered collection of distinct values. Here's an example of a set: set("a", "b", "c").
Dictionaries - A dictionary is an unordered collection of key-value pairs. This data type exists in other programming languages, but often goes by other names. For example, a dictionary is similar to a hash in Ruby, or an object in JavaScript. Here's an example of a dictionary: {"key": "value", "a": 0}.
We'll learn much more about these data types in the coming chapters!

Running Python Code
To get started with a Python REPL, which is where you will be writing your code, make sure python is installed and anywhere in the terminal, type in python3. To exit the REPL you can type quit() or press control + d.

If you find it easier to use, you can check out repl.it for Python3 and start here. To run your code you can click the run button (or use the keyboard shortcut you see when you hover over the button).

If you would like to write larger Python files, you can save them as .py files. Let's imagine that you create a file called first.py. If you want to run that file, you have to make sure you are in the same directory (folder) where the file is saved. To run the file, make sure you are in the Terminal/Command Line and run python3 first.py. If you are not comfortable in the Terminal, check out our free online courses on Terminal and UNIX!

When you're ready, move on to Variables and Data Types

Continue

Creative Commons License
 rithm school company logo
info@rithmschool.com
 
 
Privacy Policy | Terms of Service
© Rithm Inc. 3338 17th Street Suite 100 San Francisco, CA 94110. All rights reserved.
