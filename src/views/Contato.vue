<template>
  <v-card>
    <v-card-text>
      <v-text-field v-model="mask" label="Mask"></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-text-field v-model="value" v-mask="mask" label="Value"></v-text-field>
    </v-card-text>
  </v-card>
</template>