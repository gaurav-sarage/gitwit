import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <h1 className='text-2xl font-bold mb-5 text-center'>Dashboard</h1>
      <p className='mb-5 text-center'>Welcome to the dashboard!</p>
      <div>
      <Link href="/profile">
        <Button variant="default" className="mt-2 mb-2 w-full">
          Profile
        </Button>
      </Link>
      <Link href="/collab">
        <Button variant="default" className="mt-2 mb-2 w-full">
          Collab
        </Button>
      </Link>
      <Link href="/profile/leaderboard">
        <Button variant="default" className="mt-2 mb-2 w-full">
          Leaderboard
        </Button>
      </Link>
      <Link href="/profile/badges">
        <Button variant="default" className="mt-2 mb-2 w-full">
          Badges
        </Button>
      </Link>
      <Link href="/profile/achievements">
        <Button variant="default" className="mt-2 mb-2 w-full">
          Achievements
        </Button>
      </Link>
      </div>
    </>
  );
};

export default Dashboard;
