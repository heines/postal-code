<template lang="pug">
  div
    |{{ info }}
    base-button(href='/')
</template>

<script>
import axios from 'axios';
import BaseButton from './components/BaseButton.vue';
export default {
  name: 'GetApi',
  data: function() {
    return {
      info: null,
    };
  },
  components: {
    BaseButton
  },
  mounted: async function() {
    let tmp;
    await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response) {
      tmp = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    this.info = tmp;
  }
}
</script>

<style lang="scss">
</style>
