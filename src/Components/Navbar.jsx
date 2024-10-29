import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const HeaderWrapper = styled.header`
  position: relative;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  top: 0;
  background: #ffffff;
  /* padding: 15px 100px; */

  @media screen and (max-width: 768px) {
    width: 80%;
    justify-content: space-between;
    padding: 15px 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  gap: 10px; /* Adds space between logo and text */

  img {
    height: 1.4rem; /* Set the height of the logo */
    width: auto; /* Keep the aspect ratio */
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 30px;
    color: #36454f;
    margin: 0;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    text-align: center;
    background: #ffffff;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px; /* Ensure same font size across all views */
  line-height: 20px;
  color: #000000;
  padding: 10px;

  &:hover {
    opacity: 0.7;
    color: #000000;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 10px;
    width: 80%;
    border-bottom: 1px solid #dddddd;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: #36454f;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    z-index: 1001;
  }
`;

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <a href="/">
          <Logo>
            <img src="assets/logo.svg" alt="Logo" />
            <h2>CYLOGICS</h2>
          </Logo>
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </MenuIcon>

        {/* Desktop and Mobile Menu */}
        <Nav open={menuOpen}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Services</NavItem>
          <NavItem href="#">Contact</NavItem>
          <NavItem href="#">Blog</NavItem>
          <NavItem href="#">Partners</NavItem>
          {/* <NavItem href="#">Careers</NavItem> */}
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Navbar;
