<template lang="pug">
div
  a.blue(:href='href')
    |UPDATE
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    href : String
  }
}
</script>

<style lang="scss">
  a {
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    text-decoration: none;
    border-radius: 25px;
    &.blue {
      background-color: #00CCFF;
      color: #ffffff;
    }
  }
</style>
