import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function getUser(username) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use("users")

    const docs = await db.view("getuser", "getuserbyname", {key: username})
    if (docs.rows.length === 0) {
        return false
    } 

    return docs.rows[0].value
}