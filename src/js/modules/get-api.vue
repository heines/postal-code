<template lang="pug">
  div
    p 郵便番号
    input(:value="code1" @change="code1 = $event.target.value" maxlength="3")
    span -
    input(:value="code2" @change="code2 = $event.target.value" maxlength="4")
    div
      p
        |{{ address }} {{ errorText }}
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
      code1: '',
      code2: '',
      address: '',
      errorText: '',
    };
  },
  components: {
    BaseButton,
  },
  mounted: async function() {
    let tmp;
    await axios.get('http://heiness.net/api/')
    .then(response => {
      tmp = response.data.results;
      this.address = tmp[0]["address1"] + tmp[0]["address2"] + tmp[0]["address3"];
      console.log(response);
    })
    .catch(error => {
      this.address = '';
      this.errorText = '該当する住所はありませんでした';
    })

  },
  methods: {
    setPostalCode: function() {
      let tmp;
      let postalCode =
      axios.get('http://heiness.net/api/', {
        params: {
          code: this.code1 + this.code2
        }
      })
      .then(response => {
        tmp = response.data.results;
        this.address = tmp[0]["address1"] + tmp[0]["address2"] + tmp[0]["address3"];
        this.errorText = '';
      })
      .catch(error => {
        this.address = '';
        this.errorText = '該当する住所はありませんでした';
      })
    }
  },
}
</script>

<style lang="scss">
</style>
