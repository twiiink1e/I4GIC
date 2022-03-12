import { createRouter, createWebHistory } from 'vue-router'
// import HomeLogin from '../views/HomeLogin.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('../views/HomeLogin.vue')
        },
        {
            path: '/register',
            name: 'about',
            component: () =>
                import ('../views/HomeSignup.vue')
        },
        {
            path: '/Home',
            name: 'homeform',
            component: () =>
                import ('../components/HomeForm.vue')
        }
    ]
})

export default router