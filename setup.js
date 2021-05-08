import nano from "nano"
import dotenv from "dotenv"
import fetch from "node-fetch"

dotenv.config()

const url = process.env.COUCH_URL

const client = nano(url)
client.db.create("users")
client.db.create("documents")

const res = await fetch(url + "/users/getuser" , {method: "PUT", body: JSON.stringify({
    views: {
        all: {
            map: "function(doc) {emit(doc.user, {token: doc.token, password: doc.password});}"
        }
    }
})})

console.log(res)