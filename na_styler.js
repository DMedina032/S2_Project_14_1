"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Dajah Medina
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles);

var styleNum = randlnt(5);
var linkElem = document.getElementById("link");
linkElem.setAttribute("rel", "styleSheet");
linkElem.setAttribute("id", "fancySheet");
linkElem.setAttribute("href", "na_style_num.css");

document.head.appendChild(linkElem);

var figBox = document.createElement("figure");
figBox.setAttribute("id", "styleThumbs");

document.getElementById("box", figBox);






function randInt(size) {
      return Math.floor(size * Math.random());
}