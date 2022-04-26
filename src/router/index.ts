import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/dashboard/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: Dashboard,
    },
    {
        path: '/supplyChainBaseElementTable',
        name: 'supplyChainBaseElementTable',
        component: () => import('../views/supplyChain/baseElementTable/index.vue'),
    },
];

const router = createRouter({
    //   history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes,
});

export default router;
