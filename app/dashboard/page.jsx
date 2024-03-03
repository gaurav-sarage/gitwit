"use client"
import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import app from "@/firebase/config"
import Link from "next/link";


const Dashboard = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    let auth
    const signInWithClerk = async () => {
      auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token);
      console.log("user ::", userCredentials.user.uid);
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
