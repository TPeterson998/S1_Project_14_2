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
window.addEventListener("load", setUpCart);

function setUpCart() {
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem);
      }
}

function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodId = foodItem.id;
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;
      for (var i = 0; i < cartBox.childNodes; i++) {
            console.log("your in");
            if (cartBox.childNodes[i] === foodId) {
                  cartBox.childNodes[i].firstChild.textContent += 1;
                  duplicateOrder = true;
                  console.log("your in");
                  break;
            }
      }
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = 1;
            foodDescription.prepend(orderCount);
            cartBox.appendChild(foodDescription);
            duplicateOrder = true;
      }
      console.log(cartBox.childNodes);
      console.log(orderCount.textContent);
      console.log(foodId);
      console.log(cartBox.childNodes.id);
}