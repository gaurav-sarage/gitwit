import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { UserButton } from "@clerk/nextjs"

const CollabComponent = () => {
  return (
    <div className="flex flex-col w-full max-w-screen-xl">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold" href="/projects">
            Projects
          </Link>
          <Link className="text-black hover:text-indigo-600" href="/deployments">
            Deployments
          </Link>
          <Link className="text-black hover:text-indigo-600" href="/analytics">
            Analytics
          </Link>
          <Link className="text-black hover:text-indigo-600" href="/logs">
            Logs
          </Link>
          <Link className="text-black hover:text-indigo-600" href="/settings">
            Settings
          </Link>
          <Link className="text-black hover:text-indigo-600" href="/dashboard">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <UserButton afterSignOutUrl="/" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-4">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Chat for Repository</h1>
            <p className="text-gray-500 dark:text-gray-400">Real-time communication for project collaboration.</p>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquareIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>General Chat</CardTitle>
                  <CardDescription>Discuss project updates and ideas with the team.</CardDescription>
                </div>
                <Link className="ml-auto flex items-center gap-2 text-sm font-medium" href="/collab/chat">
                  Join Chat
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <p className="font-semibold">Welcome to the General Chat!</p>
                  <p>
                    This is the place to discuss project updates, share ideas, and collaborate with the team in
                    real-time.
                  </p>
                  <Button size="default">Start chatting</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GitPullRequestIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Code Reviews</CardTitle>
                  <CardDescription>Review code changes and provide feedback.</CardDescription>
                </div>
                <Link className="ml-auto flex items-center gap-2 text-sm font-medium" href="/collab/reviews">
                  View Reviews
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <p className="font-semibold">Welcome to Code Reviews!</p>
                  <p>
                    This is the space for reviewing code changes, providing feedback, and ensuring code quality in the
                    project.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquareIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>Feature Requests</CardTitle>
                  <CardDescription>Share and discuss new feature ideas for the project.</CardDescription>
                </div>
                <Link className="ml-auto flex items-center gap-2 text-sm font-medium" href="/collab/request">
                  Submit Request
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 text-sm">
                  <p className="font-semibold">Welcome to Feature Requests!</p>
                  <p>
                    This is where you can share and discuss new feature ideas for the project. Let's innovate together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CollabComponent;

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


function FrameIcon(props) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}


function GitPullRequestIcon(props) {
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
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  )
}


function MessageSquareIcon(props) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
