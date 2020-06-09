import Vue from 'vue'
import Router from 'vue-router'
import AddTask from '@/components/AddTask'
import TaskList from '@/components/TaskList'
import DeleteTask from '@/components/DeleteTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/DeleteTask',
      name: 'DeleteTask',
      component: DeleteTask
    }
  ]
})
