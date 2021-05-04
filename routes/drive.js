import express from "express"

let driveRouter = express.Router()
export default driveRouter;

driveRouter.get("/drive", function(req, res) {
    res.render("drive")
})