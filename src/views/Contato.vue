<template>
  <v-card>
    <v-card-text>
      <v-text-field v-model="mask" label="Assunto"></v-text-field>
    </v-card-text>
    <!-- <v-card-text>
      <v-text-field v-model="value" v-mask="mask" label="Mensagem"></v-text-field>
    </v-card-text>-->

    <v-container fluid>
      <v-textarea
        name="input-7-1"
        filled
        label="Mensagem"
        auto-grow
        value="Preciso alterar meu cadastro."
      ></v-textarea>
    </v-container>

    <div class="text-center">
    <v-btn class="ma-2" rounded color="primary" dark>Enviar Mensagem</v-btn>
  </div>
  </v-card>
</template>

