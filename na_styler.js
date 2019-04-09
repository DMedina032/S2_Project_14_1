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
// This event listener will run the setStyles fuction whenever the page is loaded 
window.addEventListener("load", setStyles);
//This function willl allow a styl sheet to load whnever the page is loaded.
function setStyles() {
      // decleared the varible styleNum and set it equaled to randInt to be returned to it
      var styleNum = randInt(5);
      //created an element node and linked it to the style sheet and set each attribute to each style sheet
      var linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");
      // Apeend the linkElem to the document head in the style sheet
      document.head.appendChild(linkElem);
      //created the element figBox  so  the users can choose  between each image. For the figBox the attribute was set to it and appened "box" to to the figBox for the div element
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);


      // made a for loop  that goes  through each image. Each link is the value for the sheetImg varible to loop through each one. Then, the figBox is appendd to the thumbtyles.
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png")
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");
            sheetImg.addEventListener("click", function (e) {
                  document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            });
            figBox.appendChild(sheetImg);
      }
      // Apped the thumbStyles to the head of the document
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      // desiging the apperance of the tumbnail figure box 
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);


      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
                  outline: 1px solid black; \
                  cursor: pointer; \
                  opacity: 0.75; \
            }", 1);


      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px sold red; \
                  opacity: 1.0; \
            }", 2);

}


//randInt(size) Returns a random integer from 0 up to size-1.
function randInt(size) {
      return Math.floor(size * Math.random());
}