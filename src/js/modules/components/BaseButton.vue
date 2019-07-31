<template lang="pug">
  a.p-base-button
    .p-base-button__inner.blue(
      @click="setPostalCode();goToNext();fallMascot();"
      v-html="text"
      )
</template>

<script>
export default {
  name: 'BaseButton',
  props: [
    'setPostalCode',
    'text',
    'goToNext',
    'fallMascot',
  ]
}
</script>

<style lang="scss" scoped>
  @import '../../../css/foundation/_variables';
  .p-base-button {
    display: block;
    margin-top: 15px;
    margin-bottom: 15px;
    text-decoration: none;
    &__inner {
      height: 50px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-left: 30px;
      padding-right: 30px;
      text-decoration: none;
      border-radius: 25px;
      cursor: pointer;
      transition: opacity 0.5s ease;
      &:hover {
        opacity: 0.5;
      }
      &.blue {
        background-color: $color-key;
        color: #ffffff;
      }
    }
  }
</style>
