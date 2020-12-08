const express = require("express");
const {
  getAllTasks,
  createTask,
  verifyPostRequest,
  emptyPostRequest,
} = require("../controlls/taskController");

const router = express.Router();

router
  .route("/tasks")
  .get(getAllTasks)
  .post(emptyPostRequest, verifyPostRequest, createTask);

module.exports = router;
