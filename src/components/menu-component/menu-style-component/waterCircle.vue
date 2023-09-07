<template>
  <div class="redMarker">
    <div class="innerCircle">
      <div class="water-circle" id="reporterRatio">
        <div class="water water-level-10"></div>
      </div>
    </div>
  </div>
  <div class="base-progress">
    <div class="active-progress">​</div>
    <div class="active-progress-bottom">​</div>
  </div>
</template>
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
  <style scoped>
@keyframes progressAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 28px 0;
  }
}
.base-progress {
  position: relative;
  width: 150px;
  height: 14px;
  /* border-radius: 7px;
  border: 1px solid red; */
}
.base-progress .active-progress {
  position: absolute;
  left: 200px;
  top: 0;
  transform: skew(45deg);
  width: 150px;
  height: 14px;
  /* border-radius: 7px; */
  background: repeating-linear-gradient(
    -135deg,
    blue,
    blue 10px,
    pink 10px,
    pink 20px
  );
  background-size: 28px 14px;
  animation: progressAnimation 1s linear infinite;
}
.base-progress .active-progress-bottom {
  position: absolute;
  left: 200px;
  top: 14px;
  transform: skew(-45deg);
  width: 150px;
  height: 14px;
  /* border-radius: 7px; */
  background: repeating-linear-gradient(
    135deg,
    blue,
    blue 10px,
    pink 10px,
    pink 20px
  );
  background-size: 28px 14px;
  animation: progressAnimation 1s linear infinite;
}

.redMarker {
  width: 120px;
  height: 120px;
  background-color: aquamarine;
  border-radius: 60px;
  position: relative;
}
.redMarker .innerCircle {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50px;
}
.water {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 80px;
  height: 80px;
  background-color: rgb(23, 106, 201);
  border-radius: 50%;
  overflow: hidden;
}

.water::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 40%;
  background-color: rgb(240, 228, 228);
  animation: real 5s linear infinite;
}

@keyframes real {
  0% {
    transform: translate(-50%, -65%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -65%) rotate(360deg);
  }
}
/* 水位高度top: 35% ~ -65% */
.water::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 42%;
  background-color: rgb(240, 228, 228, 0.2);
  animation: virtual 7s linear infinite;
}

@keyframes virtual {
  0% {
    transform: translate(-50%, -60%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -60%) rotate(360deg);
  }
}
.water-level-10::after,
.water-level-10::before {
  top: -9%;
}
</style>
  