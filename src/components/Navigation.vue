<template>
  <v-toolbar color="blue">
    <v-btn icon @click="$router.push({name: 'home'})">
        <v-icon>mdi-arrow-left-bold-box-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    title: String
  }
}
</script>