<template>
  <div>
    <Navigation title="Position"></Navigation>
    <span>N {{ entry.location[0] }}° E {{ entry.location[1] }}°</span>
    <v-img
              :src="entry.image"
              height="200px"
              width="200px"
            >
            </v-img>
            <textarea v-model="comment" placeholder="your comment"></textarea>
            <v-btn @click="save">Save</v-btn>
  </div>
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
        this.$store.commit('update', {entry: this.entry, comment: this.comment});
        this.$router.push({name: 'home'});
    }
}
}
</script>