// Exercise Time:
//1) Create three new variables:
// - A variable that stores the name of an online course of your choice
// - A variable that stores the price of that course
// - A variable that stores the three main goals that you have, when taking this course
let coursename = 'Web Development - The Complete Guide';
let courseprice = 39;
let coursegoals = ['Learn Web Development', 'Become a web developer', 'Have fun!'];
//2) Output("alert") the three variables values
alert(coursename);
alert(courseprice);
alert(coursegoals);
//3) Try "grouping" the three variables together and still output their values thereafter
let onlinecourse = { name: 'Web Development - The Complete Guide', price: 39, goals: ['Learn Web Development', 'Become a web developer', 'Have fun!'] };
alert(onlinecourse.name)
alert(onlinecourse.price)
alert(onlinecourse.goals)
//4) Also output the second element in your "main goals" variable
alert(onlinecourse.goals[1])

//5) Add a custom command that does the following:
// - use your "main goals" variable and access an element by its identifier
// - the concrete identifier value should be dynamic/flexible(the command can be executed for different identifier)
// - the "main goals" variable should also be dynamic: the command should work with ANY list of values
// - the custom command should provide the accessed value (i.e. the list element)
function getlistitem(array, arrayindex) {
    let arrayelement = array[arrayindex];
    return arrayelement;
}
//6) Execute your custom command from (5) and output ("alert") the result
let firstgoal = getlistitem(onlinecourse.goals, 0)
alert(firstgoal)
// exercise time!
// 1- select the <h1> element by "drilling into the DOM" and save it in a variable with a name of your choice
let h1element = document.body.firstElementChild;
h1element = document.body.children[0];
console.dir(h1element);
// 2- use the variable from (1) and get access to the "parent" element of the stored <h1> element (i.e. to the <body> element). 
console.dir(h1element.parentElement)
// BONUS: Try using the variable from (1) to get access to the sibling element(i.e. the <p> element next to the <h1> element)
console.dir(h1element.nextElementSibling);
// 3- select the <h1> element with getelementbyid and store in the same or a new variable(up to you)
h1element = document.getElementById('first-title');
console.log(h1element);
// 4- select the second <p> element with queryselector (you might need to add something in the HTML code, e.g. a class) and store it in a new variable with a name of your choice
let highlightedParagraph = document.querySelector('.highlighted-paragraph')
console.dir(highlightedParagraph);
// 5- BONUS TASK: Try changing the text content of the <P> element you selected in (4) and set it to any other text of your choice
highlightedParagraph.textContent = 'This was changed by Max!';