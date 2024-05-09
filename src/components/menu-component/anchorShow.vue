<template>
  <div>
    <el-row>
      <el-col :span="18">
        <div ref="containerRef" style="height: 80vh; overflow-y: auto">
          <div id="anchor-0">1</div>
          <div id="anchor-1">2</div>
          <div id="anchor-2">3</div>
          <div id="anchor-3">4</div>
          <div id="anchor-4">5</div>
          <div id="anchor-5">6</div>
          <div id="anchor-6">7</div>
          <div id="anchor-7">8</div>
        </div>
      </el-col>
      <el-col :span="6">
        <el-anchor
          :container="containerRef"
          direction="vertical"
          type="default"
          
          @click="handleClick"
        >
        <el-anchor-link :href="'#anchor-0'"> 工商信息 </el-anchor-link>
        <el-anchor-link :href="'#anchor-1'"> 股东信息 </el-anchor-link>
        <el-anchor-link :href="'#anchor-2'"> 法律风险 </el-anchor-link>
        <el-anchor-link :href="'#anchor-3'"> 经营风险 </el-anchor-link>
        <el-anchor-link :href="'#anchor-4'"> 关联图谱 </el-anchor-link>
        <el-anchor-link :href="'#anchor-5'"> 舆情信息 </el-anchor-link>
        <el-anchor-link :href="'#anchor-6'"> 知识产权 </el-anchor-link>
        <el-anchor-link :href="'#anchor-7'"> 1111 </el-anchor-link>
          <!-- <el-anchor-link href="#part1" title="part1" />
          <el-anchor-link href="#part2" title="part2" />
          <el-anchor-link href="#part3" title="part3" /> -->
        </el-anchor>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const containerRef = ref(null)

function handleClick(e) {
  e.preventDefault()
}
</script>
<style lang="less" scoped>
.section {
  margin-bottom: 10px;
  background: #fff;
}
.score-preview-container {
  display: flex;
  flex-direction: column;
  height: 97%;
  margin: 9px 24px;
  position: relative;
  .nav-button-box {
    flex-shrink: 0;
    background: #fff;
    margin-top: 19px;
    width: 100px;
    position: absolute;
    .nav-button {
      width: 100%;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      line-height: 40px;
      text-align: center;
    }
    span:hover {
      color: #0964ff;
    }
    .active {
      color: #0964ff;
    }
  }
}

#app-root {
  display: block;
  overflow: auto;
  flex-grow: 1;
  width: 100%;
  height: 700px;
  text-align: center;
}
#app-root::-webkit-scrollbar {
  display: none !important;
}
#anchor-0 {
  background: brown;
  width: 100%;
  height: 300px;
}
#anchor-1 {
  background: blueviolet;
  width: 100%;
  height: 300px;
}
#anchor-2 {
  background: yellow;
  width: 100%;
  height: 300px;
}
#anchor-3 {
  background: blue;
  width: 100%;
  height: 300px;
}
#anchor-4 {
  background: red;
  width: 100%;
  height: 300px;
}
#anchor-5 {
  background: rgb(0, 174, 255);
  width: 100%;
  height: 3100px;
}
#anchor-6 {
  background: yellowgreen;
  width: 100%;
  height: 800px;
}
#anchor-7 {
  background: black;
  width: 100%;
  height: 800px;
}
.title_name {
  display: flex;
  font-size: 18px;
  padding: 30px 0 0 20px;
  color: rgba(0, 0, 0, 0.85);

  .link_title {
    width: 104px;
    display: inline-block;
  }
}

.quick_view {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  //width: 100%;
  padding-left: 25px;

  a {
    font-size: 12px;
    text-align: left;
    line-height: 25px;
    color: #6c7489;
    margin-right: 12px;
    cursor: default;

    span {
      display: inline-block;
      position: relative;
      top: 0;
      right: 0;
      height: 16px;
      padding: 0 5px;
      margin: 0 8px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      background: #fff0eb;
      color: #1089ff;
      border-radius: 4px;
    }

    .gray {
      background: rgba(163, 171, 181, 0.2);
      color: #9ba7b6;
    }
  }
}
</style>