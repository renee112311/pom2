import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '蕃茄鐘'
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      title: '蕃茄鐘 | 待辦清單'
    }
  },
  {
    path: '/done',
    name: 'Done',
    component: () => import(/* webpackChunkName: "done" */ '../views/Done.vue'),
    meta: {
      title: '蕃茄鐘 | 已完成'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      title: '蕃茄鐘 | 設定'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      title: '蕃茄鐘 | 404'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
