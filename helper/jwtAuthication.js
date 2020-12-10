const util = require("util");
const jwt = require("jsonwebtoken");

const genrateToken = util.promisify(jwt.sign);
const verfiyToken = util.promisify(jwt.verify);

module.exports.genrateToken = genrateToken;
module.exports.verfiyToken = verfiyToken;
