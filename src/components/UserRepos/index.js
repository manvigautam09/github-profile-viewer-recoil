import React, { Suspense } from "react";

import Spinner from "../shared/Spinner";
import UserReposList from "./UserReposList";

const UserRepos = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <UserReposList />
    </Suspense>
  );
};

export default UserRepos;
