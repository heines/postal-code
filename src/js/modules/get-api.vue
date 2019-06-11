<template lang="html">
  <div>{{ info }}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GetApi',
  data: function() {
    return {
      info: null,
    };
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
