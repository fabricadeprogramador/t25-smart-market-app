<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" filled label="Forma de Pagamento" v-model="formadepagamento"></v-select>

        <template>
          <v-row justify="center">
            <v-dialog
              v-if="formadepagamento == 'Cartão de Crédito'"
              v-model="dialog"
              scrollable
              max-width="350px"
            >
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">Parcelas</v-btn>
              </template>
              <v-card>
                <v-card-title>Selecione o Número de Parcelas</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                  <v-radio-group v-model="dialogm1" column>
                    <v-radio label="1x - " value="1x"></v-radio>
                    <v-radio label="2x - " value="2x"></v-radio>
                    <v-radio label="3x - " value="3x"></v-radio>
                    <v-radio label="4x - " value="4x"></v-radio>
                    <v-radio label="5x - " value="5x"></v-radio>
                  </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click="fechardialog">Fechar</v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
      </v-col>
    </v-row>
  </v-container>

  
</template>



<script>
export default {
  data: () => ({
    dialogm1: "",
    dialog: false,
    formadepagamento: null,

    items: ["Boleto", "Cartão de Débito", "Cartão de Crédito", "PayPal"]
  }),

  methods: {
    fechardialog() {
      this.formadepagamento = null;
      this.dialog = false;
    }
  }
};
</script>