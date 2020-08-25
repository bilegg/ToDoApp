const { Task } = require("../models");

module.exports = {
  async main(req, res) {
    try {
      const tasks = await Task.findAll();

      res.status(200).send(JSON.stringify(tasks));
    } catch (err) {
      res.status(400).send({
        error: "Unexpected error had occured",
      });
    }
  },
  async addTask(req, res) {
    try {
      const task = await Task.create(req.body);

      res.status(200).send(task.toJSON());
    } catch (err) {
      res.status(400).send({
        error: "Unexpected error had occured",
      });
    }
  },
  async deleteTask(req, res) {
    try {
      await Task.destroy({
        where: {
          id: req.body.id,
        },
      });

      res.status(200).send("Task destroyed");
    } catch (err) {
      res.status(400).send({
        error: "Unexpected error had occured",
      });
    }
  },
  async updateTask(req, res) {
    try {
      await Task.update(req.body.newData, {
        where: req.body.oldData,
      });

      res.status(200).send("Task updated");
    } catch (err) {
      res.status(400).send({
        error: "Unexpected error had occured",
      });
    }
  },
};
