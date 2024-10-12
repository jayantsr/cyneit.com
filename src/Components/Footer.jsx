import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import social icons

// Styled components
const FooterWrapper = styled.footer`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #030014;
`;

const FooterContainer = styled.div`
  width: 1151.95px;
  height: 66px;
  /* gap: 0px; */
  opacity: 0px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

const Logo = styled.div`
  width: 95px;
  height: 32px;
  top: 40px;
  left: 128px;
  gap: 0px;
  opacity: 0px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  & > * {
    margin: 0 10px; /* Space between icons */
    font-size: 24px;
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: #8888ff;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <Left>
            <h4 className="contact">Contact</h4>
            <p className="email">Email:hello@cyneit.com</p>
          </Left>
          <Center>
            <SocialIcons>
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcons>
            <p className="copy">© Cyneit, all rights reserved.</p>
          </Center>
          <Right>
            <Logo>
              <img src="assets/logo.svg" alt="" srcset="" />
            </Logo>
          </Right>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
