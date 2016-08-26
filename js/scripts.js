// Back End Code
toppingsCatalog = [
  [0, "Cheese", [.5, .75, 1.25]],
  [1, "Pepperoni", [.75, 1, 1.5]],
  [2, "Green Olives", [.5, .75, 1.25]],
  [3, "Red Onions", [.5, .75, 1.25]],
  [4, "Meatballs", [.75, 1, 1.5]],
  [5, "Sun Dried Tomatoes", [.75, 1, 1.5]],
  [6, "Red Onions", [.5, .75, 1.25]],
  [7, "BBQ Soy Curls", [.75, 1, 1.5]],
  [8, "Pineapple", [.5, .75, 1.25]],
  [9, "Canadian Bacon", [.75, 1, 1.5]],
  [10, "Mushrooms", [.5, .75, 1.25]],
  [11, "Basil", [.5, .75, 1.25]],
  [12, "Garlic", [.5, .75, 1.25]],
  [13, "Pesto", [.5, .75, 1.25]],
  [14, "Extra Sauce", [.5, .75, 1.25]],
  [15, "Black Olives", [.5, .75, 1.25]],
  [16, "Italian Sausage", [.75, 1, 1.5]],
  [17, "Arugula", [.5, .75, 1.25]],
  [18, "Corn", [.5, .75, 1.25]]
];
crustCatalog = [
  [0, "Personal 8\"", 7],
  [1, "Medium 12\"", 11],
  [2, "Large 16\"", 15]
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
function Order() {
  this.contents = [];
  this.totalPrice = 0;
}
Order.prototype.addPie = function(thisPie) {
  this.contents.push(thisPie);
  this.totalPrice += thisPie.price;
}
function Pie() {
  this.category;
  this.toppings = [];
  this.ingredients = [];
  this.price;
}
Pie.prototype.addTopping = function(toppingID) {
  if (this.toppings.includes(parseInt(toppingID))) {
    notifyUser(0);
  } else {
    this.toppings.push(myShop.toppingsChoices[toppingID][0])
    this.ingredients.push(myShop.toppingsChoices[toppingID][1]);
    this.price += myShop.toppingsChoices[toppingID][2][this.category];
  }
}
function Topping(sName, name, prices) {
  this.shortName = sName;
  this.descrip = name;
  this.prices = prices;
}
// Let's Make Our Pizzeria!
var myShop = new Pizzeria();
myShop.buildShopMenu(toppingsCatalog, "toppingsChoices");
myShop.buildShopMenu(crustCatalog, "crustChoices");
var myOrder = new Order();
var myPie = new Pie();
// Front End Code
var userMessages = [
  "Sorry, you already added this topping!"
];
function notifyUser(msgNo) {
  alert(userMessages[msgNo]);
}
function populateDropdown(ddName, ddCatalog) {
  ddCatalog.forEach(function(ddCatItem){
    $(ddName).append("<option value=" + ddCatItem[0] + ">" + ddCatItem[1] + " ($" + ddCatItem[2] + ")</option>");
  });
}
function updateToppingsDropdown(pieSize) {
  $("#pieToppings").empty();
  myShop.toppingsChoices.forEach(function(choice) {
    toppingMenuItem = "<option value=" + choice[0] + ">" + choice[1] + " ($" + choice[2][pieSize].toFixed(2) + ")</option";
    $("#pieToppings").append(toppingMenuItem);
  });
}
function displayPie() {
  if (myPie.ingredients.length === 0) {
    $("#btnConfirmPie").hide();
  } else {
    $("#btnConfirmPie").show();
  }
  $("#yourPie").empty();
  dPieSize = myShop.crustChoices[myPie.category][1];
  $("#yourPie").append("<li class='list-group-item'>" + dPieSize + "</li>");
  $("#yourPie").append("<li class='list-group-item'>Toppings: " + myPie.ingredients.join(", ") + "</li>");
  $("#yourPie").append("<li class='list-group-item'>Your Price: $" + myPie.price.toFixed(2) + "</li>");
}
function resetPie() {
  myPie = new Pie();
  $("#yourPie").empty();
  $("#pieToppings").empty();
  $(".pieButtons").hide();
  $("#btnSelectSize").show();
  $("#btnAddTopping").hide();
  $("#pieSize").val(0);
  $("#pieToppings").val(0);
}
function displayOrder() {
  $(".yourOrder").show();
  $("#yourOrder").empty();
  myOrder.contents.forEach(function(content) {
    var lineItem = "<li class='list-group-item'>" + myShop.crustChoices[content.category][1] + " Pizza with " + content.ingredients.join(", ") + " $" + content.price.toFixed(2) + "</li>";
    $("#yourOrder").append(lineItem);
  });
  orderHeader = "<li class='list-group-item active'>Your Total: $" + myOrder.totalPrice.toFixed(2) + "</li>";
  $("#yourOrder").append(orderHeader);
}
$(document).ready (function(){
  // Populate dropdown menus for sie and toppings
  populateDropdown("#pieSize", myShop.crustChoices);
  // populateDropdown("#pieToppings", myShop.toppingsChoices);
  // When the user selects a size a new Pizza object is created
  $("#btnSelectSize").click(function() {
    var myPieSize = $("#pieSize").val();
    myPie.category = myPieSize;
    myPie.price = myShop.crustChoices[myPieSize][2];
    displayPie();
    updateToppingsDropdown(myPieSize);
    $("#btnSelectSize").hide();
    $("#btnAddTopping").show();
    $("#btnClearPie").show();
  });
  // This button adds the selected topping to the Pizza
  $("#btnAddTopping").click(function() {
    var myTopping = $("#pieToppings").val();
    myPie.addTopping(myTopping);
    displayPie();
    });
  // This button deletes the existing Pizza
  $("#btnClearPie").click(function() {
    resetPie();
  });
  $("#btnConfirmPie").click(function() {
    myOrder.addPie(myPie);
    resetPie();
    displayOrder();
  });
});
