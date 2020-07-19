import Vue from 'vue'
import Router from 'vue-router'
import AddTask from '@/components/AddTask'
import HomePage from '@/components/HomePage'
import EditTask from '@/components/EditTask'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { title: 'Home Page - To Do App' }
    },
    {
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask,
      meta: { title: 'Add Task' }
    },
    {
      path: '/EditTask/:title&:description',
      name: 'EditTask',
      component: EditTask,
      meta: { title: 'Edit Task' }
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
