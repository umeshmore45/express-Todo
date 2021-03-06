const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "tasks.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const Task = require("../modules/Task");
const sendErrorMessage = require("../helper/sendError");
const Error = require("../helper/ErrorClass");
const sendResponseMessage = require("../helper/sendResponse");

const verifyPostRequest = (req, res, next) => {
  const reqiuredProperties = ["taskName"];

  let result = reqiuredProperties.every((key) => {
    return req.body[key];
  });

  if (!result) {
    sendErrorMessage(
      new Error(400, "UnSuccessful", "Proper Input"),
      req,
      res,
      next
    );
  } else {
    next();
  }
};

const emptyPostRequest = (req, res, next) => {
  let todoContent = req.body["taskName"];
  if (!todoContent.trim().length) {
    sendErrorMessage(
      new Error(411, "UnSuccessful", "Add Some Task"),
      req,
      res,
      next
    );
  } else {
    next();
  }
};

const getAllTasks = (req, res, next) => {
  sendResponseMessage(200, "Successful", tasks, req, res, next);
};

const createTask = (req, res, next) => {
  let newTask = new Task(req.body.taskName);
  tasks.push(newTask);
  fs.writeFile(fileName, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      sendErrorMessage(
        new Error(500, "Internal Error", "Not Able To Wirte"),
        req,
        res,
        next
      );
      return err;
    }
  });

  sendResponseMessage(201, "Successful", [newTask], req, res, next);
};

const getTaskById = (req, res, next) => {
  let task = tasks.find((task) => {
    return task.taskID === req.params.id;
  });
  if (task) {
    sendResponseMessage(200, "Successful", task, req, res, next);
    next();
  } else {
    sendErrorMessage(
      new Error(404, "UnSuccessful", "Not Found"),
      req,
      res,
      next
    );
  }
};

const updateTask = (req, res, next) => {};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.verifyPostRequest = verifyPostRequest;
module.exports.emptyPostRequest = emptyPostRequest;
module.exports.getTaskById = getTaskById;
module.exports.updateTask = updateTask;
