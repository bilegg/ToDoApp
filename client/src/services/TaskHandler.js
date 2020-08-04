import Api from '@/services/Api'

export default{
  addTask (task) {
    return Api().post('addTask', task)
  },
  deleteTask (task) {
    return Api().post('deleteTask', task)
  },
  updateTask (task) {
    return Api().post('updateTask', task)
  }
}
