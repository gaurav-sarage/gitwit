"use client"
import { auth, useAuth } from "@clerk/nextjs";
import firebase from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import app from "@/firebase/config";

const Dashboard = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth();
      // const { userId } = auth()
      console.log(userId);
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token);
      console.log("user ::", userCredentials.user);
    };

    signInWithClerk();
  }, []);
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Dashboard</h1>
      <p className='mb-5'>Welcome to the dashboard!</p>
      <div>
        <Link href="/profile" className="mt-2 mb-2">
          <Button variant="destructive" className="w-full">
            Profile
          </Button>
        </Link>

      </div>
    </>
  );
};

export default Dashboard;
