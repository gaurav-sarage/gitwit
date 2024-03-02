// import Link from "next/link";

// const Leaderboard = () => {

//     const members = [
//         {
//             avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//             name: "John lorin",
//             email: "john@example.com"
//         }, {
//             avatar: "https://randomuser.me/api/portraits/men/86.jpg",
//             name: "Chris bondi",
//             email: "chridbondi@example.com"
//         }, {
//             avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//             name: "yasmine",
//             email: "yasmine@example.com"
//         }, {
//             avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
//             name: "Joseph",
//             email: "joseph@example.com"
//         },
//         {
//             avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
//             name: "Joseph",
//             email: "joseph@example.com"
//         },
        
//     ]

//     return (


//     <div className="max-w-2xl mx-auto px-4">
//         <div className="items-start justify-between sm:flex">
//             <div>
//                 <h4 className="text-black text-center text-xl font-semibold">Leaderboard</h4>
//                 <p className="mt-2 text-gray-600 text-base sm:text-sm">Checkout the top contributors of our community.</p>
//             </div>
//         </div>
//         <ul className="mt-12 divide-y">
//             {
//                 members.map((item, idx) => (
//                     <li key={idx} className="py-5 flex items-start justify-between">
//                         <div className="flex gap-3">
//                             <img src={item.avatar} className="flex-none w-12 h-12 rounded-full" />
//                             <div>
//                                 <span className="block text-sm text-black font-semibold">{item.name}</span>
//                                 <span className="block text-sm text-black">{item.email}</span>
//                             </div>
//                         </div>
//                         {/* <Link href="" className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">1</Link> */}
//                     </li>
//                 ))
//             }
//         </ul>
//     </div>
//     )
// };

// export default Leaderboard;


import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Leaderboard = () => {
  return (
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
  )
}

export default Leaderboard;