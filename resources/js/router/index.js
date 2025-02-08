import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../views/_pages/HomePage.vue';
import About from '../../views/_pages/AboutPage.vue';
import Contact from '../../views/_pages/ContactPage.vue';
import NotFound from '../../views/_pages/NotFoundPage.vue';
import InstallSteps from '../../views/_pages/InstallstepsPage.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/installsteps',
        component: InstallSteps,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/:pathMatch(.*)*', // 404
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;