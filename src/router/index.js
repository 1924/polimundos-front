import Vue from 'vue'
import VueRouter from 'vue-router'
import BusquedaViajes from '../views/BusquedaViajesView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: BusquedaViajes
    },
    {
      path: '/vuelos',
      name: 'vuelos',
      component: () => import('../views/VuelosView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
