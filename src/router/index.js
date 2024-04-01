import {
  createRouter,
  createWebHistory
} from "vue-router";
import jsonToExcel from "../components/menu-component/jsonToExcel";
import testIndexedDB from "../components/menu-component/testIndexedDB";
import mediaDevices from "../components/menu-component/mediaDevices";
import echartsShow from "../components/menu-component/echartsShow";
import styleRoutes from "../components/menu-component/menu-style-component/router";
import login from "../components/login/index";
import main from "../components/main.vue";

// vue项目自带路由
const routes = [{
    path: "/login",
    name: "login",
    component: login
  }, {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/main",
    name: "main",
    component: main,
    children:[
      {
        path: "jsonToExcel",
        component: jsonToExcel
      },
      {
        path: "testIndexedDB",
        component: testIndexedDB
      },
      {
        path: "mediaDevices",
        component: mediaDevices
      },
      {
        path: "echartsShow",
        component: echartsShow
      },
      ...styleRoutes
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes]
});

export default router;