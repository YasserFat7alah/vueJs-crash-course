import { createRouter, createWebHistory } from "vue-router";

import NotFoundView from "@/views/NotFoundView.vue";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import SingleJobView  from "@/views/SingleJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },        
        {
            path: '/jobs/:id',
            name: 'job',
            component: SingleJobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        },
    ]
});

export default router;