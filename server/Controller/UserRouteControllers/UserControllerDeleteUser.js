var connection = require("../../Database/DatabaseConnection");

async function deleteUser(req, callBack) {
  const username = req.params.username;


const { currentUser, currentUserAdminStatus } = req.body;


  if (currentUser === username || currentUserAdminStatus) {
    connection.query(
      "Delete from users where username=?",
      [username],
      (err, result, field) => {
        if (err) {
            return callBack(err, null);
          } else if (!result.length > 0) {
            return callBack(null, `User ${username} has been deleted`);
          } 
      }
    );
  }
  else{
    return callBack(null, "Access Denied! You can only delete your own profile.")
  }
}

module.exports = deleteUser;
