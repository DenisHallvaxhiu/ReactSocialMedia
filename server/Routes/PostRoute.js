const express= require("express")
const createPost = require("../Controller/PostControllers/PostControllerCreatePost")
const deletePost = require("../Controller/PostControllers/PostControllerDeletePost")
const getPost = require("../Controller/PostControllers/PostControllerGetPost")
const likePost = require("../Controller/PostControllers/PostControllerLikePost")
const updatePost = require("../Controller/PostControllers/PostControllerUpdatePost")

const router = express.Router()

router.post("/post",(req,res)=>{
    createPost(req,(err,result)=>{
        res.send(result)
    })
})
router.get("/getPost/:id",(req,res)=>{
    getPost(req,(err,result)=>{
        res.send(result)
    })
})

router.put("/updatePost/:id",(req,res)=>{
    updatePost(req,(err,result)=>{
        res.send(result)
    })
})
router.delete("/deletePost/:id",(req,res)=>{
    deletePost(req,(err,result)=>{
        res.send(result)
    })
})

router.put("/likePost/:id",(req,res)=>{
    likePost(req,(err,result)=>{
        res.send(result)
    })
})


module.exports = router