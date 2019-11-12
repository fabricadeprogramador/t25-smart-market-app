import Vue from 'vue';
import Router from 'vue-router';
import Setor from './views/Setor.vue';
import Contato from './views/Contato.vue';
import Produto from './views/Produto.vue'
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
      { 
        path: '/contato',
        name: 'Contato',
        component: Contato 
    },
    {
      path: '/produtos',
      name: 'Produto',
      component: Produto
    },
  ]
})