<template>
  <div>
    <div>
      <div class="video-main">
        <video
          src="xxxxx.mp4"
          :controls="videoOptions.controls"
          class="video-js vjs-big-play-centered vjs-fluid my-video"
          webkit-playsinline="true"
          playsinline="true"
          x-webkit-airplay="allow"
          x5-playsinline
          style="width: 800px"
          autoplay="autoplay"
          ref="video"
        ></video>
      </div>
      <div class="btn-start">
        <el-button class="record-btn" @click="mediaDevicesStart"
          >录制屏幕</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    let videoOptions = reactive({
      controls: true,
      src: "xxxxxxx.mp4", // url地址
    });
    async function mediaDevicesStart() {
      let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      let mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
        ? "video/webm; codecs=vp9"
        : "video/webm";
      let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mime,
      });
      let chunks = [];
      mediaRecorder.addEventListener("dataavailable", function (e) {
        chunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", function () {
        let blob = new Blob(chunks, {
          type: chunks[0].type,
        });
        let video = document.querySelector(".my-video");
        let url = URL.createObjectURL(blob);
        video.src = url;
        // 下载
        let a = document.createElement("a");
        a.href = url;
        a.download = "video.webm";
        a.click();
      });

      mediaRecorder.start();
    }
    return {
      mediaDevicesStart,
      videoOptions,
    };
  },
});
</script>
<style scoped>
.video-main {
    margin-top: 16px;
}
.btn-start{
    margin-top: 16px;
}
</style>
