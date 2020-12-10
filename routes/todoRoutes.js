const express = require("express");
const {
  getAllTasks,
  createTask,
  verifyPostRequest,
  emptyPostRequest,
  getTaskById,
  updateTask,
} = require("../controlls/taskController");

const router = express.Router();

router
  .route("/tasks")
  .get(getAllTasks)
  .post(verifyPostRequest, emptyPostRequest, createTask);

router.route("/tasks/:id").get(getTaskById).patch(updateTask);
module.exports = router;
