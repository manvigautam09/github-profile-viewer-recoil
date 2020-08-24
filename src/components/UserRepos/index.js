import React, { Suspense } from "react";

import UserReposList from "./UserReposList";

const UserRepos = () => {
  return (
    <Suspense fallback={<h3>Loading Repos...</h3>}>
      <UserReposList />
    </Suspense>
  );
};

export default UserRepos;
