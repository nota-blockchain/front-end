import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PersonalHistory from './views/PersonalHistory.vue'
import UserManagement from './views/UserManagement.vue'
import TalkConcert from './views/TalkConcert.vue'
import TokenManagement from './views/TokenManagement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personalHistory',
      name: 'personalHistory',
      component: PersonalHistory
    },
    {
      path: '/userManagement',
      name: 'userManagement',
      component: UserManagement
    },
    {
      path: '/talkConcert',
      name: 'talkConcert',
      component: TalkConcert
    },
    {
      path: '/tokenManagement',
      name: 'tokenManagement',
      component: TokenManagement
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
