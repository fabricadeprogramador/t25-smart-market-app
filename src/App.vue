<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon v-if="rota != `/login`" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        Smart&nbsp;
        <span class="font-weight-light">Market</span>
      </span>

      <v-spacer></v-spacer>
      <v-icon v-if="rota != `/login`" @click="logout">mdi-exit-to-app</v-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="rota != `/login`"
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="amber" padless>
      <div class="flex-grow-1"></div>
      <div>Fábrica de Programador - High Tech Cursos&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    username: "",
    password: "",
    logado: false,
    rota: window.location.pathname,
    items: [
      
      {
        title: "Setores",
        icon: "mdi-apps-box",
        route: "/"
      },

      {
        title: "Carrinho",
        icon: "mdi-cart",
        route: "/carrinho"
      },

      {
        title: "Contato",
        icon: "mdi-comment-account",
        route: "/contato"
      },
      {
        title: "Mensagem",
        icon: "mdi-comment",
        route: "/mensagem"
      },
      {
        title: "Meus Dados",
        icon: "mdi-account-plus",
        route: "/cadastro"
      }
    ]
  }),
  methods: {
    logout() {
      localStorage.removeItem("clienteLogado");
      window.location.pathname = "/login";
    }
  }
};
</script>
<style>
#keep .v-navigation-drawer__border {
  display: none;
}

a {
  text-align: center;
  font-size: 20pt;
  font-family: sans-serif;
  font-weight: bold;
  color: #2c3e50;
}
</style>