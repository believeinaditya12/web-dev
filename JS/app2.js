// document.body.children[1].children[0].href = 'https://google.com';


// const newObject = {
//  someProperty: 'some value'
// };
// console.dir(document);
// alert();
// window.alert();
// common query methods(Day 34)
//1- document.getElementById('some-id'): Select a HTML element by its ID (selects only one element, since IDs should be unique)

//2- document.querySelector('<some-css-selector>'): Selects the first matching (!) HTML element that is met / selected by the provided CSS selector; The CSS selector can basically be any kind of valid CSS selector (e.g. ID selector, tag type selector, class selector, combined selectors etc.)

//3- document.querySelectorAll('<some-css-selector>'): Selects ALL matching HTML elements that are met / selected by the provided CSS selector

//4- document.getElementsByClassName('some-css-class'): Selects all HTML elements that have the provided CSS class

//5- document.getElementsByTagName('tag'): Selects all HTML elements that are of the provided HTML tag type
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';
anchorElement.href = document.querySelector('p a'); // p a {color: red;}
anchorElement.href = 'https://academind.com';
anchorElement.href = document.querySelector('a'); //p a {color: red;}
anchorElement.href = 'https://academind.com';
document.body.firstElementChild
document.body.children[0]
document.body.children[1]