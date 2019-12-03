<template>
  <div>
    <div>
      <v-snackbar
        type="info"
        v-model="naoCadastrado"
        close-text="Close Alert"
        color="red"
        :top="y === 'top'"
      >
        Não existe produtos cadastrados para este Setor!
        <v-btn dark text @click="naoCadastrado = false">Fechar</v-btn>
      </v-snackbar>
    </div>
    <div class="text-center pt-4">
      <h1>Setores</h1>
    </div>
    <div v-for="setor in setores" :key="setor._id" @click="buscarProdutos(setor)">
      <v-card class="ma-4 pb-2 elevation-12" v-if="setor.ativo">
        <div class="pa-3">
          <h3 class="text-center">{{setor.name}}</h3>
        </div>

        <v-img :src="setor.imagem" height="150px"></v-img>
      </v-card>
    </div>
  </div>
</template>

<script>
//Importação da API
import httpRequstUtil from "../util/HttpRequestUtil";

export default {
  data: () => ({
    //Alert
    naoCadastrado: false,
    y: "top",
    //Array setores
    setores: []
  }),
  methods: {
    buscarProdutos(setor) {
      let setorClicado = setor;
      httpRequstUtil.buscarProdutosSetor(setorClicado).then(produtos => {
       let produtosNovos = JSON.stringify(produtos);
       if (produtosNovos != "[]") {
          localStorage.setItem("produtosPorSetor", produtosNovos);
          this.$router.push("/produtos");
        } else {
          this.naoCadastrado = true;
        }
      });
    },
    buscarSetores() {
      httpRequstUtil.buscarSetores().then(setores => {
        this.setores = setores;
      });
    }
  },
  mounted() {
    this.buscarSetores();
  }
};
</script>

<style>
</style>