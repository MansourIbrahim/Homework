'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.body.style.fontFamily = 'Arial, sans-serif';
let nicKname = document.getElementById('nickname');
let favFood = document.getElementById('fav-food');
let homeTown = document.getElementById('hometown');
let myName = document.createTextNode('Mans');
let myFavFood = document.createTextNode('fish');
let myTown = document.createTextNode('cairo');
nicKname.appendChild(myName);
favFood.appendChild(myFavFood);
homeTown.appendChild(myTown);

let li = document.querySelectorAll('li');
li.forEach((list) => {
  list.className = 'list-item';
});
