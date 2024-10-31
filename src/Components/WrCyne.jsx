import React from "react";
import styled from "styled-components";
import WACI from "../assets/WAC.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WAC = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const WrCyne = () => {
  return (
    <Wrapper>
      <WAC src={WACI} />
    </Wrapper>
  );
};

export default WrCyne;
