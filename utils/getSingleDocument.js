import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function getSingleDocument(user, docName) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use("documents")

    const data = await db.attachment.get(user, docName)
    return data.toString()
}