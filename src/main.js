import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from "./router/index.js";
//引入stores暴露出的pinia的实例
import pinia from './stores/index.js'

createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app')
