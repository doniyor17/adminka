import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/index.vue";
import SingleOrder from "../pages/single-order.vue";
import NewOrder from "../pages/addOrder.vue";
import Login from "../pages/login.vue";
import loadLayoutMiddleware from "./middleware.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/order/:id",
      name: "single-order",
      component: SingleOrder,
    },
    {
      path: "/order/add",
      name: "add-order",
      component: NewOrder,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        layout: "auth",
        title: "Login",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/not-found.vue"),
      meta: {
        layout: "auth",
        title: "Not-Found",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggegIn = sessionStorage.getItem("loggedIn");
  if (to.name !== "login" && !loggegIn) {
    next({ name: "login" });
  } else if (loggegIn && to.name === "login") {
    next({ path: from.path });
  } else {
    next();
  }
});

router.beforeResolve(async (to) => {
  await loadLayoutMiddleware(to);
});

export default router;
