var connection = require("../../Database/DatabaseConnection");

async function createPost(req,callBack) {
  const {description,likes,image,poster} = req.body;

  connection.query(
    "insert into posts (description,likes,image,poster) Values (?,?,?,?)",
    [description,likes,image,poster],
    (err, result, fields) => {
        if(err){
            return callBack(err,null)
        }
        return callBack(null, `Post "${description}" has been added!`)
    }
  );
}
module.exports = createPost;
