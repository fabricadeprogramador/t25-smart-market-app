<template>
  <v-card>
    <v-snackbar type="info" v-model="salvo" close-text="Close Alert" color="red" :top="y === 'top'">
      Mensagem enviada com sucesso!
      <v-btn dark text @click="salvo = false">Fechar</v-btn>
    </v-snackbar>

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
    datacontato: "07/11/2019",
    salvo: false,
    timeout: 6000,

    y: "top"
  }),
  methods: {
    adicionarMensagem() {
      let contato = {};
      contato.assunto = this.assunto;
      contato.mensagem = this.mensagem;
      contato.respondido = false;
      contato.resposta = "";
      contato.datacontato = this.datacontato;

      if (localStorage.getItem("clienteLogado") != null) {
        contato.cliente = JSON.parse(localStorage.getItem("clienteLogado"));
        this.salvo = true;
      } else {
        alert("Necessário estar logado");

        window.location.pathname = "/login";
      }

      HttpRequestUtil.salvarContato(contato).then(responde => {});
      this.limpar();
    },
    limpar() {
      this.mensagem = "";
      this.assunto = "";
    }
  }
};
</script>