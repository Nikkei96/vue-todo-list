import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/veiws/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      component: () => import('./veiws/Todos.vue') //lazy-loading
    }
  ]
})