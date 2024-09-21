import React from "react";
import FriendsRequests from "./FriendsRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";

function RightMenu({ userId }: { userId: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendsRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu;
