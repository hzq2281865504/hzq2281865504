<template>
  <div>
    <a-layout-sider width="250" style="background: #fff;height: 100%;margin-top: 8px">
      <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :selectedKeys="[this.$route.path]"
      >
        <a-menu-item key="/ListView">
          <router-link to="/ListView">
            <a-icon type="slack" />
            <span>ListView</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/FirstView">
          <router-link to="/FirstView">
            <a-icon type="project" />
            <span>FirstView</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>