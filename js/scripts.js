// Back End Code
toppingsCatalog = [
  [0, "Pepperoni", [.75, 1, 1.5]],
  [1, "Mushrooms", [.5, .75, 1.25]],
  [2, "Green Olives", [.5, .75, 1.25]],
  [3, "Red Onions", [.5, .75, 1.25]],
  [4, "Meatballs", [.75, 1, 1.5]],
  [5, "Sun Dried Tomatoes", [.75, 1, 1.5]],
  [6, "Red Onions", [.5, .75, 1.25]]
];
crustCatalog = [
  [0, "Personal: 8\"", 8],
  [1, "Medium: 12\"", 12],
  [2, "Large: 16\"", 16]
];
function Pizzeria() {
  this.toppingsChoices = [];
  this.crustChoices = [];
}
Pizzeria.prototype.buildShopMenu = function(catalog, menu) {
  var array = this[menu];
  catalog.forEach(function(item) {
    array.push(item);
  });
}
function Pie(size) {
  this.category = size;
  this.toppings = [];
  this.ingredients = [];
  this.price = myShop.crustChoices[size][2];
}
function Topping(sName, name, prices) {
  this.shortName = sName;
  this.descrip = name;
  this.prices = prices;
}

myShop = new Pizzeria();
myShop.buildShopMenu(toppingsCatalog, "toppingsChoices");
myShop.buildShopMenu(crustCatalog, "crustChoices");

myPie = new Pie(1);

// Front End Code
$(document).ready (function(){

});
