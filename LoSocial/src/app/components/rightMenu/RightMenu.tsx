import React, { Suspense } from "react";

import User, { IUser } from "../../../models/User";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import FriendsRequests from "./FriendsRequests";
import Birthdays from "./Birthdays";
import Ad from "../Ad";

function RightMenu({ user }: { user: IUser }) {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInformationCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendsRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}

export default RightMenu;
