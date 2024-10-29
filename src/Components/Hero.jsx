import React, { useEffect, useState } from "react";
import SwirlBackground from "../Components/SwirlBackground";
import styled from "styled-components";
import titlesData from "../assets/data/titles.json"; // Import the JSON data

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative; /* Ensure positioning is set for absolute children */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* top: 300px; */
  position: relative;
  @media screen and (max-width: 768px) {
    top: 0;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; /* Set this to a solid color if needed */
  z-index: 10; /* Ensure this is on top of the background */
`;

const HeadTitle = styled.h2`
  background: transparent;
  width: 900px;
  color: #ffffff;
  font-family: Inter;
  font-size: 5vw;
  font-weight: 500;
  line-height: 100px;
  letter-spacing: -2px;
  text-align: center;
  opacity: ${({ fade }) => fade};
  transition: opacity 2s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 10vw;
    line-height: 50px;
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

      {/* <OurServices /> */}
      {/* <Pillers /> */}
    </>
  );
};

export default Hero;
