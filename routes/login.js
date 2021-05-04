import express from "express"
import bcrypt from "bcrypt"

// Utilities
import generateRandom from "../utils/generateRandom.js"
import getUser from "../utils/getUser.js"
import isAuth from "../utils/isAuth.js"
import updateUserToken from "../utils/updateUserToken.js"

let loginRouter = express.Router()
export default loginRouter 

loginRouter.get("/login", async (req, res) => {
    if (!req.cookies) {
        res.send("login", {register: 0})
    }  

    const auth = await isAuth(req.cookies)

    if (auth) {
        res.status(200).redirect("/drive")
    } else {
        res.render("login", {register: 0})
}})

loginRouter.post("/login", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(500).render("login", {error: "Server or request error", register: 0})
        return
    }

    const serverRes = await getUser(username.toString())

    if (!serverRes) {
        res.render("login", {error: "User not found", register: 0})
        return
    }

    const cmp = await bcrypt.compare(password.toString(), serverRes.password.toString())

    if (cmp) {
        const newtoken = generateRandom()
        const update = await updateUserToken(username, newtoken, serverRes.password.toString())
        console.log(update)
        if (!update) {
            res.status(404).render("login", {error: "Server error", register: 0})
            return
        }

        res.cookie("token", newtoken)
        res.redirect("/drive")
    } else {
        res.render("login", {error: "Incorrect username or password", register: 0})
        return
    }
})
