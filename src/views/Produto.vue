<template>
  <v-row>
    <v-col v-for="produto in produtos" :key="produto._id">
      <v-card>
        <v-card-title style="background-image: white">
          <v-row>
            <v-dialog
              v-model="dialog"
              fullscreen
              persistent
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  icon
                  color="black"
                  v-on="on"
                  @click="abrirDetalhes(produto)"
                >
                  <v-icon>
                    mdi-chevron-down
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Teste</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <div class="detalhes" >
                  <v-img
                    max-width="200px"
                    :src="produtoSelecionado.imagem"
                    class="d-flex child-flex"
                    gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                    height="200px"
                  >
                  </v-img>

                  <p class="dados">R$ {{ produtoSelecionado.valor }}.00</p>
                  <p class="dados">{{ produtoSelecionado.descricao }}</p>
                </div>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card-title>

        <v-img
          :src="produto.imagem"
          class=""
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
          height="200px"
        >
        </v-img>
        <v-card-title style="color:black" v-text="produto.nome"> </v-card-title>
        <p>R$ {{ produto.valor.toFixed(2) }}</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    produtos: [],
    dialog: false,
    produtoSelecionado: {}
  }),

  methods: {
    buscarProdutos() {
      HttpRequestUtil.buscarProdutos().then(produtos => {
        this.produtos = produtos;
      });
    },

    abrirDetalhes(produto) {
      this.produtoSelecionado = produto;
      this.dialog = true;
    }
  },

  mounted() {
    this.buscarProdutos();

    console.log(this.$vuetify.breakpoint);
  },

  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.produtos) {
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
  width: 40%;
  border: 1px rgb(212, 209, 209) solid;
  margin-top: 5%;

}
.imagem-detalhe{
  
  padding: 20px;
  
  border: 1px solid black
}
.dados {
  text-align: center;
}
</style>
