import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function updateUserToken(user, newtoken, password) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use("users")
    const doc = await db.get(user)

    const res = await db.insert({ _id: user, _rev: doc._rev, user: user, token: newtoken })
    return res.ok
}