# _Pizzapizza!_

#### _Choose Your Own Pizzadventure! 26 August 2016_

#### By _**HK Kahng**_

## Description

This application allows the user to build a custom pizza. General requirements are as follows:

Create a website for a pizza company where a user can choose one or more individual toppings (for example: cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Specifications

* User can create a pizza of a specified size and price.
  * Input: user selects "large" and clicks [Create!]
  * Output: an "empty" large pizza is created with a base price of a large pizza ($16)

* User can select one topping for this empty pizza.
  * Input: user selects "pepperoni"
  * Output: the "empty" large pizza now has "pepperoni" as its topping

* User's topping choice increases the price of the pizza by a specified amount.
  * Input: user selects a large pizza ($16) and adds pepperoni ($2).
  * Output: a large pepperoni pizza is created with a price of $18

* User can add multiple toppings to a pizza.
  * Input: user selects a medium pizza ($12) and adds pepperoni ($1.00), Canadian bacon ($1.00), and pineapple ($.75)
  * Output: a medium pizza with those three toppings are created with a price of $14.75

* User can cancel current pizza and start again from scratch.
  * Input: user clicks on "Cancel Pizza" button
  * Output: current pizza status is cleared and user can start building a new pizza

* Once a pizza size has been selected, the user must reset the pizza in order to change size
  * Input: user clicks on button to select size
  * Output: user advised to reset pizza to change size

* User can have an order with multiple pizzas
  * Input: once user is happy with pizza, user clicks a button to add pizza to order
  * Output: selected pizza is added to order and the "build a pizza" section is cleared

## Setup/Installation Requirements

* Download the .zip file from GitHub
* Unpack and open index.html
* Or access through [GitHub Pages](https://eeronomicon.github.io/pizzapizza/)
* Think about which pizzeria to hit for lunch

## Known Bugs

There are no known bugs with this application. Hopefully there are no bugs in your pizza as well.

## Support and contact details

Contact me through GitHub!

## Technologies Used

This application was made with HTML, CSS, JavaScript, jQuery, and Bootstrap.

### License

This application is published under the MIT License.

Copyright (c) 2016 **_HK Kahng_**
