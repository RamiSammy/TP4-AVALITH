

const controller = require("../../controllers/users/index.js")


const express = require('express')
const router = express.Router()


router
    .get("/", "hello")
    .get("/:name", controller.getOneUser)
    .post("/", controller.createUser)
    .put("/:id", controller.updateUser)
    .put("/:id/active", controller.activeUser)
    .put("/:id/deactive", controller.deactiveUser)
module.exports=router