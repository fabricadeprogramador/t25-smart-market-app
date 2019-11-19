<template>
  <div>
      <div class="text-center">
        <h1>Setores</h1>
      </div>
    <v-card
      v-for="setor in setores"
      :key="setor._id"
      class="ma-2"
      style="margin-top: 20px;"
      @click="buscarProdutos(setor)"
    >
      <v-img :src="setor.imagem" height="150px"></v-img>

      <v-card-title>{{setor.name}}</v-card-title>
    </v-card>
  </div>
</template>

<script>
//Importação da API
import httpRequstUtil from "../util/HttpRequestUtil";

export default {
  data: () => ({
    //Array dos setores
    setores: []
  }),
  methods: {
    buscarProdutos(setor) {
      alert("Olá VueJS");
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