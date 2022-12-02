const bcrypt = require("bcrypt");
var connection = require("../../Database/DatabaseConnection")

async function login(req,callBack) {
  const {username,password} = req.body
  connection.query(
    "Select * from users where username=?",
    [username],
    async(err, result, fields) => {
      if (err) {
        return callBack(err, null);
      }
      if (!result.length > 0) {
        return callBack(
          null,
          `We could not find a user with '${username}' username!`
        );
      }
      if (await bcrypt.compare(password,result[0].password)) {
        return callBack(null, result[0]);
      }else{
        return callBack(null,"The passwords dont match")
      }
    }
  );
}
module.exports = login;
