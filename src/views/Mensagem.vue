<template v-for="items">
  <div class="mx-2 my-4">
    

    <v-alert type="info">
      I'm an info alert.
    </v-alert>

   
  </div>

</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil"
export default {
  data: () => ({
    items: [],

  }),
  mounted() {
    HttpRequestUtil.buscarPorCliente(cliente).then(response => {
      this.items = response;
    });
  }
}
  
</script>


