const express = require("express");
const { userSignUp, userLogin } = require("../controlls/usersController");
const {
  checkRequestBody,
  isEmailValid,
  checkConFromPassword,
  emailIsUniqe,
  createHashPassword,
  isUserRegister,
} = require("../middleWare/usersMiddleWare");

const router = express.Router();

router
  .route("/signup")
  .post(
    checkRequestBody,
    isEmailValid,
    checkConFromPassword,
    emailIsUniqe,
    createHashPassword,
    userSignUp
  );
router.route("/login").post(checkRequestBody, isUserRegister, userLogin);

module.exports = router;
