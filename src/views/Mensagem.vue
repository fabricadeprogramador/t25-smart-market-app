
<template v-for="(item, index) in items" >


    <v-list rounded>
<v-alert
      dense
      type="info"
    >

      
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.resposta"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
   </v-alert>
   </v-list>
    
  
  
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
  }),
  methods: {},
  mounted() {
    if (localStorage.getItem("clienteLogado") != null) {
      let cliente = JSON.parse(localStorage.getItem("clienteLogado"));

      HttpRequestUtil.buscarPorCliente(cliente).then(response => {
        // alert(JSON.stringify(response));
        this.items = response;
      });
    }
  }
};
</script>


