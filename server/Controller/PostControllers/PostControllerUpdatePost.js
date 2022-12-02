var connection = require("../../Database/DatabaseConnection");

async function updatePost(req, callBack) {
  const id = req.params.id;

  const { description, image, poster } = req.body;

  connection.query(
    "select * from posts where postID = ?",
    [id],
    (err, result, fields) => {
      if (err) {
        return callBack(err, null);
      }
      if (result[0].poster === poster) {
        connection.query(
          "UPDATE posts SET description = ?, image = ? WHERE  postID = ?",
          [description, image, id],
          (err, result, fields) => {
            if (err) {
              return callBack(err, null);
            }
            else{
                return callBack(null, "The post has been updated");
            }
          }
        );
      }else{
        return callBack(null, "Something went wrong");
      }
    }
  );
}
module.exports = updatePost;
