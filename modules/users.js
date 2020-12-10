const uniqid = require("uniqid");

class User {
  constructor(email, password) {
    this.userID = uniqid();
    this.email = email;
    this.password = password;
    this.createAt = Date.now();
  }
}

module.exports = User;
