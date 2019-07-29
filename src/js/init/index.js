import Vue from 'vue';
import App from '../modules/App.vue';

export default function() {
  new Vue({
    el: '#app',
    template: '<App/>',
    components: {
      'App': App
    },
  });
};
