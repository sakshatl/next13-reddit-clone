import Image from "next/image";
import { ChatTeardrop, DotsThreeOutline, Heart } from "@/app/components/ui/Icons"

export default function PostCard() {

  return (
    <div className="border rounded bg-white">
      {/* card header */}
      <div className="px-4 mt-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image 
            width={40}
            height={40}
            src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"}
            alt="user-avatar"
            className="object-cover object-center rounded-full"
          />
          <div className="flex flex-col">
            <span>Mike Foreman</span>
            <span className="text-sm">2 days ago</span>
          </div>
        </div>
        <div className="px-2 py-2 rounded-full hover:bg-slate-50 cursor-pointer">
          <DotsThreeOutline fontSize={28} />
        </div>
      </div>
      {/* card image (thumbnail) */}
      <div className="px-4 mt-4">
        {/* TODO: to be converted to image component later on */}
        <div className="w-full h-40 rounded relative">
          <Image
            fill
            src={'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80'}
            alt={'post-thumbnail'}
            className="h-full w-full object-cover object-center rounded"
          />
        </div>
      </div>
      {/* card content (body) */}
      <div className="mt-4 px-4">
        <h3 className="text-lg">2 steps to start your illustration career</h3>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias aperiam quis asperiores excepturi</p>
      </div>
      {/* card actions */}
      <div className="px-4 py-2 mt-4  border-t flex items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-2 py-2 rounded-full cursor-pointer hover:bg-slate-50">
            <Heart fontSize={28} />
            <span>21</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer px-2 py-2 rounded-full hover:bg-slate-50">
            <ChatTeardrop fontSize={28} />
            <span>11</span>
          </div>
        </div>
      </div>
    </div>
  )
}