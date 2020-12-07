<template>
  <div id="layout">
    <a-layout  id="components-layout-demo-top-side-2">
      <a-layout-header>
        <a-header></a-header>
      </a-layout-header>
      <a-layout >
        <navbar></navbar>
        <a-main></a-main>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import AHeader from "../components/Header/index"
import AMain from "../components/Main/index"
import Navbar from "../components/Navbar/index"
export default {
  components: {
    Navbar,
    AHeader,
    AMain
  }
}
</script>

<style>
#layout{
  height:100%
}
#components-layout-demo-top-side-2{
  height: 100%;
}
</style>