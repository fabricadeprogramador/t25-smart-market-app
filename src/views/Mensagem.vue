<template v-for="(item, index) in items">
  <div class="mx-2 my-4">
    <v-alert v-text="items.cliente.resposta" type="info"></v-alert>
  </div>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    items: ""
  }),
  methods: {},
  mounted() {
    if (localStorage.getItem("clienteLogado") != null) {
      let cliente = JSON.parse(localStorage.getItem("clienteLogado"));
      HttpRequestUtil.buscarPorCliente(cliente).then(response => {
        this.items = response;
      });
    }
  }
};
</script>


