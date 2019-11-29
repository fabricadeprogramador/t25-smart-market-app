<template>
  <v-card>
    <v-card-text>
      <v-text-field label="Assunto" v-model="assunto"></v-text-field>
    </v-card-text>

    <v-container fluid>
      <v-textarea name="input-7-1" filled label="Mensagem" auto-grow v-model="mensagem"></v-textarea>
    </v-container>

    <div class="text-center">
      <v-sheet color="blue lighten-2"></v-sheet>
    </div>

    <div class="text-center">
      <v-btn class="ma-2" rounded color="primary" dark @click="adicionarMensagem()">Enviar Mensagem</v-btn>
    </div>
  </v-card>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    assunto: "",
    mensagem: "",
    respondido: false,
    resposta: "",
    datacontato: "07/11/2019"
  }),
  methods: {
    adicionarMensagem() {
      let contato = {};
      contato.assunto = this.assunto;
      contato.mensagem = this.mensagem;
      contato.respondido = false;
      contato.resposta = "";
      contato.datacontato = this.datacontato;

      if (localStorage.getItem("clienteLogado")  != null) {
        contato.cliente = JSON.parse(localStorage.getItem("clienteLogado"));
      } else {
        alert("Necessário estar logado")
        
        window.location.pathname = '/login'
      }

      HttpRequestUtil.salvarContato(contato).then(responde => {});
      this.limpar()

    },
    limpar(){
      this.mensagem = ""
      this.assunto = ""
    }
  }
};
</script>