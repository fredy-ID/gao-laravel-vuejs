import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/app',
            name: 'dashboard',
            component: App,
        },
    ]
})

export default router;