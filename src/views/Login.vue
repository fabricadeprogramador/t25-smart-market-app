<template>
  <v-app id="inspire">
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4"> 
              <v-card class="elevation-12">
                <v-toolbar color="amber" flat>
                  <v-toolbar-title>Login Market</v-toolbar-title>
                  <div class = "flex-grow-1"></div>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Usuário" 
                      v-model="username" 
                      prepend-icon="mdi-account" 
                      type="text"
                      color="amber"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Senha"
                      v-model="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="amber"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1 "></div>
                  <v-btn color="amber" @click="cadastrar" >Cadastrar</v-btn>
                  <v-btn color="amber" @click="autenticar" >Login</v-btn>
                </v-card-actions>
                
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
    password: ""

  }),
  methods: {
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


        HttpRequestUtil.buscarClientePorUsuario(usuario).then(clienteAut => {
         
          localStorage.setItem("clienteLogado", JSON.stringify(clienteAut[0]));
          
          window.location.pathname = '/'

        });
      },
      cadastrar(){
        window.location.pathname = "/cadastro"
      }
  }
};
</script>

<style>

</style>