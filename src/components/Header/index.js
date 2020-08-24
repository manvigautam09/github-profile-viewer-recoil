import React from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { githubUser } from "../../recoil/index";
import * as colors from "../../utils/colorConstants";

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

const Header = () => {
  const [userToFetch, setUserToFetch] = useRecoilState(githubUser);

  return (
    <HeaderContainer>
      <HeaderInput
        type="text"
        placeholder="Search"
        value={userToFetch}
        onChange={(event) => setUserToFetch(event.target.value)}
      />
    </HeaderContainer>
  );
};

export default Header;
