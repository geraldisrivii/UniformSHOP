// import Main from '@/views/main'
// import Katalog from '@/views/katalog'
// import productPage from '@/views/productPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: async () => import('@/views/main'),
        name: 'main'
    },
    {
        path: '/katalog',
        component: async () => import('@/views/katalog'),
        name: 'katalog'
    },
    {
        path: '/katalog/product/:id',
        component: async () => import('@/views/productPage'),
        name: 'product'
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
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