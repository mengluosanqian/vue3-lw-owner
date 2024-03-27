<template>
  <div class="outer-box">
    <div @click="updateMsg">导出Excel</div>
    <!-- <div>{{ counterStore.count }}</div> -->
  </div>
</template>
  
  <script>
import { defineComponent, ref } from "vue";
import { downloadXlsx } from "../../utils/xlsx";
import { useCounter } from "../../stores/counter.js";
export default defineComponent({
  setup() {
    const counterStore = useCounter();
    const tableData = ref([1, 2, 3]);
    // 这个要暴露给模板使用，必须 `return` 才可以使用
    function updateMsg() {
      //this.tableData表格数据
      if (!tableData.value || tableData.value.length == 0) {
        this.$message.error("当前没有需要导出的数据，请重新搜索后再打印！");
        return;
      }
      let datalist = []; //导出表格表头
      datalist.push(["姓名", "性别"]);

      tableData.value.forEach((item) => {
        datalist.push([item.patientName, item.idcardNo]);
      });
      //导出插件使用
      downloadXlsx(datalist, "测试下载.xlsx");
    }

    return {
      updateMsg,
      tableData,
      counterStore
    };
  },
});
</script>
  
  <style>
.outer-box {
  height: 40px;
  opacity: 1;
  background: linear-gradient(-295deg, #ff6f10 21%, #f8ae2b 100%);
  position: relative;
  top: 0px;
  margin-bottom: -22px;
  width: 100px;
  transform: skew(-25deg);
  border-radius: 8px 0 8px 8px;
  z-index: 2;
}
.outer-box::after {
  content: "";
  display: inline-block;
  position: relative;
  left: 65px;
  top: -2px;
  background: #b54e04;
  width: 30px;
  height: 12px;
  clip-path: ellipse(7px 12px at 0% 100%);
}
</style>
  
  