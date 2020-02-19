import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Chop Chop',
    counter: 0,
    userName: "User: Taylor",
    options: "What food category are you interested in?",
    selected: "Please select from:",
        active: 'home',

      foodItem: "purchase",
       foodTypes: [
         "chicken",
         "burgers",
         "pizza",
         "sandwiches",
         "sushi"
    },
    methods: {
        makeActive: function(item) {
            this.active = item;
        },
        methods: {
            makeActive: function(foodItem) {
                this.active = foodItem;
            },
    }
});

window.app = app;
