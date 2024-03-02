import { NextResponse, NextRequest } from 'next/server'
import app from "../../../firebase/config";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Add a new document in collection "cities"
async function PUT(NextRequest) {
    const db = getFirestore(app);
    const res = await NextRequest.json()
    const docRef = doc(db, "cities", res.city)
    const proj = await getDoc(docRef);
    return NextResponse.json(proj.data())
    // console.log(res);
    // return NextResponse.json({ info: "success" })
}

export {
    PUT
}