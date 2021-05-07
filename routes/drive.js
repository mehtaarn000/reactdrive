import express from "express"

import isAuth from "../utils/isAuth.js"
import uploadDocument from "../utils/uploadDocument.js"
import getUserByToken from "../utils/getUserByToken.js"

let driveRouter = express.Router()
export default driveRouter;

driveRouter.get("/drive", async function(req, res) {
    const checkAuth = await isAuth(req.cookies)
    if (!checkAuth) {
        res.redirect("/register")
    }  

    res.render("drive")
})

driveRouter.post("/drive", async function(req, res) {
    const checkAuth = isAuth(req.cookies)
    if (!checkAuth) {
        res.redirect("/register")
    }  

    const files = req.files.uploadfiles

    let nameArr = []
    let dataArr = []
    let mimeArr = []
    
    if (!Array.isArray(files)) {
        nameArr.push(files.name)
        dataArr.push(files.data)
        mimeArr.push(files.mimetype)
    } else {
        let index = 0
        const len = files.length
    
        while (index < len) {
            nameArr.push(files[index].name)
            dataArr.push(files[index].data.toString())
            mimeArr.push(files[index].mimetype)
            index++
        }
    }

    const user = await getUserByToken(req.cookies.token)
    uploadDocument(user, nameArr, dataArr, mimeArr)

    res.render("drive")
})