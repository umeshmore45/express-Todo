const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { verifyPostRequest } = require("./controlls/taskController");
const taskRouter = require("./routes/todoRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/todoList", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
