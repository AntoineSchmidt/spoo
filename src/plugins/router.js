import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue';
import Create from '../components/Create.vue';
import Show from '../components/Show.vue';


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path: '/show',
            name: 'show',
            component: Show
        },
    ]
});

export default router;