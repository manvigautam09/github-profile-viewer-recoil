import React from "react";
import styled from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
import * as colors from "../../utils/colorConstants";
import { githubUser, localUser, repoFilterState } from "../../recoil/index";

const HeaderContainer = styled.div`
  background-color: ${colors.HEADER_COLOR};
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HeaderInput = styled.input`
  background-color: ${colors.HEADER_ITEMS_BACKGROUND};
  color: white;
`;

const StyledButton = styled.button``;

const Header = () => {
  const [user, setUser] = useRecoilState(localUser);
  const setUserToFetch = useSetRecoilState(githubUser);
  const setRepoFilterState = useSetRecoilState(repoFilterState);

  return (
    <HeaderContainer>
      <HeaderInput
        type="text"
        placeholder="Search"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.keyCode || event.which === 13) {
            setUserToFetch(user);
            setRepoFilterState("");
          }
        }}
      />
      <StyledButton
        disabled={!user.length}
        onClick={() => {
          setUserToFetch(user);
          setRepoFilterState("");
        }}
      >
        Search
      </StyledButton>
    </HeaderContainer>
  );
};

export default Header;
