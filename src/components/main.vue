<template>
  <div class="outer-app">
    <div class="outer-left">
      <left></left>
    </div>
    <div class="outer-right">
      <div class="inner-top">
        <top></top>
      </div>
      <div class="inner-bottom">
        <main-component></main-component>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import left from "./left/left.vue";
import top from "./top/top.vue";
import mainComponent from "./main-component/main-component.vue";

export default {
  name: "App",
  components: {
    left,
    top,
    mainComponent,
  },
};
</script>

<style>
html body {
  margin: 0px;
  bottom: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0px;
  bottom: 0px;
}
.outer-app {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.outer-left {
  width: 360px;
  height: 100%;
  border-right: solid 1px #dcdfe6;
}
.outer-left .el-menu {
  border-right: solid 0px;
}
.outer-right {
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
}
.inner-top {
  height: 240px;
  width: 100%;
  border-bottom: solid 1px #dcdfe6;
}
.inner-bottom {
  flex: 1;
  width: 100%;
}
</style>
