import Vue from 'vue';
import Router from 'vue-router';
import Setor from './views/Setor.vue';
import Contato from './views/Contato.vue';
<<<<<<< HEAD
import Produto from './views/Produto.vue'
=======
import Mensagem from './views/Mensagem.vue';
import Carrinho from "./views/Carrinho.vue"
>>>>>>> d18375ae5599b0b485521f38de1b1698a4fb8435
Vue.use(Router);


export default new Router({
<<<<<<< HEAD
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
=======
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
      path: '/mensagem',
      name: 'Mensagem',
      component: Mensagem
    },
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho
    },

>>>>>>> d18375ae5599b0b485521f38de1b1698a4fb8435
  ]
})