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
        active: 'home'
    },
    methods: {
        makeActive: function(item){
            this.active = item;
        },
    }
});

window.app = app;
