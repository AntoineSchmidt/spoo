import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        entries: JSON.parse(localStorage.getItem('entries') || '[]')
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
            try {
                localStorage.setItem('entries', JSON.stringify(payload.entries))
            } catch (e) {
                // quota exceeded
            }

        }
    }
})

export default store;