import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Leaderboard = () => {
  return (
    <div>
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="pb-0">
        <CardTitle className="text-center">Top 5 Contributors</CardTitle>
        <CardDescription className="text-center">Showing the top 5 contributors in the open-source community</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t border-gray-200 dark:border-gray-750">
          <div className="grid grid-cols-12">
            <div className="col-span-2 text-center py-3">
              <div className="text-sm">1.</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <div className="font-semibold">Gaurav</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <Avatar className="w-8 h-8">
                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-2 flex items-end space-x-4 py-3">
              <div>230 PRs</div>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-gray-100 dark:bg-gray-800">
            <div className="col-span-2 text-center py-3">
              <div className="text-sm">2.</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <div className="font-semibold">Parth</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <Avatar className="w-8 h-8">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-2 flex items-end space-x-4 py-3">
              <div>200 PRs</div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 text-center py-3">
              <div className="text-sm">3.</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <div className="font-semibold">Yash</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <Avatar className="w-8 h-8">
                <AvatarImage alt="@maxleiter" src="/placeholder-avatar.jpg" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-2 flex items-end space-x-4 py-3">
              <div>190 PRs</div>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-gray-100 dark:bg-gray-800">
            <div className="col-span-2 text-center py-3">
              <div className="text-sm">4.</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <div className="font-semibold">Soham</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <Avatar className="w-8 h-8">
                <AvatarImage alt="@shuding_" src="/placeholder-avatar.jpg" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-2 flex items-end space-x-4 py-3">
              <div>180 PRs</div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 text-center py-3">
              <div className="text-sm">5.</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <div className="font-semibold">Hello</div>
            </div>
            <div className="col-span-2 flex items-center space-x-4 py-3">
              <Avatar className="w-8 h-8">
                <AvatarImage alt="@leerob" src="/placeholder-avatar.jpg" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-2 flex items-end space-x-4 py-3">
              <div>170 PRs</div>
            </div>
          </div>
        </div>
        
      </CardContent>
      <CardFooter className="border-t">
        <Button size="sm" className="w-full mt-2" >View full leaderboard</Button>
      </CardFooter>
    </Card>
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

export default Leaderboard;