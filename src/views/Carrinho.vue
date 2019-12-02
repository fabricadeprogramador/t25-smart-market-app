<template>
  <div>
    <div class="ma-12 elevation-1">
      <div class="text-center">
        <h1>Carrinho</h1>
      </div>
    </div>

    <div class="ma-12 elevation-1">
      <v-card>
        <v-list class="pa-12">
          <v-list-item-title class="text-center">Produtos incluídos no seu carrinho:</v-list-item-title>
          <v-list-item>
            <v-list-item-title>PRODUTO:</v-list-item-title>

            <v-list-item-title>QUANTIDADE:</v-list-item-title>

            <v-list-item-title>VALOR:</v-list-item-title>

            <v-list-item-title>EXCLUIR:</v-list-item-title>
          </v-list-item>

          <v-list-item class v-for="item in carrinho" :key="item._id">
            <v-list-item-avatar>
              <v-img :src="item.imagem"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.descricao"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title v-text="item.quantidade"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title v-text="item.valor"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="mostrarDialog(item)">
                <v-icon color="red">{{icone}}</v-icon>
              </v-btn>
            </v-list-item-action>
            <template>
              <v-row justify="center">
                <v-dialog v-model="dialog" max-width="290">
                  <v-card>
                    <v-card-title class="headline">Olá Cliente!</v-card-title>

                    <v-card-text>Deseja realmente excluir o produto do carrinho?</v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn color="red" text @click="dialog = false">Cancelar</v-btn>

                      <v-btn color="green darken-1" text @click="deletarProduto()">Sim</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <div class="text-center">
      <v-list-item-title class="title">
        Valor total do carrinho :
        <v-list-item-title>R$: {{valortotaldoCarrinho}},00</v-list-item-title>
      </v-list-item-title>
    </div>
    <div class="my-7 text-center">
      <v-btn x-large color="success" dark @click="finalizarCompra()">Finalizar compra</v-btn>
    </div>
  </div>
</template>

<script>
import { json } from "body-parser";
export default {
  data: () => ({
    icone: "mdi-cart-off",
    dialog: false,
    produtoExcluido: null,
    valortotaldoCarrinho: 0,

    carrinho: []
  }),

  methods: {
    mostrarDialog(item) {
      this.produtoExcluido = item;
      this.dialog = true;
    },

    finalizarCompra() {
      if (localStorage.getItem("clienteLogado") != null) {
        this.$router.push("/pagamento");
      } else {
        this.$router.push("/login");
      }
    },

    deletarProduto() {
      if (this.produtoExcluido != null) {
        let posição = -1;

        for (let index = 0; index < this.carrinho.length; index++) {
          if (this.carrinho[index] == this.produtoExcluido) {
            posição = index;
          }
          if (posição != -1) {
            this.carrinho.splice(posição, 1);
            localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
            this.produtoExcluido = null;
            this.dialog = false;

            if (this.carrinho.length == 0) {
              this.valortotaldoCarrinho = 0;
            } else {
              this.valortotaldoCarrinho = 0;
              for (let i = 0; i < this.carrinho.length; i++) {
                this.valortotaldoCarrinho += parseFloat(this.carrinho[i].valor);
              }
            }
          }
        }
      }
    }
  },

  mounted() {
    if (localStorage.getItem("carrinho") == null) {
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
    } else {
      let carrinho = JSON.parse(localStorage.getItem("carrinho"));
      this.carrinho = carrinho;
    }
    for (let i = 0; i < this.carrinho.length; i++) {
      this.valortotaldoCarrinho += parseFloat(this.carrinho[i].valor);
    }
  }
};
</script>

<style>
</style>