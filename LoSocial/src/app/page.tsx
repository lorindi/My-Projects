import AddPost from "./components/homepieces/AddPost";
import Feed from "./components/homepieces/Feed";
import LeftMenu from "./components/homepieces/LeftMenu";
import RightMenu from "./components/homepieces/RightMenu";
import Stories from "./components/homepieces/Stories";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Homepage;
