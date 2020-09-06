import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  REPOS_BORDER_COLOR,
  FILTER_BACKGROUND,
} from "../../utils/colorConstants";
import { getFilteredReposandLanguges, selectedLanguages } from "../../recoil";

const RepoFilterLanguageContainer = styled.div`
  border: solid 1px ${FILTER_BACKGROUND};
  border-radius: 10px;
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const FilterList = styled.div`
  background-color: ${(props) =>
    props.selected ? FILTER_BACKGROUND : REPOS_BORDER_COLOR};
  border-radius: 20px;
  margin: 2px;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RepoFilterByType = () => {
  const { languages } = useRecoilValue(getFilteredReposandLanguges);
  const [selectLanguages, setSelectLanguages] = useRecoilState(
    selectedLanguages
  );

  return (
    <RepoFilterLanguageContainer>
      {languages.length &&
        languages.map((item, index) => (
          <FilterList
            key={index}
            selected={selectLanguages.indexOf(item) !== -1}
            onClick={() => {
              selectLanguages.indexOf(item) === -1
                ? setSelectLanguages([...selectLanguages, item])
                : setSelectLanguages([
                    ...selectLanguages.filter((lang) => lang !== item),
                  ]);
            }}
          >
            <div>{item || "Miscellaneous"}</div>
          </FilterList>
        ))}
    </RepoFilterLanguageContainer>
  );
};

export default RepoFilterByType;
