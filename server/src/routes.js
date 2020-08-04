const TaskController = require('./controllers/TaskController')

module.exports = (app) => {
    app.get('/getData', 
        TaskController.main),
    app.post('/AddTask', 
        TaskController.addTask),
    app.post('/DeleteTask', 
        TaskController.deleteTask)
}