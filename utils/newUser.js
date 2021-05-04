import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default function newUser(username, password, token) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use('users')

    db.insert({_id: username, user: username, token: token, password: password})
}
