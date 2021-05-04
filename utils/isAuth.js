import nano from "nano"
import dotenv from "dotenv"

dotenv.config()

export default async function isAuth(cookies) {
    const client = nano(process.env.COUCH_URL)
    const db = client.use('users')
    let token
    try {
        token = cookies.token
    } catch {
        console.log(token)
        return false
    }

    if (!token) {
        return false
    }

    const docs = await db.view("getuser", "getuserbytoken", {key: cookies.token})
    
    if (docs.rows.length === 0) {
        return false
    }

    return true
}
