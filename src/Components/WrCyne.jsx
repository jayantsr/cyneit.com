import React from "react";
import styled from "styled-components";
import WACI from "../assets/WAC.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import social icons

const Wrapper = styled.div``;
const Container = styled.div``;
const Left = styled.div`
  color: #ffffff;
`;
const Center = styled.div``;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  opacity: 0px;

  & > * {
    margin: 0 10px; /* Space between icons */
    font-size: 24px;
    color: white;
    transition: color 0.3s ease;
    &:hover {
      color: #8888ff;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div``;
const WAC = styled.div`
  width: 100%;
  height: 224px;
`;

const WrCyne = () => {
  return (
    <div>
      <Wrapper>
        <WAC>
          <img src={WACI} alt="" srcset="" />{" "}
        </WAC>
      </Wrapper>
    </div>
  );
};

export default WrCyne;
