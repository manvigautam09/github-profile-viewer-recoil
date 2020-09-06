import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import {
  REPOS_BORDER_COLOR,
  FILTER_BACKGROUND,
} from "../../utils/colorConstants";
import closeIcon from "../../assets/icons/close.svg";
import { getFilteredReposandLanguges } from "../../recoil";

const RepoFilterLanguageContainer = styled.div`
  border: solid 1px ${FILTER_BACKGROUND};
  border-radius: 10px;
  margin-top: 20px;
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
`;

const LanguageDiv = styled.div`
  background-color: skyblue;
  border-radius: 20px;
  margin: 2px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const CloseIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  cursor: pointer;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${REPOS_BORDER_COLOR};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FilterList = styled.div`
  background-color: ${REPOS_BORDER_COLOR};
  border-radius: 20px;
  margin: 2px;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RepoFilterByType = () => {
  const { languages } = useRecoilValue(getFilteredReposandLanguges);
  console.log("##languages", languages);
  return (
    <RepoFilterLanguageContainer>
      {/* {languages.length &&
        languages.map((item, index) => (
          <React.Fragment key={index}>
            <LanguageDiv>
              <div>{item || "Miscellaneous"}</div>
              <CloseIcon src={closeIcon} alt="closeIcon" />
            </LanguageDiv>
          </React.Fragment>
        ))} */}
      {/* <Line />   */}
      {languages.length &&
        languages.map((item, index) => (
          <FilterList
            key={index}
            onClick={() => console.log("Clicked entered List!!!")}
          >
            <div>{item || "Miscellaneous"}</div>
          </FilterList>
        ))}
    </RepoFilterLanguageContainer>
  );
};

export default RepoFilterByType;
