import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    pageName: "home",
    message: '',
    counter: 0,
    userName: "User: Taylor",
    options: "What food category are you interested in?",
    tip: "Add a tip",
    selected: "Please select from:",
        active: 'home',
    cart: [],
    complaints: [],
    vuedropdown: [],
    itemsUserCanOrder: [
      {
        restaurant: "McDonalds",
        foodType: "Chicken",
        size: "10 Piece",
        deliveryService: "Doordash",
        price: 8,
        deliveryTime: 5,
        image: "images/chickenNuggetsImage.jpg"
      },
      {
        restaurant: "Domino's",
        foodType: "Pizza",
        size: "Large Cheese",
        deliveryService: "Uber Eats",
        price: 11,
        deliveryTime: 15,
        image: "images/burgerImage.jpg"
      }
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
