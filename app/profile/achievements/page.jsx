import Link from "next/link"

const Achievements = () => {
  return (
    <div className="container flex flex-col gap-4 px-4 py-6 lg:gap-6 lg:px-6">
      <div className="mx-auto space-y-4">
        
        <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl/relaxed">Achievements</h1>
      </div>
      <div className="mx-auto grid grid-cols-2 gap-4 max-w-3xl border rounded-lg border-gray-200 bg-gray-100/50 p-4 items-start text-sm dark:border-gray-800 dark:bg-gray-800/50">
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">First Contribution</div>
          <div className="text-gray-500 col-span-2">Made the first contribution to the project</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">Bug Hunter</div>
          <div className="text-gray-500 col-span-2">Reported 5 valid bugs</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">Code Contributor</div>
          <div className="text-gray-500 col-span-2">Submitted 10 pull requests which were merged</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">Community Star</div>
          <div className="text-gray-500 col-span-2">Received 3 likes on comments in the community forum</div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-2 gap-4 max-w-3xl border rounded-lg border-gray-200 bg-gray-100/50 p-4 items-start text-sm dark:border-gray-800 dark:bg-gray-800/50">
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">First Contribution</div>
          <div className="text-gray-500 col-span-2">Made the first contribution to the project</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">Bug Hunter</div>
          <div className="text-gray-500 col-span-2">Reported 5 valid bugs</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">Code Contributor</div>
          <div className="text-gray-500 col-span-2">Submitted 10 pull requests which were merged</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="font-semibold">Community Star</div>
          <div className="text-gray-500 col-span-2">Received 3 likes on comments in the community forum</div>
        </div>
      </div>
      <div className="mx-auto px-16 grid max-w-sm gap-2">
        <Link
          className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm px-4 text-sm"
          href="/profile"
        >
          Back to Profile
        </Link>
      </div>
    </div>
  )
}

export default Achievements;

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
