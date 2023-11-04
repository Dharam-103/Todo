const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: { type: String, required: true, lowercase: true, trim: true },
    status: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
  TodoModel,
};
