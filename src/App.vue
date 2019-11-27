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

    <v-navigation-drawer v-if="rota != `/login`" v-model="drawer" app clipped color="grey lighten-4">
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
      items: [{
          title: "Setores",
          icon: "mdi-apps-box",
          route: "/setores"
        }, 

        {
          title: "Carrinho",
          icon: "mdi-cart",
          route: "/carrinho"
        },

        {
          title: "Produtos",
          icon: "mdi-basket",
          route: "/produtos"
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
        }
              
      ]
    }),
    methods: {
<<<<<<< HEAD
      autenticar() {
        let usuario = {};
        usuario.username = this.username;
        usuario.senha = this.password;
        usuario.tipo = "CLIENTE";

        HttpRequestUtil.autenticar(usuario).then(usuarioAut => {
          if (JSON.stringify(usuarioAut[0]) != undefined) {
            this.buscarClientePorUsuario(usuarioAut[0]._id);
          } else {
            alert("Usuário e/ou senha inválidos");
          }
        });
      },
      buscarClientePorUsuario(idusuario) {
        let usuario = {};
        usuario.usuario = idusuario;


        HttpRequestUtil.buscaClientePorUsuario(usuario).then(clienteAut => {
         
          localStorage.setItem("clienteLogado", JSON.stringify(clienteAut[0]));
          this.logado = true;
        });
      },


      logout() {
        localStorage.removeItem("clienteLogado");
        this.logado = false;

      },

      buscarUsuarioLS() {
        let lsUsuario = null;
        lsUsuario = localStorage.getItem("clienteLogado");
        if (lsUsuario == null) {
          this.logado = false;
        } else {
          this.logado = true;
        }
=======
      logout() {
        localStorage.removeItem("clienteLogado");
        window.location.pathname = '/login';
>>>>>>> 631c424df67e6726ee681669df7e5c8d839be5e5
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