<template>
  <div class="mx-2 my-4">
    <v-alert type="info"> <input v-model="resposta"></v-alert>
  </div>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    resposta: '',
  }),
  methods: {},
  mounted() {
    if (localStorage.getItem("clienteLogado") != null) {
      let cliente = JSON.parse(localStorage.getItem("clienteLogado"));
      HttpRequestUtil.buscarPorCliente(cliente).then(response => {
        this.resposta = response;
      });
    }
  }
};
</script>


