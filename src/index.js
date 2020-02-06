import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Chop Chop!',
    counter: 0,
    userName: "Taylor",
    options: "What food category are you interested in?",
    selected: "Please select from:"
  }
});

window.app = app;
