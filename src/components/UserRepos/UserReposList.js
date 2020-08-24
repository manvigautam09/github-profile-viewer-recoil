import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import {
  REPOS_BORDER_COLOR,
  REPO_TEXT_COLOR,
  REPO_DESCRIPTION_COLOR,
} from "../../utils/colorConstants";
import { getUserRepos } from "../../recoil";

const RepoContainer = styled.div`
  width: 50vw;
  padding-left: 40px;
  padding-bottom: 20px;
`;

const RepoDiv = styled.div`
  border: solid 1px ${REPOS_BORDER_COLOR};
  min-height: 90px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RepoName = styled.div`
  color: ${REPO_TEXT_COLOR};
  font-size: 20px;
  font-weight: 900;
`;

const RepoDescription = styled.div`
  color: ${REPO_DESCRIPTION_COLOR};
`;

const UserReposList = () => {
  const repos = useRecoilValue(getUserRepos);

  return (
    <RepoContainer>
      <h1>Repositories{repos.length > 0 ? `(${repos.length})` : ""}</h1>
      {repos.length &&
        repos.map((item) => {
          const { created_at, name, description, language } = item;
          return (
            <RepoDiv key={created_at}>
              <React.Fragment>
                <RepoName>{name}</RepoName>
                <RepoDescription>{description}</RepoDescription>
              </React.Fragment>
              <RepoDescription>{language}</RepoDescription>
            </RepoDiv>
          );
        })}
    </RepoContainer>
  );
};

export default UserReposList;
