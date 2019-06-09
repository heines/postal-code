<template lang="html">
  <div>{{ code }}</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GetApi',
  data: function() {
    return {
      code: ''
    };
  },
  mounted: async function() {
    await axios.get('http://zipcloud.ibsnet.co.jp/api/search?zipcode=105-0011')
    .then(function(response) {
      this.code = response.results.address1;
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}
</script>

<style lang="scss">
</style>
