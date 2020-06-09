const {Task} = require('../models')

module.exports = {
    async main (req, res) {   
        try{
            const tasks = await Task.findAll()
            //const tasksJSON = tasks.toJSON()
            res.send(JSON.stringify(tasks))
        } catch (err) {
            res.status(400).send({
                error: 'Unexpected error had occured'
            })
        }
    },
    async addTask (req, res) {   
        try{
            const task = await Task.create(req.body)
            res.send(task.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Unexpected error had occured'
            })
        }
    },
    async deleteTask (req, res) {   
        try{
            console.log(req.body.id)
            Task.destroy({
                where: {
                  id: req.body.id
                }
              });
        } catch (err) {
            res.status(400).send({
                error: 'Unexpected error had occured'
            })
        }
    },
}