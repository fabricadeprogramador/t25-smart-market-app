<template>
  <div>
    <div class="ma-12 elevation-1">
      <div class="text-center" >
        <h1>Carrinho</h1>
      </div>
    </div>
    <v-list>
      <v-list-item-title class="text-center">Produtos incluídos no seu carrinho:</v-list-item-title>

      <v-list-item v-for="item in carrinho" :key="item._id">
        <v-list-item-avatar>
          <v-img :src="item.imagem"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.descricao"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title v-text="item.quantidade"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon @click="deletarProduto">"md"</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
    data: () => ({
        carrinho: [ {
        _id: "5db243494a682b23f094f560",
        disponivel: false,
        nome: "Produto 11",
        marca: "Marca1",
        valor: 110,
        quantidade: 17,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV23Gum3ATjspEkv4XtItsLEkLckfECVmYUo0w_v14oP-7uoQ58w&s",
        validade: "10-24-2019",
        __v: 0,
        descricao: "descricao",
        setor: {
            _id: "5db249855257c64228c09e2f",
            ativo: true,
            name: "Frios"
        }
    }]
    }),
    
    methods: {
        
        deletarProduto(){

        }
    },

    mounted() {
        
        if (localStorage.getItem("carrinho") == null) {

            localStorage.setItem("carrinho", JSON.stringify(this.carrinho))

        } else {

            let carrinho = JSON.parse(localStorage.getItem("carrinho"))
            this.carrinho = carrinho
        }
    
    },
      

            
        
    
};
</script>

<style>
</style>