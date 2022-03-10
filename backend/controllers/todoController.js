const asyncHandler = require("express-async-handler");

// @desc    GET todos
// @route   GET /api/todo
// @access  Private
const GetToDos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get todos" });
});

// @desc    SET todo
// @route   POST /api/todo
// @access  Private
const SetToDo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field.");
  }
  res.status(200).json({ message: "Set todo" });
});

// @desc    UPDATE todo
// @route   PUT /api/todo/:id
// @access  Private
const UpdateToDo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update todo ${req.params.id}` });
});

// @desc    DELETE todo
// @route   DELETE /api/todo/:id
// @access  Private
const DeleteToDo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete todo ${req.params.id}` });
});

module.exports = { GetToDos, SetToDo, UpdateToDo, DeleteToDo };
