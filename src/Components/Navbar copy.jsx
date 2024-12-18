import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  z-index: 9999;
  @media screen and (max-width: 768px) {
    height: 200px;
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

  h4 {
    color: #ffffff;
    background: transparent;
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2rem;
  }
  a {
    text-decoration: none;
    background: transparent;
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
    /* height: 80px; */
  }
`;

const Left = styled.div`
  flex: 1;
  border: 2px solid red;
`;
const Logo = styled.img`
  width: 80.84px;
  height: auto;
`;

const Center = styled.div`
  height: 100%;
  flex: 1;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-end;
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
    position: absolute;
    margin-top: 6rem;
    left: 0;
    width: 100%;
    text-align: center;
    background: #ffffff;
    border-radius: 0;
  }
`;

const NavItem = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => (props.active ? "#dddee2" : "#939393")};
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
  color: #000000;
  cursor: pointer;
  padding: 0 18px;
  background: #939393;
  border-radius: 36px;

  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 16px;
    /* z-index: 1001; */
  }
`;

const Right = styled.div`
  border: 2px solid red;
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
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

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
            <Logo src="assets/logo.svg" alt="Logo" />
          </a>
        </Left>
        <Center>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </MenuIcon>
          <Nav open={menuOpen}>
            <NavItem
              href="/"
              active={activeItem === "Home"}
              onClick={() => setActiveItem("Home")}
            >
              Home
            </NavItem>
            <NavItem
              href="#about"
              active={activeItem === "About us"}
              onClick={() => setActiveItem("About us")}
            >
              About us
            </NavItem>
            <NavItem
              href="#services"
              active={activeItem === "Services"}
              onClick={() => setActiveItem("Services")}
            >
              Services
            </NavItem>
            <ContactNavItem
              href="#contact"
              active={activeItem === "Contact"}
              onClick={() => setActiveItem("Contact")}
            >
              Contact
            </ContactNavItem>
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
