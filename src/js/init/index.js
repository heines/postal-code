import Vue from 'vue';
import GetApi from '../modules/get-api.vue';

export default function() {
  new Vue({
    el: '#app',
    template: '<get-api/>',
    components: {
      'get-api': GetApi
    },
  });
};
