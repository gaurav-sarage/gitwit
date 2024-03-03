import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Dashboard</h1>
      <p className='mb-5'>Welcome to the dashboard!</p>
      <div>
      <Link href="/profile">
        <Button variant="destructive" className="mt-2 mb-2 w-full">
          Profile
        </Button>
      </Link>
      <Link href="/collab">
        <Button variant="destructive" className="mt-2 mb-2 w-full">
          Collab
        </Button>
      </Link>
      <Link href="/leaderboard">
        <Button variant="destructive" className="mt-2 mb-2 w-full">
          Leaderboard
        </Button>
      </Link>
      </div>
    </>
  );
};

export default Dashboard;
