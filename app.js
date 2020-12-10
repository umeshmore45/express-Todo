const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { verifyPostRequest } = require("./controlls/taskController");
const taskRouter = require("./routes/todoRoutes");
const usersRouter = require("./routes/usersRoutes");
const { protectRoute } = require("./middleWare/protectRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", usersRouter);
app.use("/todoList", protectRoute, taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
