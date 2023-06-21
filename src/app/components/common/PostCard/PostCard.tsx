import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { DotsThreeOutline } from "@/app/components/ui/Icons/";
import Image from "next/image";

type PostCardProps = {
  username: string;
  userImageSrc: string;
  datestring: string;
  postThumbnailSrc: string;
  postTitle: string;
  postContent: string;
};

export default function PostCard(props: PostCardProps) {
  const {
    username,
    userImageSrc,
    datestring,
    postThumbnailSrc,
    postTitle,
    postContent,
  } = props;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              width={40}
              height={40}
              src={userImageSrc}
              alt="user-avatar"
              className="object-cover object-center rounded-full"
            />
            <div className="flex flex-col">
              <span>{username}</span>
              <span className="text-sm">{datestring}</span>
            </div>
          </div>
          <div className="px-2 py-2 rounded-full hover:bg-slate-50 cursor-pointer">
            <DotsThreeOutline fontSize={28} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* card image (thumbnail) */}
        <div>
          {/* TODO: to be converted to image component later on */}
          <div className="w-full h-40 rounded relative">
            <Image
              fill
              src={postThumbnailSrc}
              alt={"post-thumbnail"}
              className="h-full w-full object-cover object-center rounded"
            />
          </div>
        </div>
        {/* card  */}
        <div>
          <h3 className="text-lg mt-4 font-semibold">{postTitle}</h3>
          <p className="mt-2">{postContent}</p>
        </div>
      </CardContent>
    </Card>
  );
}
