import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.div``;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
