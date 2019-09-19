import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PersonalHistory from './views/PersonalHistory.vue'
import UserManagement from './views/UserManagement.vue'
import TalkConcert from './views/TalkConcert.vue'
import TokenManagement from './views/TokenManagement.vue'
import User from './views/User.vue'
import EducationData from './views/EducationData.vue'
import EducationProcess from './views/EducationProcess.vue'
import DataPrint from './views/DataPrint.vue'
import TalkConcertVote from './views/TalkConcertVote.vue'

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
    //User
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/educationData',
      name: 'educationData',
      component: EducationData
    },
    {
      path: '/educationProcess',
      name: 'educationProcess',
      component: EducationProcess
    },
    {
      path: '/dataPrint',
      name: 'dataPrint',
      component: DataPrint
    },
    {
      path: '/talkConcertVote',
      name: 'talkConcertVote',
      component: TalkConcertVote
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
