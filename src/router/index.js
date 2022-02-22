import { createWebHistory, createRouter } from "vue-router";
import Checkout from "../Pages/Checkout.vue";

const routes = [
  { path: "/", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
