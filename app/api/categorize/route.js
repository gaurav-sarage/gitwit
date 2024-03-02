import { NextRequest, NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { doc, setDoc, getDocs, collection, where, query } from "firebase/firestore";

async function PUT(req) {
	try {
		const obj = await req.json();

		const targetTag = obj.tag; // Assuming the tag is passed as a query parameter
    if (!targetTag) {
      throw new Error('Missing tag parameter'); // Ensure the tag is provided
    }
		
		const collectionRef = collection(db, 'projects'); // Reference the "projects" collection

		const q = query(collectionRef, where('tags', 'array-contains', targetTag));

		const querySnapshot = await getDocs(q);

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

export {
	PUT
}