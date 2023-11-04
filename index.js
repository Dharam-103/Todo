const express = require("express");
const app = express();
const morgan=require("morgan");
const {connection}=require("./db");
const { todoRouter } = require("./Routes/todo.route");
require("dotenv").config();
const cors = require('cors');
const colors = require('colors');

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/todos",todoRouter);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to db".yellow.italic);
  } catch (err) {
    console.log(err);
    console.log("Not able to Connected to db");
  }
  console.log(`Server is running on port ${process.env.PORT}`.red.italic.bold);
});
