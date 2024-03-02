import { NextRequest, NextResponse } from 'next/server'
import db from "../../../firebase/config";
import { doc, setDoc, getDocs, collection, arrayUnion } from "firebase/firestore";

async function PUT(req) {
  try {
    const obj = await req.json();
    const userId = obj.username; // Identify the user whose document needs modification
    const arrayFieldToModify = 'Interests'; // Replace with the actual array field name
    const newValue = obj.value; // Single value to add

    const docRef = doc(db, 'users', userId); // Reference the user's document

    await setDoc(docRef, {
      [arrayFieldToModify]: arrayUnion(newValue), // Attempt to add
    }, { merge: true }); // Use merge to avoid overwriting other fields

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error('Error modifying array:', error);
    return NextResponse.json({ status: "error", message: error.message });
  }
}



export {
	PUT
}