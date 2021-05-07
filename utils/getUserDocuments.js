import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function getUserDocuments(user) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use("documents")
    const response = await db.multipart.get(user)
    const data = response.toString()

    const dataArr = data.split("\n")
    const jsonData = JSON.parse(dataArr[3])

    const documents = Object.keys(jsonData._attachments)
    return documents
}
