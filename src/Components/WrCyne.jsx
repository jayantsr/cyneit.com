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
  width: 99%;
  height: 224px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const WrCyne = () => {
  return (
    <div>
      <Wrapper>
        <WAC src={WACI} />
      </Wrapper>
    </div>
  );
};

export default WrCyne;
