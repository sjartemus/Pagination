/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.
   ***/

//Grabs all the Student Items and stores them into a variable called...
const StudentListItems = document.getElementsByTagName('ul');
//Make child item so you manipulate the elements in the DOM
const ChildListItems = StudentListItems.children;
const ItemsPerPage = 10;
var NumberofPages = '';

//Create a function to make all the list items disspear
for (var i = 0; i < StudentListItems.length; i++) {
  StudentListItems[i].style.display = 'none';
}


// Create function that computer the number of pages needed from the number of ul
// Elements and the number of elements to be found on a page.
function PagesNeeded() {
  //Math ceil so the answer returned is rounded up
  let TotalPages = Math.ceil(StudentListItems.length/ItemsPerPage);
  return TotalPages;
}

//Create Multiple buttons dynamically
for (let i = 0; i <= PagesNeeded(); i++){

  //creates buttons
  var  Buttons = document.createElement("button");
// assigns the value of i to varialbe and increments it to be used as the button
//name
  let a = i; //stores
  a++; //increments

  Buttons.innerHTML = a; //store value in a as the button name

//Append the Button to the pages
var body = document.getElementsByTagName("body")[0];
body.appendChild(Buttons);

// Event handler for Clicks
Buttons.addEventListener ("click", function() {
  alert("did something");
});



}








/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
