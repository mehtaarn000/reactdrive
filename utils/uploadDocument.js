import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function uploadDocument(user, name, data, mime) {      // user: string, name: array of strings, data: array of strings, mime: array of strings
    const client = nano(process.env.COUCH_URL)
    const db = client.use("documents")

    const doc = await db.get(user)
    let rev = doc._rev

    let index = 0
    let len = name.length

    while (index < len) {
        let response;
        if (!rev) {
            response = await db.attachment.insert(user, name[index], data[index], mime[index])
        } else {
            response = await db.attachment.insert(user, name[index], data[index], mime[index], {rev: rev})
        }

        rev = response.rev
        index++
    }

    return true
}