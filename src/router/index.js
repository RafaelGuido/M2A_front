import Vue from 'vue';
import VueRouter from 'vue-router';

import Sistema from '../views/Sistema.vue';
import Empresas from '../views/Empresas';
import Grupos from '../views/Grupos';

import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/sistema',
    name: 'Sistema',
    component: Sistema,
    children: [
      {
        path: '/empresas',
        component: Empresas,
      },
      {
        path: '/grupos',
        component: Grupos,
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
