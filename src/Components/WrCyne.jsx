import React from "react";
import styled from "styled-components";
import WACI from "../assets/WAC.svg";

const Wrapper = styled.div``;

const WAC = styled.div`
  width: 100%;
  height: 224px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const WrCyne = () => {
  return (
    <div>
      <Wrapper>
        <WAC>
          <img src={WACI} alt="" srcset="" />{" "}
        </WAC>
      </Wrapper>
    </div>
  );
};

export default WrCyne;
