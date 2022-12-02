const bcrypt = require("bcrypt");
var connection = require("../../Database/DatabaseConnection")


async function register(req,callBack) {

  const {username,password,firstName,lastName} = req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(password,salt)

  connection.query(
    "Select username from users where username = ?",
    [username],
    function (err, result, fields) {
      if (err) {
        return callBack(err, null);
      } else if (result.length > 0) {
        return callBack(null, `User ${username} already excists`);
      }
      connection.query(
        "INSERT INTO users (username,password,firstName,lastName) VALUES  (?,?,?,?)",
        [username, hashedPass, firstName, lastName],
        function (err, result, fields) {
          if (err) {
            return callBack(err, null);
          } else {
            return callBack(null, `User ${username} registered!`);
          }
        }
      );
    }
  );
}
module.exports = register;
