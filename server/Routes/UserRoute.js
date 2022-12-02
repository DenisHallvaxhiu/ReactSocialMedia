const express = require("express");
const getUser = require("../Controller/UserRouteControllers/UserControllerGetUser");
const deleteUser = require("../Controller/UserRouteControllers/UserControllerDeleteUser")

const router = express.Router()

router.get('/getUser/:username',(req,res)=>{
    getUser(req,(err,result)=>{
        if(err){
            return err
        }
        res.send(result)
    })
})

router.delete('/deleteUser/:username',(req,res)=>{
    deleteUser(req,(err,result)=>{
        if(err){
            return err
        }
        res.send(result)
    })
})

module.exports = router;