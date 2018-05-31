import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Login from '@/components/Login'
import Main from '@/components/Main'
import store from '../store'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

const users = [
  {name: 'test1'},
  {name: 'test2'},
  {name: 'test3'},
  {name: 'test4'},
  {name: 'test5'}
  ]

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.config.url === '/users') {
    return {
      status: 200,
      data: users
    }
  }

  if (error.config.url === '/login') {
    if (users.find((item) => item.name === error.config.data)) {
      return {
        status: 200
      }
    }

    throw error
  }

  throw error
});

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuth) {
    next()
    return
  }
  next('/main')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuth) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      beforeEnter: ifNotAuthenticated,
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      beforeEnter: ifAuthenticated,
      component: Main
    }
  ]
})
