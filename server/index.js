import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql"

const app = express()


app.use(bodyParser.json({limit:'30mb',extemded : true}))
app.use(bodyParser.urlencoded({limit:'30mb',extemded : true}))

