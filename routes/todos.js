const todoRouter = require("express").Router();
const TodoController = require("../controller/TodoController");

todoRouter.get("/", TodoController.getTodos);
todoRouter.post("/add", TodoController.addTodo);
todoRouter.get("/find/:id", TodoController.findById);
todoRouter.delete("/delete/:id", TodoController.deleteTodo);
todoRouter.put("/update/:id", TodoController.updateTodo);

module.exports = todoRouter;
