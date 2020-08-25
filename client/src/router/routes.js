import Vue from 'vue'
import Router from 'vue-router'
import AddTask from '@/components/AddTask'
import HomePage from '@/components/HomePage'
import UpdateTask from '@/components/UpdateTask'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { title: 'To Do App | Home Page ' }
    },
    {
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask,
      meta: { title: 'To Do App | Add Task' }
    },
    {
      path: '/UpdateTask/:title&:description',
      name: 'UpdateTask',
      component: UpdateTask,
      meta: { title: 'To Do App | Update Task' }
    }
  ]
})

const DEFAULT_TITLE = 'To Do App'
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
