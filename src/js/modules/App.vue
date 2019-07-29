<template lang="pug">
  div.p-app
    div
      h1 郵便番号API
      p 郵便番号
      input(:value="code1" @change="code1 = $event.target.value" maxlength="3" placeholder="105")
      span -
      input(:value="code2" @change="code2 = $event.target.value" maxlength="4" placeholder="0011")
      div
        p
          |{{ address }} {{ errorText }}
      base-button(
        :setPostalCode="setPostalCode"
        text="UPDATE"
        )
    ImageShobon
</template>

<script>
import axios from 'axios';
import BaseButton from './components/BaseButton.vue';
import ImageShobon from './components/ImageShobon.vue';
export default {
  name: 'App',
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
    ImageShobon
  },
  mounted: async function() {
    let tmp;
    await axios.get('https://heiness.net/api/')
    .then(response => {
      tmp = response.data.results;
      this.address = tmp[0]["address1"] + tmp[0]["address2"] + tmp[0]["address3"];
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
      axios.get('https://heiness.net/api/', {
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
  @import '../../css/foundation/_variables';
  @import '../../css/foundation/_mixin-utils';
  .p-app {
    position: relative;
    height: 100vh;
    padding-right: 5vw;
    padding-left: 5vw;
    box-sizing: border-box;
    @include l-more-than-mobile {
      display: flex;
      justify-content: center;
      min-width: 0;
    }
    @include l-mobile {
      flex-direction: column;
    }
    h1 {
      margin-top: 0;
      margin-bottom: 0;
      padding-top : 0.76em;
      padding-bottom : 0.76em;
    }
  }
</style>
