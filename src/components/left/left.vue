<template>
  <div class="left-outer">
    <el-menu class="el-menu-vertical-demo" :default-active="$route.path" @select="handleSelect">
      <el-sub-menu index="1">
        <template #title>
          <span>基础功能</span>
        </template>
        <el-menu-item index="jsonToExcel">json转化为excel</el-menu-item>
        <el-menu-item index="testIndexedDB">测试indexedDB数据库功能</el-menu-item>
        <el-menu-item index="mediaDevices">屏幕录制</el-menu-item>
        <el-menu-item index="echartsShow">echarts展示</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>特殊样式</template>
          <el-menu-item index="menuStyle/waterCircle">水球图</el-menu-item>
          <el-menu-item index="waterCircle">进度动画</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="anchorShow">
        测试锚点
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
      this.$router.push(`/main/${index}`);
    },
  },
};
</script>

<style scoped>
.left-outer {
  background: #304157;
}
</style>