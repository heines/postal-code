<template lang="pug">
  .p-app
    .p-app__countents
      .p-app__page1#top
        h1 郵便番号API
        p
          |郵便番号から住所を検索します。
          br
          |ハイフン無し半角数字で入力してください
        input(:value="code" @change="code = $event.target.value" maxlength="7" placeholder="1050011")
        base-button(
          href="#answer"
          :clickEvent="[goToNext, setPostalCode]"
          text="UPDATE"
          ).js-anchor-link
        p 使用API：
          a(href="http://zipcloud.ibsnet.co.jp/") 郵便番号データ配信サービス
      .p-app__page2#answer(:class="{ 'next' : isNext }")
        p.p-app__comment(v-show="ansText")
          |{{ ansText }}
        a(
          href="#top"
          @click="goToTop"
          v-show="ansText"
          ) 戻る
    ImageShobon(
      ref="shobon"
      :isAnimate="isNext"
    )
</template>

<script>
import axios from 'axios';
import BaseButton from './components/atom/BaseButton.vue';
import ImageShobon from './components/atom/ImageShobon.vue';
const scrollAnchorLink = require('./common/scrollAnchorLink.js').default;
export default {
  name: 'App',
  data: function() {
    return {
      code: '',
      ansText: '',
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
      let isInput = false;
      let preText = '';
      if(this.code) {
        isInput = true;
      } else {
        this.code = '1050011';
      }
      axios.get('https://heiness.net/api/', {
        params: {
          code: this.code
        }
      })
      .then(response => {
        if(isInput) {
          preText = 'なにか入れて欲しいんですけど、';
        }
        tmp = response.data.results;
        this.ansText = preText + tmp[0]["address1"] + tmp[0]["address2"] + tmp[0]["address3"] + ' です';
      })
      .catch(error => {
        this.ansText = 'その郵便番号ないっス';

      })
    },
    goToNext: function() {
      this.isNext = true;
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
    input {
      @include fontSize(20);
    }
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
      transition-property: opacity;
      transition-duration: 2s;
      &::before, &::after {
        opacity: 0;
        transition-property: opacity;
        transition-duration: 2s;
      }
      &.next {
        opacity: 1;
      }
      &.next & {
        opacity: 1;
        &::before, &::after {
          opacity: 1;
        }
      }
    }
  }
</style>
