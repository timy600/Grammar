
## Main difficulties to overcome  

After reading the challenge, the two main problems appeared to be:
* `I had never used React before`. Well that was not really a surprise. I knew I would have to get to it eventually if I applied for Frontend - React Engineer.
* `Nor have I ever done a Drag and Drop` but saw a classmate two weeks ago do one of them in JQuery, so it didn't look impossible. Also, the possibility to use libraries would come in handy.
I should mention another element that might explain why I struggled a bit when discovering React: over the past two weeks I discovered two new frameworks for my training: Symfony and Django. It’s not really a problem since it has been the pace we were following for the past four months but overlapping the learning phase of a JavaScript Library with two other frameworks in PHP and Python was a bit hard. I still have no clue on what Redux is and if I should care about it.

## My approach
I thought the best tutorial to learn React would be the typical todo-list but I lost time last weekend following tutos not really well explained. I went back to the official documentation, with a tic-tact-toe example which introduced with more clarity the main concepts of React. One of them was Immutability, I thought I could use it to generate a parent component and a child component to navigate inside the JSON file. It was a bad idea, the JSON architecture was still unclear to me, it still looked like two levels were wrong and this glitch prevented me to iterate indefinitely.
So I decided to change the order of the steps:
* Simplify the JSON structure to a table with column and entry, letting me focus on how components work in React and just displaying the content of a JSON file;
* Implement the navigation by handling the clicks on entries and put a button allowing to go back to the previous level;
* Put an “add button” (column or entry);
* Now that I handle a bit better React, try to understand the JSON file structure and reorganize it according to its original structure;
* Implement the breadcrumbs;
* Implement a Drag and Drop on a single column to see how it works, with no permanent effect on the entries’ indexation;
* End with the Drag and Drop crossing over columns;

I did not get all the way to the drag and drop, mostly because I tried managing the historic of each view and it turned out to be more complicated than I anticipated. Still, I was glad to get a first glance at immutability and drag and drop.

## Displaying the Json File
People were telling me React was similar to Angular, a framework I enjoyed working with a few weeks ago, and I was a bit disappointed to lose most of the cool features of Angular: double-binding, ngFor and ngIf directives... The tutorials where not really helping to understand how to iterate over the file to generate components.
That’s why I decided to simplify the JSON file, you can see my first try by rendering AppSimple instead of App in Index.js.
```
/src
/component
  /simple
      GrammarColumnSimple.js
      GrammarsSimple.js
      ItemDefinitionSimple.js
AppSimple.js
dataSimple.js
index.js
```
It was a good way to see how `state` and `props` worked, how to iterate with a map() function or when to choose between a functional component or a class component.
After that, I went back to the JSON file and finally realized I was misled by the example showing either multiple columns or multiple entries but never both at the same time. I was able to use the three main class components I developed: two for iterating over columns and entries, one for the final entry. I also changed the Add buttons from functional component to class component.
When doing the add Button, I decided to proceed this way:
* add the two mock buttons to know where they would appear and manage the display in CSS
* focus first on the column button, since it doesn’t require any index
* transfer the button to its own component to be able to create a widget that would replace the button and let choose the name of the new column/entry

## History track and Immutability
Once the breadcrumbs were working, the "Back" button was not needed anymore to navigate inside the structure. Nevertheless, a good UX Design would require to be able going to the previous state, and not just to the upper level. I intended to change the “Back” button from a “upper level” button to a “previous location” button. I failed over and over, not understanding why the entire history array would change when I pushed in a new state of the structure. The second day on the problem, a colleague explained me it had to do with the concept of immutability and the way the copy was stored in the memory. Fun but time-consuming problem to solve.
This button misses a last feature, so it doesn’t push to the history array the current location when we click on the same location in the breadcrumbs.

## Drag and Drop
I first did a test by rearranging a friend's algorithm in Jquery by trying to bound a square to an area. You can find this code there:
```
/script
  dragNdrop.js
```
But since libraries are allowed, let's use one. I used the [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) library to implement the items into a drag and drop list. I only did a test yesterday with the example of the library (the Drag and Drop Button).
Since I did not implement it, I can still give the path I expected to take:
* Changing the indexation: especially after doing the history, I think I will need to store the object (actually the pointer to this object) instead of an array with index [column, entry] of the current location, same thing for rendering the Entry components;
* Trying first to implement the library functions in the GrammarColumn’s components. I already started to put the functions, but I didn’t know part of the syntax of the library (hello ternary operators!). It would allow entries to be dragged and dropped within the same column, but without affecting the stored values;
* Once it works well, the Grammar component (that manages the render of the GrammarColumns’s components) would get involved, so the columns would take the role of the lists in the example;

## What else this project is missing
Besides the implementing drag and drop…
* To suppress entries and columns functions (**looks easy**)
* To update widgets and functions (**looks easy**)
* To merge the two Add Buttons by adding a “column/entry” property (**looks easy**)
* To resolve the breadcrumbs-click dead link bug with the Back button (**I should stop carrying about this button and focus on the drag and drop**)
* To rename some of the elements (handleClick function was relevant at the beginning, redoing the indexation could let me reshape the functions in the App Class...)
* To figure out what Redux is for (**looks weird**)

## What I’ve learned:
* React (how components are generated, functional components, multiple components, how to transfer information, the difference between props and state...)
* the immutability concept and why our professor wanted us to learn pointers and memory storage managing in C three months ago;
* how to use a JSON file directly (I only used it through MongoDB with MEAN), but that was kind of a giveaway;
* new JavaScript syntax (the ternary operator for conditions, or that I can just set a state property to a variable with the same name in just one word…);
* what widgets are;
* what breadcrumbs means;
* how a drag and drop algorithm works;

Hey have you seen the colors?! It's the same as your webpage!

Thibaut Chevée
