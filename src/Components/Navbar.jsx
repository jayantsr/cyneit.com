// Header.js
import React from "react";
import styled from "styled-components";

// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  background: #030014;
`;

const Logo = styled.div`
  width: 95px;
  height: 32px;
  top: 40px;
  left: 128px;
  gap: 0px;
  opacity: 0px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 48px;
  gap: 5px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 38px;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
  background: rgba(255, 255, 255, 0);
  padding: 10px 10px;
  font-weight: 500;

  &:hover {
    color: #b3b3b3;
  }
`;

const ContactButton = styled.button`
  background: rgba(65, 20, 160, 1);
  color: white;
  width: 120px;
  height: 48px;
  /* padding: 10px 20px; */
  border-radius: 32px;
  border: 1px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #5a3dcf; /* Slightly darker shade on hover */
  }
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <img src="assets/logo.svg" alt="" srcset="" />
      </Logo>
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About Us</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Partners</NavItem>
      </Nav>
      <ContactButton>Contact Us</ContactButton>
    </HeaderWrapper>
  );
};

export default Navbar;
