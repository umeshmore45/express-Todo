const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "tasks.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllTasks = (req, res, next) => {
  console.log("Hello1");
  res.status(200).json({
    status: "Succeful",
    data: tasks,
  });
};

const createTask = (req, res, next) => {
  console.log(req);
  res.status(201).json({
    status: "succeful",
  });
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
