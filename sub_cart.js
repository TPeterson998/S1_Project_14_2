"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Trent Peterson
   Date: 4.1.19  

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
//This calls in the setUpCart function on window load
window.addEventListener("load", setUpCart);

function setUpCart() {
      //This creates an array of all the elemenets with addButton class
      var addButtons = document.getElementsByClassName("addButton");
      //This adds add item function to everything in the array made above
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}

function addItem(e) {
      //This gets the picture and the div instead of the button
      var foodItem = e.target.nextElementSibling;
      //this gets the id of the of the div with the order in it
      var foodID = foodItem.getAttribute("id");
      //this clones the div with the order in it
      var foodDescription = foodItem.cloneNode(true);

      //this gets the cart
      var cartBox = document.getElementById("cart");
      //this stops the if statment from running more
      var duplicateOrder = false;
      for (var n = cartBox.firstElementChild; n = n.nextElementSibling; n !== null) {
            //this adds one to the span that is created below
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstElementChild.textContent++;
                  break;
            }
      }
      //this creates a span with the number of orders of a particular item in it at a time
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            //this sets the span to be the first child of the duplicated div
            foodDescription.prepend(orderCount);
            //this adds in the duplicated div
            cartBox.appendChild(foodDescription);
      }
}