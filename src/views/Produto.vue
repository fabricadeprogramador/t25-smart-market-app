<template>
<v-row>
        <v-col
          v-for="produto in produtos"
          :key="produto.disponivel"
          >
          <v-card>
          <v-card-title style="background-image: white">
            <v-row>

          <v-dialog v-model="dialog" fullscreen persistent   transition="dialog-bottom-transition">

          <template v-slot:activator="{ on }">
          <v-btn text icon color="black" v-on="on">
          <v-icon @click="dialog">
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
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
          </v-toolbar>
          </v-card>
          </v-dialog>

          </v-row>
          </v-card-title>

          <v-card-action>
            <v-img
              :src="produto.imagem"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
              height="200px"
            >
            </v-img>
          </v-card-action>
          <v-card-item>
                <v-card-title 
                style="color:black" 
                v-text="produto.nome"
                >
                </v-card-title>
              <p>R$ {{produto.valor.toFixed(2)}}</p>

            </v-card-item>
            </v-card>  
        </v-col>
</v-row>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
  export default {
    data: () => ({
      produtos:[],
      dialog : false,
    }),

    methods:{
      buscarProdutos(){
        HttpRequestUtil.buscarProdutos().then(produtos => {
          this.produtos = produtos
        })
      }
    },

      mounted(){
        this.buscarProdutos()
        console.log(this.$vuetify.breakpoint)
      },

    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.imagem) {
          case 'xs': return '220px' 
          case 'sm': return '400px'
          case 'md': return '500px'
          case 'lg': return '600px'
          case 'xl': return '800px'
        }
      },
    },
  }
</script>


<style>

</style>