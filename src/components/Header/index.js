import React from "react";
import styled from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
import * as colors from "../../utils/colorConstants";
import { githubUser, localUser } from "../../recoil/index";

const HeaderContainer = styled.div`
  background-color: ${colors.HEADER_COLOR};
  width: 100%;
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

  return (
    <HeaderContainer>
      <HeaderInput
        type="text"
        placeholder="Search"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <StyledButton onClick={() => setUserToFetch(user)}>Search</StyledButton>
    </HeaderContainer>
  );
};

export default Header;
