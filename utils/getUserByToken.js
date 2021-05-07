import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function getUserByToken(token) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use('users')
    const docs = await db.view("getuser", "getuserbytoken", {key: token})

    return docs.rows[0].id
}