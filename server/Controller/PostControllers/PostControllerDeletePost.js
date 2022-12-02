var connection = require("../../Database/DatabaseConnection");

async function deletePost(req, callBack) {
  const id = req.params.id;

  const { poster } = req.body;

  connection.query(
    "select * from posts where postID = ?",
    [id],
    (err, result, fields) => {
      if (err) {
        return callBack(err, null);
      }
      if (result[0].poster === poster) {
        connection.query(
          "Delete from posts WHERE  postID = ?",
          [id],
          (err, result, fields) => {
            if (err) {
              return callBack(err, null);
            }
            else{
                return callBack(null, "The post has been Deleted");
            }
          }
        );
      }else{
        return callBack(null, "Something went wrong");
      }
    }
  );
}
module.exports = deletePost;
