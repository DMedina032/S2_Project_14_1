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

function setStyles() {

      var styleNum = randInt(5);
      var linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(linkElem);

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");

      document.getElementById("box").appendChild(figBox);

}

for (var i = 1; i <= figBox; i++) {
      var sheetImg = document.getElementById("img");
      sheetImg.setAttribute("src", "na_small_num.png" + i + "png");
      sheetImg.setAttribute("alt", "na_style_num.css" + i + "css");
      sheetImg.addEventListener("click", function () {
            document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            figBox.appendChild(sheetImg);
      })
}

document.styleSheets[document.styleSheetslength - 1].insertRule(
      "figure "
)




function randInt(size) {
      return Math.floor(size * Math.random());
}