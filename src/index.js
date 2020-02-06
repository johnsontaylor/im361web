import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Chop Chop!',
    counter: 0
  }
});

window.app = app;
