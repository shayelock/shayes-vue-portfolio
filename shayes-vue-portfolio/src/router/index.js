import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Homepage from '../views/Homepage.vue'
import Hornbydental from '../views/Hornbydental.vue'
const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path:'/',
        name:'Homepage',
        component: Homepage
    },
    {
        path:'/Hornbydental',
        name:'Hornbydental',
        component: Hornbydental
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
