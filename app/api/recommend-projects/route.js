import { NextRequest, NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { getDocs, collection, query } from "firebase/firestore";

async function GET() {
    const obj = await req.json();
    const docRef = collection(db, "projects");
    const quer = query(docRef, where('tags', 'array-contains-any', [obj.skills, obj.interests]));
    const resp = await getDocs(quer);
    let count = 0;
    resp.array.forEach(element => {
        obj[count] = element.data()
        count = count + 1
    });
    return NextResponse.json(obj)
}

export {
    GET
}