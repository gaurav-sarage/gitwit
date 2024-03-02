import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
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
