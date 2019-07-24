<template lang="pug">
  div(v-if="info")
    input(:value="code1" @change="code1 = $event.target.value")
    input(:value="code2" @change="code2 = $event.target.value")
    |{{ info[0]["address1"] + info[0]["address2"] + info[0]["address3"] }}
    base-button(
      :setPostalCode="setPostalCode"
      )
</template>

<script>
import axios from 'axios';
import BaseButton from './components/BaseButton.vue';
export default {
  name: 'GetApi',
  data: function() {
    return {
      info: null,
      code1: '',
      code2: '',
    };
  },
  components: {
    BaseButton,
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
  },
  methods: {
    setPostalCode: function() {
      let postalCode =
      axios.get('http://heiness.net/api/', {
      })
    }
  }

}
</script>

<style lang="scss">
</style>
