"use client";

import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/nextjs"
import Link from "next/link";

const BadgeComponent = () => {
    const { isLoaded, isSignedIn, user } = useUser();

  if(!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-gray-800">
          <img
            alt="A profile picture"
            className="rounded-full"
            height="80"
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm font-medium text-gray-500">Earned 13 days ago</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Points</h4>
            <p className="text-base font-semibold">100</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Badges</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs bg-red-500 dark:bg-red-600" variant="outline">
                <CheckCircleIcon className="w-3 h-3 mr-1.5" />
                Contribution 1
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-gray-800">
          <img
            alt="A profile picture"
            className="rounded-full"
            height="80"
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm font-medium text-gray-500">Earned 10 days ago</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Points</h4>
            <p className="text-base font-semibold">150</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Badges</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs bg-blue-500 dark:bg-blue-600" variant="outline">
                <CheckCircleIcon className="w-3 h-3 mr-1.5" />
                Contribution 2
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-gray-800">
          <img
            alt="A profile picture"
            className="rounded-full"
            height="80"
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm font-medium text-gray-500">Earned 9 days ago</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Points</h4>
            <p className="text-base font-semibold">200</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Badges</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs bg-green-500 dark:bg-green-600" variant="outline">
                <CheckCircleIcon className="w-3 h-3 mr-1.5" />
                Contribution 3
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-gray-800">
          <img
            alt="A profile picture"
            className="rounded-full"
            height="80"
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm font-medium text-gray-500">Earned 9 days ago</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Points</h4>
            <p className="text-base font-semibold">250</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Badges</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs bg-green-500 dark:bg-green-600" variant="outline">
                <CheckCircleIcon className="w-3 h-3 mr-1.5" />
                Contribution 4
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-gray-800">
          <img
            alt="A profile picture"
            className="rounded-full"
            height="80"
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm font-medium text-gray-500">Earned 8 days ago</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Points</h4>
            <p className="text-base font-semibold">300</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Badges</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs bg-green-500 dark:bg-green-600" variant="outline">
                <CheckCircleIcon className="w-3 h-3 mr-1.5" />
                Contribution 5
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 dark:border-gray-800">
          <img
            alt="A profile picture"
            className="rounded-full"
            height="80"
            src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width="80"
          />
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm font-medium text-gray-500">Earned 4 days ago</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Points</h4>
            <p className="text-base font-semibold">350</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h4 className="text-sm font-semibold">Badges</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs bg-green-500 dark:bg-green-600" variant="outline">
                <CheckCircleIcon className="w-3 h-3 mr-1.5" />
                Contribution 6
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-sm gap-2">
        <Link
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm px-4 text-sm"
          href="/profile"
        >
          Back to Profile
        </Link>
      </div>
    </div>
    </>
  )
};

export default BadgeComponent;

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
