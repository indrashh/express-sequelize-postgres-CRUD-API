const { todo } = require("../models");

class TodoController {
  static getTodos(req, res) {
    todo
      .findAll()
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static addTodo(req, res) {
    const { task, status } = req.body;

    todo
      .create({ task, status })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static findById(req, res) {
    let id = +req.params.id;

    todo
      .findByPk(id)
      .then((result) => {
        if (result === null) {
          res.json({
            message: "id not found",
          });
        } else {
          res.json(result);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static deleteTodo(req, res) {
    let id = +req.params.id;

    todo
      .destroy({
        where: {
          id,
        },
      })
      .then((result) => {
        if (result === 1) {
          res.json({
            message: "deleting is success",
          });
        } else {
          res.json({
            message: "deleted has been failed",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static updateTodo(req, res) {
    let id = +req.params.id;
    const { task, status } = req.body;

    todo
      .update(
        {
          task,
          status: Boolean(status),
        },
        {
          where: { id },
        }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        err;
      });
  }
}
module.exports = TodoController;
