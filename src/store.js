import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// intialize localStorage for persistency
if (localStorage.getItem('entries') == null) {
    localStorage.setItem('entries', JSON.stringify([
        { image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', location: [0, 0], comment: "hello ifff'm here" },
        { image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', location: [0, 0], comment: "hello i'm here2" },
        { image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', location: [0, 0], comment: "hello i'm here3" },
    ]))
}

const store = new Vuex.Store({
    state: {
        entries: JSON.parse(localStorage.getItem('entries'))
    },
    mutations: {
        add(state, payload) {
            state.entries.push(payload.add);
            this.commit('save', { entries: state.entries })
        },
        update(state, payload) {
            payload.entry.comment = payload.comment;
            this.commit('save', { entries: state.entries })
        },
        save(state, payload) {
            localStorage.setItem('entries', JSON.stringify(payload.entries))
        }
    }
})

export default store;