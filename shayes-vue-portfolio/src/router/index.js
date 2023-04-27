import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Homepage from '../views/Homepage.vue'
import Hornbydental from '../views/Hornbydental.vue'
import Tourism from '../views/Tourism.vue'
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
    },
    {
        path:'/Tourism',
        name:'Tourism',
        component: Tourism
    }

]

const router = createRouter({ history: createWebHistory(), routes })
export default router
