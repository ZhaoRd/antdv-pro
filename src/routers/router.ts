import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import MainLayout from '@/layouts/main/BasicLayout.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [{
        path: '/',
        name: '/home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      }],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
  ],
});
