import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/index.vue';
import SingleOrder from '../pages/single-order.vue';
import NewOrder from '../pages/addOrder.vue';
import Dashboard from '../pages/dashboard.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
      path: '/orders',
      name: 'orders',
      component: Home,
    },
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/order/:id',
      name: 'single-order',
      component: SingleOrder,
    },
    {
      path: '/order/add',
      name: 'add-order',
      component: NewOrder,
    },
  ]
})

export default router;