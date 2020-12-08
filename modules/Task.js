const uniqid = require("uniqid");

class Task {
  constructor(taskName) {
    this.taskID = uniqid();
    this.taskName = taskName;
    this.taskStatus = "pending";
  }
}

module.exports = Task;
