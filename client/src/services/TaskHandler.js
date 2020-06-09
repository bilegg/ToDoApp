import Api from '@/services/Api'

export default{
  addTask (task) {
    return Api().post('addTask', task)
  },
  main (task) {
    return Api().get('getData', task)
  },
  deleteTask (task) {
    return Api().post('deleteTask', task)
  }
}
