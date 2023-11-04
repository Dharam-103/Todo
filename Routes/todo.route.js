const express = require("express");
const { TodoModel } = require("../Model/todo.model");
const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
  try {
    const todo = await TodoModel.find();
    res.json({ status: "success", data: todo });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

todoRouter.post("/create", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  try {
    const todo = new TodoModel(payload);
    await todo.save();
    res.json({
      status: "success",
      msg: "New Data is created",
    });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

todoRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await TodoModel.findByIdAndDelete({ _id: id });
    res.json({ status: "success", msg: "Data is deleted" });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

todoRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await TodoModel.findByIdAndUpdate({ _id: id }, payload);
    res.json({ status: "success", msg: "Data is updated" });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = {
  todoRouter,
};
