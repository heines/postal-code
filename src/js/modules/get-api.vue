<template lang="pug">
  div
    |{{ info[0]["address1"] + info[0]["address2"] + info[0]["address3"] }}
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
    await axios.get('http://heiness.net/api/')
    .then(function(response) {
      tmp = response.data.results;
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
