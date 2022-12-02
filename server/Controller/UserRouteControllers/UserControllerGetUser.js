var connection = require("../../Database/DatabaseConnection")

async function getUser(req, callBack) {
  const username = req.params.username;
  connection.query(
    "Select * from users where username = ?",
    [username],
    (err, result, field) => {
      if (err) {
        return callBack(err, null);
      } else if (!result.length > 0) {
        return callBack(null, "User doesnt exist");
      } else {
        const { password, ...otherDetails } = result[0];
        return callBack(null, otherDetails);
      }
    }
  );
}


module.exports = getUser;
