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
Pie.prototype.addTopping = function(toppingID) {
  this.ingredients.push(myShop.toppingsChoices[toppingID][1]);
  this.price += myShop.toppingsChoices[toppingID][2][this.category];
}
function Topping(sName, name, prices) {
  this.shortName = sName;
  this.descrip = name;
  this.prices = prices;
}

myShop = new Pizzeria();
myShop.buildShopMenu(toppingsCatalog, "toppingsChoices");
myShop.buildShopMenu(crustCatalog, "crustChoices");


// Front End Code
function populateDropdown(ddName, ddCatalog) {
  ddCatalog.forEach(function(ddCatItem){
    $(ddName).append("<option value=" + ddCatItem[0] + ">" + ddCatItem[1] + "</option");
  })
}
function displayPie() {
  $("#yourPie").empty();
  dPieSize = myShop.crustChoices[myPie.category][1];
  $("#yourPie").append("<li class='list-group-item'>" + dPieSize + "</li>");
  $("#yourPie").append("<li class='list-group-item'>Toppings: " + myPie.ingredients.join(", ") + "</li>");
  $("#yourPie").append("<li class='list-group-item'>Your Price: $" + myPie.price + "</li>");
}
$(document).ready (function(){

  populateDropdown("#pieSize", myShop.crustChoices);
  populateDropdown("#pieToppings", myShop.toppingsChoices);

  $("#btnSelectSize").click(function() {
    var myPieSize = $("#pieSize").val();
    myPie = new Pie(myPieSize);
    displayPie();
    console.log(myPie);
  });
  $("#btnAddTopping").click(function() {
    var myTopping = $("#pieToppings").val();
    myPie.addTopping(myTopping);
    displayPie();
    console.log(myPie);
  })

});
