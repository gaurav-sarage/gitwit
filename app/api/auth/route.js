import { db } from "../../../firebase/config"

export async function GET() {
    const snapshot = await db.collection('users').get();
    // const snapshot = fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await snapshot.json()
    return Response.json({ data })
}