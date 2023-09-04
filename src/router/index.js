import { createRouter, createWebHistory } from "vue-router";
import jsonToExcel from "../components/menu-component/jsonToExcel";
import testIndexedDB from "../components/menu-component/testIndexedDB";
import mediaDevices from "../components/menu-component/mediaDevices"


// vue项目自带路由
const routes = [
  {
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes]
});

export default router;