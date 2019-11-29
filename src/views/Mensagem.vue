<template>
  <v-list-item-group class="mx-2 my-4">
    <v-snackbar type="info" v-model="salvo" close-text="Close Alert" color="red" :top="y === 'top'">
      RESPOSTA JÁ ENVIADA!
      <v-btn dark text @click="salvo = false">Fechar</v-btn>
    </v-snackbar>

    <template v-for="(item) in items">
      <v-list-item :key="item.cliente">
        <v-list-item-content>
       
          
          <v-container fluid>
            <v-row>
              <v-col cols="10">
                <v-list-item-title class="title ml-3 mr-5">
                  Assunto:
                  <v-list-item-subtitle class="font-weight-light" v-text="item.assunto"></v-list-item-subtitle>
                </v-list-item-title>
              </v-col>
              <v-col cols="2" align="right">
                <v-list-item-action-text v-text="item.datacontato"></v-list-item-action-text>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-list-item-title class="title ml-3 mr-5">Mensagem:</v-list-item-title>
                <v-list-item-action-text v-text="item.mensagem"></v-list-item-action-text>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-list-item-title class="title ml-3 mr-5">Resposta:</v-list-item-title>
                <v-list-item-subtitle v-text="item.resposta"></v-list-item-subtitle>
              </v-col>

           

            </v-row>
          </v-container>
        </v-list-item-content>
      </v-list-item>

    
    </template>
  </v-list-item-group>
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


