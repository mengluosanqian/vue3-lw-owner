<template>
    <div class="point-wrap">
      <el-tabs
        tab-position="left"
        v-model="activeTag"
        size="middle"
        @tab-click="tabHandle">
        <el-tab-pane
          :key="item.id"
          v-for="item in tagsList"
          :label="item.label"
          :name="item.id"></el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import  { TabsPaneContext } from 'element-plus';
  
  let activeTag = ref();
  const props = defineProps({
    tagsList: {
      type: Array,
      default: () => []
    }
  });
  defineExpose({
    setActiveTag: (id) => {
      activeTag.value = id;
    }
  })
  watch(
    () => props.tagsList,
    value => {
      if (value.length) { 
        activeTag.value = value[0].id;
      }
    },
    {
      immediate: true,
      deep: true
    }
  );
  
  const emit = defineEmits(['active-tag']);
  const tabHandle = (tab) => {
    console.log(tab);
    emit('active-tag', tab.paneName);
  };
  </script>
  
  <style lang="less" scoped>
  :deep(.el-tabs--left .el-tabs__header.is-left) {
    width: 100%;
  }
  :deep(.el-tabs--left .el-tabs__item.is-left) {
    justify-content: flex-start;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  :deep(.el-tabs--left .el-tabs__active-bar.is-left) {
    left: 0;
  }
  :deep(.el-tabs--left .el-tabs__nav-wrap.is-left::after) {
    left: 0;
  }
  :deep(.el-tabs__nav) {
    width: 100%;
  }
  :deep(.el-tabs__item) {
    padding: 0 16px;
  }
  </style>