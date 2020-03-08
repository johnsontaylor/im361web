import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    pageName: "home",
    message: '',
    counter: 0,
    userName: "User: Taylor",
    options: "Click on food option to add to plate",
    checkout: "Scroll down to pay now",
    tip: "Add a tip",
    selected: "Please select from:",
        active: 'home',
    cart: [],
    complaints: [],
    vuedropdown: [],
    itemsUserCanOrder: [
      {
        foodType: "Chicken",
        restaurant: "McDonalds",
        size: "10 Piece",
        deliveryService: "Doordash",
        price: 8,
        deliveryTime: 5,
        image: "images/chickenNuggetsImage.jpg"
      },
      {
        foodType: "Burgers",
        restaurant: "Burger King",
        size: "Double Cheeseburger",
        deliveryService: "Postmates",
        price: 2,
        deliveryTime: 4,
        image: "images/burgerImage.jpg"
      },
      {
        foodType: "Pizza",
        restaurant: "Domino's",
        size: "Large Cheese",
        deliveryService: "Uber Eats",
        price: 11,
        deliveryTime: 15,
        image: "images/pizzaImage.jpg"
      },
      {
        foodType: "Sandwiches",
        restaurant: "Jimmy John's",
        size: "Turkey Tom",
        deliveryService: "Grubhub",
        price: 7,
        deliveryTime: 9,
        image: "images/sandwichImage.jpg"
      },
      {
        foodType: "Sushi",
        restaurant: "Shogun",
        size: "California Roll",
        deliveryService: "Doordash",
        price: 6.75,
        deliveryTime: 13,
        image: "images/sushiImage.jpg"
      },
    ],
    },
    methods: {
        makeActive: function(item){
            this.active = item;
        },
        clearCart: function(){
          this.cart = [];
        },
        addToMyPlate: function(item){
          this.cart.push (item);
        }
    }
});

window.app = app;
