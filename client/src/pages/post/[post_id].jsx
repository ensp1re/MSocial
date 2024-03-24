import Base from "@/components/base";
import PostSide from "@/components/page_components/PostLeftSide";
import PostCommentSide from "@/components/page_components/PostRightSide";
import RightSide from "@/components/page_components/rightSide";
import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  const { post_id } = router.query;

  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex border-r border-r-gray-200">
          <div className="w-full flex flex-col">
            <PostSide/>
            <PostCommentSide/>
          </div>
        </div>
        <div className="w-full hidden md:flex lg:flex ">
          <RightSide search={true} />
        </div>
      </div>
    </Base>
  );
};

export default PostPage;
