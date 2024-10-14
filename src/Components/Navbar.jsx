// Header.js
import React from "react";
import styled from "styled-components";

// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #030014;

  @media screen and (max-width: 768px) {
    /* padding: 15px 50px; */
    justify-content: center; /* Center content in mobile */
  }
`;

const Logo = styled.div`
  width: 95px; /* Desktop size */
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 195px; /* Mobile size */
    max-width: 100%; /* Keep the logo from overflowing */
    margin: 0 auto;
    display: flex;
    margin-top: 50px;
  }

  img {
    width: 100%; /* Ensure the logo scales with the container */
    height: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: none; /* Hide navigation on mobile */
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;

  &:hover {
    color: #b3b3b3;
  }
`;

const ContactButton = styled.button`
  background: rgba(65, 20, 160, 1);
  color: white;
  width: 120px;
  height: 48px;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #5a3dcf;
  }

  @media screen and (max-width: 768px) {
    display: none; /* Hide contact button on mobile */
  }
`;

const Navbar = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <img src="assets/logo.svg" alt="Logo" />
      </Logo>

      {/* Desktop-only Navigation and Contact Button */}
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
