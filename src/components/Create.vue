<template>
  <div>
    <Navigation title="New Position"></Navigation>
    <video autoplay id="video" width="200px" height="200px"></video>
    <canvas id="canvas" style="display: none"></canvas>
    <span>N {{ entry.location[0] }}° E {{ entry.location[1] }}°</span>
    <textarea v-model="entry.comment" placeholder="your comment"></textarea>
    <v-btn @click="save">Save</v-btn>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Create',
  components: {
    Navigation,
  },
  data: () => ({
    entry: { image: '', location: [0, 0], comment: ''}
    }),
 methods: {
    setPosition(position) {
        this.entry.location = [position.coords.latitude, position.coords.longitude];
},
async getVideo() {
    const video = document.querySelector("#video");
    const constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440,
    },
  },
};
try {
    const videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = videoStream;
} catch {
    alert("No Camera Access")
}
},
save() {
    const video = document.querySelector("#video");
    const canvas = document.querySelector("#canvas");
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
canvas.getContext("2d").drawImage(video, 0, 0);
this.entry.image = canvas.toDataURL("image/png");
 this.$store.commit('add', {add: this.entry});
 this.$router.push({name: 'home'});
}
 },
 mounted() {
    this.getVideo();
    navigator.geolocation.getCurrentPosition(this.setPosition);
 }
}
</script>