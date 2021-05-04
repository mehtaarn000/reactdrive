import express from "express"
import bcrypt from "bcrypt"

import isAuth from "../utils/isAuth.js"
import getUser from "../utils/getUser.js"
import newUser from "../utils/newUser.js"
import generateRandom from "../utils/generateRandom.js"

let registerRouter = express.Router()
export default registerRouter;

registerRouter.post("/register", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword

    if (!password || !username || !confirmpassword) {
        res.status(404).render("login", {error: "Server or request error", register: 1})
    }

    if (password !== confirmpassword) {
        res.render("login", {error: "Passwords don't match", register: 1})
    }

    const checkUser = await getUser(username)

    if (checkUser) {
        res.render("login", {error: "Username is already taken", register: 1})
    }

    const token = generateRandom()
    const hashedPw = await bcrypt.hash(password, 10)

    newUser(username, hashedPw, token)

    res.cookie("token", token)
    res.redirect("/drive")
})

registerRouter.get("/register", async (req, res) => {
    if (!req.cookies) {
        res.send("login", {register: 1})
    }  

    const auth = await isAuth(req.cookies)

    if (auth) {
        res.status(200).redirect("/drive")
    } else {
        res.render("login", {register: 1})
}})