import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    pageName: "home",
    message: 'Chop Chop',
    counter: 0,
    userName: "User: Taylor",
    options: "What food category are you interested in?",
    tip: "Add a tip",
    selected: "Please select from:",
        active: 'home',
    cart: [],
    complaints: []
    },
    methods: {
        makeActive: function(item){
            this.active = item;
        },
    }
});

window.app = app;
