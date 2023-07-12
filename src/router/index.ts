import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/pages/MenuPage.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/pages/FormPage.vue'),
    },
  ],
});

export default router;
