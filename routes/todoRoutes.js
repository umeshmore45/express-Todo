const express = require("express");
const { getAllTasks, createTask } = require("../controlls/taskController");

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask);

module.exports = router;
