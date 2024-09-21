import React from "react";
import FriendsRequests from "./FriendsRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";

function RightMenu({ userId }: { userId: string }) {
  return (
    <div className="flex flex-col gap-6">
      <FriendsRequests />
      <Birthdays />
      <Ad size="md"/>
    </div>
  );
}

export default RightMenu;
