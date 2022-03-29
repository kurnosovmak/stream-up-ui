import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import BlankLayout from '@/layouts/BlankLayout.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/video',
        name: 'app',
        component: BlankLayout,
        meta: {
            title: 'Logo'
        },
        children: [
            {
                path: '/popular',
                component: () => import('@/views/BaseView.vue'),
                name: 'home',
                meta: {
                    title: 'Videos ',
                },
            },
        ]
    },
    {
        path: '/',
        component: () => import('@/views/BaseView.vue'),
        name: 'home2',
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        meta: {
            title: 'Error 404'
        },
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
