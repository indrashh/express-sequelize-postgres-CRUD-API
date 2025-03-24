const router = require("express").Router();
const todoRouter = require("./todos");

router.use(todoRouter);

module.exports = router;
