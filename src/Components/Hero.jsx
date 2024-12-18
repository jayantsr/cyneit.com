import React, { useEffect, useState } from "react";
import SwirlBackground from "../Components/SwirlBackground";
import styled from "styled-components";
import titlesData from "../assets/data/titles.json";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    top: 0;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 200px;
  text-align: left;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  z-index: 10;
`;

const HeadTitle = styled.h2`
  background: transparent;
  color: #ffffff;
  font-family: "inter";
  font-size: 72px;
  font-weight: 500;
  line-height: 76px;
  letter-spacing: -2px;
  text-align: left;
  padding: 200px 110px;
  opacity: ${({ fade }) => fade};
  transition: opacity 2s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 10vw;
    line-height: 50px;
    padding: 20px;
    text-align: center;
  }
`;

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const titleCount = titlesData.titles.length;

    const interval = setInterval(() => {
      setFade(0); // Fade out
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titleCount); // Change title
        setFade(1); // Fade in
      }, 2000); // Match this to the transition duration (1 second)
    }, 4000); // Change title every 4 seconds to allow for slower transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <SwirlBackground />
        </Container>
        <HeadContainer>
          <HeadTitle fade={fade}>
            {titlesData.titles[currentTitleIndex]}
          </HeadTitle>
        </HeadContainer>
      </Wrapper>
    </>
  );
};
export default Hero;
