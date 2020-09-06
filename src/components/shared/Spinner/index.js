import React from "react";
import styled from "styled-components";

import {
  SPINNER_TOP_COLOR,
  SPINNER_COLOR,
} from "../../../utils/colorConstants";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Loader = styled.div`
  border: 10px solid ${SPINNER_COLOR};
  border-radius: 50%;
  border-top: 10px solid ${SPINNER_TOP_COLOR};
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default Spinner;
