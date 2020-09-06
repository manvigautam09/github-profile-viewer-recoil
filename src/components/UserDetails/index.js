import React, { Suspense } from "react";

import UserDetail from "./UserDetail";
import Spinner from "../shared/Spinner";

const UserDetails = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <UserDetail />
    </Suspense>
  );
};

export default UserDetails;
