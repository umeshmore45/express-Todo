const express = require("express");
const { verifyPostRequest } = require("./controlls/taskController");
const taskRouter = require("./routes/todoRoutes");
const app = express();

app.use(express.json());
app.use("/todoList", taskRouter);

app.listen(3000, () => {
  console.log(`http://localhost:3000/`);
});
