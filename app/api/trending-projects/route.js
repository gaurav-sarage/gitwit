import { NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

// Add a new document in collection "cities"
async function PUT() {
    const docRef = collection(db, "projects");

    const quer = query(docRef, orderBy("star", "desc"), limit(10));
    const resp = await getDocs(quer)
    let count = 1;
    let obj = {}
    resp.forEach(user => {
        obj[count] = user.data()
        count = count + 1
    })
    return NextResponse.json(obj)
}

export {
    PUT
}