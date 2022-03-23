import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/Home'
import Resume from '../pages/Resume'
import Projects from '../pages/ProjectPage'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    }, 
    {
        name: 'Resume',
        path: '/resume',
        component: Resume
    },
    {
        name: 'Projects',
        path: '/projects',
        component: Projects
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    routes
})

export default router