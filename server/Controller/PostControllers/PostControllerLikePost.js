var connection = require("../../Database/DatabaseConnection");

async function likePost(req, callBack) {
  const id = req.params.id;

  const { liker } = req.body;

  connection.query(
    "select * from posts where postID = ?",
    [id],
    (err, result, fields) => {
      if (err) {
        return callBack(err, null);
      } else if (false) {
        return callBack(null, "Already liekd!");
      } else {
        // Add liker to object array
        // result[0].likes.liked.push(liker);
        // const addLiker = result[0].likes.liked
        // console.log(addLiker);
        // Update the array
        connection.query(
          "UPDATE posts SET likes = [{'liked':['Dudu','Lulu']}] WHERE  postID = ?",
          [ id],
          (err, result, fields) => {
            if (err) {
              return callBack(err, null);
            } else {
              return callBack(null, "The post has been liked");
            }
          }
        );
      }
    }
  );
}
module.exports = likePost;
