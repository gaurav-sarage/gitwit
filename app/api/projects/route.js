import { NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

async function GET(req) {

    await setDoc(doc(db, "cities", "NYC"), {
        name: "New York City",
        state: "NY",
        country: "USA"
    });
    return NextResponse.json({ status: "success" })
}

export {
    GET
}