import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

import Header from "../../components/Header";
import UserRepos from "../../components/UserRepos";
import UserDetails from "../../components/UserDetails";

const DashBoardContainer = styled.div`
  height: 100vh;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileDashboard = () => {
  return (
    <RecoilRoot>
      <DashBoardContainer>
        <Header />
        <BodyContainer>
          <UserDetails />
          <UserRepos />
        </BodyContainer>
      </DashBoardContainer>
    </RecoilRoot>
  );
};

export default ProfileDashboard;
