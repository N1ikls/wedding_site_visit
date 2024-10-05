import { createRouter, createWebHistory } from "vue-router";
import { TheMainLayout } from "../layout";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheMainLayout,
    },
  ],
});

export default router;
