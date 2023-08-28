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
      </div>
    </div>
  </div>
</template>

<script>
import left from "./components/left/left.vue";
import top from "./components/top/top.vue";
import mainComponent from "./components/main-component/main-component.vue";

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
  background-color: red;
}
.outer-left {
  width: 360px;
  height: 100%;
  background-color: blue;
}
.outer-right {
  flex: 1;
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
}
.inner-top {
  height: 240px;
  width: 100%;
  background-color: brown;
}
.inner-bottom {
  flex: 1;
  width: 100%;
  background-color: violet;
}
</style>
