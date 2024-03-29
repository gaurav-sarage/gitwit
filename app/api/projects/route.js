import { NextRequest, NextResponse } from 'next/server'
import app from "../../../firebase/config";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

async function GET(req) {
    try {

        const collectionRef = collection(db, 'projects'); // Reference the "projects" collection

        const querySnapshot = await getDocs(collectionRef); // Fetch all documents

        const projects = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data() // Extract data from each document
        }));

        return NextResponse.json(projects); // Return all projects as JSON
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' });
    }
}

async function POST(req) {
    const obj = await req.json();

    await setDoc(doc(db, "projects", obj.username + "-" + obj.projectName), {
        owner: obj.username,    // string
        title: obj.title,   // string
        desc: obj.desc,     // string
        tags: obj.tags      // [string]
    });
    return NextResponse.json({ status: "success" })
}

export {
    GET,
    POST
}