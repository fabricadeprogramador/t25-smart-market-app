<template>
  <div>
    <div class="text-center pt-4">
      <h1>Setores</h1>
    </div>
    <div
      v-for="setor in setores"
      :key="setor._id"
      @click="buscarProdutos(setor)"
      >
      <v-card class="ma-6 pb-2 elevation-6" v-if="setor.ativo">
      <div class="pa-3">
        <h3 class=" text-center">{{setor.name}}</h3>
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
    //Array setores
    setores: []
  }),
  methods: {
    buscarProdutos(setor) {
      
      let setorClicado = setor
      httpRequstUtil.buscarProdutosSetor(setorClicado).then(produtos => {
        
        if(JSON.stringify(produtos) != undefined) {
          localStorage.setItem("produtosPorSetor", JSON.stringify(produtos));
          this.$router.push('/produtos');

        }
        else {
          alert("Produtos não encontrados!")
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