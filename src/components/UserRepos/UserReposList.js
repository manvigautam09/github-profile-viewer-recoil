import React from "react";
import { useRecoilValue } from "recoil";

import { getUserRepos } from "../../recoil";

const UserReposList = () => {
  const repos = useRecoilValue(getUserRepos);
  return <div>This is user repo list</div>;
};

export default UserReposList;
