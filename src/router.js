import Vue from 'vue';
import Router from 'vue-router';
import Setor from './views/Setor.vue';
import Contato from './views/Contato.vue';
import Produto from './views/Produto.vue';
import Mensagem from './views/Mensagem.vue';
import Carrinho from "./views/Carrinho.vue";
import Pagamento from "./views/Pagamento.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
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
      path: '/pagamento',
      name: 'Pagamento',
      component: Pagamento
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
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

  ]
})