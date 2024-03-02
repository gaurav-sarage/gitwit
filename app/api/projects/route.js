import { NextRequest, NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

async function POST(req) {
    const obj = await req.json();
    console.log(obj);

    await setDoc(doc(db, "projects", obj.username + "-" + obj.projectName ), {
        owner: obj.username,
        title: obj.title,
        desc: obj.desc
    });
    return NextResponse.json({ status: "success" })
}

export {
    POST
}