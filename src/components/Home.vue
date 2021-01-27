<template>
    <v-card class="mx-auto" height="100%" width="100%" max-width="500">
        <v-toolbar color="blue">
            <v-spacer></v-spacer>
            <v-toolbar-title>Position Log</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="$router.push({name: 'create'})">
                <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
        </v-toolbar>
        <v-container fluid>
            <v-row dense>
                <v-col v-for="card in entries" :key="card.image + card.comment" :cols="6">
                    <v-card @click="$router.push({name: 'show', params: { entry: card }})">
                        <v-img :src="card.image"></v-img>
                        <v-card-text v-text="card.comment"></v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: 'Home',
    data: function() {
        return {
            entries: this.$store.state.entries
        }
    }
}
</script>