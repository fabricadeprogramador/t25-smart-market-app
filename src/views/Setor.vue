<template>
  <div>
    <div class="text-center">
      <h1>Setores</h1>
    </div>
      <v-card
        v-for="setor in setores"
        :key="setor._id"
        class="ma-6 pb-2 elevation-6"
        @click="buscarProdutos(setor)"
      >
      <div class="pa-3" v-if="setor.ativo">
        <h3 class=" text-center">{{setor.name}}</h3>
      </div>

        <v-img v-if="setor.ativo" :src="setor.imagem" height="150px"></v-img>

      </v-card>
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
      
      let setorSalo = setor
      httpRequstUtil.buscarProdutosSetor(setorSalo).then(produtos => {
        
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