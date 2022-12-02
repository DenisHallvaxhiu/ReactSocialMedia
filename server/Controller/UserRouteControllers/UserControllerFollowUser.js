var connection = require("../../Database/DatabaseConnection")

async function followUser(req,callBack){
    const username = req.params.username

    const { currentUser } = req.body

    if(currentUser === username){
        return callBack(null,"You can not follow yourself!!!")
    }
    connection.query
}

module.exports = followUser