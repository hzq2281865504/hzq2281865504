<template>
  <a-layout id="main">
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>

export default {
}
</script>

<style lang="css" scoped>
#main{
  z-index: 1;
  padding: 3% 20%;
}
</style>