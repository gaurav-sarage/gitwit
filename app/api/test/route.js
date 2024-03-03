import { NextResponse, NextRequest } from 'next/server'
import db from "../../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

// Add a new document in collection "cities"
async function PUT(NextRequest) {

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