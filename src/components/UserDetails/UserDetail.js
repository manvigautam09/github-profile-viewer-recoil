import React from "react";
import { useRecoilValue } from "recoil";

import { userDetails } from "../../recoil";

const UserDetail = () => {
  const details = useRecoilValue(userDetails);
  return <div>Here will be the user details</div>;
};

export default UserDetail;
