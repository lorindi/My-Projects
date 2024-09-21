import Feed from "@/app/components/homepieces/Feed";
import LeftMenu from "@/app/components/homepieces/LeftMenu";
import RightMenu from "@/app/components/homepieces/RightMenu";
import React from "react";

function ProfilePage() {
  const userId = "1";

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId={userId} />
      </div>
    </div>
  );
}

export default ProfilePage;
