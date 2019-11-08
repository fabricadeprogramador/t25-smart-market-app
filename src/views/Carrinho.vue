<template>
  <div>
    <div class="ma-12 elevation-1">
      <div class="text-center" color= "info">
        <h1>Carrinho</h1>
      </div>
    </div>
    <v-list>
      <v-list-item-title class="text-center">Produtos incluídos no seu carrinho:</v-list-item-title>

      <v-list-item v-for="item in items" :key="item.title" @click>
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>