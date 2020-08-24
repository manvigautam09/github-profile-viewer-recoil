import React, { Suspense } from "react";

import UserDetail from "./UserDetail";

const UserDetails = () => {
  return (
    <Suspense fallback={<h3>Loading Details...</h3>}>
      <UserDetail />
    </Suspense>
  );
};

export default UserDetails;
