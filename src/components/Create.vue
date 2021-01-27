<template>
    <v-card class="mx-auto" height="100%" width="100%" max-width="500">
        <Navigation title="New Position"></Navigation>
        <v-list-item>
            <v-spacer></v-spacer>
            <video autoplay id="video" width="100%"></video>
            <v-spacer></v-spacer>
        </v-list-item>
        <v-list-item>
            <v-spacer></v-spacer>
            <span>N {{ entry.location[0] }}° E {{ entry.location[1] }}°</span>
            <v-spacer></v-spacer>
        </v-list-item>
        <v-list-item>
            <v-spacer></v-spacer>
            <textarea v-model="entry.comment" placeholder="your comment"></textarea>
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
    name: 'Create',
    components: {
        Navigation,
    },
    data: () => ({
        entry: { image: '', location: [0, 0], comment: '' }
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
            } catch (e) {
                alert("No Camera Access")
            }
        },
        save() {
            const video = document.querySelector("#video");
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext("2d").drawImage(video, 0, 0);
            this.entry.image = canvas.toDataURL("image/png");
            this.$store.commit('add', { add: this.entry });
            this.$router.push({ name: 'home' });
        }
    },
    mounted() {
        this.getVideo();
        navigator.geolocation.getCurrentPosition(this.setPosition);
    }
}
</script>