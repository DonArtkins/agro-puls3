import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: () => import("../views/AboutView.vue") },
    { path: "/services", component: () => import("../views/ServicesView.vue") },
    { path: "/blog", component: () => import("../views/BlogView.vue") },
    { path: "/contact", component: () => import("../views/ContactView.vue") },
  ],
});

export default router;
