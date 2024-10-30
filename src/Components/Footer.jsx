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
  @media screen and (max-width: 768px) {
    height: auto;
    display: block;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 66px;
  opacity: 0px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    height: 200px;
    align-content: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  h4 {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }

  p {
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.3862070143222809px;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
const Center = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 165px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  opacity: 0px;

  & > * {
    margin: 0 10px; /* Space between icons */
    font-size: 32px;
    color: white;
    transition: color 0.3s ease;
    &:hover {
      color: #8888ff;
    }
  }

  p {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <Left>
            <h4 className="contact">Contact</h4>
            <p className="email">Email: info@cyneit.com</p>
            <p className="email">Ph: +44 7436 367047</p>
          </Left>
          <Center>
            <SocialIcons>
              <a href="https://www.instagram.com/cyneit?igsh=NGswam1veXc0MmM0&utm_source=qr">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <FontAwesomeIcon icon={faTwitter} />
              <a href="https://www.facebook.com/share/NWDYbrZdX7AwuGHJ/?mibextid=LQQJ4d">
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <FontAwesomeIcon icon={faYoutube} />
              <a href="https://www.linkedin.com/company/cyne-it-virtual-solutions-ltd/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </SocialIcons>
            <p className="copy">© Cyneit, all rights reserved.</p>
          </Center>
          <Right>
            <Logo src="assets/logo.svg" />
          </Right>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
