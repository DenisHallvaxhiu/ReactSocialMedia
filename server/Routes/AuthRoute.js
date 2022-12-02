const express = require("express");
const register = require("../Controller/AuthRouteControllers/AuthRegister");
const login = require("../Controller/AuthRouteControllers/AuthLogin");

const router = express.Router();

router.post("/register", (req, res) => {
  register(req,(err, result) => {
    if (err) {
      return err;
    }
    res.send(result);
  });
});

router.post("/login", (req, res) => {
  login(req,(err,result)=>{
    if(err){
      return err
    }
    res.send(result)
  })
});

module.exports = router;
