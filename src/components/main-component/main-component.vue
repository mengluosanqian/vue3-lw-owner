<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
import jsonToExcel from "../menu-component/jsonToExcel.vue";
export default defineComponent({
  routes: [
    {
      path: "/jsonToExcel",
      component: jsonToExcel,
    },
  ],
  setup() {
    return {};
    
  },
});
</script>

<style>

</style>

