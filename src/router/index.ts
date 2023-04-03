import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailedView from "../views/DetailedView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/detailed/:id", name: "detailed", component: DetailedView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
