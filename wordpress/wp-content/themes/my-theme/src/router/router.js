import Main from '@/views/main'
import Katalog from '@/views/katalog'
import productPage from '@/views/productPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main,
        name: 'main'
    },
    {
        path: '/katalog',
        component: Katalog,
        name: 'katalog'
    },
    {
        path: '/katalog/product/:id',
        component: productPage,
        name: 'product'
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

export default router