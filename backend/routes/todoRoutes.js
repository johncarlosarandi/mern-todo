const express = require("express");
const router = express.Router();
const {
  GetToDos,
  SetToDo,
  UpdateToDo,
  DeleteToDo,
} = require("../controllers/todoController");

router.route("/").get(GetToDos).post(SetToDo);

router.route("/:id").put(UpdateToDo).delete(DeleteToDo);

module.exports = router;
