import { NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

async function GET(req) {

    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
    return NextResponse.json({ status: "success" })
}

export {
    GET
}