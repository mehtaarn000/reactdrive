import { randomBytes } from "crypto";

export default function generateRandom() {
    const token = randomBytes(40).toString('hex') 
    return token
}