<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="mx-auto" cols="12" sm="6">
        <v-select :items="items" filled label="Forma de Pagamento" v-model="formadepagamento"></v-select>
        <v-list>
          <v-list-item-title class="title text-center">
            Valor total da compra :
            <v-list-item-title>R$: {{valortotaldaCompra}}</v-list-item-title>
          </v-list-item-title>

          <v-list-item-title
            class="title text-center"
            v-if="formadepagamento == 'Cartão de Crédito'"
          >
            Valor total das Parcelas :
            <v-list-item-title>R$: {{valordasParcelas}}</v-list-item-title>
          </v-list-item-title>

          <v-list-item-title
            class="title text-center"
            v-if="formadepagamento == 'Cartão de Crédito'"
          >
            Quantidade de Parcelas :
            <v-list-item-title>{{qtdParcelas}}x</v-list-item-title>
          </v-list-item-title>

          <template>
            <div class="text-center">
              <v-btn
                :disabled="dialog1"
                :loading="dialog1"
                class="white--text mt-10"
                color="purple darken-2"
                @click="selecPagamento()"
              >Processar Pagamento</v-btn>
              <v-dialog v-model="dialog1" hide-overlay persistent width="300">
                <v-card color="primary" dark>
                  <v-card-text>
                    Por favor, aguarde...
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-list>
        <template>
          <v-row justify="center">
            <v-dialog
              v-if="formadepagamento == 'Cartão de Crédito'"
              v-model="dialog"
              scrollable
              max-width="350px"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  v-on="on"
                >Selecionar o número de parcelas (Até 3x sem juros!)</v-btn>
              </template>
              <v-card>
                <v-card-title>Selecione o Número de Parcelas (Até 3x sem juros!)</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                  <v-radio-group v-model="dialogm1" column>
                    <v-radio label="1x - " value="1"></v-radio>
                    <v-radio label="2x - " value="2"></v-radio>
                    <v-radio label="3x - " value="3"></v-radio>
                    <v-radio label="4x - " value="4"></v-radio>
                    <v-radio label="5x - " value="5"></v-radio>
                  </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click="fechardialog">Fechar</v-btn>
                  <v-btn color="blue darken-1" text @click="calcularParcelas()">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>

        <template>
          <v-alert type="warning" v-model="alertaPag">Selecione uma forma de Pagamento</v-alert>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>




<script>
export default {
  data: () => ({
    dialogm1: 0,
    dialog: false,
    dialog1: false,
    alertaPag: false,

    compra: [],

    items: ["Boleto", "Cartão de Débito", "Cartão de Crédito", "Paypal"],

    qtdParcelas: 0,

    valordasParcelas: 0,

    valortotaldaCompra: 0,

    formadepagamento: null
  }),

  watch: {
    dialog1(val) {
      if (!val) return;

      setTimeout(() => (this.dialog1 = false), 4000);
    }
  },

  methods: {
    fechardialog() {
      this.formadepagamento = null;
      this.dialog = false;
    },

    

    calcularParcelas() {
      if (this.formadepagamento == "Cartão de Crédito" && this.dialogm1 > 0) {
        if (this.dialogm1 <= 3) {
          this.valordasParcelas = this.valortotaldaCompra / this.dialogm1;
        } else {
          this.valordasParcelas =
            this.valortotaldaCompra / this.dialogm1 +
            (5 / 100) * this.valortotaldaCompra;
          this.qtdParcelas = this.dialogm1;
        }

        this.dialog = false;
      }
    },

    selecPagamento() {
      if (this.formadepagamento == null) {
        this.alertaPag = true;
      }else{
        this.alertaPag = false
        this.dialog1 = true
      }
    }
  },

  mounted() {
    if (localStorage.getItem("carrinho") == null) {
      localStorage.setItem("carrinho", JSON.stringify(this.compra));
    } else {
      let compra = JSON.parse(localStorage.getItem("carrinho"));
      this.compra = compra;
    }
    for (let i = 0; i < this.compra.length; i++) {
      this.valortotaldaCompra += parseFloat(this.compra[i].valor);
    }
  }
};
</script>