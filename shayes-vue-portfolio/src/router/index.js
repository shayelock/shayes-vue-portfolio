import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Homepage from '../views/Homepage.vue'
import Hornbydental from '../views/Hornbydental.vue'
import Tourism from '../views/Tourism.vue'
import Tradie from '../views/Tradie.vue'
import Eco from '../views/Eco.vue'
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
    },
    {
        path:'/Tradie',
        name:'Tradie',
        component: Tradie
    },
    {
        path:'/Eco',
        name:'Eco',
        component: Eco
    }
]

const router = createRouter({ 
    history: createWebHistory(), 
    routes,
scrollBehavior() {
    return { top: 0 };
},
});
export default router;
