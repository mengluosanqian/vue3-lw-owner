import {
  createRouter,
  createWebHistory
} from "vue-router";
import jsonToExcel from "../components/menu-component/jsonToExcel";
import testIndexedDB from "../components/menu-component/testIndexedDB";
import mediaDevices from "../components/menu-component/mediaDevices";
import echartsShow from "../components/menu-component/echartsShow";
import styleRoutes from "../components/menu-component/menu-style-component/router"

// vue项目自带路由
const routes = [{
    path: "/",
    name: "jsonToExcel",
    component: jsonToExcel
  },
  {
    path: "/jsonToExcel",
    name: "jsonToExcel",
    component: jsonToExcel
  },
  {
    path: "/testIndexedDB",
    name: "testIndexedDB",
    component: testIndexedDB
  },
  {
    path: "/mediaDevices",
    name: "mediaDevices",
    component: mediaDevices
  },
  {
    path: "/echartsShow",
    name: "echartsShow",
    component: echartsShow
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes, ...styleRoutes]
});

export default router;