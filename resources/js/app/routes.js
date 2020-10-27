import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App.vue';
import Home from './views/Home.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/app',
            name: 'dashboard',
            component: App,
        },
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ]
})

export default router;