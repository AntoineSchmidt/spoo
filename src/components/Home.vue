<template>
    <div>
        <v-toolbar color="blue">
            <v-spacer></v-spacer>
            <v-btn icon @click="$router.push({name: 'create'})">
                <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
        </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in entries"
          :key="card.image + card.comment"
          :cols="6"
        >
         <v-btn icon @click="$router.push({name: 'show', params: { entry: card }})">
          <v-card>
            <v-img
              :src="card.image"
              height="200px"
              width="200px"
            >
            
            </v-img>
            <v-card-title v-text="card.comment"></v-card-title>
          </v-card>
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
  return {
    entries: this.$store.state.entries
  }
}
}
</script>