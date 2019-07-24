<template lang="pug">
.baseButton
  .baseButton__inner.blue(
    @click="setPostalCode"
    )
    |UPDATE
</template>

<script>
export default {
  name: 'BaseButton',
  props: [
    'setPostalCode'
  ]
}
</script>

<style lang="scss" scoped>
  .baseButton {
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
        background-color: #00CCFF;
        color: #ffffff;
      }
    }
  }
</style>
