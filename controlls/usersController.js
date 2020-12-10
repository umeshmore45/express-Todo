const bcrypt = require("bcrypt");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { genrateToken } = require("../helper/jwtAuthication");
const sendErrorMessage = require("../helper/sendError");
const fileName = path.join(__dirname, "..", "data", "users.json");
const users = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const User = require("../modules/users");

const userSignUp = (req, res, next) => {
  let newUser = new User(req.body.email, req.body.password);
  users.push(newUser);
  fs.writeFile(fileName, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.send("internal Error");
    }
    res.send("Succesful");
  });
};

const userLogin = async (req, res, next) => {
  try {
    let result = await bcrypt.compare(
      req.body.password,
      req.currentUser.password
    );

    let jwttoken = await genrateToken(
      { email: req.currentUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    console.log(jwttoken);
    res.cookie("jwt", jwttoken);
    res.status(200).json({
      status: "Successful",
      data: [
        {
          jwt: jwttoken,
        },
      ],
    });

    if (!result) {
      return res.send("Wrong Password");
    }
  } catch (err) {
    return err;
  }
};

module.exports.userSignUp = userSignUp;
module.exports.userLogin = userLogin;
