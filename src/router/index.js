import { createRouter, createWebHistory } from "vue-router";
import jsonToExcel from "../components/menu-component/jsonToExcel";
import testIndexedDB from "../components/menu-component/testIndexedDB"


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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes]
});

export default router;