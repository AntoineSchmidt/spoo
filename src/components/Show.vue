<template>
    <v-card class="mx-auto" height="100%" width="100%" max-width="500">
        <Navigation title="Position Details"></Navigation>
        <v-list-item>
            <v-spacer></v-spacer>
            <v-img :src="entry.image" width="100%">
            </v-img>
            <v-spacer></v-spacer>
        </v-list-item>
        <v-list-item>
            <v-spacer></v-spacer>
            <span>N {{ entry.location[0] }}° E {{ entry.location[1] }}°</span>
            <v-spacer></v-spacer>
        </v-list-item>
        <v-list-item>
            <v-spacer></v-spacer>
            <textarea v-model="comment" placeholder="your comment" cols=100 rows=2></textarea>
            <v-spacer></v-spacer>
        </v-list-item>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
    name: 'Show',
    components: {
        Navigation,
    },
    data() {
        return {
            entry: this.$route.params.entry,
            comment: this.$route.params.entry.comment
        }
    },
    methods: {
        save() {
            this.$store.commit('update', { entry: this.entry, comment: this.comment });
            this.$router.push({ name: 'home' });
        }
    }
}
</script>