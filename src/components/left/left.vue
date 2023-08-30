<template>
  <div class="hello">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      @select="handleSelect"
    >
      <el-sub-menu index="1">
        <template #title>
          <span>基础功能</span>
        </template>
        <el-menu-item index="jsonToExcel">json转化为excel</el-menu-item>
        <el-menu-item index="testIndexedDB">测试indexedDB数据库功能</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
  
  <script>
export default {
  methods: {
    handleSelect(index) {
      this.$router.push(index);
    },
  },
};
</script>
  
  <style scoped>
</style>
  