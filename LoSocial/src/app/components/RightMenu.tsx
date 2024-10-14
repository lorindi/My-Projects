import React from "react";
import FriendsRequests from "./FriendsRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import User, { IUser } from "../../models/User";

function RightMenu({ user }: { user: IUser }) {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <UserInformationCard user={user} />
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendsRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu;
