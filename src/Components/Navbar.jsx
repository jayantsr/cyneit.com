import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9998;

  @media screen and (max-width: 768px) {
  }
`;

const OfferContainer = styled.div`
  background: #13111b;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
    background: transparent;
  }

  h4 {
    color: #ffffff;
    background: transparent;
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContactBtn = styled.a`
  display: inline-block;
  background-color: #ffffff;
  color: #000000;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 36px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 80.84px;
    height: auto;
  }
`;

const Nav = styled.nav`
  width: 292px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 36px;
  background-color: #939393;
  position: absolute;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 10rem;
    left: 0;
    width: 100%;
    text-align: center;
    background: #ffffff;
    border-radius: 0;
    z-index: 9999;
  }
`;

const NavItem = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: #939393;
  color: #000000;
  text-decoration: none;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dddee2;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
    border-radius: 0;
  }
`;

const ContactNavItem = styled(NavItem)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;
  border-radius: 36px;

  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 16px;
    z-index: 1001;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <OfferContainer>
        <a href="#contact">
          <h4>Free IT Assessment - Introductory offer</h4>
        </a>
      </OfferContainer>
      <NavContainer>
        <Left>
          <a href="/">
            <Logo>
              <img src="assets/logo.svg" alt="Logo" />
            </Logo>
          </a>
        </Left>
        <Center>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </MenuIcon>
          <Nav open={menuOpen}>
            <NavItem href="/">Home</NavItem>
            <NavItem href="#about">About us</NavItem>
            <NavItem href="#services">Services</NavItem>
            <ContactNavItem href="#contact">Contact</ContactNavItem>
          </Nav>
        </Center>
        <Right>
          <ContactBtn href="#contact">Contact us</ContactBtn>
        </Right>
      </NavContainer>
    </Wrapper>
  );
};

export default Navbar;
