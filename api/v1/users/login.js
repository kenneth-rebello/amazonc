const { userExists } = require("../../../services/userService")
const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = async (req, res) => {
  const result = userExists(req.body);
}
