import Vue from 'vue'
import Router from 'vue-router'
import AddTask from '@/components/AddTask'
import TaskList from '@/components/TaskList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList,
      meta: {
        title: 'Home Page - To Do App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of my to-do app.'
          },
          {
            property: 'og:description',
            content: 'The home page of my to-do app.'
          }
        ]
      }
    },
    {
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask
    }
  ]
})
