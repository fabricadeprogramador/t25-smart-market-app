<template>
  <div>
    <v-container-fluid>
      <v-row>
        <v-col cols="4" v-for="produto in produtos" :key="produto._id">
          <v-card class="ml-2 mr-1">
            <v-card-title>
              <v-dialog
                v-model="dialog"
                fullscreen
                persistent
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-btn text icon color="black" v-on="on" @click="abrirDetalhes(produto)">
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <div>
                    <v-snackbar
                      type="info"
                      v-model="enviado"
                      close-text="Close Alert"
                      color="info"
                      :top="y === 'top'"
                    >
                      PRODUTO ADICIONADO AO CARRINHO!
                      <v-btn dark text @click="enviado = false">Fechar</v-btn>
                    </v-snackbar>
                  </div>
                  <v-toolbar dark color="amber">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <div class="detalhes">
                    <v-img
                      style="margin:auto ; border: 1px solid black"
                      max-width="400px"
                      :src="produtoSelecionado.imagem"
                      class="d-flex child-flex"
                      gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                      height="200px"
                    ></v-img>
                    <p class="title ml-6">
                      quantidade disponivel:
                      {{ produtoSelecionado.quantidade }} unidades
                    </p>
                    <v-text-field class="d-sm-inline-flex ml-6" v-model="qtdUnidade"></v-text-field>
                    <p
                      class="text-right text-uppercase mr-6"
                      style="font-size:35pt ; color:red"
                    >R${{ produtoSelecionado.valor }},00</p>
                    <v-btn
                      color="amber"
                      class="justify-center"
                      @click="adicionarCarrinho"
                    >Adicionar ao Carrinho</v-btn>
                  </div>
                </v-card>
              </v-dialog>
            </v-card-title>

            <v-card-subtitle class="display-1 black--text">
              <v-img
                :src="produto.imagem"
                class="pa-auto ma-auto"
                max-width="300px"
                max-height="300px"
                style="whidth:200px ; height:200px"
              ></v-img>

              <p class="font-weight-bold" v-text="produto.nome"></p>

              <p class="title font-weight-bold">R$ {{ produto.valor}}</p>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container-fluid>
  </div>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    produtos: [],
    qtdUnidade: "",
    dialog: false,
    enviado: false,
    produtoSelecionado: {},
    y: "center"
  }),

  methods: {
    buscarProdutos() {
      this.produtos = JSON.parse(localStorage.getItem("produtosPorSetor"));
    },

    abrirDetalhes(produto) {
      this.produtoSelecionado = produto;
      this.dialog = true;
    },

    adicionarCarrinho() {
      if (this.qtdUnidade > this.produtoSelecionado.quantidade) {
        alert("quantidade selecionada de unidades não está disponível");
        this.qtdUnidade = "";
      } else {
        if (localStorage.getItem("carrinho") == null) {
          localStorage.setItem("carrinho", JSON.stringify([]));
        }

        let produtos = JSON.parse(localStorage.getItem("produtosPorSetor"));
        let carrinho = JSON.parse(localStorage.getItem("carrinho"));

        for (let index = 0; index < produtos.length; index++) {
          carrinho.push(produtos[index]);

          localStorage.setItem("carrinho", JSON.stringify(carrinho));
          this.enviado = true;
        }

        this.qtdUnidade = "";
      }
    }
  },

  mounted() {
    this.buscarProdutos();

    console.log(this.$vuetify.breakpoint);
  },

  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.produto.imagem) {
        case "xs":
          return "220px";
        case "sm":
          return "400px";
        case "md":
          return "500px";
        case "lg":
          return "600px";
        case "xl":
          return "800px";
      }
    }
  }
};
</script>

<style>
.detalhes {
  margin: auto;
  width: 100%;
  margin-top: 1%;
}
.imagem-detalhe {
  padding: 20px;

  border: 1px solid black;
}
.dados {
  text-align: center;
  font-size: 30pt;
}
</style>
