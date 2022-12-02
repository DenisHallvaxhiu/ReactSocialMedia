var connection = require("../../Database/DatabaseConnection");

async function getPost(req,callBack) {
  const id = req.params.id

  connection.query(
    "select * from posts where postID = ?",
    [id],
    (err, result, fields) => {
        if(err){
            return callBack(err,null)
        }
        return callBack(null, result[0])
    }
  );
}
module.exports = getPost;
