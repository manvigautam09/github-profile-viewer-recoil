import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";

import { getUserRepos } from "../../recoil";
import RepoFilterByType from "../RepoFilterByType";
import {
  REPOS_BORDER_COLOR,
  REPO_TEXT_COLOR,
  FILTER_BACKGROUND,
  REPO_DESCRIPTION_COLOR,
} from "../../utils/colorConstants";
import { GITHUB_LINK } from "../../utils/constants";
import {
  repoFilterState,
  getFilteredReposandLanguges,
  userDetails,
} from "../../recoil";

const RepoContainer = styled.div`
  width: 60%;
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

const RepoName = styled.a`
  color: ${REPO_TEXT_COLOR};
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
`;

const RepoDescription = styled.div`
  color: ${REPO_DESCRIPTION_COLOR};
`;

const FilterBox = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  margin-left: 20px;
  padding: 5px;
  border-radius: 10px;
  border: solid 1px ${FILTER_BACKGROUND};
  outline: none;
`;

const UserReposList = () => {
  const repos = useRecoilValue(getUserRepos);
  const details = useRecoilValue(userDetails);
  const filteredRepos = useRecoilValue(getFilteredReposandLanguges);
  const [repoFilter, setRepoFilter] = useRecoilState(repoFilterState);

  return (
    <RepoContainer>
      <h1>
        Repositories
        {filteredRepos.repos.length > 0
          ? `(${filteredRepos.repos.length})`
          : ""}
      </h1>
      <h3>Filter Repositories :</h3>

      {repos.length && (
        <FilterBox>
          <div>By Name</div>
          <StyledInput
            type="text"
            value={repoFilter}
            onChange={(event) => setRepoFilter(event.target.value)}
          />
        </FilterBox>
      )}

      {filteredRepos.languages.length > 0 && (
        <FilterBox>
          <div>By Language</div>
          <RepoFilterByType />
        </FilterBox>
      )}

      {filteredRepos.repos.length !== 0 &&
        filteredRepos.repos.map((item) => {
          const { created_at, name, description, language } = item;
          return (
            <RepoDiv key={created_at}>
              <React.Fragment>
                <RepoName
                  href={`${GITHUB_LINK}${details.login}/${name}`}
                  target="_blank"
                >
                  {name}
                </RepoName>
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
