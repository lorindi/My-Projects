import User from "@/models/User";
import connectionToDatabase from "../lib/mongoose";
import AddPost from "./components/AddPost";
import Feed from "./components/feed/Feed";
import LeftMenu from "./components/leftMenu/LeftMenu";
import RightMenu from "./components/rightMenu/RightMenu";
import Stories from "./components/Stories";
import { auth } from "@clerk/nextjs/server";
const Homepage = async () => {
  const { userId } = auth();
  const user = await User.findOne({ clerkId: userId });
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed user={user} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default Homepage;
