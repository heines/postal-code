<template lang="pug">
  a(href="#")
    |UPDATE（まだaタグ）
</template>

<script>
export default {
  name: 'BaseButton',
  data () {
    return {

    };
  },
}
</script>

<style lang="scss">
  a {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00CCFF;
    color: #ffffff;
    text-decoration: none;
    border-radius: 25px;
  }
</style>
