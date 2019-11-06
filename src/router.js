import Vue from 'vue';
import Router from 'vue-router';
import Setor from './views/Setor.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/setores',
        name: 'Setores',
        component: Setor
      },
    ]
})