"use client";

import Link from "next/link"
import { UserButton, useAuth, useUser  } from "@clerk/nextjs"

import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

const ProfileComponent = () => {
    const { userId } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

    if(!isLoaded || !userId || !isSignedIn) {
        return null;
    }

  return (
    <div className="w-full px-4 py-10 space-y-6 md:px-6 lg:space-y-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-2">
          <div className="text-3xl font-bold">Hi, {user.firstName} </div>
          <p className="text-black font-bold text-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Welcome to your GitWit profile</span>
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center w-12 h-12 rounded-full">
                <UserButton afterSignOutUrl="/" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{user.username}</h1>
                <p className="text-gray-500">Frontend Developer</p>
              </div>
            </div>
            <div className="space-y-4">
              <section className="space-y-4">
                <div className="border-t border-b py-4 grid grid-cols-3 items-center gap-4">
                  <div className="text-sm font-medium text-gray-500">Skills</div>
                  <div className="col-span-3 grid grid-cols-3 gap-4">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>React</div>
                    <div>Next.js</div>
                    <div>Tailwind CSS</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">Bio</div>
                  <p className="text-gray-500">
                    I'm a frontend developer passionate about creating beautiful and accessible user interfaces. In my
                    free time, I enjoy experimenting with new libraries and frameworks to expand my skills.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className="space-y-4">
            <Tabs className="flex flex-col gap-2 items-start" defaultValue="projects">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
              </TabsList>
              <TabsContent className="p-1" value="projects">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <HomeIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>www</CardTitle>
                        <CardDescription>example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">feat: update color scheme</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">3h ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <LayoutPanelLeftIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>app</CardTitle>
                        <CardDescription>app.example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">fix: login issues</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <HomeIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>www</CardTitle>
                        <CardDescription>example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">feat: update color scheme</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">3h ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <LayoutPanelLeftIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>app</CardTitle>
                        <CardDescription>app.example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">fix: login issues</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent className="p-1" value="contributions">
                <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <BookOpenIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>app</CardTitle>
                        <CardDescription>app.example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">fix: login issues</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <BookOpenIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>app</CardTitle>
                        <CardDescription>app.example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">fix: login issues</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <BookOpenIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>app</CardTitle>
                        <CardDescription>app.example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">fix: login issues</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <BookOpenIcon className="w-8 h-8" />
                      <div className="grid gap-1">
                        <CardTitle>app</CardTitle>
                        <CardDescription>app.example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="ml-auto" size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>View Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                      <div className="text-sm font-semibold">fix: login issues</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GithubIcon className="w-4 h-4" />
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranchIcon className="w-4 h-4" />
                          <span className="text-gray-500">main</span>
                        </div>
                      </div>
                    </CardContent>
                </Card>
                </div>
                
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent;

function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function GitBranchIcon(props) {
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
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  )
}


function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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


function LayoutPanelLeftIcon(props) {
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
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  )
}


function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
