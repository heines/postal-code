<template lang="pug">
  .p-app
    .p-app__countents
      .p-app__page1#top
        h1 郵便番号API
        p 郵便番号を入力してください
        input(:value="code1" @change="code1 = $event.target.value" maxlength="3" placeholder="105")
        span -
        input(:value="code2" @change="code2 = $event.target.value" maxlength="4" placeholder="0011")
        base-button(
          href="#answer"
          :setPostalCode="setPostalCode"
          :goToNext="goToNext"
          :fallMascot="fallMascot"
          text="UPDATE"
          ).js-anchor-link
        p 使用API：
          a(href="http://zipcloud.ibsnet.co.jp/") 郵便番号データ配信サービス
      .p-app__page2#answer(:class="{ 'next' : isNext }")
        p.p-app__comment
          |{{ address }} {{ errorText }}
        a(
          href="#top"
          @click="goToTop"
          ) 戻る
    ImageShobon(
      ref="shobon"
      :isAnimate="isNext"
    )
</template>

<script>
import axios from 'axios';
import BaseButton from './components/BaseButton.vue';
import ImageShobon from './components/ImageShobon.vue';
const scrollAnchorLink = require('./common/scrollAnchorLink.js').default;
export default {
  name: 'App',
  data: function() {
    return {
      code1: '',
      code2: '',
      address: '',
      errorText: '',
      isNext: false,
    };
  },
  components: {
    BaseButton,
    ImageShobon
  },
  mounted: async function() {
    let tmp;
    new scrollAnchorLink();
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
        this.errorText = 'その郵便番号ないっス';
      })
    },
    goToNext: function() {
      this.isNext = true;
    },
    fallMascot: function() {
      this.$refs.shobon.animateHand();
    },
    goToTop: function() {
      this.isNext = false;
    }
  },
}
</script>

<style lang="scss">
  @import '../../css/foundation/_variables';
  @import '../../css/foundation/_mixin-utils';
  @import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap');
  .p-app {
    position: relative;
    padding-right: 5vw;
    padding-left: 5vw;
    box-sizing: border-box;
    h1 {
      margin-top: 0;
      margin-bottom: 0;
      padding-top : 0.76em;
      padding-bottom : 0.76em;
    }
    a {
      display: block;
      color: $color-link;
      text-decoration: none;
    }
    &__page1, &__page2 {
      position: relative;
      height: 100vh;
    }
    &__comment {
      display: inline-block;
      position: relative;
      margin-top: 10vh !important;
      padding: 20px;
      border: 5px solid $color-key;
      font-family: 'Kosugi Maru', sans-serif;
      @include fontSize(36);
      @include l-mobile {
        @include fontSizeMobile(27);
      }
      &::before {
        content: "";
        position: absolute;
        bottom: -46px;
        right: 20%;
        margin-left: -15px;
        border: 24px solid transparent;
        border-top: 24px solid #FFF;
        z-index: 2;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -53px;
        right: 20%;
        margin-left: -17px;
        border: 24px solid transparent;
        border-top: 24px solid $color-key;
        z-index: 1;
      }
    }
    // interaction
    &__page2 {
      opacity: 0;
      &.next {
        opacity: 1;
      }
    }
  }
</style>
